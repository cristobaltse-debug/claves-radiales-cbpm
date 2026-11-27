/* Funciones compartidas: tema claro u oscuro, avisos breves y copia al portapapeles. */
(function(){
  var root = document.documentElement;
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function syncThemeColor() {
    if (themeMeta) themeMeta.setAttribute("content", isDark() ? "#0A1160" : "#0A1472");
  }
  var themeBtn = document.getElementById("th");
  if (themeBtn) {
    themeBtn.addEventListener("click", function() {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("cbpm-theme", next); } catch (e) {}
      syncThemeColor();
    });
  }
  syncThemeColor();

  var toast = document.getElementById("ts");
  var toastTimer = null;
  function showToast(html) {
    if (!toast) return;
    toast.innerHTML = html;
    toast.className = "toast on";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() { toast.className = "toast"; }, 1700);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return new Promise(function(resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        ok ? resolve() : reject();
      } catch (err) { reject(err); }
    });
  }

  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  window.CBPMUI = { showToast: showToast, copyText: copyText, esc: esc };
})();
