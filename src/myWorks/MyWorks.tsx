import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import s from "./MyWorks.module.scss";
import styleContainer from "../common/styles/Container.module.scss";

import Title from "../common/Title/Title";

import {Card} from "./myWork/card";

import {Images} from "../assets/Images";
import {Element as ScrollElement} from "react-scroll";
import CVModal from "../components/CVModal";


const Element = ScrollElement as unknown as React.FC<any>;


// import dotbigImage from "../assets/image/dotbigLogo.png";
// import nomoImage from "../assets/image/nomoLogo.png";
// import shopImage from "../assets/image/shopImage.png";
// import todolistImage from "../assets/image/todolistImage.jpg";
// const dotbig = {
//     color: "blue",
//     backgroundImage: `url(${dotbigImage})`
// };
// const nomo = {
//     color: "blue",
//     backgroundImage: `url(${nomoImage})`
// };
// const shop = {
//     color: "blue",
//     backgroundImage: `url(${shopImage})`
// };
// const todolist = {
//     color: "blue",
//     backgroundImage: `url(${todolistImage})`
// };
// const table = {
//     color: "blue",
//     backgroundImage: `url(${tableImage})`
// };

// function MyWorks() {
//     // const tapTable = {
//     //     color: "blue",
//     //     backgroundImage: `url(${tapTableImage})`
//     // };
//     // const renderMultiRoutes = ({element: Element, paths, ...rest}: any) =>
//     //     paths.map((path: any) => <Route key={path} path={path} {...rest} element={Element}/>);
//     return (
//         <Element name={"my_works"}>
//             <section className={s.myWorksBlock}>
//                 <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
//                     <Title title={"My Projects"} titleBg={"portfolio"}/>
//                     <HashRouter>
//                         <Routes>
//                             {/*{renderMultiRoutes({*/}
//                             {/*    paths: ["/:id", "/"],*/}
//                             {/*    element: <List/>*/}
//
//                             {/*})}*/}
//                             <Route path={"/:id"} element={<List/>}/>
//                             <Route path={"/"} element={<List/>}/>
//                             <Route path={"*"} element={<Navigate to={"/"}/>}/>
//                         </Routes>
//                     </HashRouter>
//                 </div>
//             </section>
//         </Element>
//     );
//
// }
//
// export default MyWorks;

const MyWorksList = () => {
    // const {id} = useParams();
    const {t, i18n} = useTranslation("myWorks");

    const cvLink = i18n.language === "ru"
        ? require("../assets/cv/Sergey Shapliuk CV (RU).pdf")
        : require("../assets/cv/Sergey Shapliuk CV (EN).pdf");

    const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<string>("");

    const handleScroll = () => {
        if (selectedId) {
            console.log("scroll");
            setSelectedId("");
        }
    };

    useEffect(() => {
        if (selectedId) {
            window.addEventListener("scroll", handleScroll);
        }
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
                        <ul className={s.myWorks}>
                            {workData.map((card, index) => (
                                <Card
                                    key={card.id}
                                    // isSelected={id === card.id}
                                    // history={{navigate}}
                                    selectedId={selectedId}
                                    setSelectedId={setSelectedId}
                                    {...card}
                                />
                            ))}
                        </ul>
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
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.1.title",
        description: "myWorks:projects.1.description",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.taptable",
        iosLink: "https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"
    }, {
        id: "2",
        banner: Images.nomo_banner,
        icon: Images.nomo_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.2.title",
        description: "myWorks:projects.2.description",
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
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.6.title",
        description: "myWorks:projects.6.description",
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.xinvest"
    },
    {
        id: "7",
        banner: Images.praktika_banner,
        icon: Images.praktika_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.7.title",
        description: "myWorks:projects.7.description",
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.praktikarus.android",
        iosLink: "https://apps.apple.com/by/app/praktika-ai-homework-helper/id6738703953"
    },
    {
        id: "9",
        banner: Images.autism_banner,
        icon: Images.autism_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.9.title",
        description: "myWorks:projects.9.description",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.app.autismFastCheck"
    },
    {
        id: "10",
        banner: Images.selector_banner,
        icon: Images.selector_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.10.title",
        description: "myWorks:projects.10.description",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.li.selector.events",
        iosLink: "https://apps.apple.com/by/app/selector-events/id1670019657"
    },
    {
        id: "12",
        banner: Images.bloyd_banner,
        icon: Images.bloyd_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.12.title",
        description: "myWorks:projects.12.description",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.bloycom",
        iosLink: "https://apps.apple.com/us/app/bloyd/id6443450676"
    },
    {
        id: "13",
        banner: Images.alemx_banner,
        icon: Images.alemx_icon,
        category: "myWorks:categories.mobile",
        title: "myWorks:projects.13.title",
        description: "myWorks:projects.13.description",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.alemxapp",
        iosLink: "https://apps.apple.com/us/app/alemx/id6618150854"
    },
    // --- Web ---
    {
        id: "5",
        banner: Images.todo_banner,
        category: "myWorks:categories.web",
        title: "myWorks:projects.5.title",
        description: "myWorks:projects.5.description",
        pointOfInterest: 150,
        hrefDemo: " https://sergeyshapliuk.github.io/it-incubator-todolist-ts-start/",
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
        category: "myWorks:categories.web",
        title: "myWorks:projects.8.title",
        description: "myWorks:projects.8.description",
        pointOfInterest: 0,
        hrefDemo: "https://supogram.com/"
    },
    // --- Full-stack ---
    {
        id: "11",
        banner: Images.investmatch_banner,
        category: "myWorks:categories.web_tma_back",
        title: "myWorks:projects.11.title",
        description: "myWorks:projects.11.description",
        pointOfInterest: 0,
        hrefDemo: "https://t.me/InvestmatchBot?startapp=comand"
    }
];
export type WorkDataType = {
    id: string,
    banner?: string,
    icon?: string;
    category?: string,
    title: string,
    description: string,
    pointOfInterest: number,
    hrefDemo?: string,
    hrefCode?: string,
    androidLink?: string,
    iosLink?: string
}
