(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{385:function(t,o,c){var content=c(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(83).default)("7b204383",content,!0,{sourceMap:!1})},401:function(t,o,c){"use strict";c(385)},402:function(t,o,c){var r=c(82)((function(i){return i[1]}));r.push([t.i,".list-primary{--text-opacity:1;color:#e24f55;color:rgba(226,79,85,var(--text-opacity))}.list-info{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.list-success{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.list-warning{--text-opacity:1;color:#ed8936;color:rgba(237,137,54,var(--text-opacity))}.list-danger{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}",""]),r.locals={},t.exports=r},420:function(t,o,c){"use strict";c.r(o);c(48);var r={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},n=(c(401),c(3)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",t._l(t.items,(function(c,i){return o("div",{key:i,staticClass:"mt-3 flex"},[o("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-".concat(t.type)},[o(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(c)+"\n  ")])})),0)}),[],!1,null,null,null);o.default=component.exports}}]);