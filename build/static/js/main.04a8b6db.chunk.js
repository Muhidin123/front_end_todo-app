(this.webpackJsonpfront_end_todo=this.webpackJsonpfront_end_todo||[]).push([[0],{310:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),r=n.n(o),c=n(33),i=n.n(c),s=n(15),l=n(16),d=n(20),u=n(19),h=n(42),j=n(10),b=n(12),p=n(34),O=function(e){return{type:"LOGIN_SUCCESS",user:e.user}},m=function(e){return{type:"NOTES_FETCH_SUCCESS",notes:e}},f=n(330),g=n(331),x=n(327),v=n(332),C=n(329),S=n(328),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)};fetch("http://localhost:3000/auth",e).then((function(e){return e.json()})).then((function(e){e.error?a.setState({error:e.error}):(localStorage.setItem("jwt",e.user.token),a.props.currentUser(e),a.props.notes(e.notes),a.props.history.push("/todos"))}))},a.state={username:"",password:"",error:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsxs)(f.a.Column,{style:{maxWidth:450},children:[Object(a.jsx)(g.a,{as:"h2",color:"teal",textAlign:"center",children:"Log-in to your account"}),Object(a.jsx)(x.a,{size:"large",onSubmit:this.handleSubmit,error:"false",children:Object(a.jsxs)(v.a,{stacked:!0,children:[Object(a.jsx)(x.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"username",name:"username",onChange:function(t){e.handleChange(t)},error:this.state.error}),Object(a.jsx)(x.a.Input,{fluid:!0,icon:"lock",name:"password",iconPosition:"left",placeholder:"Password",type:"password",onChange:function(t){e.handleChange(t)},error:this.state.error}),Object(a.jsx)(C.a,{color:"teal",fluid:!0,size:"large",children:"Login"})]})}),Object(a.jsxs)(S.a,{children:["New to us? ",Object(a.jsx)("a",{href:"/sign-up",children:"Sign Up"})]})]})})}}]),n}(r.a.Component),N={currentUser:O,notes:m},E=Object(b.b)(null,N)(y),_=n(84),k=n(325),T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:{first_name:"",last_name:"",username:"",password:"",email:"",bio:""}},e.handleChange=function(t){e.setState({user:Object(_.a)(Object(_.a)({},e.state.user),{},Object(p.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)};fetch("http://localhost:3000/users",t).then((function(e){return e.json()})).then((function(t){t.error&&e.props.history.push("/login"),localStorage.setItem("jwt",t.user.token),e.props.currentUser(t),e.props.notes(t.notes),e.props.history.push("/todos")}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsxs)(f.a.Column,{style:{maxWidth:450},children:[Object(a.jsx)(g.a,{as:"h2",color:"teal",textAlign:"center",children:"Sign-up to use App"}),Object(a.jsx)(x.a,{size:"large",onSubmit:this.handleSubmit,children:Object(a.jsxs)(v.a,{stacked:!0,children:[Object(a.jsx)(x.a.Input,{fluid:!0,name:"first_name",icon:"user",iconPosition:"left",placeholder:"First Name",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(x.a.Input,{fluid:!0,name:"last_name",icon:"user",iconPosition:"left",placeholder:"Last Name",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(x.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"Username",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(x.a.Input,{fluid:!0,icon:"mail",name:"email",iconPosition:"left",placeholder:"E-mail address",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(x.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",name:"password",type:"password",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(k.a,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Tell us about yourself",name:"bio",onChange:function(t){e.handleChange(t)}}),Object(a.jsx)(C.a,{color:"teal",fluid:!0,size:"large",children:"Sign-up"})]})}),Object(a.jsxs)(S.a,{children:["Back to Login? ",Object(a.jsx)("a",{href:"/login",children:"Login"})]})]})})}}]),n}(r.a.Component),w={currentUser:O,notes:m},U=Object(b.b)(null,w)(T),A=n(67),I=n(326),L=n(124),P=n.n(L),z=(n(175),n(176),[{key:"whatever",text:"Whatever",value:"whatever"},{key:"work",text:"Work",value:"work"},{key:"just cuz",text:"Just cuz",value:"just cuz"},{key:"fun",text:"Fun",value:"fun"}]),D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)};fetch("http://localhost:3000/notes/".concat(a.state.id),t).then((function(e){return e.json()})).then((function(e){a.props.updateNote(e),a.props.history.goBack()}))},a.rteChange=function(e,t,n,o){var r=o.getHTML();a.setState({description:r})},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleChangeSelection=function(e,t){var n=t.value;return a.setState({category:n})},a.modules={toolbar:[[{font:[]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{align:[]}],[{color:[]},{background:[]}],["clean"]]},a.formats=["font","size","bold","italic","underline","list","bullet","align","color","background"],a.rteChange=a.rteChange.bind(Object(A.a)(a)),a.filteredNote=a.props.note.find((function(e){return e.id===parseInt(a.props.match.params.id)})),a.state={id:a.filteredNote.id,title:a.filteredNote.title,description:a.filteredNote.description,completed:a.filteredNote.completed,due_date:a.filteredNote.due_date,category:{}},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{textAlign:"center",style:{height:"50vh"},verticalAlign:"middle",children:Object(a.jsx)(f.a.Column,{style:{maxWidth:450},children:Object(a.jsx)(v.a,{stacked:!0,children:Object(a.jsxs)(x.a,{onSubmit:this.handleSubmit,size:"large",children:[Object(a.jsx)(x.a.Field,{label:"Title",value:this.state.title,control:"input",placeholder:"Add title here",onChange:this.handleChange,name:"title"}),Object(a.jsx)(P.a,{label:"Description",theme:"snow",modules:this.modules,formats:this.formats,onChange:this.rteChange,value:this.state.description}),Object(a.jsx)(I.a,{placeholder:"Category",fluid:!0,search:!0,selection:!0,options:z,onChange:this.handleChangeSelection}),Object(a.jsx)("input",{type:"date",name:"due_date",id:"date",onChange:this.handleChange}),Object(a.jsx)(C.a,{color:"teal",fluid:!0,size:"large",type:"submit",onClick:this.handleClick,children:"Edit"})]})})})})})}}]),n}(o.Component),H={updateNote:function(e){return{type:"UPDATE_NOTE_SUCCESS",note:e}},currentUser:O,notes:m},W=Object(b.b)((function(e){return{note:e.notes}}),H)(D),J=[{key:"whatever",text:"whatever",value:"whatever"},{key:"work",text:"Work",value:"work"},{key:"just cuz",text:"Just cuz",value:"just cuz"},{key:"fun",text:"Fun",value:"fun"}],F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).rteChange=function(e,t,n,o){var r=o.getHTML();a.setState({description:r})},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)};fetch("http://localhost:3000/notes",e).then((function(e){return e.json()})).then((function(e){a.props.newNote(e),a.props.history.push("/todos")}))},a.handleChangeSelection=function(e,t){var n=t.value;return a.setState({category:n})},a.state={title:"",description:"",completed:!1,user_id:a.props.user,category:"",due_date:""},a.modules={toolbar:[[{font:[]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{align:[]}],[{color:[]},{background:[]}],["clean"]]},a.formats=["font","size","bold","italic","underline","list","bullet","align","color","background"],a.rteChange=a.rteChange.bind(Object(A.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.category;return Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{textAlign:"center",style:{height:"50vh"},verticalAlign:"middle",children:Object(a.jsx)(f.a.Column,{style:{maxWidth:450},children:Object(a.jsx)(v.a,{stacked:!0,children:Object(a.jsxs)(x.a,{onSubmit:this.handleSubmit,size:"large",children:[Object(a.jsx)(x.a.Field,{control:"input",placeholder:"Add title here",onChange:this.handleChange,name:"title"}),Object(a.jsx)(P.a,{theme:"snow",modules:this.modules,formats:this.formats,onChange:this.rteChange,value:this.state.description||"",placeholder:"Add your description here"}),Object(a.jsx)("br",{}),Object(a.jsx)(I.a,{placeholder:"Category",fluid:!0,search:!0,selection:!0,options:J,value:e,onChange:this.handleChangeSelection}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"date",name:"due_date",id:"date",onChange:this.handleChange}),Object(a.jsx)(C.a,{color:"teal",fluid:!0,size:"large",type:"submit",children:"Add new note"})]})})})})})}}]),n}(o.Component),M={newNote:function(e){return{type:"NEW_NOTE_SUCCESS",note:e}}},R=Object(b.b)((function(e){return{user:e.currentUser.id}}),M)(F),B=n(182),G=n.n(B),X=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).handleEdit=function(){var e=a.props.note.id;a.props.history.push("/todos/edit/".concat(e))},a.handleDelete=function(){var e=a.props.note.id;fetch("http://localhost:3000/notes/".concat(e),{method:"DELETE"}).then((function(t){a.props.delete(e)}))},a.handleCompletedTodo=function(){var e=a.state.id,t=Object(_.a)(Object(_.a)({},a.state),{},{completed:!a.state.completed}),n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("http://localhost:3000/notes/".concat(e),n).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.id,n=e.title,o=e.description,r=e.completed;a.setState({id:t,title:n,description:o,completed:r})}))};var o=a.props.note,r=o.id,c=o.title,i=o.description,l=o.completed;return a.state={id:r,title:c,description:i,completed:l},a}return Object(l.a)(n,[{key:"render",value:function(){var e=G()("".concat(this.props.note.created_at)).fromNow(),t=this.state,n=t.title,o=t.description,r=t.completed;return Object(a.jsxs)("div",{className:"ui raised card",children:[Object(a.jsx)("div",{className:r?"ui bottom aligned active inverted dimmer":"ui bottom aligned  dimmer",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{className:"ui animated fade  secondary button",color:"red",children:[Object(a.jsx)("div",{className:"visible content",children:"Changed my mind not completed"}),Object(a.jsx)("div",{className:"hidden content",onClick:this.handleCompletedTodo,children:Object(a.jsx)("i",{className:"calendar times icon"})})]})})}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"meta",children:e}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"header",children:n}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:o}})]}),Object(a.jsxs)("div",{className:"extra content",children:[Object(a.jsx)("i",{className:"check icon"}),"Due: ",this.props.note.due_date,Object(a.jsxs)("div",{className:"right floated author",children:[Object(a.jsx)("i",{className:"user circle icon"}),this.props.name.name]})]}),Object(a.jsxs)("div",{className:"ui two buttons",children:[Object(a.jsx)("div",{className:"ui basic green button",onClick:this.handleEdit,children:"EDIT"}),Object(a.jsx)("div",{className:"ui basic red button",onClick:this.handleDelete,children:"DELETE"})]}),Object(a.jsxs)("div",{className:"ui bottom attached button",onClick:this.handleCompletedTodo,children:["COMPLETED",Object(a.jsx)("div",{className:"right floated author",children:Object(a.jsx)("i",{className:"calendar check icon"})})]})]})}}]),n}(r.a.Component),V={delete:function(e){return{type:"NOTE_DELETE_SUCCESS",id:e}}},Z=Object(b.b)(null,V)(Object(j.g)(X)),q=(n(310),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.props.notes&&this.props.notes.length>0?Object(a.jsx)("div",{className:"ui four doubling  cards",children:this.props.notes.map((function(t){return Object(a.jsx)(Z,{note:t,name:e.props.user},t.id)}))}):Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"child",children:Object(a.jsx)("h1",{children:"Nothing to display"})})})})}}]),n}(o.Component)),K=Object(b.b)((function(e){return{notes:e.notes,user:e.currentUser}}),null)(q),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(K,{})})}}]),n}(o.Component),Y=Object(b.b)(null,null)(Q),$=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){e.props.search(t.target.value.toLowerCase())},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"ui secondary menu",children:[Object(a.jsx)(h.b,{to:"/todos",className:"item",children:"HOME"}),Object(a.jsx)(h.b,{to:"/todos/new",className:"item",children:"NEW NOTE"}),Object(a.jsx)(I.a,{text:"Sort by",className:"item",children:Object(a.jsxs)(I.a.Menu,{children:[Object(a.jsx)(I.a.Item,{text:"A - Z",onClick:function(){e.props.sort("title")}}),Object(a.jsx)(I.a.Item,{text:"Z - A",onClick:function(){e.props.sort("title","desc")}})]})}),Object(a.jsxs)("div",{className:"right menu",children:[Object(a.jsx)("div",{className:"item",children:Object(a.jsxs)("div",{className:"ui icon input",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search...",onChange:this.handleChange}),Object(a.jsx)("i",{className:"search link icon"})]})}),Object(a.jsx)(h.b,{to:"/login",className:"ui item",onClick:function(){localStorage.removeItem("jwt")},children:"LOGOUT"})]})]})}}]),n}(o.Component),ee={sort:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return{type:"SORT_NOTES_SUCCESS",key:e,option:t}},search:function(e){return{type:"SEARCH_NOTES_SUCCESS",input:e}}},te=Object(b.b)(null,ee)($),ne=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("jwt");if(t){var n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};fetch("http://localhost:3000/current_user",n).then((function(e){return e.json()})).then((function(t){e.props.currentUser(t),e.props.notes(t.notes),e.props.history.push("/todos")}))}else console.log("No token"),this.props.history.push("/login")}},{key:"render",value:function(){var e=localStorage.getItem("jwt");return Object(a.jsx)("div",{id:"test",children:Object(a.jsxs)(h.a,{children:[e?Object(a.jsx)(te,{}):null,Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(j.a,{to:"/login"})}}),Object(a.jsx)(j.b,{path:"/login",component:E}),Object(a.jsx)(j.b,{path:"/sign-up",component:U}),Object(a.jsx)(j.b,{exact:!0,path:"/todos",component:Y}),Object(a.jsx)(j.b,{exact:!0,path:"/todos/edit/:id",component:W}),Object(a.jsx)(j.b,{exact:!0,path:"/todos/new",component:R})]})]})})}}]),n}(o.Component),ae={currentUser:O,notes:m},oe=Object(b.b)(null,ae)(Object(j.g)(ne)),re=(n(311),n(68)),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return t.user;default:return e}},ie=n(133),se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,a){if(!n.hasOwnProperty(e)||!a.hasOwnProperty(e))return 0;var o="string"===typeof n[e]?n[e].toUpperCase():n[e],r="string"===typeof a[e]?a[e].toUpperCase():a[e],c=0;return o>r?c=1:o<r&&(c=-1),"desc"===t?-1*c:c}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTES_FETCH_SUCCESS":return t.notes;case"UPDATE_NOTE_SUCCESS":return e.map((function(e){return e.id===t.note.id?t.note:e}));case"NOTE_DELETE_SUCCESS":return e.filter((function(e){return e.id!==t.id}));case"NEW_NOTE_SUCCESS":return[].concat(Object(ie.a)(e),[t.note]);case"SORT_NOTES_SUCCESS":return Object(ie.a)(e.sort(se(t.key,t.option)));case"SEARCH_NOTES_SUCCESS":return Object(ie.a)(e.filter((function(e){return e.title.toLowerCase().includes(t.input)||e.description.toLowerCase().includes(t.input)})));default:return e}},de=Object(re.b)({currentUser:ce,notes:le}),ue=Object(re.c)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(a.jsx)(b.a,{store:ue,children:Object(a.jsx)(h.a,{children:Object(a.jsx)(oe,{})})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.04a8b6db.chunk.js.map