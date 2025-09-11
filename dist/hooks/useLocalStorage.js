"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = useLocalStorage;
const react_1 = require("react");
function useLocalStorage(key, initialValue) {
    // Get value from localStorage or return initial value
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that persists the new value to localStorage
    const setValue = (0, react_1.useCallback)((value) => {
        try {
            // Allow value to be a function so we have the same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);
    // Remove the item from localStorage
    const removeValue = (0, react_1.useCallback)(() => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
        }
        catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);
    // Listen for changes to localStorage from other tabs
    (0, react_1.useEffect)(() => {
        const handleStorageChange = (e) => {
            if (e.key === key && e.newValue !== null) {
                try {
                    setStoredValue(JSON.parse(e.newValue));
                }
                catch (error) {
                    console.error(`Error parsing localStorage value for key "${key}":`, error);
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key]);
    return [storedValue, setValue, removeValue];
}
