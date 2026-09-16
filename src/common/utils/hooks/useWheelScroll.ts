import {RefObject, useEffect} from "react";
import {MotionValue} from "framer-motion";

interface Constraints {
    top: number;
    bottom: number;
}

/**
 * Re-implements wheel scroll for overflow: hidden elements.
 * Scrolling past the constraints snaps the element to the nearest edge.
 *
 * @param ref - Ref of the Element to attach listener to
 * @param y - MotionValue for the scrollable element - might be different to the Element
 * @param constraints - top/bottom scroll constraints in pixels.
 * @param onWheelCallback - called after every handled wheel event.
 * @param isActive - `true` if this listener should fire.
 */
export function useWheelScroll(
    ref: RefObject<Element>,
    y: MotionValue<number>,
    constraints: Constraints | null,
    onWheelCallback: (e: WheelEvent) => void,
    isActive: boolean
) {
    useEffect(() => {
        const onWheel = (event: WheelEvent) => {
            event.preventDefault();
            if (!isActive) return;
            let newY = y.get() - event.deltaY;
            const isWithinBounds =
                constraints && newY >= constraints.top && newY <= constraints.bottom;

            if (constraints && !isWithinBounds) {
                const isScrollingUp = event.deltaY > 0;
                newY = isScrollingUp ? constraints.top : constraints.bottom;
            }

            y.stop();
            y.set(newY);

            onWheelCallback(event);
        };

        if (isActive && ref.current) {
            const element = ref.current as HTMLElement;
            element.addEventListener("wheel", onWheel, {passive: false});
            return () => {
                element.removeEventListener("wheel", onWheel);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive, constraints, onWheelCallback, ref?.current, y.get()]);
}
