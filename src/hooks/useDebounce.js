import { useState, useEffect } from "react";

function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const debouncerTimerID = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(debouncerTimerID);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;