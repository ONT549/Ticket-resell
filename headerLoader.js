export async function loadHeader(path) {
  const response = await fetch(path);
  const html = await response.text();
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;
  // Use DOMPurify if available, otherwise fallback to direct insertion
  if (window.DOMPurify) {
    placeholder.innerHTML = DOMPurify.sanitize(html);
  } else {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    placeholder.replaceChildren(...doc.body.childNodes);
  }
}
