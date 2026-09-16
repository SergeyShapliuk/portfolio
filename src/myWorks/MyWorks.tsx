import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import s from "./MyWorks.module.scss";
import styleContainer from "../common/styles/Container.module.scss";

import Title from "../common/Title/Title";

import {Card} from "./myWork/card";
import ProjectTabs, {ProjectTabType} from "./tabs/ProjectTabs";

import {Images} from "../assets/Images";
import {Element as ScrollElement} from "react-scroll";
import CVModal from "../components/CVModal";


const Element = ScrollElement as unknown as React.FC<any>;

const tabKeys: TabKey[] = ["all", "mobile", "web", "fullstack"];

const getInitialTab = (): TabKey => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    return tabKeys.includes(tab as TabKey) ? tab as TabKey : "all";
};

const MyWorksList = () => {
    const {t, i18n} = useTranslation("myWorks");

    const cvLink = i18n.language === "ru"
        ? require("../assets/cv/Sergey Shapliuk CV (RU).pdf")
        : require("../assets/cv/Sergey Shapliuk CV (EN).pdf");

    const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<string>("");
    const [activeTab, setActiveTab] = useState<TabKey>(getInitialTab);

    useEffect(() => {
        if (!selectedId) return;
        const handleScroll = () => setSelectedId("");
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedId]);

    useEffect(() => {
        // Проверяем sessionStorage вместо ref
        const hasShown = sessionStorage.getItem("cvModalShown");

        if (!hasShown) {
            setIsCVModalOpen(true);
            sessionStorage.setItem("cvModalShown", "true");

            const timer = setTimeout(() => {
                setIsCVModalOpen(false);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const onTabChange = (tab: TabKey) => {
        setSelectedId("");
        setActiveTab(tab);

        const url = new URL(window.location.href);
        if (tab === "all") {
            url.searchParams.delete("tab");
        } else {
            url.searchParams.set("tab", tab);
        }
        window.history.replaceState(window.history.state, "", url);
    };

    const tabs: ProjectTabType<TabKey>[] = tabKeys
        .map(key => ({
            key,
            label: t(`tabs.${key}`),
            count: key === "all" ? workData.length : workData.filter(w => w.categoryKey === key).length
        }))
        .filter(tab => tab.count > 0);

    const filteredWorks = activeTab === "all"
        ? workData
        : workData.filter(w => w.categoryKey === activeTab);

    return (
        <>
            <CVModal
                isOpen={isCVModalOpen}
                onClose={() => setIsCVModalOpen(false)}
                cvLink={cvLink}
            />

            <Element name={"my_works"}>
                <section className={s.myWorksBlock}>
                    <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                        <Title title={t("title")} titleBg={"portfolio"}/>
                        <ProjectTabs tabs={tabs} active={activeTab} onChange={onTabChange}/>
                        <motion.ul
                            key={activeTab}
                            className={s.myWorks}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.35, ease: "easeOut"}}
                        >
                            {filteredWorks.map(card => (
                                <Card
                                    key={card.id}
                                    selectedId={selectedId}
                                    setSelectedId={setSelectedId}
                                    {...card}
                                />
                            ))}
                        </motion.ul>
                    </div>
                </section>
            </Element>
        </>
    );
};
export default MyWorksList;
const workData: WorkDataType[] = [
    // --- Mobile ---
    {
        id: "1",
        banner: Images.tt_banner,
        icon: Images.tt_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.1.title",
        description: "myWorks:projects.1.description",
        tech: ["React Native", "Redux Toolkit", "React Navigation"],
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.taptable",
        iosLink: "https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"
    }, {
        id: "2",
        banner: Images.nomo_banner,
        icon: Images.nomo_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.2.title",
        description: "myWorks:projects.2.description",
        tech: ["React Native", "Redux Toolkit", "React Navigation"],
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.nomoacademy",
        iosLink: "https://apps.apple.com/by/app/nomo-trading-academy/id6768712487"
    },
    // {
    //     id: "3",
    //     banner: Images.dotbig_banner,
    //     icon: Images.dotbig_icon,
    //     category: "Mobile",
    //     title: "Dotbig",
    //     description: "The project was developed and successfully launched in a limited beta version. However, despite the initial success, further project implementation was halted due to reasons beyond my control.\nI was responsible for the development of the application and deployment in a production environment.\nTechnologies: React-native, Redux-toolkit, React navigation.",
    //     pointOfInterest: 60,
    //     hrefCode: "https://github.com/SergeyShapliuk/Dotbig"
    // },
    {
        id: "6",
        banner: Images.xinvest_banner,
        icon: Images.xinvest_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.6.title",
        description: "myWorks:projects.6.description",
        tech: ["React Native", "React Navigation", "React Native WebView"],
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.xinvest"
    },
    {
        id: "7",
        banner: Images.praktika_banner,
        icon: Images.praktika_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.7.title",
        description: "myWorks:projects.7.description",
        tech: ["React Native", "MobX", "React Navigation", "Socket.IO", "React Native WebView"],
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.praktikarus.android",
        iosLink: "https://apps.apple.com/by/app/praktika-ai-homework-helper/id6738703953"
    },
    {
        id: "9",
        banner: Images.autism_banner,
        icon: Images.autism_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.9.title",
        description: "myWorks:projects.9.description",
        tech: ["React Native", "Expo", "Expo Router", "i18next"],
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.app.autismFastCheck"
    },
    {
        id: "10",
        banner: Images.selector_banner,
        icon: Images.selector_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.10.title",
        description: "myWorks:projects.10.description",
        tech: ["React Native", "Redux Toolkit", "React Navigation", "Expo"],
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.li.selector.events",
        iosLink: "https://apps.apple.com/by/app/selector-events/id1670019657"
    },
    {
        id: "12",
        banner: Images.bloyd_banner,
        icon: Images.bloyd_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.12.title",
        description: "myWorks:projects.12.description",
        tech: ["React Native", "MobX", "React Navigation", "Stripe"],
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.bloycom",
        iosLink: "https://apps.apple.com/us/app/bloyd/id6443450676"
    },
    {
        id: "13",
        banner: Images.alemx_banner,
        icon: Images.alemx_icon,
        categoryKey: "mobile",
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.13.title",
        description: "myWorks:projects.13.description",
        tech: ["React Native", "Zustand", "TanStack Query", "React Navigation", "Expo"],
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.alemxapp",
        iosLink: "https://apps.apple.com/us/app/alemx/id6618150854"
    },
    // --- Web ---
    {
        id: "5",
        banner: Images.todo_banner,
        categoryKey: "web",
        category: "myWorks:categories.web",
        title: "myWorks:projects.5.title",
        description: "myWorks:projects.5.description",
        tech: ["TypeScript", "React", "Redux", "Axios"],
        pointOfInterest: 150,
        hrefDemo: "https://sergeyshapliuk.github.io/it-incubator-todolist-ts-start/",
        hrefCode: "https://github.com/SergeyShapliuk/it-incubator-todolist-ts-start"
    },
    // {
    //     id: "4",
    //     banner: Images.shop_banner,
    //     category: "Web",
    //     title: "Shops",
    //     description: "Technologies: React, Redux, React-router domV6, Redux-thunk, GraphQL,SCSS. The task was performed as a test.Using GraphQL(apollo client). Not mobile version. ",
    //     pointOfInterest: 50,
    //     hrefDemo: "https://sergeyshapliuk.github.io/shop/",
    //     hrefCode: "https://github.com/SergeyShapliuk/shop"
    // },
    {
        id: "8",
        banner: Images.supogram_banner,
        categoryKey: "web",
        category: "myWorks:categories.web",
        title: "myWorks:projects.8.title",
        description: "myWorks:projects.8.description",
        tech: ["React", "TypeScript", "Vite", "Framer Motion"],
        pointOfInterest: 0,
        hrefDemo: "https://supogram.com/"
    },
    // --- Full-stack ---
    {
        id: "11",
        banner: Images.investmatch_banner,
        categoryKey: "fullstack",
        category: "myWorks:categories.web_tma_back",
        title: "myWorks:projects.11.title",
        description: "myWorks:projects.11.description",
        tech: ["React", "TypeScript", "Telegram Mini Apps SDK", "TON Connect", "Node.js", "Express", "MongoDB", "Grammy"],
        pointOfInterest: 0,
        hrefDemo: "https://t.me/InvestmatchBot?startapp=comand"
    }
];
export type CategoryKey = "mobile" | "web" | "fullstack";
type TabKey = "all" | CategoryKey;

export type WorkDataType = {
    id: string,
    banner?: string,
    icon?: string;
    categoryKey: CategoryKey,
    category?: string,
    title: string,
    description: string,
    tech?: string[],
    pointOfInterest: number,
    hrefDemo?: string,
    hrefCode?: string,
    androidLink?: string,
    iosLink?: string
}
