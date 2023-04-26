javascript:
(async (w, d) => {
  if (!d.execCommand) {
    alert('execCommand is depreciated');
    return;
  }
  if (!navigator.clipboard.readText) {
    alert('clipboard.readText is not implemented');
    return;
  }
  const result = await navigator.permissions.query({ name: 'clipboard-read' });
  if (result.state !== 'granted' && result.state !== 'prompt') {
    alert('clipboard-read is not allowed');
    return;
  }
  while (!d.hasFocus()) {
    await sleep(300);
  }
  try {
    d.execCommand('copy');
    const text = await navigator.clipboard.readText(); /* w.getSelection().toString() */
    const encoded = Array.from(text)
      .map((c) => `${c}{${c.codePointAt(0).toString(16)}}`)
      .join('');
    alert(encoded);
  } catch (err) {
    alert(err);
  }
  function sleep(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms); });
  }
})(window, document);
