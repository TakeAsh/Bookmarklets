javascript:
((title, uri) => {
  prompt(`${title}\n${uri}`, `[${title}](${uri})`);
})(document.title, location.href);
