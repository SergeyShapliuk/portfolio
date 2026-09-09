import * as React from "react";
import {memo, useRef} from "react";
import {useTranslation} from "react-i18next";
import {motion, ResolvedValues, useMotionValue} from "framer-motion";
import {ContentPlaceholder} from "./ContentPlaceholder";
import {Image} from "./Image";
import s from "../MyWork.module.scss";
import {openSpring, closeSpring} from "./animations";
import {useInvertedBorderRadius} from "../../../common/utils/hooks/useInvertedBorderRadius";
import {useScrollConstraints} from "../../../common/utils/hooks/useScrollConstraints";
import {useWheelScroll} from "../../../common/utils/hooks/useWheelScroll";
import {CardTitle} from "./CardTitle";

const dismissDistance = 100;

type CardPropsType = {
    id: string,
    selectedId: string,
    setSelectedId: (value: string) => void,
    banner?: string,
    icon?: string,
    category?: string,
    title: string,
    description: string,
    pointOfInterest: number,
    hrefCode?: string,
    hrefDemo?: string,
    androidLink?: string,
    iosLink?: string
}

export const Card = memo(
    ({
         id,
         selectedId,
         setSelectedId,
         banner,
         icon,
         category,
         title,
         description,
         pointOfInterest,
         hrefCode,
         hrefDemo,
         androidLink,
         iosLink
     }: CardPropsType) => {
        // const navigate = useNavigate();
        const {t} = useTranslation();
        const translatedTitle = t(title);
        const translatedDescription = t(description);
        const translatedCategory = category ? t(category) : category;
        const y = useMotionValue(0);
        const zIndex = useMotionValue(selectedId === id ? 2 : 0);

        const inverted = useInvertedBorderRadius(20);

        const cardRef = useRef(null);
        const constraints = useScrollConstraints(cardRef, selectedId !== "");


        function checkSwipeToDismiss() {
            if (y.get() > dismissDistance) {
                y.set(0);
                setSelectedId("");
                // console.log('ppppreeeessss')
            }
            // y.get() > dismissDistance && navigate("/");
        }

        function checkZIndex(latest: ResolvedValues) {
            // console.log("checkZIndex", latest);
            if (selectedId === id) {
                zIndex.set(32);
            } else if (selectedId !== id) {
                zIndex.set(0);
                y.set(0);
            }
        }

        // console.log('ppppreeeessss',constraints)
        const containerRef = useRef<HTMLLIElement>(null);
        useWheelScroll(
            containerRef,
            y,
            constraints,
            checkSwipeToDismiss,
            selectedId === id
        );

        const Overlay = ({selected}: any) => (
            <motion.div onClick={() => {
                y.set(0);
                setSelectedId("");
            }}
                        initial={false}
                        animate={{opacity: selected ? 0.2 : 0}}
                        layout
                        transition={{duration: 0.2}}
                        style={{pointerEvents: selected === id ? "auto" : "none"}}
                        className={s.overlay}
            >
                {/*<Link to="/" onClick={() => {*/}
                {/*    y.set(0);*/}

                {/*}}/>*/}
            </motion.div>
        );
        // const onCloseHandle = () => {
        //     y.set(0);
        //     setSelectedId("");
        // };
        return (
            <li ref={containerRef} className={s.card}
                style={{touchAction: selectedId === id ? "none" : "auto"}}>
                <Overlay selected={selectedId}/>
                <div onClick={() => {
                    if (selectedId === id) {
                        setSelectedId("");
                    } else {
                        setSelectedId(id);
                    }
                }}
                     className={`${s.card_content_container} ${selectedId === id && s.open}`}>
                    <motion.div
                        ref={cardRef}
                        className={s.card_content}
                        style={{...inverted, zIndex, y, cursor: selectedId === id ? "default" : "pointer"}}
                        layout
                        transition={selectedId === id ? openSpring : closeSpring}
                        drag={selectedId === id ? "y" : false}
                        dragConstraints={constraints}
                        onDrag={checkSwipeToDismiss}
                        onUpdate={checkZIndex}

                    >
                        {/*<CloseButton onPress={onCloseHandle} isSelected={selectedId === id}/>*/}
                        <Image
                            id={id}
                            isSelected={selectedId === id}
                            pointOfInterest={pointOfInterest}
                            image={banner}
                        />
                        <CardTitle title={translatedTitle} category={translatedCategory} isSelected={selectedId === id}/>
                        <ContentPlaceholder icon={icon} title={translatedTitle} description={translatedDescription}
                                            androidLink={androidLink} iosLink={iosLink} demo={hrefDemo}
                                            github={hrefCode}/>
                    </motion.div>
                </div>
                {/*{!isSelected && <Link to={id} className={s.card_open_link}/>*/}
                {/*}*/}
            </li>

        );
    },
    (prev, next) => prev.selectedId === next.selectedId
);


