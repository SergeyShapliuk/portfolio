import React, {useEffect, useState} from "react";
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
                cvLink="/path-to-your-cv.pdf"
            />

            <Element name={"my_works"}>
                <section className={s.myWorksBlock}>
                    <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                        <Title title={"My Projects"} titleBg={"portfolio"}/>
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
    {
        id: "1",
        banner: Images.tt_banner,
        icon: Images.tt_icon,
        category: "Mobile",
        title: "Tap-Table",
        description: "Online service for booking tables in restaurants and cafes, providing users with the ability to quickly and conveniently select and reserve tables.\nI was responsible for the development of the application and deployment in a production environment.\nTechnologies: React-native, Redux-toolkit, React navigation.",
        pointOfInterest: 0,
        androidLink: "https://play.google.com/store/apps/details?id=com.taptable",
        iosLink: "https://apps.apple.com/by/app/taptable-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/id6447489142"
    }, {
        id: "2",
        banner: Images.nomo_banner,
        icon: Images.nomo_icon,
        category: "Mobile",
        title: "Nomo Trading Academy",
        description: "Nomo Trading Academy is an online educational platform for learning to invest and trade, operated by Nomo Tech sp.z.o.o., a Polish entity.\nI was responsible for the development of the application and deployment in a production environment.\nTechnologies: React-native, Redux-toolkit, React navigation.",
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.nomoacademy",
        iosLink: "https://apps.apple.com/by/app/nomo-trading-academy/id6768712487"
    },
    {
        id: "3",
        banner: Images.dotbig_banner,
        icon: Images.dotbig_icon,
        category: "Mobile",
        title: "Dotbig",
        description: "The project was developed and successfully launched in a limited beta version. However, despite the initial success, further project implementation was halted due to reasons beyond my control.\nI was responsible for the development of the application and deployment in a production environment.\nTechnologies: React-native, Redux-toolkit, React navigation.",
        pointOfInterest: 60,
        hrefCode: "https://github.com/SergeyShapliuk/Dotbig"
    },
    {
        id: "4",
        banner: Images.shop_banner,
        category: "Web",
        title: "Shops",
        description: "Technologies: React, Redux, React-router domV6, Redux-thunk, GraphQL,SCSS. The task was performed as a test.Using GraphQL(apollo client). Not mobile version. ",
        pointOfInterest: 50,
        hrefDemo: "https://sergeyshapliuk.github.io/shop/",
        hrefCode: "https://github.com/SergeyShapliuk/shop"
    },
    {
        id: "5",
        banner: Images.todo_banner,
        category: "Web",
        title: "Todolist",
        description: "Used technologies: TypeScript, React, Redux, Axios. ",
        pointOfInterest: 150,
        hrefDemo: " https://sergeyshapliuk.github.io/it-incubator-todolist-ts-start/",
        hrefCode: "https://github.com/SergeyShapliuk/it-incubator-todolist-ts-start"
    },
    {
        id: "6",
        banner: Images.xinvest_banner,
        icon: Images.xinvest_icon,
        category: "Mobile",
        title: "Xinvest",
        description: "Developed the Android version of the Xinvest application from scratch, laying out the base architecture and implementing full functionality for the platform.\nDesigned and developed the complete user authentication flow, including sign-in, registration, and password recovery screens with an intuitive interface.\nSeamlessly integrated the web version of the app into the Android client using WebView, ensuring a consistent user experience between the native and web platforms. Configured WebView settings for optimal performance, JavaScript support, and secure interaction between native code and web content.\nTechnologies: React-native, React navigation, React-native-webview.",
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.xinvest"
    },
    {
        id: "7",
        banner: Images.praktika_banner,
        icon: Images.praktika_icon,
        category: "Mobile",
        title: "Praktika AI",
        description: "Contributed to the development of Praktika AI – Homework Helper for iOS and Android, an AI-powered assistant that helps students with academic tasks: math, translation, essay writing, and theory explanations.\nWorked on app development and redesign, improving the UX/UI, and implemented new features.\nBuilt real-time chat using Socket.IO (WebSocket) for instant text, image, and file exchange between the user and AI agents, and integrated media and document upload for AI analysis.\nOptimized performance and ensured stable operation on both iOS and Android.\nTechnologies: React-native, MobX, React navigation, Socket.IO, React-native-webview.",
        pointOfInterest: 70,
        androidLink: "https://play.google.com/store/apps/details?id=com.praktikarus.android",
        iosLink: "https://apps.apple.com/by/app/praktika-ai-homework-helper/id6738703953"
    },
    {
        id: "8",
        banner: Images.supogram_banner,
        category: "Web",
        title: "Supogram",
        description: "Supogram is an interactive browser game. Developed the game mechanics with instant UI state updates and optimized rendering to achieve smooth 60 FPS gameplay, with seamless integration into the main site.\nTechnologies: React, TypeScript, Vite, Framer Motion.",
        pointOfInterest: 0,
        hrefDemo: "https://supogram.com/"
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
