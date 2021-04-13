(function (){
  const windowURL = window.URL || window.webkitURL;

  const downloadSupport = typeof document.createElement('a').download !== 'undefined';
  const msBlobSupport = typeof window.navigator.msSaveBlob !== 'undefined';
  const urlDecayTimeout = 5000;

  function downloadMsBlob(blob, filename) {
    window.navigator.msSaveBlob(blob, filename);
  }

  function downloadLocation(blob) {
    const href = windowURL.createObjectURL(blob);

    window.location = href;
    setTimeout(function(){ windowURL.revokeObjectURL(href) }, urlDecayTimeout);
  }

  function downloadLink(blob, filename) {
    const el = document.createElement('a');
    const href = windowURL.createObjectURL(blob);

    el.href = href;
    el.download = filename;
    document.body.appendChild(el);
    el.click();
    setTimeout(function() {
      windowURL.revokeObjectURL(href);
      document.body.removeChild(el);
    }, urlDecayTimeout);
  }

  window.downloadBlob = downloadSupport ? downloadLink : msBlobSupport ? downloadMsBlob : downloadLocation;
})();
