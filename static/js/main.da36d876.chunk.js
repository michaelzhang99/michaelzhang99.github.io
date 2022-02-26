(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var i=t(1),s=t.n(i),a=t(11),r=t.n(a),o=t(3),c=(t(25),t(51)),d=t(52),l=t(0);function u(e){var n=e.menuOpen,t=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(n&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("a",{href:"#intro",className:"logo",children:"M.Z"}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(c.a,{className:"icon"}),Object(l.jsx)("span",{children:"1(650)-304-5480"})]}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(d.a,{className:"icon"}),Object(l.jsx)("span",{children:"michael.zhang@nyu.edu"})]})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return t(!n)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})}t(29);var h=t(12);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Mechanical Engineer","Designer","Inventor"]})}),[]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{children:"Hi There, I'm"}),Object(l.jsx)("h1",{children:"Michael Zhang"}),Object(l.jsxs)("h3",{children:["Experienced ",Object(l.jsx)("span",{ref:e})]})]}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}t(30);function j(e){var n=e.images,t=e.interval,s=Object(i.useState)(0),a=Object(o.a)(s,2),r=a[0],c=a[1],d=function(){r===n.length-1?c(0):c((function(e){return e+1}))};return Object(i.useEffect)((function(){var e=window.setInterval(d,t);return function(){window.clearInterval(e)}}),[r]),Object(l.jsx)("div",{className:"container1",children:Object(l.jsx)("img",{src:n[r],alt:"slides"})})}t(31);function g(e){var n=e.id,t=e.title,i=e.active,s=e.setSelected;return Object(l.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return s(n)},children:t})}t(32);var p={id:1,title:"NYU Building Renovation",img:"ProjectPicsResized/REVITPIC.png",img2:"NYUresized//SkyGarden.jpg",img3:"NYUresized/DormBrightView.jpg",img4:"NYUresized/F1Cafeteria.jpg",img5:"NYUresized/Floor121pic.jpg",descriptionTitle:"New York University Building",descriptionBody:"Assigned to redesign a NYU building, I chose to remake an environmental building that satisfies all categories of LEAD(Leadership in Energy and Environmental Design): Sustainable Sites, Water Efficiency, Energy and Atmosphere, Materials and Resources, Indoor Environmental Quality, Innovation in Design Process and Regional Priority. I envisioned my building to also incorporate aspects of biomimicry, an oak tree in my case,  and also represent recycling, reusability, and clean energy through an octagonal motif\u2014hence the building name The OCTAN. I then self taught myself how to use Autodesk Revit, where all the classrooms, gym, tennis courts, cafeteria, dorm rooms and gardens were designed and rendered. The building of Octan also included research of using chromatic windows and a lavish rooftop garden to reduce heating effects. In addition shrubs, trees, and plants can be observed in the building to reinforce the idea of clean energy. "},b={id:1,descriptionTitle:"Toy Sweeper Car Reverse Engineering",img:"ProjectPicsResized/CADCAR.png",img2:"RevEngCar/PartsList.png",img3:"RevEngCar/CarTop.png",img4:"RevEngCar/MVCarTop.png",img5:"RevEngCar/MVWheel.png",descriptionBody:"I decided to deconstruct a toy eraser sweeper car toy that I had as a kid to understand both the mechanical complexity and then design cycle that took to create this product: development, validation, prototyping, building, releasing, and improving. By deconstructing the toy car measuring 15 parts with calipers, observing the material and manufacturing techniques (injection molded, casted, etc), and weighing each part, I was able to understand how the toy operated,  built and was improved upon. The parts were then replicated on autodesk Inventor and assembled digitally. The final product was then 3D printed on a resin printer for optimal results. "},f={id:1,descriptionTitle:"Inverted Pendulum",img:"InvertedPendulumResized/FrontView.png",img2:"InvertedPendulumResized/BackView.png",img3:"InvertedPendulumResized/ExplodedView.png",img4:"InvertedPendulumResized/Drawing.png",img5:"InvertedPendulumResized/Simulink.png",descriptionBody:"We noticed that often our teachers do not have hands-on lab equipment in class, which makes it hard to demonstrate difficult concepts such as control theory, PID controllers, system responses, different types of sensors, and filters. Therefore my friends and I manufactured a portable, modular, and lightweight inverted pendulum lab kit for teachers to use at NYU for our senior design project. The device is able to invert a pendulum upright for more than 3 minutes, balance objects less than 300g, and to be set up in less than 5 minutes. The device is also responsive and user controller with knobs so that students can adjust different gains to see instantaneous system responses and when equilibrium (when the pendulum inverts) occurs. I researched the Matlab Simulink code, generated the fundamental kinematic equations for the system, helped design the basic prototype, manufactured 3D printed parts, and helped on the Solidwork CADs. The project is still in progress and will be finished by May 1st of 2022. "},v={id:1,descriptionTitle:"Finite Element",img:"FEAresized/Strain.jpg",img2:"FEAresized/Stress.jpg",img3:"FEAresized/Heat1.jpg",img4:"FEAresized/Heat2.jpg",img5:"FEAresized/Vibration4thFq.jpg",descriptionBody:"As commuters in New York City, we noticed that often subway rides are uncomfortable due to the constant vibrations and oscillations. Our goal was to analyze the wheels of a subway under load, stress, strain, frictional forces, heat, and vibrations up the fifth harmonic. I worked on the 3D models for deformation and stresses and also the thermal analysis on the wheel and track when a braking force is applied to the wheel. I also created the fourth harmonic vibration analysis on the wheel. The project was overall successful as we determined a new material, Chromoly Steel or AISI 4130 with a Poisson Ratio range of .27-.30 and Modulus of Elasticity between 27000-30,000 ksi, that provides a safer and less bumpy ride. "},O={id:1,descriptionTitle:"Landscaping of 881 San Jude",img:"ProjectPicsResized/LANDSCAPE.png",img2:"SanJudeResized/SanJude1.jpg",img3:"SanJudeResized/SanJude2.jpg",img4:"SanJudeResized/SanJude4.jpg",img5:"SanJudeResized/SanJude6.jpg",descriptionBody:"I was hired as a side-job due to my NYU building redesign to do landscaping for 881 Sand Jude. I researched for 2 months contacting professional Landscapers, combing through previous designs of landscaping plans, plant species, biodiversity, to create a cohesive and pleasing garden. I combined aesthetic beauty and utility with California\u2019s native plants that not only provide a flourish of tropical and desert plants but also require less watering, sunlight, and maintenance. The design also came complete with concrete layering for walkways made of water permeable brick, flowering through all four seasons, an organic-curvy patio deck, strategically placed tall-dense shrubs for privacy and soundproofing, and lighting placements. I was able to satisfy the customers' needs and get the project done one month ahead of schedule."};function x(){var e=Object(i.useState)("featured"),n=Object(o.a)(e,2),t=n[0],s=n[1],a=Object(i.useState)([]),r=Object(o.a)(a,2),c=r[0],d=r[1];Object(i.useRef)(null);return Object(i.useEffect)((function(){switch(t){case"Reverse":default:d(b);break;case"Pendulum":d(f);break;case"FEA":d(v);break;case"881":d(O);break;case"renovation":d(p)}}),[t]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"Reverse",title:"Reverse Product Engineering"},{id:"Pendulum",title:"Product Design: Inverted Pendulum"},{id:"FEA",title:"Finite Element on Subway Wheel "},{id:"renovation",title:"NYU Building Renovation"},{id:"881",title:"881 San Jude Landscaping"}].map((function(e){return Object(l.jsx)(g,{title:e.title,active:t===e.id,setSelected:s,id:e.id})}))})]}),Object(l.jsx)("hr",{className:"increasespeace"}),Object(l.jsxs)("div",{className:"bb3",children:[Object(l.jsx)("div",{className:"box1",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(j,{style:{marginRight:"1em"},images:[c.img,c.img2,c.img3,c.img4],interval:5e3})})})}),Object(l.jsx)("div",{className:"box2",children:Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:c.descriptionTitle}),Object(l.jsxs)("p",{children:[" ",c.descriptionBody]})]})})})]})]})}var w,y=t(13),N=(t(33),t(14));function k(){var e=Object(i.useState)(0),n=Object(o.a)(e,2),t=n[0],s=n[1],a=[{id:"1",icon:"./assets/writing.png",title:"Resume",dtitle:"Resume",desc:"Hi check out my resume: school involvement, additional projects such as a custom made bike etc ",downloads:"./Downloadables/Michael-Zhang-Resume.pdf"},{id:"2",icon:"./assets/globe.png",title:"More Info NYU Revit",dtitle:"NYU Revit Commission",desc:" Find a whole commision report with floor plans of every floor, vision statement to the right",downloads:"./Downloadables/NYURevitComission.pdf"},{id:"3",icon:"./assets/globe.png",title:"More Info San Jude",dtitle:"San Jude Plans",desc:"More information regarding the 881 San Jude Landscape: full pdf of the landscape drawing and plant slections can be found to the right",downloads:"./Downloadables/LANDSCAPE.pdf"}],r=function(e){s("left"===e?t>0?t-1:2:t<a.length-1?t+1:0)},c=N.a.button(w||(w=Object(y.a)(["\n    background-color: black;\n    color: white;\n    font-size: 20px;\n    padding: 10px 60px;\n    width: 350px;\n    height: 120px;\n    border-radius: 10px;\n    margin: 10px 0px;\n    cursor: pointer;\n    transition: ease background-color 250ms;\n    &:hover {\n      background-color: #605e54;\n\n  "])));return Object(l.jsxs)("div",{className:"Resume",id:"Resume",children:[Object(l.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:a.map((function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:e.icon,alt:""})}),Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.desc})]})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("a",{href:e.downloads,download:e.dtitle,children:Object(l.jsx)(c,{children:Object(l.jsxs)("h2",{children:["Download ",e.title]})})})})]})})}))}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r()}})]})}t(36),t(37);function R(e){var n=e.menuOpen,t=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(n&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return t(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return t(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return t(!1)},children:Object(l.jsx)("a",{href:"#Resume",children:"Resume"})})]})})}var I=function(){var e=Object(i.useState)(!1),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{menuOpen:t,setMenuOpen:s}),Object(l.jsx)(R,{menuOpen:t,setMenuOpen:s}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(m,{}),Object(l.jsx)(x,{}),Object(l.jsx)(k,{})]})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.da36d876.chunk.js.map