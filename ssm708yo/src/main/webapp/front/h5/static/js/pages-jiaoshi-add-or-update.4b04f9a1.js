(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaoshi-add-or-update"],{"43ad":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5900f321]{padding:%?20?%}.content[data-v-5900f321]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20210507/1228228685434db58462b93b70d450d4.jpg);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-5900f321]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-5900f321]{width:%?180?%}.avator[data-v-5900f321]{width:%?150?%;height:%?60?%}.right-input[data-v-5900f321]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-5900f321]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-5900f321]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-5900f321]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-5900f321]{border:0}.cu-form-group uni-input[data-v-5900f321]{padding:0 %?30?%}.uni-input[data-v-5900f321]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5900f321]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5900f321]::after{line-height:%?88?%}.select .uni-input[data-v-5900f321]{line-height:%?88?%}.input .right-input[data-v-5900f321]{line-height:%?88?%}',""]),e.exports=r},"6f91":function(e,r,i){"use strict";i.r(r);var t=i("c2b6"),a=i.n(t);for(var n in t)"default"!==n&&function(e){i.d(r,e,(function(){return t[e]}))}(n);r["default"]=a.a},"890f":function(e,r,i){"use strict";i.r(r);var t=i("b6d3"),a=i("6f91");for(var n in a)"default"!==n&&function(e){i.d(r,e,(function(){return a[e]}))}(n);i("f78a");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"5900f321",null,!1,t["a"],o);r["default"]=u.exports},b6d3:function(e,r,i){"use strict";var t,a=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("教师工号")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.jiaoshigonghao,placeholder:"教师工号"},model:{value:e.ruleForm.jiaoshigonghao,callback:function(r){e.$set(e.ruleForm,"jiaoshigonghao",r)},expression:"ruleForm.jiaoshigonghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("密码")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("教师姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:e.ruleForm.jiaoshixingming,callback:function(r){e.$set(e.ruleForm,"jiaoshixingming",r)},expression:"ruleForm.jiaoshixingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.zhaopianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("照片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.zhaopian?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.baseUrl+e.ruleForm.zhaopian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("性别")]),i("v-uni-picker",{attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(242, 8, 8, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("职称")]),i("v-uni-picker",{attrs:{value:e.zhichengIndex,range:e.zhichengOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.zhichengChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(242, 8, 8, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.zhicheng?e.ruleForm.zhicheng:"请选择职称"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("联系电话")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(247, 6, 6, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.lianxidianhua,placeholder:"联系电话"},model:{value:e.ruleForm.lianxidianhua,callback:function(r){e.$set(e.ruleForm,"lianxidianhua",r)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(0, 204, 0, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"180rpx",fontSize:"28rpx",color:"rgba(0, 204, 0, 1)",textAlign:"left"}},[e._v("所教课程")]),i("v-uni-picker",{attrs:{value:e.suojiaokechengIndex,range:e.suojiaokechengOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.suojiaokechengChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"16rpx",color:"rgba(242, 8, 8, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.suojiaokecheng?e.ruleForm.suojiaokecheng:"请选择所教课程"))])],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(0, 204, 0, 1)",borderColor:"rgba(0, 204, 0, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},n=[];i.d(r,"b",(function(){return a})),i.d(r,"c",(function(){return n})),i.d(r,"a",(function(){return t}))},c2b6:function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var a=t(i("3b8d")),n=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",mima:"",jiaoshixingming:"",zhaopian:"",xingbie:"",zhicheng:"",lianxidianhua:"",suojiaokecheng:""},xingbieOptions:[],xingbieIndex:0,zhichengOptions:[],zhichengIndex:0,suojiaokechengOptions:[],suojiaokechengIndex:0,user:{},ro:{jiaoshigonghao:!1,mima:!1,jiaoshixingming:!1,zhaopian:!1,xingbie:!1,zhicheng:!1,lianxidianhua:!1,suojiaokecheng:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(r){var i,t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:return t=e.sent,this.user=t.data,this.xingbieOptions="男,女".split(","),this.zhichengOptions="助教,讲师,副教授,教授".split(","),e.next=9,this.$api.option("kechengleibie","kechengleibie",{});case 9:if(t=e.sent,this.suojiaokechengOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=19;break}return this.ruleForm.id=r.id,e.next=17,this.$api.info("jiaoshi",this.ruleForm.id);case 17:t=e.sent,this.ruleForm=t.data;case 19:if(this.cross=r.cross,!r.cross){e.next=59;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 23:if((e.t1=e.t0()).done){e.next=59;break}if(n=e.t1.value,"jiaoshigonghao"!=n){e.next=29;break}return this.ruleForm.jiaoshigonghao=a[n],this.ro.jiaoshigonghao=!0,e.abrupt("continue",23);case 29:if("mima"!=n){e.next=33;break}return this.ruleForm.mima=a[n],this.ro.mima=!0,e.abrupt("continue",23);case 33:if("jiaoshixingming"!=n){e.next=37;break}return this.ruleForm.jiaoshixingming=a[n],this.ro.jiaoshixingming=!0,e.abrupt("continue",23);case 37:if("zhaopian"!=n){e.next=41;break}return this.ruleForm.zhaopian=a[n],this.ro.zhaopian=!0,e.abrupt("continue",23);case 41:if("xingbie"!=n){e.next=45;break}return this.ruleForm.xingbie=a[n],this.ro.xingbie=!0,e.abrupt("continue",23);case 45:if("zhicheng"!=n){e.next=49;break}return this.ruleForm.zhicheng=a[n],this.ro.zhicheng=!0,e.abrupt("continue",23);case 49:if("lianxidianhua"!=n){e.next=53;break}return this.ruleForm.lianxidianhua=a[n],this.ro.lianxidianhua=!0,e.abrupt("continue",23);case 53:if("suojiaokecheng"!=n){e.next=57;break}return this.ruleForm.suojiaokecheng=a[n],this.ro.suojiaokecheng=!0,e.abrupt("continue",23);case 57:e.next=23;break;case 59:this.styleChange();case 60:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhichengChange:function(e){this.zhichengIndex=e.target.value,this.ruleForm.zhicheng=this.zhichengOptions[this.zhichengIndex]},suojiaokechengChange:function(e){this.suojiaokechengIndex=e.target.value,this.ruleForm.suojiaokecheng=this.suojiaokechengOptions[this.suojiaokechengIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.zhaopian="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var r,i,t,a,n,o,s,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.jiaoshigonghao){e.next=3;break}return this.$utils.msg("教师工号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){e.next=9;break}return this.$utils.msg("联系电话应输入手机格式"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){e.next=25;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){e.next=21;break}for(s in o)s==a&&(o[s]=n);return u=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(u),o);case 19:e.next=25;break;case 21:r=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!r){e.next=47;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=31,this.$api.list("jiaoshi",l);case 31:if(c=e.sent,!(c.data.total>=t)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("jiaoshi",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("jiaoshi",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("jiaoshi",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("jiaoshi",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,a=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},edc4:function(e,r,i){var t=i("43ad");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=i("4f06").default;a("d6a25a76",t,!0,{sourceMap:!1,shadowMode:!1})},f78a:function(e,r,i){"use strict";var t=i("edc4"),a=i.n(t);a.a}}]);