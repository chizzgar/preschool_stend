(this.webpackJsonppreschool=this.webpackJsonppreschool||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),a=n.n(s),i=(n(9),n(2)),r=(n(10),Object(c.createContext)(null)),l=(n(11),n(12),n(0));var o=function(e){e.active;var t=e.setActiveMenu;return Object(l.jsxs)("label",{className:"menu-open-button",onClick:function(){t(!0)},children:[Object(l.jsx)("span",{className:"lines line-1"}),Object(l.jsx)("span",{className:"lines line-2"}),Object(l.jsx)("span",{className:"lines line-3"})]})};n(14);var d=function(){var e=Object(c.useContext)(r),t=e.lessonsNumber,n=e.lessonNow,s=function(){return n};return Object(l.jsxs)("div",{className:"lessonBar",children:[Object(l.jsxs)("span",{className:"progressText",children:["\u0417\u0430\u0434\u0430\u043d\u0438\u0435 ",Object(l.jsx)("span",{className:"progressTextNowLesson",children:s()}),"/",t]}),Object(l.jsx)("progress",{className:"lessonProgressBar",max:t,value:s()})]})};n(15);var j=function(){return Object(l.jsxs)("div",{className:"closeButton",onClick:function(){alert("\u0412\u044b \u0437\u0430\u043a\u0440\u044b\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435")},children:[Object(l.jsx)("div",{className:"line one"}),Object(l.jsx)("div",{className:"line two"})]})},u=(n(16),function(e){var t=e.items,n=e.lessonsTargetState,s=e.lessonSetStartAction,a=e.lessonSetViewFeedback,r=e.lessonSetFinishAction,o=Object(c.useState)(void 0),d=Object(i.a)(o,2),j=d[0],u=d[1];return Object(l.jsx)("ul",{className:"lessonsMenu",children:t.map((function(e){return Object(l.jsx)("li",{onClick:function(t){return function(e,t){n(t.href),u(e.target),s(!1),r(!1),a(!1),e.target.classList.add("menuItemActive"),void 0!==j&&j!==e.target&&j.classList.remove("menuItemActive")}(t,e)},children:Object(l.jsx)("span",{children:e.value})},e.id)}))})});var b=function(e){var t=Object(c.useContext)(r),n=t.lessonSetStartAction,s=t.lessonSetViewFeedback,a=t.lessonSetFinishAction,i=e.itemsMenu,o=e.active,d=e.setActiveMenu,j=Object(c.useContext)(r).lessonsTargetState;function b(){d(!1)}return Object(l.jsx)("nav",{className:o?"menu active":"menu",onClick:b,children:Object(l.jsx)("div",{className:"menuContent",onClick:function(e){return e.stopPropagation()},children:Object(l.jsxs)("div",{className:"menuHeader",children:[Object(l.jsxs)("div",{className:"closeMenu",onClick:b,children:[Object(l.jsx)("div",{className:"lineMenu one"}),Object(l.jsx)("div",{className:"lineMenu two"})]}),Object(l.jsx)(u,{items:i,lessonsTargetState:j,lessonSetStartAction:n,lessonSetViewFeedback:s,lessonSetFinishAction:a})]})})})},h=[{id:"menu_1",value:"\u0415\u0434\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439",href:1},{id:"menu_2",value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439",href:2},{id:"menu_3",value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439(2)",href:3},{id:"menu_4",value:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",href:4},{id:"menu_5",value:"\u0415\u0434\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430",href:5}];var O=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(i.a)(a,2),u=r[0],O=r[1];function m(e){O(e)}return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(b,{active:u,setActiveMenu:m,itemsMenu:h,dropMenu:n,setActiveDropMenu:function(e){s(e)}}),Object(l.jsx)(o,{active:u,setActiveMenu:m}),Object(l.jsx)(d,{}),Object(l.jsx)(j,{})]})};n(17);var m=function(){var e=Object(c.useContext)(r),t=e.lessons,n=e.lessonNow,s=(e.changeLessonState,n-1);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main",children:t[s]})})};n(18),n(19);var p=function(){var e=Object(c.useContext)(r),t=e.lessonsTargetState,n=e.lessonNow,s=e.lessonSetViewFeedback,a=e.startAction,i=e.lessonSetAndAnswer,o=e.answer,d=(e.lessonsNumber,e.lessonSetStartAction,e.lessonSetFinishAction);return Object(c.useEffect)((function(){}),[o]),Object(l.jsx)("button",{className:a?"backButton notActive":"backButton",onClick:function(){var e=n-1;e<1||!0===a||(t(e),s(!1),i(!1),d(!1))},children:"\u2190\u2003\u2003\u041d\u0410\u0417\u0410\u0414"})},f=(n(20),n.p+"static/media/reset.3bab4926.svg");var x=function(){var e=Object(c.useContext)(r),t=e.lessonSetStartAction,n=e.lessonSetResetTask,s=e.lessonSetViewFeedback,a=e.lessonSetFinishAction;return e.lessonSetAndAnswer,Object(l.jsx)("button",{className:"resetButton",onClick:function(){t(!1),n(!0),s(!1),a(!1)},children:Object(l.jsxs)("span",{className:"resetBtn",children:[Object(l.jsx)("span",{className:"resetText",children:"\u0421\u0411\u0420\u041e\u0421"}),Object(l.jsx)("img",{src:f,alt:""})]})})};n(21);var g=function(){var e=Object(c.useContext)(r),t=e.lessonsTargetState,n=e.lessonNow,s=e.lessonsNumber,a=e.lessonSetViewFeedback,i=e.lessonSetAndAnswer,o=e.lessonSetFinishAction;return Object(l.jsx)("button",{className:"nextButton",onClick:function(){var e=n+1;e>s||(t(e),a(!1),i(!1),o(!1))},children:"\u0414\u0410\u041b\u0415\u0415\u2003\u2003\u2192"})};n(22),n.p;var v=function(){var e=Object(c.useContext)(r),t=e.lessonSetCheckTask,n=(e.answer,e.lessonSetStartAction),s=e.lessonSetFinishAction,a=(e.lessonSetAndAnswer,e.lessonSetViewFeedback);return e.startAction,e.checkTask,e.lessonsTargetState,e.lessonNow,e.lessonsNumber,Object(l.jsx)("button",{className:"checkButton",onClick:function(){t(!0),a(!0),n(!1),s(!0)},children:Object(l.jsx)("span",{className:"checkBtn",children:"\u041f\u0420\u041e\u0412\u0415\u0420\u0418\u0422\u042c"})})};var C=function(e){var t=Object(c.useContext)(r),n=(t.lessonNow,t.lessonsNumber,t.startAction),s=t.finishAction,a=t.lessonSetFinishAction;return t.answer,Object(c.useEffect)((function(){n&&a(!0)}),[n]),Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"backButtonWrapper",children:Object(l.jsx)(p,{})}),Object(l.jsx)("div",{className:"resetWrapper",children:s&&Object(l.jsx)(x,{})}),Object(l.jsx)("div",{className:"nextButtonWrapper",children:n?Object(l.jsx)(v,{}):Object(l.jsx)(g,{})})]})},S=(n(23),n.p+"static/media/alphabet.003b440f.svg"),N=function(e){var t=e.alphabetIcon,n=e.alphabetModalContent,s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],o=a[1];return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("div",{className:"alphabetStyleParrotWrapper",title:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c",children:Object(l.jsx)("img",{className:"alphabetStyleParrot",src:S,with:"70",height:"70",onClick:function(){return o(!0)},alt:""})}),Object(l.jsx)("div",{className:r?"alphabetModal active":"alphabetModal",onClick:function(){return o(!r)},children:Object(l.jsx)("div",{className:"alphabetModal__content",onClick:function(e){return e.stopPropagation()},children:Object(l.jsx)("div",{className:"lessonContent_alphabetIcons",children:Object(l.jsx)("div",{className:"alphabetIcons",children:n})})})})]})},_=(n(24),n.p+"static/media/parrotHelp.e4600232.svg"),k=function(e){var t=e.helpIcon,n=e.helpModalContent,s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],o=a[1];return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("div",{className:"helpStyleParrotWrapper",title:"\u041f\u043e\u043c\u043e\u0449\u044c",children:Object(l.jsx)("img",{className:"helpStyleParrot",src:_,onClick:function(){return o(!0)},alt:""})}),Object(l.jsx)("div",{className:r?"helpModal active":"helpModal",onClick:function(){return o(!r)},children:Object(l.jsx)("div",{className:"helpModal__content",onClick:function(e){return e.stopPropagation()},children:n})})]})},A=(n(25),n.p+"static/media/wellDone_textInCloud.8bd4734a.svg"),F=n.p+"static/media/motivationCarrot_wellDone.48c0003f.svg",M=n.p+"static/media/tryAgain_textInCloud.29495567.svg",P=n.p+"static/media/motivationCarrot_tryAgain.b12d5e7a.svg",w=function(e){e.cloudStyle;return Object(l.jsxs)("div",{className:"wellDoneParrot",children:[Object(l.jsx)("img",{className:"motivationParrot",src:F,alt:""}),Object(l.jsx)("img",{className:"motivationTextCloud",src:A,alt:""})]})},T=function(e){e.parrotStyle,e.cloudStyle;return Object(l.jsxs)("div",{className:"tryAgainParrot",children:[Object(l.jsx)("img",{className:"motivationParrot",src:P,with:"300",height:"300",alt:""}),Object(l.jsx)("img",{className:"motivationTextCloud",src:M,width:"270",height:"270",alt:""})]})},y=function(e){var t=e.answer,n={zIndex:"10000",position:"absolute",top:"55vh",left:"84vw"};return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(w,{parrotStyle:n}):Object(l.jsx)(T,{parrotStyle:n})})},I=(n(26),n.p+"static/media/question_textHeader.d24a3cff.svg"),E=n.p+"static/media/sound_textHeader.ce297dc9.svg",H=(n(27),function(e){var t=e.lessonHeading,n=e.themeHeading,c=e.titleHeading,s=e.soundSource,a=e.soundVisible,i=e.titleVisible;return Object(l.jsxs)("div",{className:"textStartContent_heading",children:[Object(l.jsx)("div",{children:Object(l.jsx)("span",{className:"lessonsHeading",children:t})}),Object(l.jsxs)("div",{className:"taskHeading",children:[a&&Object(l.jsx)("span",{className:"questionHelpTranslation",onClick:function(){new Audio(s).play()},children:Object(l.jsx)("img",{src:E,className:"soundIcon",alt:""})}),i&&Object(l.jsx)("span",{className:"questionHelpTranslation","data-title":c,children:Object(l.jsx)("img",{src:I,className:"questionIcon",alt:""})}),Object(l.jsx)("span",{className:"themeHeading",children:n})]})]})}),D=n.p+"static/media/lion.dbd8c13b.png",B=n.p+"static/media/tiger.7bc5058d.png",L=n.p+"static/media/monkey.0cf4077b.png",V=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},R=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})},W=[{id:"pic_1",data:"lion",src:D},{id:"pic_2",data:"lion",src:D},{id:"pic_3",data:"tiger",src:B},{id:"pic_4",data:"tiger",src:B},{id:"pic_5",data:"tiger",src:B},{id:"pic_6",data:"monkey",src:L},{id:"pic_7",data:"tiger",src:B},{id:"pic_8",data:"lion",src:D}],z=function(e){var t=e.picturesForMatching,n=e.matchingHandler,c=e.picturesBlock;return Object(l.jsx)("div",{className:"oneChoisePicture",ref:c,children:t.map((function(e){return Object(l.jsx)("div",{className:"oneChoisePictureCard",data:e.data,onClick:n,children:Object(l.jsx)("img",{src:e.src,alt:"",draggable:"false"})},e.id)}))})};var X=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent,o=e.lessonSetStartAction,d=e.lessonSetResetTask,j=e.resetTask,u=e.lessonSetCheckTask,b=e.checkTask,h=e.lessonSetAndAnswer;Object(c.useEffect)((function(){t(!0),n(!0),s(R),a(V)}),[]);var O=Object(c.useState)(),m=Object(i.a)(O,2),p=m[0],f=m[1],x=Object(c.useRef)(null);Object(c.useEffect)((function(){!0===j&&x.current.childNodes.forEach((function(e){e.classList.remove("oneChoisePictureCardActive")})),d(!1)}),[j]),Object(c.useEffect)((function(){!0===b&&("monkey"===p.attributes.getNamedItem("data").value?h(!0):h(!1)),u(!1)}),[b]);var g=Object(c.useMemo)((function(){return W.sort((function(){return Math.random()>.5?1:-1}))}),[]);return Object(l.jsxs)("div",{className:"lessonContent",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u0415\u0434\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("p",{style:{textAlign:"center"},children:["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438. \u041a\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043b\u0438\u0448\u043d\u0438\u0439? \u041f\u043e\u0447\u0435\u043c\u0443?",Object(l.jsx)("br",{}),"\u0412\u044b\u0431\u0435\u0440\u0438 \u0438 \u043e\u0442\u043c\u0435\u0442\u044c \u043b\u0438\u0448\u043d\u044e\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. (\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u0435\u0437\u044c\u044f\u043d\u043a\u0443)"]})}),soundVisible:!1,titleVisible:!1}),Object(l.jsx)("div",{className:"oneChoisePictureWrapper",children:Object(l.jsx)(z,{picturesForMatching:g,matchingHandler:function(e){var t=e.target;t.parentElement.childNodes.forEach((function(e){e.classList.remove("oneChoisePictureCardActive")})),t.classList.add("oneChoisePictureCardActive"),f(t),o(!0)},picturesBlock:x})})]})},Y=(n(28),n.p+"static/media/balls.70be3c0b.png"),q=n.p+"static/media/bears.d778cd84.png",J=n.p+"static/media/cars.bf82bcf5.png",G=n.p+"static/media/duck.b2e17eee.png",K=n.p+"static/media/pegTop.9ba37d6e.png",Q=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},U=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})},Z=[{id:"pic_1",data:"several",src:Y},{id:"pic_2",data:"one",src:G},{id:"pic_3",data:"one",src:K},{id:"pic_4",data:"several",src:J},{id:"pic_5",data:"several",src:q}],$=function(e){var t=e.picturesForMatching,n=e.matchingHandler,c=e.picturesBlock;return Object(l.jsx)("div",{className:"multiChoisePicture",ref:c,children:t.map((function(e){return Object(l.jsx)("div",{className:"multiChoisePictureCard",data:e.data,onClick:n,children:Object(l.jsx)("img",{src:e.src,alt:"",draggable:"false"})},e.id)}))})};var ee=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent,o=e.lessonSetStartAction,d=e.lessonSetResetTask,j=e.resetTask,u=e.lessonSetCheckTask,b=e.checkTask,h=e.lessonSetAndAnswer;Object(c.useEffect)((function(){t(!0),n(!0),s(U),a(Q)}),[]);var O=Object(c.useState)(),m=Object(i.a)(O,2),p=(m[0],m[1]),f=Object(c.useState)([]),x=Object(i.a)(f,2),g=(x[0],x[1],Object(c.useRef)(null));Object(c.useEffect)((function(){!0===j&&(g.current.childNodes.forEach((function(e){e.classList.remove("multiChoisePictureCardActive")})),p(void 0)),d(!1)}),[j]),Object(c.useEffect)((function(){if(!0===b){var e=0,t=0;g.current.childNodes.forEach((function(n){n.classList.contains("multiChoisePictureCardActive")&&e++,"one"===n.attributes.getNamedItem("data").value&&n.classList.contains("multiChoisePictureCardActive")&&t++})),t===e&&t===Z.filter((function(e){return"one"===e.data})).length?h(!0):h(!1)}u(!1)}),[b]);var v=Object(c.useMemo)((function(){return Z.sort((function(){return Math.random()>.5?1:-1}))}),[]);return Object(l.jsxs)("div",{className:"lessonContent",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{style:{textAlign:"center"},children:"\u041e\u0442\u043c\u0435\u0442\u044c \u0440\u0438\u0441\u0443\u043d\u043a\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d \u043e\u0434\u0438\u043d \u043f\u0440\u0435\u0434\u043c\u0435\u0442."})}),soundVisible:!1,titleVisible:!1}),Object(l.jsx)("div",{className:"multiChoisePictureWrapper",children:Object(l.jsx)($,{picturesForMatching:v,matchingHandler:function(e){var t=e.target;t.classList.contains("multiChoisePictureCardActive")?t.classList.remove("multiChoisePictureCardActive"):t.classList.add("multiChoisePictureCardActive"),p(t),o(!0)},picturesBlock:g})})]})},te=(n(29),n.p+"static/media/DO_3-4_22_2_1.fc6646c7.png"),ne=n.p+"static/media/DO_3-4_22_2_2.9500f353.png",ce=n.p+"static/media/DO_3-4_22_2_3.7d5ad98d.png",se=n.p+"static/media/DO_3-4_22_2_4.d7b2671d.png",ae=n.p+"static/media/DO_3-4_22_2_5.720ae862.png",ie=n.p+"static/media/DO_3-4_22_2_6.24aa76d0.png",re=n.p+"static/media/DO_3-4_22_2_7.71ee141a.png",le=n.p+"static/media/DO_3-4_22_2_8.88a64fe6.png",oe=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},de=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})},je=[{id:"pic_1",data:"hall",src:te},{id:"pic_2",data:"kitchen",src:ne},{id:"pic_3",data:"hall",src:ce},{id:"pic_4",data:"several",src:se},{id:"pic_5",data:"hall",src:ae},{id:"pic_6",data:"kitchen",src:ie},{id:"pic_7",data:"hall",src:re},{id:"pic_8",data:"hall",src:le}],ue="kitchen",be=function(e){var t=e.picturesForMatching,n=e.matchingHandler,c=e.picturesBlock;return Object(l.jsx)("div",{className:"multiChoisePicture",ref:c,children:t.map((function(e){return Object(l.jsx)("div",{className:"multiChoisePictureCard",data:e.data,onClick:n,children:Object(l.jsx)("img",{src:e.src,alt:"",draggable:"false"})},e.id)}))})};var he=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent,o=e.lessonSetStartAction,d=e.lessonSetResetTask,j=e.resetTask,u=e.lessonSetCheckTask,b=e.checkTask,h=e.lessonSetAndAnswer;Object(c.useEffect)((function(){t(!0),n(!0),s(de),a(oe)}),[]);var O=Object(c.useState)(),m=Object(i.a)(O,2),p=(m[0],m[1]),f=Object(c.useState)([]),x=Object(i.a)(f,2),g=(x[0],x[1],Object(c.useRef)(null));Object(c.useEffect)((function(){!0===j&&(g.current.childNodes.forEach((function(e){e.classList.remove("multiChoisePictureCardActive")})),p(void 0)),d(!1)}),[j]),Object(c.useEffect)((function(){if(!0===b){var e=0,t=0;g.current.childNodes.forEach((function(n){n.classList.contains("multiChoisePictureCardActive")&&e++,n.attributes.getNamedItem("data").value===ue&&n.classList.contains("multiChoisePictureCardActive")&&t++})),t===e&&t===je.filter((function(e){return e.data===ue})).length?h(!0):h(!1)}u(!1)}),[b]);var v=Object(c.useMemo)((function(){return je.sort((function(){return Math.random()>.5?1:-1}))}),[]);return Object(l.jsxs)("div",{className:"lessonContent",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{style:{textAlign:"center"},children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0438 \u043e\u0442\u043c\u0435\u0442\u044c \u043c\u0435\u0431\u0435\u043b\u044c \u0434\u043b\u044f \u043a\u0443\u0445\u043d\u0438."})}),soundVisible:!1,titleVisible:!1}),Object(l.jsx)("div",{className:"multiChoisePictureWrapper",children:Object(l.jsx)(be,{picturesForMatching:v,matchingHandler:function(e){var t=e.target;t.classList.contains("multiChoisePictureCardActive")?t.classList.remove("multiChoisePictureCardActive"):t.classList.add("multiChoisePictureCardActive"),p(t),o(!0)},picturesBlock:g})})]})},Oe=(n(30),n.p+"static/media/leftArrow.0004fadd.svg"),me=n.p+"static/media/rightArrow.5880dea5.svg",pe=n.p+"static/media/DO_3-4_21_1_9.3acd3cef.jpg",fe=n.p+"static/media/DO_3-4_21_1_10.24fe69ba.jpg",xe=n.p+"static/media/DO_3-4_21_1_11.e572c96d.jpg",ge=n.p+"static/media/DO_3-4_21_1_12.fc8fc203.jpg",ve=n.p+"static/media/DO_3-4_21_1_13.0b624875.jpg",Ce=n.p+"static/media/DO_3-4_21_1_14.ccef3dfd.jpg",Se=n.p+"static/media/DO_3-4_21_1_15.c4951c77.jpg",Ne=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},_e=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})},ke=function(e){var t=e.onClick;return Object(l.jsx)("div",{className:"sliderContent_button leftButton",onClick:t,children:Object(l.jsx)("img",{src:Oe,style:{margin:"15px 0 0 18px"},alt:""})})},Ae=function(e){var t=e.onClick;return Object(l.jsx)("div",{className:"sliderContent_button rightButton",onClick:t,children:Object(l.jsx)("img",{src:me,style:{margin:"15px 0 0 20px"},alt:""})})},Fe=function(e){var t=e.sliderNumber,n=e.actualSlide;return Object(l.jsxs)("div",{className:"sliderContent_sliderCounter",children:[Object(l.jsx)("span",{className:"sliderContent_sliderCounter__actual",children:n}),"/",t]})};var Me=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent;e.lessonSetStartAction,e.lessonSetResetTask,e.resetTask,e.lessonSetCheckTask,e.checkTask,e.lessonSetAndAnswer,Object(c.useEffect)((function(){t(!0),n(!0),s(_e),a(Ne)}),[]);var o=[{id:"giraffe",src:pe},{id:"elephant",src:fe},{id:"rhino",src:xe},{id:"tiger",src:ge},{id:"lion",src:ve},{id:"zebra",src:Ce},{id:"monkey",src:Se}],d=o.length,j=Object(c.useState)(0),u=Object(i.a)(j,2),b=u[0],h=u[1];return Object(l.jsx)("div",{className:"lessonContent",children:Object(l.jsxs)("div",{className:"lessonContent_slider",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{style:{textAlign:"center"},children:"\u0414\u0438\u043a\u0438\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435."})}),titleHeading:"\u0414\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440",soundVisible:!1,titleVisible:!1}),Object(l.jsxs)("div",{className:"sliderContent",children:[Object(l.jsx)(ke,{onClick:function(){var e=b-1;console.log(),console.log(b),0!==b&&h(e)}}),Object(l.jsx)("div",{className:"sliderContent_slide",children:Object(l.jsx)("img",{className:"slide",src:o[b].src})}),Object(l.jsx)(Ae,{onClick:function(){var e=b+1;e>d-1||h(e)}})]}),Object(l.jsx)(Fe,{sliderNumber:d,actualSlide:b+1})]})})},Pe=(n(31),n.p+"static/media/lake.c6698294.png"),we=n.p+"static/media/elephant.e7b691e0.png",Te=n.p+"static/media/giraffe.3004f92e.png",ye=n.p+"static/media/lion.bfd1ad2d.png",Ie=n.p+"static/media/rhino.b7c6332b.png",Ee=n.p+"static/media/tiger.e8f89d51.png",He=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},De=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})},Be=[{id:"pic_1",data:"elephant",src:we},{id:"pic_2",data:"giraffe",src:Te},{id:"pic_3",data:"tiger",src:Ee},{id:"pic_4",data:"lion",src:ye},{id:"pic_5",data:"rhino",src:Ie}];var Le=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent,o=e.lessonSetStartAction,d=e.lessonSetResetTask,j=e.resetTask,u=e.lessonSetCheckTask,b=e.checkTask,h=e.lessonSetAndAnswer;Object(c.useEffect)((function(){t(!0),n(!0),s(De),a(He)}),[]);var O=Object(c.useRef)(null),m=Object(c.useState)(),p=Object(i.a)(m,2),f=p[0],x=p[1];Object(c.useEffect)((function(){!0===j&&O.current.childNodes.forEach((function(e){return e.classList.remove("dragPictureActive")})),d(!1)}),[j]),Object(c.useEffect)((function(){!0===b&&("rhino"===f.attributes.getNamedItem("data").value?h(!0):h(!1)),u(!1)}),[b]);var g=function(e){var t=e.target;x(t),O.current.childNodes.forEach((function(e){return e.classList.remove("dragPictureActive")})),t.classList.add("dragPictureActive"),o(!0)};return Object(l.jsxs)("div",{className:"lessonContent",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u0415\u0434\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438, \u043a\u0442\u043e \u0441\u043f\u0440\u044f\u0442\u0430\u043b\u0441\u044f \u0432 \u0436\u0430\u0440\u043a\u043e\u0439 \u0410\u0444\u0440\u0438\u043a\u0435. \u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u043f\u0440\u044f\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0435"})}),soundVisible:!1,titleVisible:!1}),Object(l.jsxs)("div",{className:"dnd_matchingWrapper",children:[Object(l.jsx)("div",{className:"dropPlace",children:Object(l.jsx)("img",{src:Pe,alt:""})}),Object(l.jsx)("div",{className:"dragPlace",ref:O,children:Be.map((function(e){return Object(l.jsx)("img",{data:e.data,className:"dragPicture",src:e.src,alt:"",onClick:g},e.id)}))})]})]})},Ve=(n(32),n.p+"static/media/chrono_1.ab8f6208.png"),Re=n.p+"static/media/chrono_2.87576e28.png",We=n.p+"static/media/chrono_3.8b2f1a80.png",ze=n.p+"static/media/chrono_4.0909c8d8.png",Xe=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" \u0421\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u0432"})]})},Ye=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438"})]})};var qe=function(){var e=Object(c.useContext)(r),t=e.helpSetIcon,n=e.alphabetSetIcon,s=e.helpSetModalContent,a=e.alphabetSetModalContent,o=e.lessonSetStartAction,d=e.lessonSetResetTask,j=e.resetTask,u=e.lessonSetCheckTask,b=e.checkTask,h=e.lessonSetAndAnswer;Object(c.useEffect)((function(){t(!0),n(!0),s(Ye),a(Xe)}),[]);var O=Object(c.useRef)(null),m=Object(c.useRef)(null),p=Object(c.useState)(),f=Object(i.a)(p,2);f[0],f[1],Object(c.useEffect)((function(){!0===j&&m.current.childNodes.forEach((function(e){e.childNodes.length>1&&O.current.appendChild(e.childNodes[1])})),d(!1)}),[j]),Object(c.useEffect)((function(){if(!0===b){var e=new Array;m.current.childNodes.forEach((function(t){t.childNodes.length>1&&e.push(t.childNodes[1].attributes.getNamedItem("data").value)}));var t=0;e.length===C?m.current.childNodes.forEach((function(e,n){console.log(e.childNodes[1].attributes.getNamedItem("data").value),e.childNodes[1].attributes.getNamedItem("data").value===v[n].data&&t++})):h(!1);var n=t===v.length;h(n)}u(!1)}),[b]);var x,g,v=[{id:"pic_1",data:"chrono1",src:Ve},{id:"pic_2",data:"chrono2",src:Re},{id:"pic_3",data:"chrono3",src:We},{id:"pic_4",data:"chrono4",src:ze}],C=v.length;function S(e){(x=e.target).style.cursor="grabbing";var t=e.clientX-x.getBoundingClientRect().left,n=e.clientY-x.getBoundingClientRect().top;function c(e,c){x.style.left=e-t+"px",x.style.top=c-n+"px"}function s(e){c(e.pageX,e.pageY),x.hidden=!0,g=document.elementFromPoint(e.clientX,e.clientY),x.hidden=!1}x.style.position="absolute",x.style.zIndex=1e3,document.body.appendChild(x),c(e.pageX,e.pageY),g=document.elementFromPoint(e.clientX,e.clientY),document.addEventListener("mousemove",s),x.onmouseup=function(){document.removeEventListener("mousemove",s),x.style.cursor="grab",g.classList.contains("chronoDropBox")&&2!==g.childNodes.length?(x.style.position="relative ",x.style.zIndex=null,x.style.top=null,x.style.left=null,g.append(x),o(!0)):(x.style.position="relative ",x.style.zIndex=null,x.style.top=null,x.style.left=null,O.current.appendChild(x))}}var N=Object(c.useMemo)((function(){return v.sort((function(){return Math.random()>.5?1:-1}))}),[]);return Object(l.jsxs)("div",{className:"lessonContent",children:[Object(l.jsx)(H,{lessonHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"\u0415\u0434\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430"})}),themeHeading:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438, \u043a\u0442\u043e \u0441\u043f\u0440\u044f\u0442\u0430\u043b\u0441\u044f \u0432 \u0436\u0430\u0440\u043a\u043e\u0439 \u0410\u0444\u0440\u0438\u043a\u0435. \u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u043f\u0440\u044f\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0435"})}),soundVisible:!1,titleVisible:!1}),Object(l.jsxs)("div",{className:"chronoDndWrapper",children:[Object(l.jsx)("div",{className:"cronoDropPlace",ref:m,children:v.map((function(e,t){return Object(l.jsx)("div",{className:"chronoDropBox",data:e.data,children:Object(l.jsx)("p",{className:"chronoDropBoxNumbers",children:t+1})},e.id)}))}),Object(l.jsx)("div",{className:"chronoDragPlace",ref:O,children:N.map((function(e){return Object(l.jsx)("img",{data:e.data,draggable:"false",className:"chronoDragPicture",src:e.src,alt:"",onMouseDown:S,hidden:!1},e.id)}))})]})]})},Je=[Object(l.jsx)(X,{}),Object(l.jsx)(ee,{}),Object(l.jsx)(he,{}),Object(l.jsx)(Me,{}),Object(l.jsx)(Le,{}),Object(l.jsx)(qe,{})];var Ge=function(){var e=Je.length,t=Object(c.useState)(1),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(!1),d=Object(i.a)(o,2),j=d[0],u=d[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),p=h[0],f=h[1],x=Object(c.useState)(!1),g=Object(i.a)(x,2),v=g[0],S=g[1],_=Object(c.useState)(!1),A=Object(i.a)(_,2),F=A[0],M=A[1],P=Object(c.useState)(!1),w=Object(i.a)(P,2),T=w[0],I=w[1],E=Object(c.useState)(!1),H=Object(i.a)(E,2),D=H[0],B=H[1],L=Object(c.useState)(),V=Object(i.a)(L,2),R=V[0],W=V[1],z=Object(c.useState)(),X=Object(i.a)(z,2),Y=X[0],q=X[1],J=Object(c.useState)(),G=Object(i.a)(J,2),K=G[0],Q=G[1],U=Object(c.useState)(),Z=Object(i.a)(U,2),$=Z[0],ee=Z[1],te={lessons:Je,lessonsNumber:e,lessonsTargetState:function(e){a(e)},lessonNow:s,lessonSetStartAction:function(e){u(e)},startAction:j,lessonSetFinishAction:function(e){f(e)},finishAction:p,lessonSetResetTask:function(e){I(e)},resetTask:T,lessonSetCheckTask:function(e){B(e)},checkTask:D,lessonSetAndAnswer:function(e){S(e)},answer:v,lessonSetViewFeedback:function(e){M(e)},alphabetSetModalContent:function(e){q(e)},alphabetSetIcon:function(e){W(e)},alphabetModalContent:Y,helpSetModalContent:function(e){ee(e)},helpSetIcon:function(e){Q(e)},helpModalContent:$};return Object(l.jsx)(r.Provider,{value:te,children:Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(O,{}),Object(l.jsx)(m,{}),F&&Object(l.jsx)(y,{answer:v}),Object(l.jsx)(N,{alphabetIcon:R,alphabetModalContent:Y}),Object(l.jsx)(k,{helpIcon:K,helpModalContent:$}),Object(l.jsx)(C,{})]})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(Ge,{})}),document.getElementById("root")),Ke()}],[[33,1,2]]]);
//# sourceMappingURL=main.36f0c85a.chunk.js.map