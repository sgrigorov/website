(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([[63835],{547457:(h,C,v)=>{"use strict";v.r(C);var S=v(274951),V=v.n(S);YUI.add("squarespace-gallery-collection-list",function(i){var T=i.config.win,E=i.config.win.document,G=function(){var l={body:i.one("body"),gallery:i.one(".sqs-system-gallery"),slideWrapper:i.one(".sqs-system-gallery").one(".gallery-wrapper"),slidesAndControls:i.one(".sqs-system-gallery").one(".slides-controls"),circles:i.one(".sqs-system-gallery").one(".circles")},s={show:"show",ready:"sqs-system-gallery-ready",interaction:"sqs-system-gallery-interaction",mouseenterleft:"sqs-system-gallery-hover-slides-left",mouseenterright:"sqs-system-gallery-hover-slides-right",init:"sqs-system-gallery-init",circlesNav:"gallery-navigation-circles",crop:"gallery-auto-crop",iframe:"sqs-system-gallery-video-iframe"},n=null,c=null,A=window.innerWidth,y=[],q=[];function d(e,a){var t=i.Squarespace.Template.getTweakValue(e);return a?t=parseFloat(t):typeof t=="string"&&(t=t.toLowerCase()),t==="true"?t=!0:t==="false"&&(t=!1),t}function z(){var e=l.gallery.one(".slide.sqs-active-slide");return e&&e.getAttribute("data-type")==="video"&&e.one("iframe")}function w(){return d("gallery-design")!=="grid"}function H(e){var a=0,t=e&&e.match(/(\d+):(\d+)/);return t&&t.length===3&&(a=t[1]/t[2]),a}function b(){var e=l.gallery.one(".slide.sqs-active-slide"),a=e&&e.getAttribute("data-slide-id")||null,t=l.gallery.one('.slide-meta[data-slide-id="'+a+'"]');t&&(l.body.hasClass(s.crop)?t.setStyles({top:null,bottom:null,left:null,width:null}):(l.body.hasClass(s.circlesNav)?(t.setStyle("top",(parseFloat(e._node.clientHeight)-parseFloat(e.one("img")._node.clientHeight))/2),t.setStyle("bottom",null)):(t.setStyle("top",null),t.setStyle("bottom",(parseFloat(e._node.clientHeight)-parseFloat(e.one("img")._node.clientHeight))/2)),t.setStyles({left:e.one("img").getComputedStyle("left"),width:e.one("img")._node.clientWidth})))}function L(e,a,t){var r,g,p;return a&&(r=a.one(".title"),g=a.one(".description"),(r&&r._node.innerHTML||g&&g._node.innerHTML)&&(t?p=!0:(a.addClass(s.show),b()))),p}function x(e){var a=l.gallery.one(".slide.sqs-active-slide"),t=a&&a.one("img"),r=a&&a.getAttribute("data-slide-id")||null,g;if(l.gallery.all(".slide-meta").removeClass(s.show),e&&Modernizr&&!Modernizr.touch&&l.gallery.addClass(s.interaction),z()?(l.gallery.addClass(s.iframe),l.gallery.removeClass(s.mouseenterleft),l.gallery.removeClass(s.mouseenterright)):(l.gallery.removeClass(s.iframe),e&&e.type==="Gallery:currentIndexChange"&&(e.direction===-1?l.gallery.addClass(s.mouseenterleft):l.gallery.addClass(s.mouseenterright))),r&&(L(a,l.gallery.one('.slide-meta[data-slide-id="'+r+'"]')),t&&l.body.hasClass(s.circlesNav))){var p=function(){g=Math.max(0,(parseFloat(a._node.clientHeight)-parseFloat(t._node.clientHeight))/2),l.circles.setStyle("bottom",g)};t.get("complete")?p():y.push(t.on("load",p))}}function o(){var e=d("gallery-loop"),a=d("gallery-auto-crop"),t=d("gallery-autoplay"),r=d("gallery-transitions"),g=d("galleryAutoplaySpeed",!0)*1e3,p=d("gallery-navigation"),_=d("gallery-aspect-ratio"),W=_.split(" ")[0],m=!w(),k=0;W=parseInt(_.split(":")[1],10)/parseInt(_.split(":")[0],10),_=l.gallery._node.clientWidth*W,l.gallery.removeClass(s.init),l.gallery.removeClass(s.ready),l.gallery.removeClass(s.interaction),l.gallery.removeClass(s.mouseenterleft),l.gallery.removeClass(s.mouseenterright),l.gallery.all(".slide-meta").removeClass(s.show),n&&(k=n.get("currentIndex"),l.gallery.all(".sqs-disabled").removeClass("sqs-disabled"),l.gallery.all(".sqs-active-slide").removeClass("sqs-active-slide"),l.gallery.all(".slide, img").setStyles({visibility:null,left:null,top:null,overflow:null,width:null,height:null}),n.destroy()),c&&(l.gallery.all(".thumbnail img[data-src]").each(function(I){I.setStyles({height:null,width:null,top:null,left:null})}),c.destroy()),l.gallery.one(".slides-controls").setStyle("height",m?null:_),l.slideWrapper.setStyle("minHeight",m?null:_),n=new i.SQS.Gallery.Gallery2({container:".slides",slides:".slide",currentIndex:k,elements:{next:".next-slide, .simple .next",previous:".previous-slide, .simple .previous",controls:".dots, .numbers, .circles",currentIndex:".current-index",totalSlides:".total-slides"},loop:e,autoplay:m?!1:t,autoplayOptions:{randomize:!1,timeout:g,pauseOnMouseover:[".thumbnail-wrapper"]},lazyLoad:!0,loaderOptions:{mode:m?d("aspect-ratio")==="auto"?"none":"fill":a?"fill":"fit"},design:m?"autocolumns":"stacked",designOptions:{transition:r,lightbox:m,clickBehavior:"auto",gutter:d("gridSpacing",!0),columnWidth:d("gridSize",!0),aspectRatio:H(d("aspect-ratio"))},historyHash:!0}),l.gallery.all(".arrow").each(function(I){I.setStyle("top",l.slideWrapper._node.clientHeight/2)}),!m&&p==="thumbnails"&&(c=new i.SQS.Gallery.Gallery2({container:".thumbnail-wrapper",currentIndex:k,loaderOptions:{mode:"fill",load:!0},lazyLoad:!0,design:"strip"}),n.addChild(c));var U=n.after("currentIndexChange",x);x();var B=n.after("image-loaded",b);b(),l.gallery.addClass(s.ready),y.push(U,B)}function M(e){typeof e=="function"&&(window.throttleTimeout&&clearTimeout(window.throttleTimeout),window.throttleTimeout=setTimeout(e,750))}function O(e,a){var t=e._event.offsetX||e._event.layerX;l.gallery.addClass(s.interaction),e._event.target&&(e._event.target.localName==="img"||e._event.target.className==="sqs-video-opaque"||e.target.hasClass("slide"))&&(a?(l.gallery.removeClass(s.mouseenterleft),l.gallery.removeClass(s.mouseenterright)):t<=e._currentTarget.clientWidth/2?(l.gallery.removeClass(s.mouseenterright),l.gallery.addClass(s.mouseenterleft)):(l.gallery.removeClass(s.mouseenterleft),l.gallery.addClass(s.mouseenterright)))}function R(e){var a=e.keyCode;(a===37||a===39&&w())&&l.gallery.addClass(s.interaction)}function D(){var e=new i.Squarespace.ResizeEmitter({timeout:100});e.on("resize:end",function(){window.innerWidth!==A&&(A=window.innerWidth,M(o))}),q.push(e),Modernizr&&!Modernizr.touch&&y.push(i.on("mousemove",function(a){w()&&O(a,!1)},l.gallery.one(".slides-controls")),i.on("mouseleave",function(a){w()&&(O(a,!0),l.gallery.removeClass(s.iframe))},l.gallery.one(".slides-controls")),i.on("mouseenter",function(a){w()&&z()&&l.gallery.addClass(s.iframe)},l.gallery.one(".slides-controls"))),y.push(i.on("keydown",R))}function u(e,a){y.push(i.Global.on("tweak:change",function(t){if(t.getName()===e&&typeof a=="function"){var r=t.getValue();r==="true"?r=!0:r==="false"&&(r=!1),a(r)}}))}function N(){u("gallery-loop",o),u("gallery-transitions",o),u("gallery-auto-crop",o),u("gallery-navigation",function(e){e==="Thumbnails"&&!l.gallery.one(".thumbnail-wrapper img[src]")&&o(),b()}),u("gallery-autoplay",function(e){n.set("autoplay",e)}),u("gallery-aspect-ratio",function(){o()}),u("galleryAutoplaySpeed",function(){M(o)}),u("galleryInfoBackground",function(){x()}),u("gallery-design",o),u("aspect-ratio",o),u("gridSpacing",o),u("gridSize",o),i.Global&&y.push(i.Global.on(["tweak:reset","tweak:close"],function(e){i.later(500,this,o)},this))}function F(){o(),D(),i.Lang.isValue(Static.SQUARESPACE_CONTEXT.authenticatedAccount)&&N()}function P(){y=y.filter(function(e){return e.detach(),!1}),q=q.filter(function(e){return typeof e.destroy=="function"&&e.destroy(),!1}),n&&(n.get("container")&&n.get("container").hide(),typeof n.destroy=="function"&&n.destroy()),c&&(c.get("container")&&c.get("container").hide(),typeof c.destroy=="function"&&c.destroy())}return{init:F,destroy:P}},f;T.Squarespace.onInitialize(i,function(){var l=E.querySelector(".sqs-gallery-list");l&&(f=new G,f.init())}),T.Squarespace.onDestroy(i,function(){f&&(f.destroy&&typeof f.destroy=="function"&&f.destroy(),f=null)})},"1.0",{requires:["base","node","squarespace-dom-emitters-resize","squarespace-gallery-ng","squarespace-image-loader","squarespace-public-api"]})},420522:(h,C,v)=>{"use strict";var S=v(547457)},274951:h=>{h.exports={}}},h=>{var C=S=>h(h.s=S),v=C(420522)}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/84d4ddd4bd36c42cdc81294865052d40/gallery-collection-list-360d2349aca7e69b0475-min.en-US.js.map