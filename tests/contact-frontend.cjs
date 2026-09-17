const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').join(__dirname, '../js/main.js'), 'utf8');
async function run(response, expectedReset) {
  let submit, reset = 0, requests = 0;
  const fields = Object.fromEntries(['name', 'email', 'subject', 'message'].map(key => [key, { value: 'test' }]));
  const label = { textContent: 'Send Message' }, feedback = {};
  const button = { disabled: false, querySelector: () => label };
  const form = { elements: fields, action: 'contact.php', reportValidity: () => true,
    addEventListener: (_, cb) => submit = cb, setAttribute() {}, removeAttribute() {}, reset() { reset++; } };
  const context = { document: { addEventListener() {}, getElementById: id => ({ 'contact-form': form, 'form-feedback': feedback, 'send-message': button }[id]) },
    AbortController, setTimeout, clearTimeout,
    FormData: class { constructor() { this.snapshot = Object.fromEntries(Object.entries(fields).map(([k,v]) => [k,v.value])); } get(key) { return this.snapshot[key]; } },
    fetch: async (_, options) => { requests++; assert.equal(options.method, 'POST'); return response(); } };
  vm.createContext(context); vm.runInContext(source, context); context.initContactForm();
  const pending = submit({ preventDefault() {} });
  assert.equal(button.disabled, true);
  await submit({ preventDefault() {} });
  await pending;
  assert.equal(requests, 1); assert.equal(reset, expectedReset); assert.equal(button.disabled, false);
  assert.equal(label.textContent, 'Send Message');
  return feedback.textContent;
}
(async () => {
  assert.match(await run(async () => { throw Error('network'); }, 0), /could not be confirmed/);
  await run(async () => ({ ok: false, status: 503, json: async () => ({ success: false }) }), 0);
  await run(async () => ({ ok: true, status: 200, json: async () => ({ success: true }) }), 1);
  await run(async () => ({ ok: true, status: 200, json: async () => { throw Error('invalid JSON'); } }), 0);
  console.log('PASS: fetch/server/JSON failure preserves fields; simulated success resets; duplicate submit blocked; button restored.');
})().catch(error => { console.error(error); process.exitCode = 1; });
