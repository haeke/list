(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),m=(a(17),a(18),function(e){var t=e.headerText;return o.a.createElement("header",{className:"headerContainer"},o.a.createElement("h1",{className:"headerText"},t))}),s=a(8),c=a(4),i=a(1),d=a(5),u=a(6),h=a(9),p=a(7),f=a(10),E=(a(19),function(e){var t=e.todoItems,a=e.handleDelete,n=e.handleMarkComplete;return o.a.createElement("section",{className:"todoItemContainer"},t.map(function(e){return o.a.createElement("div",{className:"todoCard",key:e.id},o.a.createElement("h1",{className:"todoHeader",style:e.completed?{textDecoration:"line-through"}:{textDecoration:"none"}},e.name),o.a.createElement("p",{className:"todoDate"},"Start Date: ",e.start," "),o.a.createElement("p",{className:"todoDate"}," End Date: ",e.end),o.a.createElement("p",{className:"todoTime"},"Time Spent: ",e.timeSpent," hours"),o.a.createElement("button",{className:"todoButton",onClick:function(){return a(e.id)}},"Delete Item"),o.a.createElement("button",{className:"todoButton",onClick:function(){return n(e.id)}},"Mark Complete"))}))}),S=(a(20),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={id:0,name:"",start:"",end:"",timeSpent:0,completed:!1,active:!0,error:!1,todoItems:[]},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(i.a)({},n,o))},a.handleDelete=function(e){var t=a.state.todoItems.filter(function(t){return t.id!==e});localStorage.setItem("taskListTodos",JSON.stringify(t)),a.setState({todoItems:t})},a.handleMarkComplete=function(e){var t=a.state.todoItems.map(function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):t});a.setState({todoItems:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.id,o=t.name,r=t.start,l=t.end,m=t.timeSpent,c=t.active,i=t.completed,d=t.todoItems,u={id:n+1,name:o,start:r,end:l,timeSpent:m,completed:i,active:c};if(o&&r&&l&&m){var h=[].concat(Object(s.a)(d),[u]);a.setState(function(){return{todoItems:h,id:n+1,name:"",start:"",end:"",timeSpent:0,completed:!1,error:!1,active:!0}},function(){localStorage.setItem("taskListTodos",JSON.stringify(a.state.todoItems))})}else a.setState({error:!0})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("taskListTodos")||"[]");if(e.length>0){var t=e.length-1;this.setState({id:e[t].id,todoItems:e})}}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.start,n=e.end,r=e.timeSpent,l=e.todoItems,m=e.error;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"todoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{className:"todoLabel",htmlFor:"Task Name"},"Task Name"),o.a.createElement("input",{type:"text",name:"name",value:t,className:"todoInput",onChange:this.handleChange,placeholder:"Task Name..."}),o.a.createElement("label",{className:"todoLabel",htmlFor:"Start Date"},"Date Started"),o.a.createElement("input",{type:"date",name:"start",value:a,className:"todoInput",onChange:this.handleChange,placeholder:"Start Date..."}),o.a.createElement("label",{className:"todoLabel",htmlFor:"Date Ended"},"Date Ending Approx."),o.a.createElement("input",{type:"date",name:"end",value:n,className:"todoInput",onChange:this.handleChange,placeholder:"End Date..."}),o.a.createElement("label",{className:"todoLabel",htmlFor:"Time Spent"},"Time Spent in Hours"),o.a.createElement("input",{type:"number",name:"timeSpent",value:r,className:"todoInput",onChange:this.handleChange,placeholder:"Time Spent in hours..."}),o.a.createElement("button",{className:"todoButton",onClick:this.handleSubmit,type:"button"},"Create Task List Item")),m&&o.a.createElement("h1",{className:"todoError"},"* Please Check for missing fields."),l.length>0&&o.a.createElement(E,{todoItems:l,handleDelete:this.handleDelete,handleMarkComplete:this.handleMarkComplete}))}}]),t}(n.Component)),b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{headerText:"Task List Todo List"}),o.a.createElement(S,null))};l.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1f30ded6.chunk.js.map