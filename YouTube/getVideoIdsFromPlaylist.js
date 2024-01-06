javascript:
((w, d) => {
  const ids = Array.from(d.querySelectorAll('a[class~="ytd-playlist-video-renderer"]'))
    .map(link => link.href.match(/\/watch\?v=(?<videoId>[-_0-9A-Za-z]+)/).groups.videoId);
  console.log(ids);
  const textarea = d.createElement('textarea');
  textarea.value = ids.join('\n');
  textarea.style.width = '100%';
  textarea.style.height = '7em';
  const div = d.querySelector('div[class~="thumbnail-and-metadata-wrapper"]');
  div.appendChild(textarea);
  textarea.select();
  d.execCommand('copy');
})(window, document);
