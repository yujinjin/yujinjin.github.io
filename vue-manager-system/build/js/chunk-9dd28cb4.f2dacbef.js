(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9dd28cb4"],{"0557":function(e,t,l){"use strict";var i=l("be91"),o=l.n(i);o.a},ad9d:function(e,t,l){"use strict";(function(e){l("b0c0"),l("d3b7");t["a"]={data:function(){return{queryFields:[{name:"filter",label:"角色名称"}],handleButtons:[{action:"add",label:"新增",click:this.gotoAdd},{action:"delete",label:"删除",click:this.delete},{action:"refresh",label:"刷新",click:this.refresh}],dataTable:{query:e.api.system.queryRoleList,dbClick:this.gotoUpdate,hasPagination:!1,columns:[{type:"selection"},{type:"action",label:"操作",width:"50px",buttons:[{label:"编辑",click:this.gotoUpdate}]},{prop:"name",label:"角色名称"},{prop:"createTime",label:"创建时间",type:"datetime"}]},roleDialog:{title:"",isShow:!1,formInput:{id:null,name:null,isDefault:!1,permission:[]}},allPermissions:[]}},created:function(){this.init()},methods:{init:function(){this.queryAllPermissions()},queryAllPermissions:function(){var t=this;return e.api.system.queryAllPermissions().then((function(e){t.allPermissions=e}))},gotoAdd:function(){this.roleDialog.title="新增角色信息",Object.assign(this.roleDialog.formInput,{id:null,name:null,isDefault:!1,permission:[]}),this.roleDialog.isShow=!0},gotoUpdate:function(t){var l=this;return e.api.system.queryUserPermission().then((function(e){l.roleDialog.title="修改角色:"+t.name,Object.assign(l.roleDialog.formInput,{id:t.id,name:t.name,isDefault:!1,permission:e}),l.roleDialog.isShow=!0,l.$nextTick((function(){l.$refs["permissions-tree"].setCheckedKeys(e)}))}))},delete:function(){this.preBatchDelete((function(e){return Promise.resolve({data:!0})}))},save:function(){var e=this;this.$refs["role-dialog-form"].validate((function(t){t&&(console.info("选中的值",e.$refs["permissions-tree"].getCheckedKeys()),e.roleDialog.isShow=!1)}))}}}}).call(this,l("28f0")["default"])},be91:function(e,t,l){},d2fb:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"role-list"},[l("search-form",{attrs:{fields:e.queryFields},on:{search:e.search,change:e.filterChange}}),l("action-bar",{attrs:{buttons:e.handleButtons}}),l("data-table",e._b({attrs:{filters:e.filters,"select-rows":e.selectRows},on:{"update:selectRows":function(t){e.selectRows=t},"update:select-rows":function(t){e.selectRows=t}}},"data-table",e.dataTable,!1)),l("el-dialog",{attrs:{title:e.roleDialog.title,visible:e.roleDialog.isShow,width:"50%"},on:{"update:visible":function(t){return e.$set(e.roleDialog,"isShow",t)}}},[l("el-form",{ref:"role-dialog-form",staticClass:"role-dialog-form",attrs:{model:e.roleDialog.formInput,"label-width":"80px"}},[l("el-tabs",{attrs:{type:"border-card"}},[l("el-tab-pane",{attrs:{label:"角色名称"}},[l("el-form-item",{attrs:{label:"名称：",prop:"name",rules:{required:!0,message:"请输入角色名称"}}},[l("el-input",{attrs:{placeholder:"请填写角色名称"},model:{value:e.roleDialog.formInput.name,callback:function(t){e.$set(e.roleDialog.formInput,"name",t)},expression:"roleDialog.formInput.name"}})],1),l("el-form-item",{attrs:{label:"是否默认",prop:"isDefault"}},[l("el-switch",{model:{value:e.roleDialog.formInput.isDefault,callback:function(t){e.$set(e.roleDialog.formInput,"isDefault",t)},expression:"roleDialog.formInput.isDefault"}})],1)],1),l("el-tab-pane",{attrs:{label:"权限"}},[l("el-tree",{ref:"permissions-tree",attrs:{"node-key":"value","show-checkbox":"","check-strictly":"","highlight-current":"","check-on-click-node":"",data:e.allPermissions,props:{label:"name"},"default-expand-all":!0}})],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(t){e.roleDialog.isShow=!1}}},[e._v("取 消")]),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},o=[],s=l("ad9d"),a=s["a"],r=(l("0557"),l("2877")),n=Object(r["a"])(a,i,o,!1,null,"1f95bef8",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-9dd28cb4.f2dacbef.js.map