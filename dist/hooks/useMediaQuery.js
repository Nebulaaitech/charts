"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = useMediaQuery;
const react_1 = require("react");
function useMediaQuery(query) {
    const [matches, setMatches] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const media = window.matchMedia(query);
        // Set initial value
        setMatches(media.matches);
        // Create event listener
        const listener = (event) => {
            setMatches(event.matches);
        };
        // Add listener
        if (media.addEventListener) {
            media.addEventListener('change', listener);
        }
        else {
            // Fallback for older browsers
            media.addListener(listener);
        }
        // Cleanup
        return () => {
            if (media.removeEventListener) {
                media.removeEventListener('change', listener);
            }
            else {
                media.removeListener(listener);
            }
        };
    }, [query]);
    return matches;
}
