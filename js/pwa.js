(function () {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  var deferred;
  var buttons = document.querySelectorAll("[data-install]");
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

  function show(btn, text) {
    btn.hidden = false;
    if (text) btn.textContent = text;
  }

  buttons.forEach(function (btn) {
    if (standalone) {
      btn.hidden = true;
      return;
    }
    if (ios) {
      show(btn, "怎樣加到主畫面");
      btn.addEventListener("click", function () {
        var hint = document.getElementById("install-hint");
        if (hint) {
          hint.hidden = false;
          hint.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      return;
    }
    window.addEventListener("beforeinstallprompt", function (event) {
      event.preventDefault();
      deferred = event;
      show(btn, "下載到手機");
    });
    btn.addEventListener("click", function () {
      if (!deferred) {
        var hint = document.getElementById("install-hint");
        if (hint) hint.hidden = false;
        return;
      }
      deferred.prompt();
      deferred.userChoice.finally(function () {
        deferred = null;
        btn.hidden = true;
      });
    });
  });
})();
