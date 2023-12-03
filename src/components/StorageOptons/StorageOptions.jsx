export function setLocal(item) {
  localStorage.setItem('contacts', JSON.stringify(item));
}
export function deleteLocal(id) {
  const filteredLocal = JSON.parse(localStorage.getItem('contacts')).filter(
    contact => contact.id !== id
  );
  setLocal(filteredLocal);
}
export function getLocal() {
  return JSON.parse(localStorage.getItem('contacts'));
}
