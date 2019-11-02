if (self.CavalryLogger) { CavalryLogger.start_js(["L+htQ"]); }

__d("LiveVideoBroadcastContainer.react",["csx","fbt","Arbiter","AsyncRequest","ComposerEntryPointRef","DOM","FluxContainer","LiveVideoBroadcast.react","LiveVideoBroadcastActions","LiveVideoBroadcastBroadcastStore","LiveVideoBroadcastConstants","LiveVideoBroadcastDispatcher","LiveVideoBroadcastIDStore","LiveVideoBroadcastRTCCallStore","LiveVideoBroadcastStatusUpdateSubscriptionHack","LiveVideoBroadcastUIStore","LiveVideoBroadcastUtils","LiveVideoInviteFriendsStore","Network","React","ReactDOM","RTCAppDispatcher","RTCCallStore","RTCMediaDevicesStore","RTCUserSettingsStore","Run","SubscriptionsHandler","UFILivePinnedCommentStore","UFILiveVideoAutoscrollHandler","UFINewCommentsPillUtils","UFIThreadedFacecastCommentsStore","UFIUIEvents","VideoBroadcastStatus","XBasicFBNuxDismissController","throttle","LiveVideoBroadcastAPIBroadcastStore","LiveVideoBroadcastLoggingStore","LiveVideoBroadcastReplayUIStore","LiveVideoBroadcastCopyrightStore"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("LiveVideoBroadcastConstants").BROADCAST_STATE,k=b("LiveVideoBroadcastConstants").CAMERA_STATE,l=b("LiveVideoBroadcastConstants").INPUT_SOURCE,m=4459,n=6e4;a=babelHelpers.inherits(o,b("React").Component);i=a&&a.prototype;o.getStores=function(){return[b("LiveVideoBroadcastBroadcastStore"),b("LiveVideoBroadcastUIStore"),b("LiveVideoBroadcastIDStore")]};o.calculateState=function(a,c){__p&&__p();c=b("LiveVideoBroadcastUIStore").getState().toObject();var d=c.accessToken,e=c.broadcastState,f=c.cameraState,g=c.countdownTime,h=c.composerConfig,i=c.dialog,m=c.ufiConfig,p=c.ufiMarkup,q=c.isDescriptionExpanded,r=c.gks,s=c.inputSource,t=c.shareMode,u=c.shouldBeClosed,v=c.showSaveChangesDialog;c=c.isUpdateRequestPending;var w=b("LiveVideoBroadcastBroadcastStore").getState().toObject(),x=w.mediaStream,y=w.webRTCLoggingFreq;w=w.targetID;var z=b("LiveVideoBroadcastIDStore").get("videoID"),A=b("RTCCallStore").getState().toObject();A=A.connections;A=A.first();var B=a?a.webRTCLoggingStarted:!1;A&&!B&&y&&(o.$7(A,y||n,e),B=!0);A=a?a.videoID:null;z&&z!==A&&b("LiveVideoBroadcastStatusUpdateSubscriptionHack").subscribe(z,function(a){a=a.live_video_broadcast_status_update_subscribe;a=a.video_broadcast_status;a===b("VideoBroadcastStatus").LIVE_STOPPED&&(s===l.EDIT||s===l.CAMERA)&&b("LiveVideoBroadcastActions").setBroadcastState(j.FINISHED);a===b("VideoBroadcastStatus").VOD_READY&&b("LiveVideoBroadcastActions").setVodReady();s===l.EDIT_SCHEDULE&&a===b("VideoBroadcastStatus").LIVE&&(b("LiveVideoBroadcastActions").setBroadcastState(j.LIVE),b("LiveVideoBroadcastActions").setInputSource(l.EDIT))});!u&&s==="CAMERA"&&!x&&(f===k.CHECK_CAMERA_ACCESS||f===k.REQUEST_CAMERA_ACCESS)&&this.requestCameraURL();return{accessToken:d,broadcastState:e,cameraState:f,countdownTime:g,dialog:i,contextConfig:h?h.contextConfig:null,inputSource:s,isDescriptionExpanded:q,isUpdateRequestPending:c,gks:r,shareMode:t,shouldBeClosed:u,showSaveChangesDialog:v,targetID:w,ufiMarkup:p,ufiConfig:m,videoID:z,webRTCLoggingStarted:B}};o.$7=function(a,c){a.getStats().done(function(a){b("LiveVideoBroadcastActions").logWebRTCStats(b("LiveVideoBroadcastUtils").reduceWebRTCStats(a))}),setTimeout(function(){o.$7(a,c)},c)};function o(a){__p&&__p();i.constructor.call(this,a),this.$15=function(){switch(this.state.broadcastState){case j.PREVIEW:this.state.countdownTime?this.$12():this.$10();break;case j.LIVE:b("LiveVideoBroadcastActions").clickFinishButton();this.$14();break;default:break}}.bind(this),this.$16=function(){b("UFINewCommentsPillUtils").scrollToBottom(this.$2,this.props.newCommentsPillConfig)}.bind(this),this.$18=function(a){b("UFINewCommentsPillUtils").updateScrolledUp(a.target,this.state.ufiConfig)}.bind(this),b("LiveVideoBroadcastDispatcher").explicitlyRegisterStores([b("LiveVideoBroadcastAPIBroadcastStore"),b("LiveVideoBroadcastBroadcastStore"),b("LiveVideoBroadcastLoggingStore"),b("LiveVideoBroadcastReplayUIStore"),b("LiveVideoBroadcastUIStore"),b("LiveVideoBroadcastCopyrightStore"),b("LiveVideoBroadcastReplayUIStore"),b("LiveVideoInviteFriendsStore"),b("LiveVideoBroadcastIDStore")]),b("RTCAppDispatcher").explicitlyRegisterStores([b("LiveVideoBroadcastRTCCallStore"),b("RTCCallStore"),b("RTCUserSettingsStore"),b("RTCMediaDevicesStore")]),b("UFILivePinnedCommentStore").addListener(function(){this.$8(),this.$9()}.bind(this))}o.prototype.$10=function(){b("LiveVideoBroadcastActions").startLiveCountdown(),this.$4=setInterval(this.$11.bind(this),b("LiveVideoBroadcastConstants").MSEC_IN_SEC)};o.prototype.$12=function(){clearInterval(this.$4),b("LiveVideoBroadcastActions").cancelLiveCountdown()};o.prototype.$11=function(){if(this.state.countdownTime)this.state.countdownTime===1?(clearInterval(this.$4),this.$13()):b("LiveVideoBroadcastActions").updateCountdown(this.state.countdownTime-1);else throw new Error("Countdown time is not defined during timer update")};o.prototype.$13=function(){b("LiveVideoBroadcastActions").finishCountdown(),b("LiveVideoBroadcastActions").startLiveBroadcastRequest(this.state.gks?this.state.gks.live_www_broadcasting_download_raw_video:!1)};o.prototype.$14=function(){b("LiveVideoBroadcastActions").finishBroadcastRequest()};o.prototype.$17=function(){var a=b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",m).getURI();new(b("AsyncRequest"))().setURI(a).send();b("LiveVideoBroadcastActions").setShowNUX(!1)};o.prototype.$9=function(){this.$2&&this.$1.manageScroll(this.$2,this.state.ufiConfig)};o.prototype.$8=function(){__p&&__p();var a=this.state.ufiMarkup;if(!a)return;this.$3=b("DOM").scry(a,"._5yqa")[0];var c=!!this.$2;this.$2=b("DOM").scry(a,"._4iif")[0];a=this.props.newCommentsPillConfig;if(!c){c=a.Event;this.$5.addSubscriptions(c.listen(this.$2,"scroll",b("throttle")(this.$18,20)))}};o.prototype.$19=function(){this.state.broadcastState===j.LIVE&&this.state.inputSource==="CAMERA"&&b("LiveVideoBroadcastActions").finishBroadcastRequest()};o.prototype.componentDidMount=function(){__p&&__p();this.$1=new(b("UFILiveVideoAutoscrollHandler"))(),this.$6=b("ReactDOM").findDOMNode(this),this.$5=new(b("SubscriptionsHandler"))(),this.$5.addSubscriptions(b("Arbiter").subscribe(b("UFIUIEvents").CommentChanged,function(a,b){this.state.ufiConfig.ftentidentifier===b.ftentidentifier&&this.$9()}.bind(this)),b("Network").addListener("online",b("LiveVideoBroadcastActions").handleNetworkOnline),b("Network").addListener("offline",b("LiveVideoBroadcastActions").handleNetworkOffline)),b("Run").onUnload(function(){this.$19()}.bind(this)),b("Run").onLeave(function(){this.$19()}.bind(this)),b("Run").onBeforeUnload(function(){var a=this.state.contextConfig&&this.state.contextConfig.composerType===b("ComposerEntryPointRef").SOCIAL_PLUGIN;if(!b("LiveVideoBroadcastUIStore").get("warnOnExit")||a)return undefined;if(this.state.broadcastState!==j.FINISHED)return h._("You are still broadcasting");else return undefined}.bind(this)),this.state.cameraState==="CHECK_CAMERA_ACCESS"&&window.setTimeout(function(){this.state.cameraState==="CHECK_CAMERA_ACCESS"&&b("LiveVideoBroadcastActions").updateCameraState(k.REQUEST_CAMERA_ACCESS)}.bind(this),b("LiveVideoBroadcastConstants").REQUEST_ACCESS_DELAY_MS),b("LiveVideoBroadcastActions").uiMounted(),window.addEventListener("resize",function(){this.$20()}.bind(this)),this.$5.addSubscriptions(b("UFIThreadedFacecastCommentsStore").addListener(function(){this.$20()}.bind(this)))};o.prototype.componentDidUpdate=function(a,b){this.$2||this.$8(),this.state.isDescriptionExpanded!==b.isDescriptionExpanded&&this.$20()};o.prototype.componentWillUnmount=function(){clearInterval(this.$4),this.$5.release()};o.requestCameraURL=function(){navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then(function(a){a.every(function(a){a=a.kind;return a!=="videoinput"})?b("LiveVideoBroadcastActions").updateCameraState(k.CAMERA_NOT_FOUND):b("LiveVideoBroadcastActions").getWebcamStreamUrlRequest()})["catch"](function(){return b("LiveVideoBroadcastActions").updateCameraState(k.CAMERA_NOT_FOUND)}):b("LiveVideoBroadcastActions").updateCameraState(k.CAMERA_NOT_FOUND)};o.prototype.$20=function(){this.$8(),this.$9()};o.prototype.render=function(){return!this.state.contextConfig?null:this.state.shouldBeClosed?null:b("React").createElement(b("LiveVideoBroadcast.react"),{accessToken:this.state.accessToken,broadcastState:this.state.broadcastState,contextConfig:this.state.contextConfig,countdownTime:this.state.countdownTime,dialog:this.state.dialog,inputSource:this.state.inputSource,isUpdateRequestPending:this.state.isUpdateRequestPending,shareMode:this.state.shareMode,showSaveChangesDialog:this.state.showSaveChangesDialog,targetID:this.state.targetID,ufiMarkup:this.state.ufiMarkup,videoID:this.state.videoID,onActionButtonClick:this.$15,onNUXCloseButtonClick:this.$17,onNewCommentsPillClick:this.$16})};e.exports=b("FluxContainer").create(o)}),null);