const supportLocaleStorage: boolean = window && !!window.localStorage;

function setItem(name: string, data: any): void {
  if (!supportLocaleStorage) {
    return;
  }
  localStorage.setItem(name, JSON.stringify(data));
}

function getItem(name: string): any {
  if (!supportLocaleStorage) {
    return null;
  }
  const data = localStorage.getItem(name);
  return (data) ? JSON.parse(data) : null;
}

const removeItem = (name: string): void => {
  if (!supportLocaleStorage) {
    return;
  }
  localStorage.removeItem(name);
};

export {
  setItem,
  getItem,
  removeItem,
};
