(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{385:function(e,n,t){"use strict";var o=t(1),r=t.n(o);n.a=function(e){return r.a.createElement("h1",{className:"center grey-text"},e.children)}},386:function(e,n,t){"use strict";var o=t(1),r=t.n(o);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t(387),n.a=function(e){var n=e.className,t=e.input,o=e.label,s=e.meta,i=s.error,c=s.touched,l=e.type;return r.a.createElement("div",{className:"input-field ".concat(n||"")},r.a.createElement("input",a({},t,{type:l||"text",id:t.name,autoComplete:"off"})),r.a.createElement("label",{htmlFor:t.name},o),r.a.createElement("p",{className:"red-text text-darken-2"},c&&i))}},387:function(e,n,t){var o=t(388);"string"==typeof o&&(o=[[e.i,o,""]]);t(68)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},388:function(e,n,t){(e.exports=t(67)(!1)).push([e.i,"input[type=text]:not(.browser-default):focus:not([readonly]) {\n    border-bottom: 1px solid #0D47A1;\n        box-shadow: 0 1px 0 0 #0D47A1;\n}\n\ninput[type=text]:not(.browser-default):focus:not([readonly])+label {\n    color: #0D47A1;\n}\n\n.input-field p {\n    margin: 0;\n    min-height: 22px;\n}\n",""])},400:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),a=t(72),s=t(409),i=t(408),c=t(73),l=t(385),u=t(386),m=t(137);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n,t,o,r,a,s){try{var i=e[a](s),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(o,r)}function h(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function s(e){f(a,o,r,s,i,"next",e)}function i(e){f(a,o,r,s,i,"throw",e)}s(void 0)})}}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t(401);var v=function(e){function n(){var e,t;!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=function(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n}(this,(e=g(n)).call.apply(e,[this].concat(r)))).handleSendingMessage=function(){var e=h(regeneratorRuntime.mark(function e(n){var o,r,a,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.message,r=t.props,a=r.roomInfo,s=r.reset,i=r.sendMessage,e.next=4,i(o,a.logId);case 4:t.scrollTop(),s();case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),t}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,o.Component),t=n,(a=[{key:"componentDidMount",value:(i=h(regeneratorRuntime.mark(function e(){var n,t,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.scrollTop(),n=this.props,t=n.getRoomInfo,o=n.history,r=n.match,e.next=4,t(r.params.room_id);case 4:this.roomRef=e.sent,this.roomRef||o.push("/not-found");case 6:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.getChatLog,o=n.roomInfo;!e.roomInfo&&o&&o.logId&&(this.logRef=t(o.logId))}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.clearRoomData,t=e.leaveRoom,o=e.match;n(),t(o.params.room_id),this.roomRef&&this.roomRef(),this.logRef&&this.logRef()}},{key:"scrollTop",value:function(){this.chat.scrollTop=this.chat.scrollHeight}},{key:"renderMessages",value:function(){var e=this.props,n=e.messages,t=e.uid;return n?n.length?n.map(function(e){var n=e.id,o=e.message,a=e.name,s=(e.ts,e.uid),i=t===s;return r.a.createElement("div",{key:n,className:"chat-row"},r.a.createElement("div",{className:"chat-bubble ".concat(i?"this-user":"")},r.a.createElement("div",{className:"name"},i?"You":a),r.a.createElement("div",{className:"message"},o)))}):r.a.createElement("h5",{className:"center grey-text text-lighten-2"},"No Messages"):r.a.createElement(m.a,{container:!0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.roomInfo,o=n.handleSubmit;return r.a.createElement("div",{className:"chat-room"},r.a.createElement(l.a,null,t?t.name:"Chat Room"),r.a.createElement("p",{className:"center grey-text lighten-1"},"Users in Room: ",r.a.createElement("b",null,t?t.users.length:"...")),r.a.createElement("div",{ref:function(n){return e.chat=n},className:"chat-container"},this.renderMessages()),r.a.createElement("div",{className:"message-input-container"},r.a.createElement("form",{onSubmit:o(this.handleSendingMessage),className:"message-input"},r.a.createElement(s.a,{name:"message",label:"New Message",component:u.a}),r.a.createElement("button",{className:"btn btn-floating blue lighten-2 send-message"},r.a.createElement("i",{className:"material-icons"},"send")))))}}])&&d(t.prototype,a),n}();v=Object(i.a)({form:"chat-message"})(v),n.default=Object(a.b)(function(e){return{messages:e.chat.messages,roomInfo:e.chat.currentRoom,uid:e.user.uid}},{clearRoomData:c.clearRoomData,getChatLog:c.getChatLog,getRoomInfo:c.getRoomInfo,leaveRoom:c.leaveRoom,sendMessage:c.sendMessage})(v)},401:function(e,n,t){var o=t(402);"string"==typeof o&&(o=[[e.i,o,""]]);t(68)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},402:function(e,n,t){(e.exports=t(67)(!1)).push([e.i,".chat-room h1 {\n    margin-top: 10px;\n}\n\n.chat-room #message {\n    box-sizing: border-box;\n    padding-right: 50px;\n}\n\n.chat-container {\n    margin: auto;\n    max-height: calc(100vh - 335px);\n    overflow-y: scroll;\n    position: relative;\n    width: 650px;\n}\n\n.chat-row {\n    padding: 8px 0;\n    position: relative;\n}\n\n.chat-bubble {\n    background-color: #dedede;\n    border-radius: 12px;\n    display: inline-block;\n    max-width: 50%;\n    padding: 10px 16px 11px;\n}\n\n.chat-bubble .name {\n    color: #8b8b8b;\n    font-size: .8em;\n    padding-bottom: 1px;\n}\n\n.chat-bubble.this-user {\n    background-color: #0D47A1;\n    color: white;\n    left: 100%;\n    position: relative;\n    transform: translateX(-100%);\n}\n\n.this-user .name {\n    color: #8f9eb6;\n}\n\n.message-input-container {\n    bottom: 5px;\n    left: 0;\n    position: fixed;\n    width: 100%\n}\n\n.message-input {\n    margin: auto;\n    position: relative;\n    width: 650px;\n}\n\n.send-message {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n@media screen and (max-width: 750px){\n    .chat-container {\n        max-height: calc(100vh - 360px);\n        width: 100%;\n    }\n\n    .message-input-container {\n        padding: 0 15%;\n        width: 100%\n    }\n\n    .message-input {\n        width: 100%;\n    }\n\n    .message-input p {\n        display: none;\n    }\n}\n",""])}}]);