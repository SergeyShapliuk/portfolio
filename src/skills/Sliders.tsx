import {A11y, EffectCards, Navigation, Pagination} from "swiper";
import Skill from "./skill/Skill";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import 'swiper/scss/effect-cards'



function Sliders(){

return(
    <>
<Swiper modules={[EffectCards]} effect={"cards"}
>
    {[


           <Skill  title={'Java Script'}
                  description={'JavaScript , often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.'}/>,
           <Skill  title={'Typescript'}
                  description={'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.'}/>,
           <Skill title={'React'} description={'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.'}/>,
           <Skill  title={'Redux'} description={'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook`s Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid 2016, the primary maintainers are Mark Erikson and Tim Dorr.'}/>,
           <Skill title={'Axios'} description={'Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. Great, so from that we gather it does something that we can already do and that has recently been made significantly better…'}/>,
           <Skill  title={'Git'} description={'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems)'}/>,
           <Skill  title={'HTML5'} description={'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).'}/>,

    ].map((i, el) => {
        return <SwiperSlide key={el}>{i}</SwiperSlide>
    })}


</Swiper>
    </>
)}
export default Sliders;