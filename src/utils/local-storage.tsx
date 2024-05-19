export enum LocalStorageKey {
  FetchedData = "fetched-data",
}

const LocalStoragePrefix = "ishan-portfolio-";

export function setLocalStorage(key: LocalStorageKey, value: any) {
  if (typeof window === "undefined") return;

  localStorage.setItem(LocalStoragePrefix + key, JSON.stringify(value));
}

export function getLocalStorage<T>(key: LocalStorageKey): T | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(LocalStoragePrefix + key);
  return value ? JSON.parse(value) : null;
}
