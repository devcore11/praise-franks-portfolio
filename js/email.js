(function () {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const status = document.querySelector('#form-status'),
    button = document.querySelector('#submit-button');
  const setStatus = (message, success) => {
    status.textContent = message;
    status.className = `text-sm ${success ? 'text-emerald-600' : 'text-red-500'}`;
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      setStatus('Please complete all fields.', false);
      form.reportValidity();
      return;
    }
    button.disabled = true;
    button.querySelector('.button-label').classList.add('hidden');
    button.querySelector('.button-loading').classList.remove('hidden');
    setStatus('Sending your message…', true);
    try {
      if (!window.emailjs) throw new Error('EmailJS unavailable');
      await emailjs.sendForm('service_thvavv8', 'template_0f2650o', form, 'Bppv5pFhTzuvKyISX');
      setStatus('Thanks — your message is on its way.', true);
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);

      setStatus('Sorry, something went wrong. Please try again in a moment.', false);
    } finally {
      button.disabled = false;
      button.querySelector('.button-label').classList.remove('hidden');
      button.querySelector('.button-loading').classList.add('hidden');
    }
  });
})();

