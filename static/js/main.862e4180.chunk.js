(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},49:function(e,t){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(38),a(12)),s=a(9),l=a(7),u=a(18),m=a(2),p=a(3),d=a(8),b=a(5),f=a(4),h=a(13),y=a.n(h),g=a(16),v=a(23),E=a(6),k=function(){var e=Object(g.a)(y.a.mark((function e(t,a,n,r){var c,o,i,s,l,u,m,p;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],!(t&&a&&n)){e.next=12;break}return e.next=4,fetch("https://opentdb.com/api.php?amount=5&category=".concat(t,"&difficulty=").concat(a,"&type=").concat(n,"&token=").concat(r,"&encode=url3986"));case 4:return o=e.sent,e.next=7,o.json();case 7:i=e.sent,s=i.results,c=s,e.next=20;break;case 12:return e.next=14,fetch("https://opentdb.com/api.php?amount=5&token=".concat(r,"&encode=url3986"));case 14:return l=e.sent,e.next=17,l.json();case 17:u=e.sent,m=u.results,c=m;case 20:return p=c.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{category:decodeURIComponent(e.category),question:decodeURIComponent(e.question),correct_answer:decodeURIComponent(e.correct_answer),sorted_answers:[].concat(Object(v.a)(e.incorrect_answers.map((function(e){return decodeURIComponent(e)}))),[decodeURIComponent(e.correct_answer)]).sort()})})),e.abrupt("return",p);case 22:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),O=function(e,t,a){return{type:"GET_TOKEN",payload:{name:e,email:t,token:a}}},j=function(e,t){return function(){var a=Object(g.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return r=a.sent,a.next=5,r.json();case 5:c=a.sent,n(O(e,t,c.token)),localStorage.setItem("token",c.token);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},C=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:"",email:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.renderInputs=n.renderInputs.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"handleClick",value:function(){var e=this.props.getToken,t=this.state;e(t.name,t.email)}},{key:"renderInputs",value:function(){var e=this.state,t=e.name,a=e.email;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"input-player-name",className:"display-container"},"Name:",r.a.createElement("input",{className:"login form-control white",type:"text",name:"name",value:t,"data-testid":"input-player-name",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"input-player-name",className:"display-container"},"Email:",r.a.createElement("input",{className:"login form-control white ",type:"text",name:"email",value:a,"data-testid":"input-gravatar-email",onChange:this.handleChange})))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=!0;return t&&a&&(n=!1),r.a.createElement("main",null,r.a.createElement("form",{action:"",className:"display-container black forms"},this.renderInputs(),r.a.createElement("div",{className:"start_btns"},r.a.createElement(i.b,{to:"/gameplay"},r.a.createElement("button",{className:"buttonLogin btn btn-primary display-container",type:"button","data-testid":"btn-play",disabled:n,onClick:this.handleClick},"Jogar")),r.a.createElement(i.b,{to:"/settings"},r.a.createElement("button",{className:"btn submit-button btn-primary display-container",type:"button","data-testid":"btn-settings"},"Configura\xe7\xf5es")))))}}]),a}(r.a.Component),w=Object(s.b)(null,(function(e){return{getToken:function(t,a){return e(j(t,a))}}}))(C),S=a(19),x=a.n(S),N=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.gravatarEmail,a=e.name,n=e.score,c=e.assertions,o=x()(t).toString();return r.a.createElement("header",null,r.a.createElement("img",{"data-testid":"header-profile-picture",alt:"profile",src:"https://www.gravatar.com/avatar/".concat(o)}),r.a.createElement("p",{"data-testid":"header-player-name"},"Player: ".concat(a)),r.a.createElement("span",null,"Placar: "),r.a.createElement("span",{"data-testid":"header-score"},n),r.a.createElement("br",null),r.a.createElement("span",null,"Acertos: "),r.a.createElement("span",{"data-testid":"feedback-total-question"},c))}}]),a}(n.Component),I=Object(s.b)((function(e){var t=e.login,a=t.gravatarEmail,n=t.name,r=e.gameInfo;return{gravatarEmail:a,name:n,score:r.score,assertions:r.assertions}}),null)(N),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.timerCountdown;return r.a.createElement("p",null,e)}}]),a}(r.a.Component),q=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.feat1,a=e.reset;return r.a.createElement("div",{className:"black2"},r.a.createElement("button",{className:"btn submit-button btn-success",onClick:function(){t(),a()},type:"button","data-testid":"btn-next"},"Pr\xf3xima"))}}]),a}(r.a.Component),_=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={timer:30,answered:!1,qIndex:0,answers:[]},e.setTimer=e.setTimer.bind(Object(d.a)(e)),e.checkUpdate=e.checkUpdate.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.score=e.score.bind(Object(d.a)(e)),e.setLocalStorage=e.setLocalStorage.bind(Object(d.a)(e)),e.navQuest=e.navQuest.bind(Object(d.a)(e)),e.resetBtn=e.resetBtn.bind(Object(d.a)(e)),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.renderQuestions(),this.setTimer()}},{key:"componentDidUpdate",value:function(){this.checkUpdate(),this.setLocalStorage()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.name,a=e.score,n=e.gravatarEmail,r=x()(n).toString(),c=[],o={name:t,score:a,picture:"https://www.gravatar.com/avatar/".concat(r)};localStorage.getItem("ranking")&&(c=JSON.parse(localStorage.getItem("ranking"))),c.push(o),localStorage.setItem("ranking",JSON.stringify(c)),this.resetBtn()}},{key:"setTimer",value:function(){var e=this;this.interval=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}))}),1e3)}},{key:"setLocalStorage",value:function(){var e=this.props,t=e.score,a=e.name,n=e.gravatarEmail,r={player:{name:a,assertions:e.assertions,gravatarEmail:n,score:t}};localStorage.setItem("state",JSON.stringify(r))}},{key:"checkUpdate",value:function(){0===this.state.timer&&clearInterval(this.interval)}},{key:"resetBtn",value:function(){var e=this;document.querySelectorAll(".btn").forEach((function(e){e.style.border=""})),this.setState({timer:30,answered:!1},(function(){return e.setTimer()}))}},{key:"navQuest",value:function(){var e=this.props.history;4===this.state.qIndex&&e.push("/feedback"),this.setState((function(e){return Object(E.a)(Object(E.a)({},e),{},{qIndex:e.qIndex+1})}))}},{key:"score",value:function(e,t){(0,this.props.setScoreAction)(e,t)}},{key:"handleClick",value:function(e){var t=this.state,a=t.timer,n=t.qIndex,r=this.props.questions;"correct"===e.target.name?(e.target.style.border="3px solid rgb(6, 240, 15)",document.querySelectorAll(".btn-wrong").forEach((function(e){e.style.border="3px solid rgb(255, 0, 0)"})),clearInterval(this.interval),this.score(a,r[n].difficulty)):"wrong"===e.target.name&&(clearInterval(this.interval),document.querySelectorAll(".btn-wrong").forEach((function(e){e.style.border="3px solid rgb(255, 0, 0)"})),document.querySelector(".btn-correct").style.border="3px solid rgb(6, 240, 15)"),this.setState({answered:!0})}},{key:"renderQuestions",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t,a,n,r,c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.category,n=t.difficulty,r=t.type,c=t.token,o=t.fetchQuestions,e.next=3,o(a,n,r,c);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.questions,a=this.state,n=a.timer,c=a.answered,o=a.qIndex;return 0===t.length?r.a.createElement("span",null,"Carregando..."):r.a.createElement("div",{className:"black2"},r.a.createElement(I,null),r.a.createElement(T,{timerCountdown:n}),r.a.createElement("h1",{"data-testid":"question-category"},t[o].category),r.a.createElement("div",{className:"quest-box"},r.a.createElement("p",{className:"shadow-lg p-3 mb-5 bg-body question-text","data-testid":"question-text"},t[o].question)),r.a.createElement("div",null,t[o].sorted_answers.map((function(a,c){return t[o].correct_answer===a?r.a.createElement("button",{key:a,className:"btn-correct btn-primary btn",type:"button",name:"correct",onClick:e.handleClick,disabled:0===n},a):r.a.createElement("button",{className:"btn-wrong btn-primary btn",key:a,type:"button",name:"wrong",onClick:e.handleClick,disabled:0===n},a)}))),(c||0===n)&&r.a.createElement(q,{feat1:this.navQuest,reset:this.resetBtn}))}}]),a}(r.a.Component),R=Object(s.b)((function(e){return{token:e.login.token,questions:e.questionsReducer.questions,gravatarEmail:e.login.gravatarEmail,name:e.login.name,score:e.gameInfo.score,assertions:e.gameInfo.assertions,category:e.settings.category,difficulty:e.settings.difficulty,type:e.settings.type}}),(function(e){return{fetchQuestions:function(t,a,n,r){e(function(e,t,a,n){return function(){var r=Object(g.a)(y.a.mark((function r(c){var o;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k(e,t,a,n);case 2:o=r.sent,c({type:"GET_QUESTIONS",payload:{questions:o}});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,a,n,r))},setScoreAction:function(t,a){e(function(e,t){return{type:"SET_SCORE",payload:{timer:e,difficulty:t}}}(t,a))}}}))(_),U=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={category:"9",difficulty:"easy",type:"multiple"},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchCategories)()}},{key:"componentDidUpdate",value:function(){var e=this.props.updateSettings,t=this.state;e(t.category,t.difficulty,t.type)}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"render",value:function(){var e=this.props.categories,t=void 0===e?[]:e;return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"}," Settings "),r.a.createElement("form",{action:"",className:"d-flex justify-content-evenly"},r.a.createElement("label",{htmlFor:"category"},"Selecione a categoria:",r.a.createElement("select",{name:"category",id:"category",onChange:this.handleChange,className:"form-select"},t.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("label",{htmlFor:"difficulty"},"Selecione a dificuldade:",r.a.createElement("select",{name:"difficulty",id:"difficulty",onChange:this.handleChange,className:"form-select"},r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard"))),r.a.createElement("label",{htmlFor:"type"},"Selecione o tipo de respostas:",r.a.createElement("select",{name:"type",id:"type",onChange:this.handleChange,className:"form-select"},r.a.createElement("option",{value:"multiple"},"Multiple Choice"),r.a.createElement("option",{value:"boolean"},"True or False")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/trivia"},r.a.createElement("button",{type:"button",className:"buttonLogin btn btn-primary"},"Voltar para o login")))}}]),a}(r.a.Component),A=Object(s.b)((function(e){return{categories:e.settings.categories}}),(function(e){return{fetchCategories:function(){return e(function(){var e=Object(g.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"GET_CATEGORIES",payload:{categories:n}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},updateSettings:function(t,a,n){return e(function(e,t,a){return{type:"UPDATE_SETTINGS",payload:{category:e,difficulty:t,type:a}}}(t,a,n))}}}))(U),G=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.index;return r.a.createElement("section",{className:"black"},r.a.createElement("img",{src:t.picture,alt:""}),r.a.createElement("p",{"data-testid":"player-name-".concat(a)},t.name),r.a.createElement("div",null),r.a.createElement("p",{"data-testid":"player-score-".concat(a)},t.score))}}]),a}(r.a.Component),Q=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={ranking:[]},e.getRanking=e.getRanking.bind(Object(d.a)(e)),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getRanking()}},{key:"getRanking",value:function(){var e=JSON.parse(localStorage.getItem("ranking"));this.setState({ranking:e})}},{key:"render",value:function(){var e=this.state.ranking;return r.a.createElement("div",{className:"black2"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("div",{className:"display-container ranking-info"},r.a.createElement("div",null,e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return r.a.createElement(G,{key:t,index:t,player:e})}))),r.a.createElement(i.b,{to:"/trivia"},r.a.createElement("button",{className:"btn btn-primary",type:"button","data-testid":"btn-go-home"},"Volta para a tela inicial"))))}}]),a}(n.Component),D=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.assertions,a=e.score;return r.a.createElement("main",null,r.a.createElement("span",null,"Placar: "),r.a.createElement("span",{"data-testid":"feedback-total-score"},Number(a)),r.a.createElement("br",null),r.a.createElement("span",null,"Acertos: "),r.a.createElement("span",{"data-testid":"feedback-total-question"},t))}}]),a}(n.Component),J=Object(s.b)((function(e){var t=e.gameInfo;return{assertions:t.assertions,score:t.score}}),null)(D),P=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.gravatarEmail,a=e.name,n=e.score,c=x()(t).toString();return r.a.createElement("header",null,r.a.createElement("img",{"data-testid":"header-profile-picture",alt:"profile",src:"https://www.gravatar.com/avatar/".concat(c)}),r.a.createElement("p",{"data-testid":"header-player-name"},"Player: ".concat(a)),r.a.createElement("span",null,"Header Score:"),r.a.createElement("span",{"data-testid":"header-score"},n))}}]),a}(n.Component),B=Object(s.b)((function(e){var t=e.login;return{gravatarEmail:t.gravatarEmail,name:t.name,score:e.gameInfo.score}}),null)(P),F=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn btn-primary",type:"button","data-testid":"btn-play-again"},"Jogar Novamente")}}]),a}(n.Component),M=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn btn-primary","data-testid":"btn-ranking",type:"button"},"Ver Ranking")}}]),a}(n.Component),L=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentWillUnmount",value:function(){(0,this.props.resetScore)()}},{key:"render",value:function(){var e=this.props.assertions;return r.a.createElement("div",{className:"black2"},r.a.createElement(B,null),r.a.createElement(J,null),r.a.createElement("p",{"data-testid":"feedback-text"}," FeedbackScreen"),e<3?r.a.createElement("p",{"data-testid":"feedback-text"},"Podia ser melhor..."):r.a.createElement("p",{"data-testid":"feedback-text"},"Mandou bem!"),r.a.createElement(i.b,{to:"/trivia"},r.a.createElement(F,null)),r.a.createElement(i.b,{to:"ranking"},r.a.createElement(M,null)))}}]),a}(n.Component),W=Object(s.b)((function(e){return{assertions:e.gameInfo.assertions}}),(function(e){return{resetScore:function(){return e({type:"RESET_SCORE"})}}}))(L),V=a(30),H=a.n(V);a(50);function K(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:H.a,className:"App-logo",alt:"logo"})),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/trivia",component:w}),r.a.createElement(l.a,{exact:!0,path:"/gameplay",component:R}),r.a.createElement(l.a,{exact:!0,path:"/settings",component:A}),r.a.createElement(l.a,{exact:!0,path:"/ranking",component:Q}),r.a.createElement(l.a,{exact:!0,path:"/feedback",component:W})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(20),z=a(31),X=a(32),Y={name:"",gravatarEmail:"",token:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOKEN":return Object(E.a)(Object(E.a)({},e),{},{name:t.payload.name,gravatarEmail:t.payload.email,token:t.payload.token});default:return e}},ee={questions:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUESTIONS":return Object(E.a)(Object(E.a)({},e),{},{questions:t.payload.questions});default:return e}},ae={assertions:0,score:0},ne=function(e,t){switch(e.payload.difficulty){case"easy":return t.score+(10+1*e.payload.timer);case"medium":return t.score+(10+2*e.payload.timer);case"hard":return t.score+(10+3*e.payload.timer);default:return t.score}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCORE":return Object(E.a)(Object(E.a)({},e),{},{assertions:e.assertions+1,score:ne(t,e)});case"RESET_SCORE":return Object(E.a)(Object(E.a)({},e),{},{score:0,assertions:0});default:return e}},ce={categories:[],category:"",difficulty:"",type:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return Object(E.a)(Object(E.a)({},e),{},{categories:t.payload.categories.trivia_categories});case"UPDATE_SETTINGS":return Object(E.a)(Object(E.a)({},e),{},{category:t.payload.category,difficulty:t.payload.difficulty,type:t.payload.type});default:return e}},ie=Object($.combineReducers)({login:Z,questionsReducer:te,gameInfo:re,settings:oe}),se=Object($.createStore)(ie,Object(z.composeWithDevTools)(Object($.applyMiddleware)(X.a)));window.Cypress&&(window.store=se);var le=se;o.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{store:le},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.862e4180.chunk.js.map