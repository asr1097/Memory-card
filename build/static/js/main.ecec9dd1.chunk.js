(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,function(e,c,i){},,function(e,c,i){},function(e,c,i){},function(e,c,i){},function(e,c,i){"use strict";i.r(c);var a=i(1),n=i.n(a),t=i(6),r=i.n(t),d=i(3),s=i(5),m=i(2),o=i.n(m),l=(i(12),i(0));var u=function(e){return Object(l.jsxs)("div",{id:e.id,className:"card",onClick:e.onClick,children:[Object(l.jsx)("img",{id:e.id,src:e.img,alt:e.name}),Object(l.jsx)("label",{className:"name",id:e.id,children:e.name})]})},j=i.p+"static/media/dobby.73b17925.png",p=i.p+"static/media/dumbldore.6e670971.png",b=i.p+"static/media/harry.6a31e5d9.png",g=i.p+"static/media/hermiony.9e3936de.png",f=i.p+"static/media/luna.74e10fa5.png",h=i.p+"static/media/malfoy.857142b9.png",O=i.p+"static/media/neville.e66c6a2d.png",v=i.p+"static/media/ron.629d8298.png",k=i.p+"static/media/snape.ec06df79.png",x=i.p+"static/media/voldemort.a7f9e044.png";i(14);var y=function(e){var c=[{img:j,name:"Dobby",id:o()(),clicked:!1},{img:p,name:"Dumbldore",id:o()(),clicked:!1},{img:b,name:"Harry",id:o()(),clicked:!1},{img:g,name:"Hermiony",id:o()(),clicked:!1},{img:f,name:"Luna",id:o()(),clicked:!1},{img:h,name:"Malfoy",id:o()(),clicked:!1},{img:O,name:"Neville",id:o()(),clicked:!1},{img:v,name:"Ron",id:o()(),clicked:!1},{img:k,name:"Snape",id:o()(),clicked:!1},{img:x,name:"Voldemort",id:o()(),clicked:!1}],i=Object(a.useState)(c),n=Object(d.a)(i,2),t=n[0],r=n[1],m=function(e){for(var c=[0,1,2,3,4,5,6,7,8,9],i=[];c.length>0;){var a=Math.floor(Math.random()*c.length),n=c.at(a);i.push(e[n]),c.splice(a,1)}return i},y=function(c){var i=c.target.id,a=t.find((function(e){return e.id===i}));a.clicked?(!function(e){var c=[];e.map((function(e){var i=Object(s.a)(Object(s.a)({},e),{},{clicked:!1});c.push(i)}));var i=m(c);r(i)}(t),e.resetScore()):(!function(e,c){var i=t.filter((function(c){return c.id!==e}));i.push({img:c.img,name:c.name,id:c.id,clicked:!0});var a=m(i);r(a)}(i,a),e.updateScore())};return Object(l.jsx)("div",{className:"cards",children:t.map((function(e){return Object(l.jsx)(u,{img:e.img,name:e.name,id:e.id,onClick:y},e.id)}))})};i(15);var S=function(e){var c=Object(a.useState)(0),i=Object(d.a)(c,2),n=i[0],t=i[1];return Object(a.useEffect)((function(){e.score>n&&t(e.score)}),[e]),Object(l.jsxs)("div",{className:"scoreboard",children:[Object(l.jsxs)("label",{children:["Score: ",Object(l.jsx)("span",{className:"score",children:e.score})]}),Object(l.jsxs)("label",{children:["Highscore: ",Object(l.jsx)("span",{className:"highscore",children:n})]})]})};i(16);var N=function(){var e=Object(a.useState)(0),c=Object(d.a)(e,2),i=c[0],n=c[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(S,{score:i}),Object(l.jsx)(y,{updateScore:function(){n(i+1)},resetScore:function(){n(0)}})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ecec9dd1.chunk.js.map