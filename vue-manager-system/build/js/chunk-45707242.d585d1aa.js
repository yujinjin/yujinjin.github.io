(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45707242"],{"2b1a":function(e,t,a){"use strict";(function(e){a("d3b7");t["a"]={data:function(){var t=this;return{queryFields:[{name:"filter",label:"关键词"},{label:"是否跨境",slot:"other"},{name:"orderNo",label:"编号"},{name:"state",label:"状态",type:"select",data:e.constants.ENUM["ACTIVE_FROZEN"]},{name:"orderNo",label:"联系人"},{name:"orderNo",type:"datePicker",label:"时间范围",span:12,option:{type:"daterange",rangeSeparator:"至",startPlaceholder:"开始日期",endPlaceholder:"结束日期"}}],handleButtons:[{action:"add",label:"新增",click:this.add},{action:"refuse",label:"拒绝",click:this.refuse},{action:"delete",label:"删除",click:this.delete}],filters:{fromAbroad:!0},dataTable:{query:e.api.common.queryList,dbClick:this.gotoEdit,columns:[{type:"expand"},{type:"selection"},{type:"action",label:"操作",width:"160px",buttons:function(e){return[{label:"编辑",click:t.edit},{label:"查看",route:{name:"home"}},{label:"查看2",route:{name:"home"}},{label:"查看3",route:{name:"home"}},{label:"查看5",click:t.edit}]}},{prop:"activeStatus",label:"状态",type:"enum",list:"ACTIVE_FROZEN",click:this.changeStatus,tips:"【{0}】该内容"},{prop:"receiveMan",label:"收件人"},{prop:"price",label:"价格",type:"money"},{prop:"orderNo",label:"订单编号"},{prop:"receiveManTel",label:"手机号"},{prop:"sendMan",label:"购买人"},{prop:"fromAbroad",label:"是否跨境",type:"enum",list:"YES_NO"},{prop:"tags",label:"订单标签",type:"tags"},{prop:"imgs",label:"图片",type:"image"},{prop:"sex",label:"性别",type:"enum",list:"SEX"},{prop:"createTime",label:"时间",type:"datetime"}],table:null,isShowToggleColumnButton:!0}}},methods:{init:function(){for(var e=0;e<16;e++)this.handleButtons.push({action:"add"+e,label:"新增测试"+e,click:this.add})},search:function(){},add:function(){console.info(this.searchForm)},edit:function(e){console.info(e)},refuse:function(){},delete:function(){},handleButtonEvent:function(e){console.info(e)},change:function(e){console.info(e)},changeStatus:function(e){return Promise.resolve(!0)}}}}).call(this,a("28f0")["default"])},e5b9:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-list"},[a("search-form",{attrs:{fields:e.queryFields},on:{search:e.search,change:e.filterChange},scopedSlots:e._u([{key:"other",fn:function(){return[a("el-radio-group",{model:{value:e.filters.fromAbroad,callback:function(t){e.$set(e.filters,"fromAbroad",t)},expression:"filters.fromAbroad"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)]},proxy:!0}])}),a("action-bar",{attrs:{buttons:e.handleButtons,isShowTableToggleColumn:!0},on:{click:e.handleButtonEvent}}),a("data-table",e._b({attrs:{filters:e.filters,"select-rows":e.selectRows},on:{"update:selectRows":function(t){e.selectRows=t},"update:select-rows":function(t){e.selectRows=t}},scopedSlots:e._u([{key:"expand",fn:function(t){var l=t.row;return[a("div",[e._v("订单备注："+e._s(l["remark"]))])]}}])},"data-table",e.dataTable,!1))],1)},o=[],n=a("2b1a"),r=n["a"],s=a("2877"),i=Object(s["a"])(r,l,o,!1,null,"fc892e22",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-45707242.d585d1aa.js.map