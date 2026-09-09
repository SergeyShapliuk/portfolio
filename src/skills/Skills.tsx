import React from "react";
import {useTranslation} from "react-i18next";
import s from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/Title/Title";
import iconJs from "../assets/image/iconJs.png";
import iconTs from "../assets/image/iconTS.png";
import iconReact from "../assets/image/iconReact.png";
import iconRedux from "../assets/image/iconRedux.png";
import iconGit from "../assets/image/iconGit.png";
import iconAxios from "../assets/image/iconAxios.png";
import iconHtml from "../assets/image/iconHtml.png";
import iconCss from "../assets/image/iconCss.png";
import iconGraphql from "../assets/image/graphql_logo.png";
import iconPostgreSQL from "../assets/image/postgreSQL_icon.png";
import iconNode from "../assets/image/iconNode.svg";
import iconNest from "../assets/image/iconNest.svg";
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import {Element as ScrollElement} from "react-scroll";

const Element = ScrollElement as unknown as React.FC<any>;

function Skills() {
    const {t} = useTranslation("skills");
    const js = {
        color: "blue",
        backgroundImage: `url(${iconJs})`
    };
    const typescript = {
        color: "blue",
        backgroundImage: `url(${iconTs})`
    };
    const react = {
        color: "blue",
        backgroundImage: `url(${iconReact})`
    };
    const redux = {
        color: "blue",
        backgroundImage: `url(${iconRedux})`
    };
    const axios = {
        color: "blue",
        backgroundImage: `url(${iconAxios})`
    };
    const git = {
        color: "blue",
        backgroundImage: `url(${iconGit})`
    };
    const html = {
        color: "blue",
        backgroundImage: `url(${iconHtml})`
    };
    const css = {
        color: "blue",
        backgroundImage: `url(${iconCss})`
    };
    const graphql = {
        color: "blue",
        backgroundImage: `url(${iconGraphql})`
    };
    const postgreSQL = {
        color: "blue",
        backgroundImage: `url(${iconPostgreSQL})`
    };
    const node = {
        color: "blue",
        backgroundImage: `url(${iconNode})`
    };
    const nest = {
        color: "blue",
        backgroundImage: `url(${iconNest})`
    };

    return (
        <Element name={"about"}>
            <section className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title title={t("title")} titleBg={"about"}/>
                    <Swiper
                        spaceBetween={-200}
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={3}
                        className={s.swiper}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 100,
                            depth: 50,
                            modifier: 1,
                            slideShadows: false
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}>

                        <SwiperSlide><Skill style={js} title={t("stack.javascript.title")}
                                            description={t("stack.javascript.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={typescript} title={t("stack.typescript.title")}
                                            description={t("stack.typescript.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={react} title={t("stack.react.title")}
                                            description={t("stack.react.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={react} title={t("stack.reactNative.title")}
                                            description={t("stack.reactNative.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={redux} title={t("stack.redux.title")}
                                            description={t("stack.redux.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={axios} title={t("stack.axios.title")}
                                            description={t("stack.axios.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={node} title={t("stack.nodejs.title")}
                                            description={t("stack.nodejs.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={nest} title={t("stack.nestjs.title")}
                                            description={t("stack.nestjs.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={git} title={t("stack.git.title")}
                                            description={t("stack.git.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={html} title={t("stack.html5.title")}
                                            description={t("stack.html5.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={css} title={t("stack.css.title")}
                                            description={t("stack.css.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={graphql} title={t("stack.graphql.title")}
                                            description={t("stack.graphql.description")}/></SwiperSlide>
                        <SwiperSlide><Skill style={postgreSQL} title={t("stack.postgresql.title")}
                                            description={t("stack.postgresql.description")}/></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </Element>
    );
}

export default Skills;
