/*! For license information please see 7368.ceb7e68d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkm2emm=self.webpackChunkm2emm||[]).push([[7368],{7368:function(t,n,i){i.r(n),i.d(n,{a:function(){return a},b:function(){return o},c:function(){return c},d:function(){return r},h:function(){return s}});var e={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:i})}},notification:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:i})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=function(){e.selection()},a=function(){e.selectionStart()},o=function(){e.selectionChanged()},s=function(){e.selectionEnd()},r=function(t){e.impact(t)}}}]);
//# sourceMappingURL=7368.ceb7e68d.chunk.js.map