/* Fills the pages in from site-config.js. You shouldn't need to edit this file. */
(function () {
  var C = window.SITE_CONFIG || {};
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // Plain text values: <span data-cfg="email"></span>
  // (keeps the built-in text if a setting is missing; hides it if marked data-hide-if-empty and the setting is "")
  $all("[data-cfg]").forEach(function (el) {
    var key = el.getAttribute("data-cfg");
    var val = C[key];
    if (val) { el.textContent = val; return; }
    if (val === "" && el.hasAttribute("data-hide-if-empty")) el.style.display = "none";
  });

  // Links: <a data-href="facebook">
  $all("[data-href]").forEach(function (el) {
    var key = el.getAttribute("data-href");
    var val = C[key];
    if (!val) { if (val === "" && el.hasAttribute("data-hide-if-empty")) el.style.display = "none"; return; }
    if (key === "email") val = "mailto:" + val;
    el.setAttribute("href", val);
  });

  // Whole blocks that only make sense when a setting is filled in: <div data-show-if="facebook">
  $all("[data-show-if]").forEach(function (el) {
    if (C[el.getAttribute("data-show-if")] === "") el.style.display = "none";
  });

  // Footer year
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile menu
  var btn = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after tapping a link (the links jump down the page)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }
})();
