/*!
* sycamore.js 0.2.0 - A decision tree based chat library.
*
* @author       Todd Armstrong <todd@toddarmstrong.com.au>
* @homepage     https://github.com/toddarmstrong/sycamore.js#readme
* @copyright    Copyright (c) 2018 Todd Armstrong <todd@toddarmstrong.com.au>
* @license      MIT
* @version      0.2.0
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sycamore=t()}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t=function(){function t(e,t){return s[e]=s[e]||[],s[e].push(t),this}function n(e,n){return n._once=!0,t(e,n),this}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?s[e].splice(s[e].indexOf(t),1):delete s[e],this}function a(e){for(var t=this,n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var o=s[e]&&s[e].slice();return o&&o.forEach(function(n){n._once&&i(e,n),n.apply(t,a)}),this}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.create(null);return e({},r,{on:t,once:n,off:i,emit:a})},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this.emitter=t();var r=void 0;r=a.speed&&"number"==typeof a.speed&&a.speed>=1&&a.speed<=10?a.speed:5;var s=void 0;s=a.delay&&"number"==typeof a.delay&&a.delay>=0?a.delay:0;var o=void 0;o=!!(a.delayMinMax&&Array.isArray(a.delayMinMax)&&2===a.delayMinMax.length&&a.delayMinMax[0]>0&&a.delayMinMax[1]>0&&a.delayMinMax[0]<a.delayMinMax[1])&&a.delayMinMax,this.options={speed:r,delay:s,delayMinMax:o,firstQuestion:a.firstQuestion||!1};var u=6;if(this.charactersPerSecond=2*u*(this.options.speed/10),this.currentQuestion=!1,this.answeredData=[],i instanceof Array)this.data=i;else if(i)throw new Error("Data is not an array.");return this}return i(e,[{key:"init",value:function(e){e?this._findAndProcessDataObj(e):this.options.firstQuestion?this._findAndProcessDataObj(this.options.firstQuestion):this._processDataObj(this.data[0])}},{key:"answer",value:function(e){this._answerQuestion(e)}},{key:"on",value:function(){var e;return(e=this.emitter).on.apply(e,arguments)}},{key:"off",value:function(){var e;return(e=this.emitter).off.apply(e,arguments)}},{key:"_calculateWait",value:function(e){var t=e.length,n=t/this.charactersPerSecond;return n*=1e3,n=Math.round(n)}},{key:"_calculateDelay",value:function(){return this.options.delayMinMax?Math.floor(Math.random()*(this.options.delayMinMax[1]-this.options.delayMinMax[0]+1)+this.options.delayMinMax[0]):this.options.delay}},{key:"_findDataObjByID",value:function(e){var t=this;return new Promise(function(n,i){t.data.forEach(function(t){t.id===e&&n(t)}),i("No message object found")})}},{key:"_processDataObj",value:function(e){if("message"===e.type)this._sendMessage(e);else{if("question"!==e.type)throw new Error("Data object doesn't have a valid type.");this._askQuestion(e)}}},{key:"_findAndProcessDataObj",value:function(e){var t=this;this._findDataObjByID(e).then(function(e){t._processDataObj(e)}).catch(function(e){throw new Error(e)})}},{key:"_sendMessage",value:function(e){var t=this,n=this._calculateWait(e.text);this.emitter.emit("typing",n),setTimeout(function(){t.emitter.emit("message",e);var n=t._calculateDelay();t.emitter.emit("delay",n),setTimeout(function(){t._findAndProcessDataObj(e.next)},n)},n)}},{key:"_askQuestion",value:function(e){var t=this;this.currentQuestion=e;var n=this._calculateWait(e.question);this.emitter.emit("typing",n),setTimeout(function(){t.emitter.emit("question",e)},n)}},{key:"_answerQuestion",value:function(e){var t=this,n={question:this.currentQuestion.question,answer:e.text};if(this.emitter.emit("answered",n),this.answeredData.push(n),this.emitter.emit("update",this.answeredData),e.callback){if("function"!=typeof e.callback)throw new Error("The callback for '"+e.text+"' is not a function");e.callback()}if(e.next){var i=this._calculateDelay();this.emitter.emit("delay",i),setTimeout(function(){t._findAndProcessDataObj(e.next)},i)}else this.emitter.emit("finished",this.answeredData)}}]),e}();return a});
//# sourceMappingURL=sycamore.js.map
