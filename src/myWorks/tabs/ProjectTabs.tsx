import React from "react";
import {motion} from "framer-motion";
import s from "./ProjectTabs.module.scss";

export type ProjectTabType<K extends string> = {
    key: K,
    label: string,
    count: number
}

type ProjectTabsPropsType<K extends string> = {
    tabs: ProjectTabType<K>[],
    active: K,
    onChange: (key: K) => void
}

function ProjectTabs<K extends string>({tabs, active, onChange}: ProjectTabsPropsType<K>) {
    return (
        <div className={s.tabs} role="tablist">
            {tabs.map(tab => {
                const isActive = tab.key === active;
                return (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`${s.tab} ${isActive ? s.active : ""}`}
                        onClick={() => onChange(tab.key)}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="projectTabIndicator"
                                className={s.indicator}
                                transition={{type: "spring", stiffness: 400, damping: 35}}
                            />
                        )}
                        <span className={s.label}>{tab.label}</span>
                        <span className={s.count}>{tab.count}</span>
                    </button>
                );
            })}
        </div>
    );
}

export default ProjectTabs;
