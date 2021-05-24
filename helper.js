export function processNumber(num) {
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
