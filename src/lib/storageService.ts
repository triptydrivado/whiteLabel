export const STORAGE_KEYS = {
  SEARCH_RESULTS: "search_results",
  SELECTED_VEHICLE: "selected_vehicle",
  JOURNEY_DETAILS: "journey_details",
  PASSENGER_DETAILS: "passenger_details",
  SEARCH_ID: "searchId",
};

export function saveToStorage<T>(key: string, data: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.warn(`Failed to save data to localStorage (key: ${key}):`, error);
    return false;
  }
}

export function getFromStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.warn(
      `Failed to retrieve data from localStorage (key: ${key}):`,
      error
    );
    return null;
  }
}

export function removeFromStorage(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(
      `Failed to remove data from localStorage (key: ${key}):`,
      error
    );
    return false;
  }
}

export function clearAppStorage(): boolean {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.warn("Failed to clear application data from localStorage:", error);
    return false;
  }
}

export function hasStorageItem(key: string): boolean {
  try {
    return localStorage.getItem(key) !== null;
  } catch (error) {
    console.warn(
      `Failed to check if key exists in localStorage (key: ${key}):`,
      error
    );
    return false;
  }
}

export default {
  saveToStorage,
  getFromStorage,
  removeFromStorage,
  clearAppStorage,
  hasStorageItem,
  KEYS: STORAGE_KEYS,
};
