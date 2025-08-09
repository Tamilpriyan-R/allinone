export function setItemWithExpiry(key, value, ttlInHours) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttlInHours * 60 * 60 * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
