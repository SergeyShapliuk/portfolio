import React from "react";
import s from './SkillsLinesItem.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";

function SkillItem() {

    return (
        <div className={s.skillItemsBlock}>
            <div className={`${styleContainer.container} ${s.skillsLinesContainer}`}>
                <div className={s.skillItems}>
                    <li>
                        <h3>TypeScript - 67%</h3><span className={s.bar}><span className={s.typescript}></span></span>
                    </li>
                    <li>
                        <h3>Java Script - 60%</h3><span className={s.bar}><span className={s.javaScript}></span></span>
                    </li>
                    <li>
                        <h3>React - 70%</h3><span className={s.bar}><span className={s.react}></span></span>
                    </li>
                    <li>
                        <h3>React-native - 80%</h3><span className={s.bar}><span className={s.axios}></span></span>
                    </li>
                    <li>
                        <h3>Redux - 75%</h3><span className={s.bar}><span className={s.redux}></span></span>
                    </li>
                    <li>
                        <h3>Node.js - 65%</h3><span className={s.bar}><span className={s.node}></span></span>
                    </li>
                    <li>
                        <h3>Nest.js - 63%</h3><span className={s.bar}><span className={s.nest}></span></span>
                    </li>
                    <li>
                        <h3>Git - 63%</h3><span className={s.bar}><span className={s.git}></span></span>
                    </li>
                    <li>
                        <h3>HTML5 - 50%</h3><span className={s.bar}><span className={s.html}></span></span>
                    </li>
                    <li>
                        <h3>CSS - 74%</h3><span className={s.bar}><span className={s.css}></span></span>
                    </li>
                    <li>
                        <h3>GraphQL - 65%</h3><span className={s.bar}><span className={s.graphql}></span></span>
                    </li>
                </div>
            </div>
        </div>

    )
}

export default SkillItem;
