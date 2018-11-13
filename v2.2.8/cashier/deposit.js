define(["exports","jquery","websockets/binary_websockets","windows/windows","cashier/currency","common/rivetsExtra","lodash","moment","cashier/uk_funds_protection","text!cashier/deposit.html","../common/util"],function(a,b,c,d,e,f,g,h,i,j){"use strict";function k(a){return a&&a.__esModule?a:{"default":a}}function l(a){a.click(function(){w?w.moveToTop():p["default"].cached.authorize().then(function(a){return a.authorize.currency||local_storage.get("currency")?!0:r["default"].check_currency()}).then(function(){m(v["default"])})["catch"](y)})}function m(a){a=o["default"](a).i18n(),w=q["default"].createBlankWindow(a,{title:"Deposit funds",resizable:!0,collapsable:!1,minimizable:!0,maximizable:!0,width:700,height:600,"data-authorized":!0,close:function(){w.trigger("dialogclose"),w.remove(),w=null},open:function(){},destroy:function(){x&&x.unbind(),x=null}}),n(a),w.dialog("open");var b=w.dialog("widget").offset();b.top=110,w.dialog("option","position",{my:b.left,at:b.top}),w.dialog("widget").css({left:b.left+"px",top:b.top+"px"}),w.track({module_id:"deposit",is_unique:!0})}function n(a){var b={route:{value:"standard-methods"},empty_fields:{validate:!1,clear:t["default"].debounce(function(){b.empty_fields.validate=!1},4e3),show:function(){b.empty_fields.validate=!0,b.empty_fields.clear()}},user:{currency:local_storage.get("currency"),email:local_storage.get("authorize").email,cashier_url:"",residence:"",residence_name:""},is_cryptocurrency:isCryptoCurrency(),standard_methods:{iframe_visible:!1},payment_agents:{list:[],current:{}},binary_url:getBinaryUrl("payment-agent.html")};b.route.update=function(a){b.route.value=a},b.standard_methods.iframe_loaded=function(){b.user.cashier_url&&(b.standard_methods.iframe_visible=!0)},b.payment_agents.get_commission_text=function(a){return a.deposit_commission===a.withdrawal_commission?a.deposit_commission+"% "+"commission".i18n():a.deposit_commission+"% "+"deposits".i18n()+" / "+a.withdrawal_commission+"% "+"withdrawals".i18n()},b.payment_agents.onclick=function(a,c){var d=o["default"](c.target).next(),e=b.payment_agents.elem;e&&e.css("max-height","0"),b.payment_agents.current.is_active=!1,b.payment_agents.current===a?b.payment_agents.current={}:(b.payment_agents.current=a,b.payment_agents.elem=d,d.css("max-height",d[0].scrollHeight+"px"),a.is_active=!0)},x=s["default"].bind(a[0],b),p["default"].send({cashier:"deposit"}).then(function(a){b.user.cashier_url=a.cashier})["catch"](function(a){return"ASK_UK_FUNDS_PROTECTION"===a.code?(w.dialog("close"),void u["default"].init_win().then(function(){m(v["default"])})["catch"](function(a){y(a)})):void(b.error_text=a.message)});var c=p["default"].send({get_settings:1}).then(function(a){b.user.residence=a.get_settings.country_code,b.user.residence_name=a.get_settings.country})["catch"](y);c.then(function(){return b.user.residence?p["default"].send({paymentagent_list:b.user.residence,currency:b.user.currency}):{paymentagent_list:{list:[]}}}).then(function(a){var c=a.paymentagent_list.list.map(function(a){return a.commission_text=b.payment_agents.get_commission_text(a),a.supported_banks=a.supported_banks.toLowerCase().split(","),a});b.payment_agents.list=c})["catch"](y)}Object.defineProperty(a,"__esModule",{value:!0}),a.init=l;var o=k(b),p=k(c),q=k(d),r=k(e),s=k(f),t=k(g),u=(k(h),k(i)),v=k(j);require(["text!cashier/deposit.html"]),require(["css!cashier/deposit.css"]);var w=null,x=null,y=function(a){o["default"].growl.error({message:a.message})};a["default"]={init:l}});