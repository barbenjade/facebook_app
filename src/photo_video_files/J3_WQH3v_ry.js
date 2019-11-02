if (self.CavalryLogger) { CavalryLogger.start_js(["XDZBY"]); }

__d("RespondToRequestButton",["Arbiter","CSS"],(function(a,b,c,d,e,f){e.exports.subscribeDelete=function(a,c,d){b("Arbiter").subscribe("CONNECTION_REQUEST",function(e,f){f.hidden&&f.id==a&&(b("CSS").hide(c),b("CSS").show(d),b("Arbiter").inform("FriendRequest/delete",{uid:a}))})}}),null);
__d("EscapeHatchFriendReject",["Arbiter","DOM","Parent","Vector","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=50;a={init:function(a,c,d){__p&&__p();b("Arbiter").subscribe("CONNECTION_REQUEST",function(e,f){__p&&__p();e=b("ge")(a);var h=b("Parent").byClass(e,"actions");if(f.hidden&&f.id.toString()===c&&e){b("DOM").setContent(b("Parent").byTag(e,"span"),d);if(h instanceof HTMLElement){f=h.parentNode;e=b("DOM").find(f,"div.name");if(f instanceof HTMLElement){f=b("Vector").getElementDimensions(f).x-b("Vector").getElementDimensions(e).x-g;h.style.width=f+"px"}}}})}};e.exports=a}),null);
__d("TimelineBanner",["csx","cx","Arbiter","ChannelConstants","CSS","DOM","Parent","ReloadPage","TimelineStickyHeader","Vector","destroyOnUnload"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_2vhb",j=50;a={init:function(a,c){__p&&__p();var d=b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friending_state_change"),function(c,d){d.obj.action==="confirm"&&d.obj.userid===a&&b("ReloadPage").now()}),e=b("Arbiter").subscribe(b("TimelineStickyHeader").ADJUST_WIDTH,function(a,d){__p&&__p();a=c.parentElement;if(!a||!b("CSS").matchesSelector(a,".actions"))return;a=a.parentElement;if(!(a instanceof HTMLElement))return;var e=b("DOM").scry(c,"._5hb1");if(e.length>0){e=b("Parent").byClass(c,"actions");if(e instanceof HTMLElement){var f=b("Vector").getElementDimensions(a).x-b("Vector").getElementDimensions(d).x-j;e.style.width=f+"px"}return}e=b("Vector").getElementDimensions(d).x+b("Vector").getElementDimensions(c).x+j>b("Vector").getElementDimensions(a).x;if(!e)return;if(b("CSS").hasClass(c,i))return;f=b("DOM").scry(c,"._2vhc");if(f.length==0)return;b("CSS").hide(b("DOM").find(c,"._2vhc"));b("CSS").hide(b("DOM").find(c,"._2vhd"));b("CSS").show(b("DOM").find(c,"._2vhe"));b("CSS").show(b("DOM").find(c,"._2vhf"));b("CSS").addClass(c,i)});b("destroyOnUnload")(function(){d.unsubscribe(),e.unsubscribe()})}};e.exports=a}),null);
__d("RampUpPendingRequests",["AsyncRequest","CSS","DOM"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d,e,f,g,h){this._id=d,this._ref=e,this._friendingLocation=f,this._friendingLocationRefs=g,this._confirmButton=a,this._deleteButton=c,this._responseSection=b("DOM").find(this._confirmButton,"^.ruResponse"),this._userBox=b("DOM").find(this._responseSection,"^.ruUserBox"),this._deleteButton.onclick=this._delete.bind(this),this._confirmButton.onclick=this._confirm.bind(this),this._loadingIndicator=b("DOM").find(this._responseSection,".ruResponseLoading"),this._viewer_id=h}Object.assign(g.prototype,{_send:function(a,c){b("DOM").remove(b("DOM").find(this._responseSection,".ruResponseButtons"));var d=b("DOM").find(this._userBox,".followUpQuestion"),e=b("DOM").find(this._userBox,".requestInfoContainer");a==="reject"?(b("CSS").hide(e),b("DOM").remove(b("DOM").find(this._userBox,".ruResponseSectionContainer")),b("CSS").show(d)):b("CSS").show(this._loadingIndicator);e=new(b("AsyncRequest"))().setURI("/requests/friends/ajax/").setData({action:a,id:this._id,ref:this._ref,floc:this._friendingLocation,frefs:this._friendingLocationRefs,viewer_id:this._viewer_id}).setTransportErrorHandler(function(){b("DOM").remove(this._loadingIndicator),b("DOM").remove(d),b("CSS").show(b("DOM").find(this._responseSection,".ruTransportErrorMsg"))}.bind(this));c&&e.setHandler(c);e.send()},_delete:function(){var a="reject";this._send(a)},_confirm:function(){this._send("confirm",function(a){b("CSS").hide(this._loadingIndicator);a=a.payload;b("DOM").setContent(this._responseSection,a.success?a.button.markup:a.err)}.bind(this))}});Object.assign(g,{hookUp:function(a,b,c,d,e,f,h){new g(a,b,c,d,e,f,h)}});e.exports=g}),null);
__d("FriendRequestDoYouKnow",["csx","Arbiter","AsyncRequest","ChannelConstants","CSS","DOM"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";this.$1=a,this.$2=c,this.$3=d,this.$4=b("DOM").find(this.$1,"._9z"),this.$5=b("DOM").find(this.$1,"._9-"),this.$6=b("DOM").find(this.$1,"._5hb1"),this.$7=b("DOM").find(this.$1,"._5hb2"),this.$8=b("DOM").find(this.$1,"._a2"),this.$9("._5hb3","mark_spam",this.$6,this.$7),this.$9("._2qk_","unmark_spam",this.$7,this.$8),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friending_state_change"),this.$10.bind(this))}a.prototype.$9=function(a,c,d,e){"use strict";b("DOM").find(this.$1,a).onclick=function(){b("CSS").hide(d),this.$11(c,function(a){a=a.payload;a.success?b("CSS").show(e):(a.err&&b("DOM").setContent(this.$4,a.err),b("CSS").show(this.$4))}.bind(this))}.bind(this)};a.prototype.$11=function(a,c){"use strict";b("CSS").show(this.$5),new(b("AsyncRequest"))().setURI("/requests/friends/ajax/").setData({action:a,id:this.$2,ref:this.$3}).setTransportErrorHandler(function(){b("CSS").hide(this.$5),b("CSS").show(this.$4)}.bind(this)).setHandler(function(a){b("CSS").hide(this.$5),c&&c(a)}.bind(this)).send()};a.prototype.$10=function(a,c){"use strict";__p&&__p();if(c.obj.userid!==this.$2)return;switch(c.obj.action){case"mark_spam":b("CSS").hide(this.$6);b("CSS").show(this.$7);break;case"unmark_spam":b("CSS").hide(this.$7);b("CSS").show(this.$8);break;default:break}};e.exports=a}),null);