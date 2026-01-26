import React from "react";
import s from "./MyWorks.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import tapTableImage from "../assets/image/tap_table.png";
import dotbigImage from "../assets/image/dotbigLogo.png";
import nomoImage from "../assets/image/nomoLogo.png";
import todolistImage from "../assets/image/todolistImage.jpg";
import shopImage from "../assets/image/shopImage.png";
import tableImage from "../assets/image/tableImage.png";
import Title from "../common/Title/Title";
import {Element as ScrollElement} from "react-scroll";

const Element = ScrollElement as unknown as React.FC<any>;


function MyWorksVersion() {
    const tapTable = {
        color: "blue",
        backgroundImage: `url(${tapTableImage})`
    };
    const dotbig = {
        color: "blue",
        backgroundImage: `url(${dotbigImage})`
    };
    const nomo = {
        color: "blue",
        backgroundImage: `url(${nomoImage})`
    };
    const shop = {
        color: "blue",
        backgroundImage: `url(${shopImage})`
    };
    const todolist = {
        color: "blue",
        backgroundImage: `url(${todolistImage})`
    };
    const table = {
        color: "blue",
        backgroundImage: `url(${tableImage})`
    };


    return (
        <Element name={"my_works"}>
            <section className={s.myWorksBlock}>
                <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                    <Title title={"My Projects"} titleBg={"portfolio"}/>
                    <div className={s.myWorks}>
                        {/*<Zoom cascade={true} delay={100} damping={0.1} duration={500} className={s.zoomMyWorks}>*/}

                        {/*    <MyWork*/}
                        {/*        style={tapTable} title={"Tap-Table"}*/}
                        {/*            description={"Online service for booking tables in restaurants and cafes, providing users with the ability to quickly and conveniently select and reserve tables."}*/}
                        {/*            android={require("../assets/image/androidLogo.png")}*/}
                        {/*            ios={require("../assets/image/iosLogo.png")}*/}
                        {/*            androidLink={"https://play.google.com/store/apps/details?id=com.taptable"}*/}
                        {/*            iosLink={"https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"}*/}
                        {/*    />*/}
                        {/*    <MyWork style={nomo} title={"Nomo Academy"}*/}
                        {/*            description={"Nomo academy operates as an online educational website under the ownership of Nomo Tech sp.z.o.o., a Polish entity. "}*/}
                        {/*            android={require("../assets/image/androidLogo.png")}*/}
                        {/*            ios={require("../assets/image/iosLogo.png")}*/}
                        {/*            androidLink={"https://play.google.com/store/apps/details?id=com.taptable"}*/}
                        {/*            iosLink={"https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"}/>*/}
                        {/*    <MyWork*/}
                        {/*        style={dotbig} title={"Dotbig"}*/}
                        {/*            description={"The project was developed and successfully launched in a limited beta version. However, despite the initial success, further project implementation was halted due to reasons beyond my control. "}*/}
                        {/*            hrefCode={"https://github.com/SergeyShapliuk/Dotbig"}*/}
                        {/*            hrefDemo={"https://github.com/SergeyShapliuk/Dotbig"}*/}
                        {/*        // android={require("../assets/image/androidLogo.png")}*/}
                        {/*        // ios={require("../assets/image/iosLogo.png")}*/}
                        {/*        // androidLink={"https://play.google.com/store/apps/details?id=com.taptable"}*/}
                        {/*        // iosLink={"https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"}*/}
                        {/*    />*/}
                        {/*    <MyWork style={shop} title={"Shops"}*/}
                        {/*            description={"Technologies: React, Redux, React-router domV6, Redux-thunk, GraphQL,SCSS. The task was performed as a test.Using GraphQL(apollo client). Not mobile version. "}*/}
                        {/*            hrefDemo={"https://sergeyshapliuk.github.io/shop-test/"}*/}
                        {/*            hrefCode={"https://github.com/SergeyShapliuk/shop-test"}/>*/}
                        {/*    /!*<MyWork style={table} title={"Table on div"}*!/*/}
                        {/*    /!*        description={"Technologies: React,Typescript,React-router domV6. "}*!/*/}
                        {/*    /!*        hrefDemo={"https://sergeyshapliuk.github.io/table_on_div/"}*!/*/}
                        {/*    /!*        hrefCode={"https://github.com/SergeyShapliuk/table_on_div"}/>*!/*/}
                        {/*    <MyWork style={todolist} title={"Todolist"}*/}
                        {/*            description={"Used technologies: TypeScript, React, Redux, Axios. "}*/}
                        {/*            hrefDemo={" https://sergeyshapliuk.github.io/it-incubator-todolist-ts-start/"}*/}
                        {/*            hrefCode={"https://github.com/SergeyShapliuk/it-incubator-todolist-ts-start"}/>*/}
                        {/*</Zoom>*/}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default MyWorksVersion;
