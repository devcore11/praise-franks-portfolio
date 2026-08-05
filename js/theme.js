(function () {
  window.toggleTheme = function () {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document
      .querySelectorAll('[data-theme-icon]')
      .forEach((el) => (el.textContent = dark ? '☼' : '☾'));
  };
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-theme-toggle]')) window.toggleTheme();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const dark = document.documentElement.classList.contains('dark');
    document
      .querySelectorAll('[data-theme-icon]')
      .forEach((el) => (el.textContent = dark ? '☼' : '☾'));
  });
})();

