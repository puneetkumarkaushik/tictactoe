(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),m=a.n(i);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(1),o=a(2),s=a(4),k=a(3),u=a(5),l=(a(14),a(15),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box",onClick:function(){return e.props.onMark(e.props.index)}},r.a.createElement("span",{className:"mark"},this.props.mark))}}]),t}(n.Component)),d=(a(16),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(k.a)(t).call(this))).changeTurn=function(){e.setState((function(e){return{turn:"X"===e.turn?"O":"X"}}))},e.verify=function(){var t=e.state.boxes;t[0].mark===t[1].mark&&t[1].mark===t[2].mark&&""!==t[0].mark||t[3].mark===t[4].mark&&t[4].mark===t[5].mark&&""!==t[3].mark||t[6].mark===t[7].mark&&t[7].mark===t[8].mark&&""!==t[6].mark||t[0].mark===t[3].mark&&t[3].mark===t[6].mark&&""!==t[0].mark||t[1].mark===t[4].mark&&t[4].mark===t[7].mark&&""!==t[1].mark||t[2].mark===t[5].mark&&t[8].mark===t[2].mark&&""!==t[2].mark||t[0].mark===t[4].mark&&t[4].mark===t[8].mark&&""!==t[0].mark||t[2].mark===t[4].mark&&t[4].mark===t[6].mark&&""!==t[2].mark?e.updateWinner():""!==t[0].mark&&""!==t[1].mark&&""!==t[2].mark&&""!==t[3].mark&&""!==t[4].mark&&""!==t[5].mark&&""!==t[6].mark&&""!==t[7].mark&&""!==t[8].mark&&e.setState({winner:"noone"})},e.updateWinner=function(){"X"===e.state.turn?e.setState({winner:"Cross"}):e.setState({winner:"Circle"})},e.handleMark=function(t){var a=e.state.boxes.map((function(a){return a.index===t&&""===a.mark&&(a.mark=e.state.turn),a}));e.setState({boxes:a}),e.verify(),e.changeTurn()},e.reset=function(){e.setState({winner:""});var t=e.state.boxes;t.map((function(e){return e.mark=""})),e.setState({boxes:t})},e.state={winner:"",turn:"X",boxes:[{index:1,mark:""},{index:2,mark:""},{index:3,mark:""},{index:4,mark:""},{index:5,mark:""},{index:6,mark:""},{index:7,mark:""},{index:8,mark:""},{index:9,mark:""}]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return"noone"===this.state.winner?r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"grid"},this.state.boxes.map((function(e){return r.a.createElement(l,{key:e.index,index:e.index,mark:e.mark,onMark:function(){}})}))),r.a.createElement("span",null,"Draw!"),r.a.createElement("button",{onClick:this.reset},"New Game")):""!==this.state.winner?r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"grid"},this.state.boxes.map((function(e){return r.a.createElement(l,{key:e.index,index:e.index,mark:e.mark,onMark:function(){}})}))),r.a.createElement("span",null,this.state.winner," wins"),r.a.createElement("button",{onClick:this.reset},"New Game")):r.a.createElement("div",null,r.a.createElement("div",{className:"grid"},this.state.boxes.map((function(t){return r.a.createElement(l,{key:t.index,index:t.index,mark:t.mark,onMark:e.handleMark})}))),r.a.createElement("span",null,"Turn : ",this.state.turn))}}]),t}(n.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d,{over:this.gameOver})}}]),t}(n.Component);m.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8d88ec73.chunk.js.map