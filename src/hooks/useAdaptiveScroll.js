import { useRef } from "react";
import { useEffect } from "react";

function useAdaptiveScroll() {
    const rowRef = useRef(null);

    useEffect(() => {
        const element = rowRef.current;
        const handleScroll = (event) => {
            // MOBILE/TABLET < 992px
            if (window.innerWidth < 992) {
                return;
            }
            // DESKTOP >= 992px
            if (event.deltaY === 0) return;

            event.preventDefault();
            element.scrollLeft += event.deltaY;
        };
        const addScrollListener = () => {
            if (window.innerWidth >= 992) {
                element.addEventListener("wheel", handleScroll, { passive: false });
            } else {
                element.removeEventListener("wheel", handleScroll);
            }
        }

        addScrollListener();

        window.addEventListener("resize", addScrollListener);

        return () => {
            element.removeEventListener("wheel", handleScroll);
            window.removeEventListener("resize", addScrollListener);
        };
    }, []);

    return rowRef;
}

export default useAdaptiveScroll