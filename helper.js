export function processNumber(num, id) {
  const cleanNumber = num.replace(/[^\d]/g, '');
  let final = cleanNumber;

  if (cleanNumber[0] === '0') {
    final = cleanNumber.replace('0', id);
  }

  return final;
}

export function getFromLocalStorage(key) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
}

export function openGraph(title, description) {
  const ogTitle = encodeURIComponent(title.trim());
  const ogDesc = encodeURIComponent(description.trim());
  return `https://thcl.dev/og?title=${ogTitle}&description=${ogDesc}`;
}
