(this["webpackJsonpgoit-react-hw-04-images"]=this["webpackJsonpgoit-react-hw-04-images"]||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,s,p,l=n(0),h=n.n(l),d=n(24),u=n.n(d),b=n(6),g=n(7),x=n(10),m=n(9),f=n(5),j=n(4),v=n(31),O=j.b.header(a||(a=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #ffe0b2;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=j.b.form(r||(r=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),w=j.b.button(o||(o=Object(f.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.8;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),k=Object(j.b)(v.a)(i||(i=Object(f.a)(["\n  color: gray;\n"]))),S=j.b.input(c||(c=Object(f.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-right: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),N=n(2),C=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:""},e.handleChange=function(t){e.setState({searchName:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchName.trim()&&(e.props.onSubmit(e.state.searchName),e.setState({searchName:""}))},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(N.jsx)(O,{children:Object(N.jsxs)(y,{onSubmit:this.handleSubmit,children:[Object(N.jsx)(w,{type:"submit",children:Object(N.jsx)(k,{})}),Object(N.jsx)(S,{onChange:this.handleChange,value:this.state.searchName,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(l.Component),M=n(21),z=n(17),L=n(12),F=n.n(L),U=j.b.li(s||(s=Object(f.a)(["\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),P=j.b.img(p||(p=Object(f.a)(["\n  display: block;\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.05);\n    cursor: zoom-in;\n  }\n"]))),T=function(e){var t=e.pictures,n=e.showPicture;return t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(N.jsx)(U,{children:Object(N.jsx)(P,{src:a,alt:"card ".concat(t),onClick:n,"data-url":r})},t)}))},E=n(51);E.a.defaults.baseURL="https://pixabay.com/api/";var R="31600470-cb6dfcad8308a56e880daea1a";function B(e){return I.apply(this,arguments)}function I(){return I=Object(z.a)(F.a.mark((function e(t){var n,a,r=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.prev=1,e.next=4,E.a.get("?q=".concat(t,"&page=").concat(n,"&key=").concat(R,"&image_type=photo&orientation=horizontal&per_page=15"));case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),I.apply(this,arguments)}var A,D,K,H,J,_,q,W=n(30),G=j.b.div(A||(A=Object(f.a)(["\n  margin-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Q=function(){return Object(N.jsx)(G,{children:Object(N.jsx)(W.a,{color:"#00BFFF",height:90,width:90})})},V=j.b.ul(D||(D=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),X=j.b.button(K||(K=Object(f.a)(["\n  max-width: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #ffe0b2;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fefefe;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #2f2f37;\n  }\n"]))),Y=function(e){var t=e.onLoadMore;return Object(N.jsx)(X,{type:"button",onClick:t,children:"Load more"})},Z=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],status:"idle",error:null,page:1},e}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(z.a)(F.a.mark((function e(t,n){var a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.searchName===this.props.searchName){e.next=16;break}return e.prev=1,this.setState({status:"pending"}),e.next=5,B(this.props.searchName,1);case 5:if(0!==(a=e.sent).total){e.next=10;break}return e.next=9,Promise.reject(new Error("Try another name"));case 9:return e.abrupt("return",e.sent);case 10:this.setState({pictures:a.hits,status:"resolved"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),this.setState({status:"rejected",error:e.t0.message});case 16:if(n.page===this.state.page){e.next=32;break}return e.prev=17,this.setState({status:"pending"}),e.next=21,B(this.props.searchName,this.state.page);case 21:if(0!==(r=e.sent).total){e.next=26;break}return e.next=25,Promise.reject(new Error("Try another name"));case 25:return e.abrupt("return",e.sent);case 26:this.setState((function(e){return window.scrollBy({top:200,behavior:"smooth"}),{pictures:[].concat(Object(M.a)(e.pictures),Object(M.a)(r.hits)),status:"resolved"}})),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(17),this.setState({status:"rejected",error:e.t1.message});case 32:case"end":return e.stop()}}),e,this,[[1,13],[17,29]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleLoadMore",value:function(){this.setState((function(e){return{page:e.page+1}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.pictures,a=t.status,r=t.error;return"idle"===a?Object(N.jsx)("h2",{children:"Hey! Enter the pictures name"}):"resolved"===a?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(V,{children:Object(N.jsx)(T,{pictures:n,showPicture:this.props.showPicture})}),Object(N.jsx)(Y,{onLoadMore:function(){return e.handleLoadMore()}})]}):"pending"===a?0!==this.state.pictures.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(V,{children:Object(N.jsx)(T,{pictures:n})}),Object(N.jsx)(Q,{})]}):Object(N.jsx)(Q,{}):"rejected"===a?Object(N.jsx)("h2",{children:r}):void 0}}]),n}(l.Component),$=j.b.div(H||(H=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),ee=j.b.div(J||(J=Object(f.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),te=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onToggle()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggle()},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(N.jsx)($,{onClick:this.handleBackdropClick,children:Object(N.jsx)(ee,{children:this.props.children})})}}]),n}(l.Component),ne=Object(j.a)(_||(_=Object(f.a)(["\n* {\n  box-sizing: border-box;\n  }\n  html {\n    scroll-behavior: smooth;\n  }\n  body {\n    min-height: 100vh;\n    margin: 0;\n    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    background-color: #fff;\n    color: #010101;\n    line-height: 1.5;\n    scroll-behavior: smooth;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n  }\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n  }\n"]))),ae=j.b.div(q||(q=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),re=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:"",showModal:!1,card:{}},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.handleFormSubmit=function(t){e.setState({searchName:t})},e.showPicture=function(t){e.toggleModal();var n={largeImageURL:t.currentTarget.dataset.url,alt:t.currentTarget.alt};e.setState({card:n})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.card,n=e.searchName;return Object(N.jsxs)(ae,{children:[this.state.showModal&&Object(N.jsx)(te,{onToggle:this.toggleModal,children:Object(N.jsx)("img",{src:t.largeImageURL,alt:t.alt})}),Object(N.jsx)(ne,{}),Object(N.jsx)(C,{onSubmit:this.handleFormSubmit}),Object(N.jsx)(Z,{searchName:n,showPicture:this.showPicture})]})}}]),n}(l.Component);u.a.createRoot(document.getElementById("root")).render(Object(N.jsx)(h.a.StrictMode,{children:Object(N.jsx)(re,{})}))}},[[49,1,2]]]);
//# sourceMappingURL=main.0177455c.chunk.js.map