/*! For license information please see 3733.94307c66.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkm2emm=self.webpackChunkm2emm||[]).push([[3733,8855],{3733:function(t,e,n){n.r(e),n.d(e,{ion_select:function(){return p},ion_select_option:function(){return x},ion_select_popover:function(){return w}});var i=n(9388),o=n(5785),r=n(7923),a=n(9069),s=n(79),l=n(8855),c=function(t,e){var n;return t.forEach((function(t){for(var i=0;i<t.addedNodes.length;i++)n=d(t.addedNodes[i],e)||n})),n},d=function(t,e){if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((function(e){return e.value===t.value}))},p=function(){function t(t){var e=this;(0,o.r)(this,t),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-".concat(g++),this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=function(t){e.setFocus(),e.open(t)},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()}}return t.prototype.styleChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})},t.prototype.connectedCallback=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t=this;return(0,i.Jh)(this,(function(e){return this.updateOverlayOptions(),this.emitStyle(),this.mutationO=function(t,e,n){if("undefined"!==typeof MutationObserver){var i=new MutationObserver((function(t){n(c(t,e))}));return i.observe(t,{childList:!0,subtree:!0}),i}}(this.el,"ion-select-option",(function(){return(0,i.mG)(t,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){return this.updateOverlayOptions(),[2]}))}))})),[2]}))}))},t.prototype.disconnectedCallback=function(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)},t.prototype.componentDidLoad=function(){this.didInit=!0},t.prototype.open=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n,o,r,s=this;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.disabled||this.isExpanded?[2,void 0]:(n=this,[4,this.createOverlay(t)]);case 1:return e=n.overlay=i.sent(),this.isExpanded=!0,e.onDidDismiss().then((function(){s.overlay=void 0,s.isExpanded=!1,s.setFocus()})),[4,e.present()];case 2:return i.sent(),"popover"===this.interface&&(o=this.childOpts.map((function(t){return t.value})).indexOf(this.value),o=o>-1?o:0,(r=e.querySelector(".select-interface-option:nth-child(".concat(o+1,")")))&&(0,a.f)(r)),[2,e]}}))}))},t.prototype.createOverlay=function(t){var e=this.interface;return"action-sheet"===e&&this.multiple&&(console.warn('Select interface cannot be "'.concat(e,'" with a multi-value select. Using the "alert" interface instead.')),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "'.concat(e,'" without passing an event. Using the "alert" interface instead.')),e="alert"),"action-sheet"===e?this.openActionSheet():"popover"===e?this.openPopover(t):this.openAlert()},t.prototype.updateOverlayOptions=function(){var t=this.overlay;if(t){var e=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,n);break;case"popover":var i=t.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(e,n));break;case"alert":var o=this.multiple?"checkbox":"radio";t.inputs=this.createAlertInputs(e,o,n)}}},t.prototype.createActionSheetButtons=function(t,e){var n=this,i=t.map((function(t){var i=h(t),o=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" "),r="".concat(y," ").concat(o);return{role:u(e,i,n.compareWith)?"selected":"",text:t.textContent,cssClass:r,handler:function(){n.value=i}}}));return i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}}),i},t.prototype.createAlertInputs=function(t,e,n){var i=this;return t.map((function(t){var o=h(t),r=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" "),a="".concat(y," ").concat(r);return{type:e,cssClass:a,label:t.textContent||"",value:o,checked:u(n,o,i.compareWith),disabled:t.disabled}}))},t.prototype.createPopoverOptions=function(t,e){var n=this;return t.map((function(t){var i=h(t),o=Array.from(t.classList).filter((function(t){return"hydrated"!==t})).join(" "),r="".concat(y," ").concat(o);return{text:t.textContent||"",cssClass:r,value:i,checked:u(e,i,n.compareWith),disabled:t.disabled,handler:function(t){n.value=t,n.multiple||n.close()}}}))},t.prototype.openPopover=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n,o,a,l,c,d,p,u;return(0,i.Jh)(this,(function(i){return e=this.interfaceOptions,n=(0,r.b)(this),o="md"!==n,a=this.multiple,l=this.value,c=t,d="auto",(p=this.el.closest("ion-item"))&&(p.classList.contains("item-label-floating")||p.classList.contains("item-label-stacked"))&&(c=Object.assign(Object.assign({},t),{detail:{ionShadowTarget:p}}),d="cover"),u=Object.assign(Object.assign({mode:n,event:c,alignment:"center",size:d,showBackdrop:o},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,multiple:a,value:l,options:this.createPopoverOptions(this.childOpts,l)}}),[2,s.c.create(u)]}))}))},t.prototype.openActionSheet=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n;return(0,i.Jh)(this,(function(i){return t=(0,r.b)(this),e=this.interfaceOptions,n=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]}),[2,s.b.create(n)]}))}))},t.prototype.openAlert=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n,o,a,l,c=this;return(0,i.Jh)(this,(function(i){return t=this.getLabel(),e=t?t.textContent:null,n=this.interfaceOptions,o=this.multiple?"checkbox":"radio",a=(0,r.b)(this),l=Object.assign(Object.assign({mode:a},n),{header:n.header?n.header:e,inputs:this.createAlertInputs(this.childOpts,o,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){c.ionCancel.emit()}},{text:this.okText,handler:function(t){c.value=t}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),[2,s.a.create(l)]}))}))},t.prototype.close=function(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)},t.prototype.getLabel=function(){return(0,a.j)(this.el)},t.prototype.hasValue=function(){return""!==this.getText()},Object.defineProperty(t.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:!1,configurable:!0}),t.prototype.getText=function(){var t=this.selectedText;return null!=t&&""!==t?t:v(this.childOpts,this.value,this.compareWith)},t.prototype.setFocus=function(){this.focusEl&&this.focusEl.focus()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})},t.prototype.render=function(){var t,e=this,n=this,i=n.disabled,s=n.el,c=n.inputId,d=n.isExpanded,p=n.name,u=n.placeholder,h=n.value,m=(0,r.b)(this),v=(0,a.d)(s,c),b=v.labelText,g=v.labelId;(0,a.e)(!0,s,p,f(h),i);var y=!1,x=this.getText();""===x&&void 0!==u&&(x=u,y=!0);var k={"select-text":!0,"select-placeholder":y},w=y?"placeholder":"text",O=void 0!==b?""!==x?"".concat(x,", ").concat(b):b:x;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":O,class:(t={},t[m]=!0,t["in-item"]=(0,l.h)("ion-item",s),t["select-disabled"]=i,t["select-expanded"]=d,t)},(0,o.h)("div",{"aria-hidden":"true",class:k,part:w},x),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:g},O),(0,o.h)("button",{type:"button",disabled:i,id:c,"aria-labelledby":g,"aria-haspopup":"listbox","aria-expanded":"".concat(d),onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}(),u=function(t,e,n){return void 0!==t&&(Array.isArray(t)?t.some((function(t){return m(t,e,n)})):m(t,e,n))},h=function(t){var e=t.value;return void 0===e?t.textContent||"":e},f=function(t){if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},m=function(t,e,n){return"function"===typeof n?n(t,e):"string"===typeof n?t[n]===e[n]:Array.isArray(e)?e.includes(t):t===e},v=function(t,e,n){return void 0===e?"":Array.isArray(e)?e.map((function(e){return b(t,e,n)})).filter((function(t){return null!==t})).join(", "):b(t,e,n)||""},b=function(t,e,n){var i=t.find((function(t){return m(h(t),e,n)}));return i?i.textContent:null},g=0,y="select-interface-option";p.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};var x=function(){function t(t){(0,o.r)(this,t),this.inputId="ion-selopt-".concat(k++),this.disabled=!1}return t.prototype.render=function(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,r.b)(this)})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),k=0;x.style=":host{display:none}";var w=function(){function t(t){(0,o.r)(this,t),this.options=[]}return t.prototype.onSelect=function(t){this.setChecked(t),this.callOptionHandler(t)},t.prototype.findOptionFromEvent=function(t){return this.options.find((function(e){return e.value===t.target.value}))},t.prototype.callOptionHandler=function(t){var e=this.findOptionFromEvent(t),n=this.getValues(t);e&&e.handler&&(0,s.s)(e.handler,n)},t.prototype.rbClick=function(t){this.callOptionHandler(t)},t.prototype.setChecked=function(t){var e=this.multiple,n=this.findOptionFromEvent(t);e&&n&&(n.checked=t.detail.checked)},t.prototype.getValues=function(t){var e=this.multiple,n=this.options;if(e)return n.filter((function(t){return t.checked})).map((function(t){return t.value}));var i=this.findOptionFromEvent(t);return i?i.value:void 0},t.prototype.renderOptions=function(t){return!0===this.multiple?this.renderCheckboxOptions(t):this.renderRadioOptions(t)},t.prototype.renderCheckboxOptions=function(t){return t.map((function(t){return(0,o.h)("ion-item",{class:(0,l.g)(t.cssClass)},(0,o.h)("ion-checkbox",{slot:"start",value:t.value,disabled:t.disabled,checked:t.checked}),(0,o.h)("ion-label",null,t.text))}))},t.prototype.renderRadioOptions=function(t){var e=this,n=t.filter((function(t){return t.checked})).map((function(t){return t.value}))[0];return(0,o.h)("ion-radio-group",{value:n},t.map((function(t){return(0,o.h)("ion-item",{class:(0,l.g)(t.cssClass)},(0,o.h)("ion-label",null,t.text),(0,o.h)("ion-radio",{value:t.value,disabled:t.disabled,onClick:function(t){return e.rbClick(t)}}))})))},t.prototype.render=function(){var t=this,e=t.header,n=t.message,i=t.options,a=t.subHeader,s=void 0!==a||void 0!==n;return(0,o.h)(o.H,{class:(0,r.b)(this)},(0,o.h)("ion-list",null,void 0!==e&&(0,o.h)("ion-list-header",null,e),s&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==a&&(0,o.h)("h3",null,a),void 0!==n&&(0,o.h)("p",null,n))),this.renderOptions(i)))},t}();w.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}},8855:function(t,e,n){n.r(e),n.d(e,{c:function(){return r},g:function(){return a},h:function(){return o},o:function(){return l}});var i=n(9388),o=function(t,e){return null!==e.closest(t)},r=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,l=function(t,e,n,o){return(0,i.mG)(void 0,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=3733.94307c66.chunk.js.map