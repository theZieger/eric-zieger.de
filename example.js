if ("serviceWorker" in navigator && !navigator.serviceWorker.controller) {
  navigator.serviceWorker.register("serviceworker.js", { scope: "./" })
}
if ("fetch" in window) {
  fetch("https://webmention.io/api/mentions.jf2?target=https://eric-zieger.de")
    .then(function (r) {
      return r.json()
    })
    .then(function (r) {
      var count = r.children ? r.children.length : 0
      var images = ""
      if (count) {
        for (var i = count - 1; i >= 0; i--) {
          if (count - 3 > i) break
          if (
            r.children[i] &&
            r.children[i].author &&
            r.children[i].author.photo &&
            r.children[i].author.name
          ) {
            images +=
              '<img width="24" height="24" loading="lazy" src="' +
              r.children[i].author.photo +
              '" alt=" ' +
              r.children[i].author.name +
              ' " />'
          }
        }
      }
      var badge = document.createElement("div")
      badge.className = "badge"
      badge.innerHTML =
        images +
        " Diese Seite wurde bereits <strong>" +
        r.children.length +
        '</strong> Mal erwähnt. <br/>Powered by <a href="https://webmention.io" target="_blank" rel="noopener noreferrer">webmention.io</a>'

      document.getElementById("footer").appendChild(badge)
    })
}
