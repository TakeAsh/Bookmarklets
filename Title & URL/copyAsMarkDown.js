javascript:
((d) => {
  const link = `[${d.title}](${location.href})`;
  const message = copyToClipboard(link) || writeToClipboard(link)
    ? `Copy to clipbard: ${link}`
    : `Failed to copy: ${link}`;
  console.log(message);

  function copyToClipboard(text) {
    if (!d.execCommand) { return false; } /* execCommand is deprecated */
    const textarea = d.createElement('textarea');
    textarea.textContent = text;
    d.body.appendChild(textarea);
    textarea.select();
    d.execCommand('copy');
    d.body.removeChild(textarea);
    return true;
  }

  function writeToClipboard(text) {
    if (!navigator.clipboard.writeText) { return false; }
    navigator.permissions.query({ name: 'clipboard-write' })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(text)
            .then(
              () => { return true; },
              (err) => {
                alert('Document is not focued.\nClick document and try again.');
                return false;
              }
            );
        }
      })
      .catch((err) => {
        /* alert(err); */
        return false;
      });
  }
})(document);
