(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),o=a.n(r),i=(a(13),a(2)),s=a(3),m=a(5),h=a(4),l=(a(14),a(0));function u(e){var t=e.onChange,a=e.imageName;return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{onChange:t,value:a,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var g=a(7),j=1;var b={fetchImages:function(e){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(j,"&key=").concat("21922241-ac53faccd58a6508b64890669","&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(t){return t.ok?(j+=1,t.json()):Promise.reject(new Error("\u041d\u0435\u0442\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(e)))}))}};function d(e){var t=e.src,a=e.id;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})},a)}a(16);function p(e){var t=e.onClick;return Object(l.jsx)("button",{onClick:t,className:"load-more",id:"loadMore",children:"Load more"})}var f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={imagesSearch:null},e.fetchingImages=function(){},e.onLoadMoreClick=function(t){window.scrollTo({top:document.getElementById("loadMore"),behavior:"smooth"}),b.fetchImages(e.props.imageName).then((function(t){e.setState({imagesSearch:[].concat(Object(g.a)(e.state.imagesSearch),Object(g.a)(t.hits))})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.imageName!==this.props.imageName&&(j=1,b.fetchImages(this.props.imageName).then((function(e){a.setState({imagesSearch:e.hits})})),console.log(this.state.imagesSearch))}},{key:"render",value:function(){var e=this.state.imagesSearch;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("ul",{className:"ImageGallery",children:e&&e.map((function(e){return Object(l.jsx)(d,{id:e.id,src:e.webformatURL})}))}),Object(l.jsx)(p,{onClick:this.onLoadMoreClick})]})}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={imageName:""},e.handleChange=function(t){t.currentTarget.value.trim()&&e.setState({imageName:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{onChange:this.handleChange,imageName:this.state.imageName}),Object(l.jsx)(f,{imageName:this.state.imageName})]})}}]),a}(n.Component);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2ebdfa26.chunk.js.map