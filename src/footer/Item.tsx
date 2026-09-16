import React from "react";
import s from "./Item.module.scss"


function Item(props: any) {

    return (
        <div className={s.itemsBlock}>

            <a href={props.hrefSocial} target={"_blank"} rel="noreferrer">
                <div className={s.icon} style={props.style}></div>
            </a>

        </div>
    )
}

export default Item;