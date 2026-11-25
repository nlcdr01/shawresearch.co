// Assemble the contact address at runtime so it is not sitting in the HTML for scrapers.
(function () {
  var u = "angus", d = "shawresearch.co", a = u + "@" + d;
  document.querySelectorAll(".js-addr").forEach(function (el) { el.textContent = a; el.href = "mailto:" + a; });
  document.querySelectorAll(".copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(a).then(done, function () {});
    });
  });
})();
