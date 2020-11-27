(this["webpackJsonpterraforming-mars-companion"]=this["webpackJsonpterraforming-mars-companion"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var o,i=e(0),r=e(2),c=e.n(r),u=e(8),a=e.n(u),s=(e(14),e(15),e(1)),d=e(3),m=e(4),f=e(6),l=e(5);!function(t){t[t.ADD=0]="ADD",t[t.SUB=1]="SUB"}(o||(o={}));var j=function(t){Object(f.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(d.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n.call.apply(n,[this].concat(i))).numberInputRef=null,t}return Object(m.a)(e,[{key:"onClick",value:function(t){var n=1;if(this.numberInputRef){var e=parseInt(this.numberInputRef.value);this.numberInputRef.value="",0==isNaN(e)&&(n=e)}t==o.SUB&&(n=-n),console.log("Attribute Qty [".concat(n,"]")),this.props.onAddQuantity(n)}},{key:"render",value:function(){var t=this,n="resource-input";return this.props.isProduction&&(n+=" resource-input-production"),Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("p",{className:"value",children:this.props.amount}),Object(i.jsx)("input",{type:"button",className:"btn btn-danger",onClick:function(n){return t.onClick(o.SUB)},value:"-"}),Object(i.jsx)("input",{type:"number",ref:function(n){return t.numberInputRef=n}}),Object(i.jsx)("input",{type:"button",className:"btn btn-success",onClick:function(n){return t.onClick(o.ADD)},value:"+"})]})}}]),e}(r.Component);function b(t){return Object(i.jsxs)("div",{className:"resource-item "+t.className,children:[Object(i.jsx)("img",{alt:t.name,src:t.icon,width:"46",height:"46"}),Object(i.jsx)(j,{amount:t.amount,onAddQuantity:function(n){return t.onAmountModified(t.name,n)}}),Object(i.jsx)(j,{amount:t.production,isProduction:!0,onAddQuantity:function(n){return t.onProductionModified(t.name,n)}})]})}var p=function(t){Object(f.a)(e,t);var n=Object(l.a)(e);function e(t){var o;return Object(d.a)(this,e),(o=n.call(this,t)).itemsRenderer=void 0,o.state={generation:1,resources:{"M\u20ac":{name:"M\u20ac",amount:0,production:0,icon:o.getImageUrl("megacredit")},Steel:{name:"Steel",amount:0,production:0,icon:o.getImageUrl("steel")},Titanium:{name:"Titanium",amount:0,production:0,icon:o.getImageUrl("titanium")},Plant:{name:"Plant",amount:0,production:0,icon:o.getImageUrl("plant")},Energy:{name:"Energy",amount:0,production:0,icon:o.getImageUrl("power")},Heat:{name:"Heat",amount:0,production:0,icon:o.getImageUrl("heat")}}},o}return Object(m.a)(e,[{key:"getImageUrl",value:function(t){return"".concat("/terraforming-mars-companion","/img/resources/").concat(t,".png")}},{key:"onAmountModified",value:function(t,n){var e=Object(s.a)({},this.state.resources);e[t].amount+=n,this.setState({resources:e})}},{key:"onProductionModified",value:function(t,n){var e=Object(s.a)({},this.state.resources);e[t].production+=n,this.setState({resources:e})}},{key:"onTriggerProductionPhase",value:function(){console.log("Production phase triggered");var t=Object(s.a)({},this.state.resources);t.Heat.amount+=t.Energy.amount,t.Energy.amount=0,Object.keys(t).forEach((function(n){t[n].amount+=t[n].production})),this.setState({generation:this.state.generation+1,resources:t})}},{key:"render",value:function(){var t=this,n="col-6 col-sm-6 col-md-4";return Object(i.jsxs)("div",{className:"resource-tab container",children:[Object(i.jsxs)("div",{className:"row no-gutters",children:[Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources["M\u20ac"]),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources.Steel),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources.Titanium),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources.Plant),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources.Energy),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({className:n},this.state.resources.Heat),{},{onAmountModified:function(n,e){return t.onAmountModified(n,e)},onProductionModified:function(n,e){return t.onProductionModified(n,e)}}))]}),Object(i.jsxs)("p",{className:"generation",children:["Generation: ",this.state.generation]}),Object(i.jsx)("input",{type:"button",className:"btn btn-primary production-btn",onClick:function(n){return t.onTriggerProductionPhase()},value:"Production phase"})]})}}]),e}(r.Component);var g=function(){return Object(i.jsx)("div",{className:"App container",children:Object(i.jsx)(p,{})})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),o(t),i(t),r(t),c(t)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.89d615b6.chunk.js.map