import React from "react";
import ReactTypingEffect from "react-typing-effect";
import s from "../TypeWrite.module.scss";


function ReactTypingEffectDemo() {
    return (
        <div className={s.typeWrite}>
            <ReactTypingEffect
                text={["Fullstack Develop", "Frontend Develope", "Mobile Develope"]}
                cursor={"R"}
                cursorClassName={s.typeWriteCursor}
                speed={100}
                eraseDelay={1000}
                eraseSpeed={100}
                typingDelay={1000}
                displayTextRenderer={(text:string) => {
                    return (
                        <h3>
                            {text.split("").map((char:string, i:number) => {
                                const key = `${i}`;
                                return (
                                    <span  className={s.typeWriteCursor}
                                        key={key}
                                        // style={i%2 === 0 ? { color: 'yellow'} : {}}
                                    >{char}</span>
                                );
                            })}
                        </h3>
                    );
                }}
            />
        </div>
    );
};
export default ReactTypingEffectDemo;
