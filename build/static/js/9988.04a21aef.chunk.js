/*! For license information please see 9988.04a21aef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkm2emm=self.webpackChunkm2emm||[]).push([[9988],{9988:function(e,n,t){t.r(n),t.d(n,{startFocusVisible:function(){return r}});var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=function(e){var n=[],t=!0,r=e?e.shadowRoot:document,c=e||document.body,i=function(e){n.forEach((function(e){return e.classList.remove(o)})),e.forEach((function(e){return e.classList.add(o)})),n=e},u=function(){t=!1,i([])},a=function(e){(t=s.includes(e.key))||i([])},d=function(e){if(t&&e.composedPath){var n=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));i(n)}},f=function(){r.activeElement===c&&i([])};r.addEventListener("keydown",a),r.addEventListener("focusin",d),r.addEventListener("focusout",f),r.addEventListener("touchstart",u),r.addEventListener("mousedown",u);return{destroy:function(){r.removeEventListener("keydown",a),r.removeEventListener("focusin",d),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",u),r.removeEventListener("mousedown",u)},setFocus:i}}}}]);
//# sourceMappingURL=9988.04a21aef.chunk.js.map