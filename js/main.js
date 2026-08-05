(function () {
  const header = `<header id="navbar" class="fixed inset-x-0 top-0 z-50 transition-all duration-500"><div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"><a href="index.html" class="text-sm font-semibold tracking-[-.04em]">Praise Franks<span class="text-zinc-400">®</span></a><nav class="hidden items-center gap-8 md:flex"><a class="nav-link" href="index.html">Home</a><a class="nav-link" href="about.html">About</a><a class="nav-link" href="contact.html">Contact</a><button class="theme-button" data-theme-toggle aria-label="Toggle theme"><span data-theme-icon>☾</span></button></nav><div class="flex items-center gap-3 md:hidden"><button class="theme-button" data-theme-toggle aria-label="Toggle theme"><span data-theme-icon>☾</span></button><button id="menu-button" class="menu-button p-4" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div></div></header><div id="mobile-menu" class="fixed inset-0 z-40 invisible"><div id="menu-overlay" class="absolute inset-0 bg-black/30 opacity-0"></div><aside class="absolute right-0 top-0 h-full w-[min(86vw,20rem)] max-w-sm translate-x-full bg-white p-8 pt-28 dark:bg-[#111114]"><p class="eyebrow">Menu</p><nav class="mt-10 grid gap-6 text-3xl tracking-[-.05em]"><a href="index.html">Home</a><a href="about.html">About</a><a href="contact.html">Contact</a></nav><div class="mt-16 border-t border-zinc-200 pt-6 dark:border-zinc-800"><p class="eyebrow mb-5">Elsewhere</p><div class="flex gap-4 text-xs text-zinc-500"><a href="https://www.instagram.com/praise.franks/">Instagram</a><a href="https://x.com/praisefranks">X</a><a href="https://www.youtube.com/@praiseeditss">YouTube</a><a href="https://www.tiktok.com/@praiseedits_">TikTok</a></div></div></aside></div>`;
  const footer = `<footer class="border-t border-zinc-200 px-6 py-10 dark:border-zinc-800 lg:px-12"><div class="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><a href="index.html" class="text-sm font-semibold">Praise Franks<span class="text-zinc-400">®</span></a><p class="mt-2 text-xs text-zinc-500">Short-form video editor.</p></div><div class="flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500"><a href="index.html">Home</a><a href="about.html">About</a><a href="contact.html">Contact</a><a href="https://www.instagram.com/praise.franks/">Instagram</a><a href="https://x.com/praisefranks">X</a><a href="https://www.youtube.com/@praiseeditss">YouTube</a><a href="https://www.tiktok.com/@praiseedits_">TikTok</a></div><p class="text-[10px] uppercase tracking-[.12em] text-zinc-400">© 2026 Praise Franks</p></div></footer>`;
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#site-header').innerHTML = header;
    document.querySelector('#site-footer').innerHTML = footer;
    const nav = document.querySelector('#navbar');
    window.addEventListener('scroll', () =>
      nav.classList.toggle('nav-scrolled', window.scrollY > 24)
    );
    const menu = document.querySelector('#mobile-menu'),
      aside = menu.querySelector('aside'),
      overlay = menu.querySelector('#menu-overlay');
    const close = () => {
      menu.classList.add('invisible');
      aside.classList.remove('menu-open');
      overlay.classList.remove('overlay-open');
      document.querySelector('#menu-button').setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    };
    document.querySelector('#menu-button')?.addEventListener('click', () => {
      menu.classList.remove('invisible');
      aside.classList.add('menu-open');
      overlay.classList.add('overlay-open');
      document.querySelector('#menu-button').setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
    });
    overlay.addEventListener('click', close);
    aside.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  });
})();
// (function () {
//   document.addEventListener('DOMContentLoaded', () => {
//     const aside = document.querySelector('#mobile-menu aside');
//     if (aside && !aside.querySelector('[data-theme-toggle]'))
//       aside.insertAdjacentHTML(
//         'beforeend',
//         '<button class="theme-button mt-8" data-theme-toggle aria-label="Toggle theme"><span data-theme-icon>☾</span></button>'
//       );
//   });
// })();

