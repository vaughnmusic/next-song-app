import { useState } from "react"

function useLocalStorage(key, initialValue) {
    function getStartingValue() {
        try {
            const value = localStorage.getItem(key, initialValue);
            console.log(value)
            if (value) {
                try {
                    return JSON.parse(value);
                } catch (error) {
                    return value;
                }
            } else {
                if (typeof initialValue !== "string") {
                    initialValue = JSON.stringify(initialValue);
                }
                localStorage.setItem(key, initialValue);
                return initialValue;
            }
        } catch (error) {
            return initialValue
        }
    }

    let startingValue = getStartingValue()

    const [storedValue, setStoredValue] = useState(startingValue);

    function setValue(newValue) {
        if (newValue == undefined) {
            deleteValue();
        }
        try {
            if (typeof newValue !== "string") {
                newValue = JSON.stringify(newValue);
            }
            localStorage.setItem(key, newValue);
        } catch (error) {
            console.error(error);
        }
        setStoredValue(newValue);
    }

    function deleteValue() {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error(error);
        }
        setStoredValue(null);
    }

    return [storedValue, setValue, deleteValue];
}

export { useLocalStorage }