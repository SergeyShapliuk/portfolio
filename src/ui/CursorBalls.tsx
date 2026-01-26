import React, {useCallback, useEffect, useState} from "react";
import {presets, spring, SpringHelperConfig} from "react-motion";
import {StaggeredMotion as StaggeredMotionOriginal} from "react-motion";
import range from "lodash.range";


// Типы
type Position = { x: number, y: number };
type BallStyle = Position;

interface BallComponentProps {
    balls: BallStyle[];
}

const StaggeredMotion = StaggeredMotionOriginal as unknown as React.FC<{
    defaultStyles: BallStyle[];
    styles: (prevStyles: BallStyle[]) => BallStyle[];
    children: (balls: BallStyle[]) => React.ReactNode;
}>;


const CursorBalls = () => {

    const [target, setTarget] = useState<{ x: number, y: number }>({x: 250, y: 300});

    const handleMouseMove = useCallback(({pageX: x, pageY: y}: MouseEvent) => {
        setTarget({x, y});
    }, []);

    const handleTouchMove = useCallback(({touches}: TouchEvent) => {
        if (touches[0]) {
            handleMouseMove(new MouseEvent("mousemove", {
                clientX: touches[0].clientX,
                clientY: touches[0].clientY,
                pageX: touches[0].pageX,
                pageY: touches[0].pageY
            } as any));
        }
    }, [handleMouseMove]);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove as EventListener);
        window.addEventListener("touchmove", handleTouchMove as EventListener);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove as EventListener);
            window.removeEventListener("touchmove", handleTouchMove as EventListener);
        };
    }, [handleMouseMove, handleTouchMove]);

    const getStyles = (prevStyles: any) => {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_: any, i: any) => {
            return i === 0
                ? target
                : {
                    x: spring(prevStyles[i - 1].x, presets.gentle as SpringHelperConfig),
                    y: spring(prevStyles[i - 1].y, presets.gentle as SpringHelperConfig)
                };
        });
        return endValue;
    };

    const MemoizedBallComponent = React.memo(({balls}: any) => (
        <div className="demo1" style={{position: "absolute", zIndex: 0,pointerEvents: "none"}}>
            {balls && balls.map(({x, y}: any, i: any) => (
                <div
                    key={i}
                    className={`demo1-ball ball-${i}`}
                    style={{
                        transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                        WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                        zIndex: balls.length - i,
                        position: 'absolute',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(100, 255, 218, 0.3)',
                        border: '1px solid rgba(100, 255, 218, 0.5)',
                        pointerEvents: 'none'
                    }}
                />
            ))}
        </div>
    ));
    return (
        <StaggeredMotion
            defaultStyles={range(7).map(() => ({x: 0, y: 0}))}
            styles={getStyles}
        >
            {(balls: BallStyle[]) => <MemoizedBallComponent balls={balls}/>}
        </StaggeredMotion>
    );
};
export default CursorBalls;
