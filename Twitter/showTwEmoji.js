javascript:
((d) => {
  const style = d.createElement('style');
  style.textContent = 'img.emoji { height: 1em; width: 1em; margin: 0 .05em 0 .1em; vertical-align: -0.1em; }';
  d.head.appendChild(style);
  const script = d.createElement('script');
  script.src = 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js';
  script.crossOrigin = 'anonymous';
  script.addEventListener('load', () => { twemoji.parse(d.body, { base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/' }); });
  d.head.appendChild(script);
})(document);
