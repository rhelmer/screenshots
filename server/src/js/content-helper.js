


window.addEventListener(
  "load",
  () => window.parent.postMessage(
    {height: document.body.scrollHeight},
    "*")
);

