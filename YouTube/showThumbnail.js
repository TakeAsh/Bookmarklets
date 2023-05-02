javascript:
((w, d) => {
  const m = location.search.match(/v=(?<videoId>[^&]+)/);
  if (!m || !m.groups.videoId) {
    alert('No videoId');
    return;
  }
  w.open(`https://i.ytimg.com/vi/${m.groups.videoId}/maxresdefault.jpg`, '_blank');
})(window, document);