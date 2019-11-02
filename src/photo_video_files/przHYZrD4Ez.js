if (self.CavalryLogger) { CavalryLogger.start_js(["lWsBQ"]); }

__d("FBAMetaMegaMenuLogger",["invariant","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){j("MegaMenu_HelpButton_Toggle",{action:a?"open":"close"})}function c(a,b){b?j("HelpTray_Article_Click",{article_id:a,search_term:b}):j("HelpTray_Article_Click",{article_id:a})}function d(a){j("HelpTray_SearchBar_Change",{search_term:a})}function f(a){j("MegaMenu_NotificationBell_Toggle",{action:a?"open":"close"})}function h(a){a!==null&&a.match(/(\d+)\:(\d+)/)||g(0,undefined);a=a.split(":");j("MegaMenu_Notification_Click",{recepient_id:a[0],notification_id:a[1]})}function i(a){j("MegaMenu_NotificationBell_Show",{unseen_notification_count:a.toString()})}function j(event,a){b("Bootloader").loadModules(["FBAMetaLoggerWWW"],function(b){b=b.META_LOGGER;b.logEvent(event,a)},"FBAMetaMegaMenuLogger")}e.exports={logHelpTrayToggle:a,logHelpTrayArticleClick:c,logHelpTrayPerformSearch:d,logMegaMenuNotificationBellToggle:f,logMegaMenuNotificationClick:h,logMegaMenuNotificationBellShown:i}}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("FluxMixinLegacyInstrumentation",["FluxContainerInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.constructor.displayName||a.constructor.name||"FluxMixinLegacy(unknown)"}var h={_callCalculateState:function(){var a=b("FluxContainerInstrumentation").onCalculateStateStart(g(this)),c=this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this,arguments);a&&a();return c},UNSAFE_componentWillMount:function(){this.constructor._FluxMixinLegacyInstrumentationOnInitCalled||(b("FluxContainerInstrumentation").onInit(this.constructor),this.constructor._FluxMixinLegacyInstrumentationOnInitCalled=!0)},_FluxMixinLegacyInstrumentationEmittedChangeStores:null,_getCurrentDispatchForInstrumentation:function(){return b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()},_onInitialStateForInstrumentation:function(){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,g(this))},_onReceivePropsForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,g(this),a)},_addStoreEmitForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this._FluxMixinLegacyInstrumentationEmittedChangeStores=this._FluxMixinLegacyInstrumentationEmittedChangeStores||[],b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores,a))},_collectStoreEmitsForInstrumentation:function(){var a=this._FluxMixinLegacyInstrumentationEmittedChangeStores;this._FluxMixinLegacyInstrumentationEmittedChangeStores=null;return a},_logStoreEmitsForInstrumentation:function(a,c){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,g(this),a||[],c)},componentDidUpdate:function(a,c){b("FluxContainerInstrumentation").onDidUpdate(this,g(this),a,this.props,c,this.state)}};function a(a){b("FluxContainerInstrumentation").hasInstrumentation()&&(a.mixins=a.mixins||[],a.mixins.push(h),a._FluxMixinLegacyInstrumentationCalculateStateCaller=a._callCalculateState,delete a._callCalculateState);return a}e.exports={addInstrumentation:a}}),null);
__d("PureStoreBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(){return this.constructor.calculateState()},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState()},UNSAFE_componentWillMount:function(){__p&&__p();this.constructor.calculateState||g(0,undefined);this._recalculateStateID=null;var a=function(){if(this.isMounted()){var a=this._collectStoreEmitsForInstrumentation?this._collectStoreEmitsForInstrumentation():null,b=this._callCalculateState();this.setState(this._logStoreEmitsForInstrumentation!=null?function(){a!=null&&this._logStoreEmitsForInstrumentation&&this._logStoreEmitsForInstrumentation(a);return b}.bind(this):b)}this._recalculateStateID=null}.bind(this);this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){this._recalculateStateID===null&&(this._recalculateStateID=b("setImmediate")(a))}.bind(this),this._addStoreEmitForInstrumentation)},componentWillUnmount:function(){this._mixin.release(),this._mixin=null}})}.bind(this);e.exports=a}),null);
__d("DraftTreeInvariants",["warning"],(function(a,b,c,d,e,f){__p&&__p();a={isValidBlock:function(a,c){__p&&__p();var d=a.getKey(),e=a.getParentKey();if(e!=null){e=c.get(e);if(!e.getChildKeys().includes(d)){b("warning")(!0,"Tree is missing parent -> child pointer on %s",d);return!1}}e=a.getChildKeys().map(function(a){return c.get(a)});if(!e.every(function(a){return a.getParentKey()===d})){b("warning")(!0,"Tree is missing child -> parent pointer on %s",d);return!1}e=a.getPrevSiblingKey();if(e!=null){var f=c.get(e);if(f.getNextSiblingKey()!==d){b("warning")(!0,"Tree is missing nextSibling pointer on %s's prevSibling",d);return!1}}f=a.getNextSiblingKey();if(f!=null){var g=c.get(f);if(g.getPrevSiblingKey()!==d){b("warning")(!0,"Tree is missing prevSibling pointer on %s's nextSibling",d);return!1}}if(f!==null&&e!==null&&e===f){b("warning")(!0,"Tree has a two-node cycle at %s",d);return!1}if(a.text!=""&&a.getChildKeys().size>0){b("warning")(!0,"Leaf node %s has children",d);return!1}return!0},isConnectedTree:function(a){__p&&__p();var c=a.toArray().filter(function(a){return a.getParentKey()==null&&a.getPrevSiblingKey()==null});if(c.length!==1){b("warning")(!0,"Tree is not connected. More or less than one first node");return!1}c=c.shift();var d=0;c=c.getKey();var e=[];while(c!=null){var f=a.get(c),g=f.getChildKeys(),h=f.getNextSiblingKey();if(g.size>0){h!=null&&e.unshift(h);h=g.map(function(b){return a.get(b)});g=h.find(function(a){return a.getPrevSiblingKey()==null});if(g==null){b("warning")(!0,"%s has no first child",c);return!1}c=g.getKey()}else f.getNextSiblingKey()!=null?c=f.getNextSiblingKey():c=e.shift();d++}if(d!==a.size){b("warning")(!0,"Tree is not connected. %s nodes were seen instead of %s",d,a.size);return!1}return!0},isValidTree:function(a){var b=a.toArray();return!b.every(function(b){return this.isValidBlock(b,a)}.bind(this))?!1:this.isConnectedTree(a)}};e.exports=a}),null);
__d("objectEntries",[],(function(a,b,c,d,e,f){function a(a){return Object.entries(a)}e.exports=a}),null);
__d("FluxLoadObjectStore",["invariant","FluxMapStore","immutable","LoadObject","abstractMethod","clearImmediate","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="FluxLoadObjectStore.START_LOAD.",j=0,k=new Set();function l(a){var b=a;while(k.has(b))b=""+a+j++;k.add(b);return b}c=babelHelpers.inherits(a,b("FluxMapStore"));h=c&&c.prototype;function a(a,c){__p&&__p();h.constructor.call(this,a);this.$FluxLoadObjectStore5=new Map();this.$FluxLoadObjectStore8=function(){__p&&__p();var a=this.$FluxLoadObjectStore2;this.$FluxLoadObjectStore2=b("immutable").OrderedSet();b("clearImmediate")(this.$FluxLoadObjectStore3);delete this.$FluxLoadObjectStore3;this.getDispatcher().dispatch({action:{actionType:this.$FluxLoadObjectStore1,type:this.$FluxLoadObjectStore1,keys:a}});var c=this.$FluxLoadObjectStore4;if(c){var d=[];for(var e=a,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;d.push(h);d.length>=c&&(this.__loadAll(d),d=[])}d.length>0&&this.__loadAll(d)}else this.__loadAll(a)}.bind(this);this.$FluxLoadObjectStore1=i+l(c||this.__moduleID||this.getDispatchToken());this.$FluxLoadObjectStore2=b("immutable").OrderedSet();this.__load&&!this.__loadAll&&(this.__loadAll=function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;this.__load(d)}}.bind(this));this.__loadAll&&!this.__load&&(this.__load=function(a){this.__loadAll(b("immutable").List([a]))}.bind(this));this.__load&&this.__loadAll||g(0,undefined);var d=this.reduce.bind(this);this.reduce=function(a,b){b.action&&b.action.type===this.$FluxLoadObjectStore1&&(a=this.__setLoading(a,b.action.keys));return d(a,b)}.bind(this);this.$FluxLoadObjectStore4=this.__getChunkSize();this.$FluxLoadObjectStore4!=null&&this.$FluxLoadObjectStore4<=0&&(this.$FluxLoadObjectStore4=undefined)}a.prototype.reduce=function(a,c){return b("abstractMethod")("FluxLoadObjectStore","reduce")};a.prototype.__handleMap=function(a,b){__p&&__p();return a.withMutations(function(a){__p&&__p();for(var c=b,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];var h=this.getCached(g);f instanceof Error?a.set(g,h.setError(f).done()):a.set(g,h.setValue(f).done())}}.bind(this))};a.prototype.__handleOne=function(a,b,c){var d=this.getCached(b);if(c instanceof Error)return a.set(b,d.setError(c).done());else return a.set(b,d.setValue(c).done())};a.prototype.__setLoading=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.loading()})};a.prototype.__setUpdating=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.updating()})};a.prototype.__setUpdatingAndRemoveErrors=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.updating().removeError()})};a.prototype.__setCreating=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.creating()})};a.prototype.__setDeleting=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.deleting()})};a.prototype.__setEmpty=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.removeValue().removeOperation().removeError()})};a.prototype.__setEmptyAndLoading=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.removeValue().removeError().loading()})};a.prototype.__getChunkSize=function(){return undefined};a.prototype.__isKeyPendingLoad=function(a){return this.$FluxLoadObjectStore2.has(a)};a.prototype.$FluxLoadObjectStore6=function(a,b,c){__p&&__p();return a.withMutations(function(a){__p&&__p();for(var d=b,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=this.getCached(g);a.set(g,c(h,g))}}.bind(this))};a.prototype.get=function(a){var c=this.getCached(a);if(c.isEmpty()){c=b("immutable").List.of(a);this.$FluxLoadObjectStore7(c)}return this.getCached(a)};a.prototype.getCached=function(a){return h.get.call(this,a)||b("LoadObject").empty()};a.prototype.getAll=function(a,b){return this.__getAllInternal(a,b,function(a){return this.getCached(a)}.bind(this),"getAll")};a.prototype.__getAllInternal=function(a,c,d,e){var f=Array.from(a).filter(function(a){return d(a).isEmpty()});if(f.length>0){f=b("immutable").List(f);this.$FluxLoadObjectStore7(f)}return this.__getAllCachedInternal(a,c,d,e)};a.prototype.getAllCached=function(a,b){return this.__getAllCachedInternal(a,b,function(a){return this.getCached(a)}.bind(this),"getAll")};a.prototype.__getAllCachedInternal=function(a,c,d,e){__p&&__p();var f=new Set(a),g=c||this.$FluxLoadObjectStore5.get(e)||b("immutable").Map();a=g.withMutations(function(a){__p&&__p();for(var b=g.keys(),c=Array.isArray(b),e=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(c){if(e>=b.length)break;h=b[e++]}else{e=b.next();if(e.done)break;h=e.value}h=h;f.has(h)||a["delete"](h)}for(var h=f,e=Array.isArray(h),c=0,h=e?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(e){if(c>=h.length)break;b=h[c++]}else{c=h.next();if(c.done)break;b=c.value}b=b;a.set(b,d(b))}});this.$FluxLoadObjectStore5.set(e,a);return a};a.prototype.$FluxLoadObjectStore7=function(a){this.$FluxLoadObjectStore3||(this.$FluxLoadObjectStore3=b("setImmediate")(this.$FluxLoadObjectStore8)),this.$FluxLoadObjectStore2=this.$FluxLoadObjectStore2.union(a)};a.__moduleID=e.id;e.exports=a}),null);
__d("AdsInterfacesNavTools",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_SETTINGS:"ACCOUNT_SETTINGS",ACCOUNT_SETTINGS_OLD:"ACCOUNT_SETTINGS_OLD",AD_BREAKS:"AD_BREAKS",ANALYTICS:"ANALYTICS",APP_ADS_HELPER:"APP_ADS_HELPER",APP_DASHBOARD:"APP_DASHBOARD",APP_EVENTS:"APP_EVENTS",AUDIENCE_INSIGHTS:"AUDIENCE_INSIGHTS",AUDIENCES:"AUDIENCES",BILLING:"BILLING",BIZ_BILLING:"BIZ_BILLING",BLOCK_LIST:"BLOCK_LIST",BLOCK_LIST_V2:"BLOCK_LIST_V2",BRANDED_CONTENT:"BRANDED_CONTENT",BUSINESS_ASSET_LIBRARY:"BUSINESS_ASSET_LIBRARY",BUSINESS_HOME:"BUSINESS_HOME",BUSINESS_LOCATIONS:"BUSINESS_LOCATIONS",BUSINESS_PAYMENTS:"BUSINESS_PAYMENTS",BUSINESS_PRODUCT_CATALOGS:"BUSINESS_PRODUCT_CATALOGS",BUSINESS_SETTINGS:"BUSINESS_SETTINGS",BUSINESS_VIDEO:"BUSINESS_VIDEO",CONTRACTS:"CONTRACTS",CONVERSION_TRACKING:"CONVERSION_TRACKING",CANVAS_BUILDER:"CANVAS_BUILDER",CREATION:"CREATION",CREATIVE_STUDIO:"CREATIVE_STUDIO",CROSS_PUBLISHER_BUYING:"CROSS_PUBLISHER_BUYING",CUSTOM_CONVERSIONS:"CUSTOM_CONVERSIONS",DATA_SETS:"DATA_SETS",DELIVERY_INSIGHTS:"DELIVERY_INSIGHTS",DEVELOPER_SUPPORT_HOME:"DEVELOPER_SUPPORT_HOME",EASY_DA:"EASY_DA",EVENTS_MANAGER:"EVENTS_MANAGER",IMAGES:"IMAGES",INVOICES:"INVOICES",LEAD_MANAGER:"LEAD_MANAGER",LIFT_STUDIES:"LIFT_STUDIES",PULL_MMM:"PULL_MMM",LOCAL_INSIGHTS:"LOCAL_INSIGHTS",MANAGE_ADS:"MANAGE_ADS",MANAGE_ADS_CM:"MANAGE_ADS_CM",MARKETING_SOLUTION_PROVIDER:"MARKETING_SOLUTION_PROVIDER",MEASUREMENT_HUB:"MEASUREMENT_HUB",NOTIFICATIONS:"NOTIFICATIONS",OFFLINE_EVENTS:"OFFLINE_EVENTS",PAGES:"PAGES",PARTNER_INTEGRATIONS:"PARTNER_INTEGRATIONS",PARTNER_PLATFORM:"PARTNER_PLATFORM",PERSONALIZED_RECOMMENDATIONS:"PERSONALIZED_RECOMMENDATIONS",PAYOUT_ACCOUNT_SETTINGS:"PAYOUT_ACCOUNT_SETTINGS",PIXELS:"PIXELS",PLANNER_TOOL:"PLANNER_TOOL",PUB_X:"PUB_X",REPORTING:"REPORTING",RULES:"RULES",SCRIPTS:"SCRIPTS",SELF_SERVE_CONVERSION_LIFT:"SELF_SERVE_CONVERSION_LIFT",SETTINGS:"SETTINGS",STORE_VISIT_INSIGHTS:"STORE_VISIT_INSIGHTS",TARGETING_INSIGHTS:"TARGETING_INSIGHTS",UNDEFINED:"UNDEFINED",WHATSAPP_MESSAGING:"WHATSAPP_MESSAGING"})}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){"use strict";this.$1=a,this.$2=b,this.$3=c}a.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=!!navigator.serviceWorker,h={};function i(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var j={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){j.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){__p&&__p();if(h[a])return h[a];var c=i();h[a]=new(b("Promise"))(function(d,e){this.getWorkerRegistration(a).done(function(f){if(!f){var g=b("EventListener").listen(window,"message",function(event){event.data&&event.data.command&&event.data.command==="ServiceWorkerInstallError"&&e()});b("promiseDone")(b("Promise").resolve(c.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(c.ready),d)})}else d(f)})}.bind(this));h[a].done(function(){h[a]=null});return h[a]},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var c=i();return b("Promise").resolve(c.getRegistration(a))},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=j}),null);
__d("DamerauLevenshtein",[],(function(a,b,c,d,e,f){__p&&__p();a={DamerauLevenshteinDistance:function(a,b){__p&&__p();if(a.length===0)return b.length;if(b.length===0)return a.length;if(a===b)return 0;var c,d,e=[];e[0]=[];e[1]=[];e[2]=[];for(d=0;d<=b.length;d++)e[0][d]=d;for(c=1;c<=a.length;c++)for(d=1;d<=b.length;d++){e[c%3][0]=c;var f=a.charAt(c-1)===b.charAt(d-1)?0:1;e[c%3][d]=Math.min(e[(c-1)%3][d]+1,e[c%3][d-1]+1,e[(c-1)%3][d-1]+f);c>1&&d>1&&a.charAt(c-1)==b.charAt(d-2)&&a.charAt(c-2)==b.charAt(d-1)&&(e[c%3][d]=Math.min(e[c%3][d],e[(c-2)%3][d-2]+f))}return e[a.length%3][b.length]}};e.exports=a}),null);
__d("XBoostedComponentFetchButtonDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/boosted_components/fetch_button_data/",{page_id:{type:"Int",required:!0},permanent_create_mode:{type:"Bool",defaultValue:!1},post_id:{type:"Int"},boost_id:{type:"FBID"},ref:{type:"String",required:!0},entry_point_details:{type:"String"},product:{type:"Enum",required:!0,enumType:1}})}),null);