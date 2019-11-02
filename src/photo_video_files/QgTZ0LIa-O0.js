if (self.CavalryLogger) { CavalryLogger.start_js(["hDS9o"]); }

__d("FBStoryThread.react",["ix","cx","fbt","CameraPostBucketOwnerHelper","CameraPostDeletedToast.react","CameraPostGraphQLAPI","CameraPostMedia.react","CameraPostMediaCaptionComponent.react","CameraPostMediaHelper","CameraPostNFXToast.react","CameraPostOwnerView.react","CameraPostReportButton.react","CameraPostSendingToast.react","CameraPostSendReply.react","CameraPostSendReplyDraftEditor.react","CameraPostTypesHelper","Event","FBStoriesActions","FBStoriesDeleteConfirmationDialog.react","FBStoriesFooterMetadataRenderer.react","FBStoriesGatingConfig","FBStoriesInteractiveFeedbackOverlay.react","FBStoriesLightweightReactions.react","FBStoriesLinkRenderer.react","FBStoriesLoggingConstants","FBStoriesLoggingHelper","FBStoriesMuteConfirmationDialog.react","FBStoriesNFXConfirmationDialog.react","FBStoriesNuxHelper","FBStoriesOptimisticUploadLabel.react","FBStoriesReportToAdminConfirmationDialog.react","FBStoriesSponsorRenderer.react","FBStoriesViewerEntrypoint","FBStoriesViewersAnchor.react","FBStoryLiveSidePaneContainer.react","FBStoryThreadGroupAdminNux.react","FBStoryThreadTagsSidePane.react","FBStoryThreadViewers.react","Focus","GroupsRemoveUserWithOtherOptionsDialog.react","GroupsStoriesAdminConfig","GroupView","Image.react","ImagePositioner.react","Keys","Locale","PageTransitions","QE2Logger","React","ReactCSSTransitionGroup","ReactMenu","ShimButton.react","Visibility","XGroupsController","XUIButton.react","asset","createCancelableFunction","emptyFunction","fbglyph","getActiveElement","gkx","promiseDone","SegmentedProgressBar.react","XUISpinner.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactMenu").Item,l={enter:"_1gs8",enterActive:"_1gs9",leave:"_1gsa",leaveActive:"_1gsc"},m=Object.freeze({PREV:"prev",NEXT:"next",STAY_HERE:"stay_here"}),n=.3,o=1e3,p=200,q=1e3,r=200,s=200,t=200,u=500,v=500,w=1e3,x={enter:"_3dep",enterActive:"_3deq",leave:"_3der",leaveActive:"_3deu"};c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){__p&&__p();j.constructor.call(this,a),this.$2=[],this.state={isPaused:!1,isPausedByDev:!1,isReplyFocused:!1,navDirectionOnClick:m.STAY_HERE,isShowingSendingToast:!1,isShowingDeletedToast:!1,isShowingNFXToast:!1,showPausedOverlay:!1,showDarkWashOverlay:!1,showStoryUI:!0,isViewersPanelShown:!1,isDeleteConfirmationDialogShown:!1,isMuteConfirmationDialogShown:!1,isGroupAdminNuxShown:!1,isReactionSendInProgress:!1,isReportToAdminConfirmationDialogShown:!1,isWithPanelShown:!1,isNFXConfirmationDialogShown:!1,selectedNFX:null,isDeleteStoryAndRemoveUserDialogShown:!1},this.$13=!1,this.$24=function(a){a!==this.$5&&(a&&(b("Event").listen(a,"keydown",function(event){return this.$78(event)}.bind(this),b("Event").Priority.URGENT),b("Event").listen(a,"keyup",function(event){return this.$79(event)}.bind(this),b("Event").Priority.URGENT),a.focus())),this.$5=a}.bind(this),this.$43=function(){this.$14(!1,!0),this.$9=!0}.bind(this),this.$44=function(){!this.$8&&!this.state.isReplyFocused&&!this.state.isViewersPanelShown&&this.$15(),this.$8=!1,this.$9=!1}.bind(this),this.$45=function(){this.setState({isPausedByDev:!0}),this.$14()}.bind(this),this.$80=function(){if(!this.props.canOpenCurrentThreadViewerSheet)return;var a=!this.state.isViewersPanelShown;this.setState({isViewersPanelShown:a,isWithPanelShown:!1});a&&this.$23();this.$9||(a?this.$14(!1,!0):this.$15())}.bind(this),this.$55=function(){this.setState({isWithPanelShown:!0,isViewersPanelShown:!1}),this.$9||this.$14(!1,!0)}.bind(this),this.$56=function(a){this.$9||this.$14(!1,!0),a.stopPropagation()}.bind(this),this.$59=function(a){this.$9||this.$14(!1,!1),a.stopPropagation()}.bind(this),this.$81=function(a){this.$9||(this.$14(!1,!1),this.setState({showDarkWashOverlay:!0})),a.stopPropagation()}.bind(this),this.$60=function(a){this.$9||this.$15(),a.stopPropagation()}.bind(this),this.$73=function(){this.setState({isWithPanelShown:!1}),this.$9||this.$15()}.bind(this),this.$46=function(){this.$8=!0,this.$14(!1,!0)}.bind(this),this.$47=function(){if(this.state.isPaused)return;this.$14(!1,!0)}.bind(this),this.$29=function(){this.setState({isDeleteConfirmationDialogShown:!0})}.bind(this),this.$67=function(){this.setState({isDeleteConfirmationDialogShown:!1})}.bind(this),this.$66=function(){this.setState({isDeleteConfirmationDialogShown:!1}),this.$82()}.bind(this),this.$32=function(){this.setState({isDeleteStoryAndRemoveUserDialogShown:!0})}.bind(this),this.$49=function(){this.setState({isDeleteStoryAndRemoveUserDialogShown:!1})}.bind(this),this.$48=function(){this.setState({isDeleteStoryAndRemoveUserDialogShown:!1}),this.$82()}.bind(this),this.$35=function(){this.setState({isMuteConfirmationDialogShown:!0})}.bind(this),this.$68=function(){this.setState({isMuteConfirmationDialogShown:!1})}.bind(this),this.$69=function(){this.setState({isMuteConfirmationDialogShown:!1}),this.props.onMuteBucketOwner()}.bind(this),this.$38=function(){this.setState({isReportToAdminConfirmationDialogShown:!0})}.bind(this),this.$72=function(){this.setState({isReportToAdminConfirmationDialogShown:!1})}.bind(this),this.$71=function(){this.setState({isReportToAdminConfirmationDialogShown:!1}),this.props.onReportCurrentThreadToAdmin()}.bind(this),this.$84=function(){this.setState({isNFXConfirmationDialogShown:!1,selectedNFX:null})}.bind(this),this.$85=function(){var a;a=(a=this.state.selectedNFX)!=null?a.id:a;a&&(this.props.onTakeNegativeFeedbackAction(a),this.$86(w));this.setState({isNFXConfirmationDialogShown:!1});this.$15()}.bind(this),this.$26=function(){if(!this.props.currentThreadData)return;var a=this.props.currentThreadData.bucketOwner;a=b("CameraPostBucketOwnerHelper").getId(a);if(!a)return;this.props.onCloseRequested();a=b("XGroupsController").getURIBuilder().setString("idorvanity",a).setEnum("view",b("GroupView").PENDING_STORIES).getURI();b("PageTransitions").go(a)}.bind(this),this.$58=function(){this.$87("auto_jump")}.bind(this),this.$91=b("createCancelableFunction")(function(){this.setState({isShowingSendingToast:!1})}.bind(this)),this.$90=b("createCancelableFunction")(function(a){this.setState({isShowingSendingToast:!0},function(){this.$10=setTimeout(function(){this.$10=undefined,this.$91()}.bind(this),a)}.bind(this))}.bind(this)),this.$74=function(a){__p&&__p();if(a==="")return;var c=this.props.currentThreadData;if(!c||c.isLive)return;var d=c.threadID;c=c.cameraPostType;var e=this.props.userInfo.userID;this.$89();this.$15();this.setState({isReplyFocused:!1});b("Focus").set(this.$5);b("promiseDone")(b("CameraPostGraphQLAPI").sendDirectMessageReply(e,d,a,c,!0))}.bind(this),this.$76=function(a){__p&&__p();if(a==="")return;var c=this.props.currentThreadData;if(!c||c.isLive)return;var d=c.threadID;c=c.cameraPostType;var e=this.props.userInfo.userID;this.$89();this.$15();this.setState({isReplyFocused:!1});b("Focus").set(this.$5);b("promiseDone")(b("CameraPostGraphQLAPI").sendDirectStickerReply(e,d,c,a))}.bind(this),this.$77=function(a){__p&&__p();if(a){var c=this.props.currentThreadData;if(!c||c.isLive)return;var d=c.threadID;c=c.cameraPostType;var e=this.props.userInfo.userID;a=a.source.url;this.$89();this.$15();this.setState({isReplyFocused:!1});b("Focus").set(this.$5);b("promiseDone")(b("CameraPostGraphQLAPI").sendDirectGifReply(e,d,c,a))}}.bind(this),this.$94=b("createCancelableFunction")(function(a,b){this.setState({isShowingDeletedToast:!1}),b&&(this.$12=setTimeout(function(){this.$12=undefined,b&&b()}.bind(this),a))}.bind(this)),this.$93=b("createCancelableFunction")(function(a,b,c){this.setState({isShowingDeletedToast:!0},function(){this.$11=setTimeout(function(){this.$94(b,c)}.bind(this),a)}.bind(this))}.bind(this)),this.$95=b("createCancelableFunction")(function(){this.setState({isShowingNFXToast:!1,selectedNFX:null})}.bind(this)),this.$86=b("createCancelableFunction")(function(a){this.setState({isShowingNFXToast:!0},function(){this.$10=setTimeout(function(){this.$95()}.bind(this),a)}.bind(this))}.bind(this)),this.$75=function(a){this.$14(!1,!0),this.setState({isReplyFocused:!0})}.bind(this),this.$57=function(a){this.state.isPaused?(this.$15(),this.state.isReplyFocused&&this.setState({isReplyFocused:!1})):this.$14(!1,!0)}.bind(this),this.$51=function(a){clearTimeout(this.$4),this.$4=setTimeout(function(){if(this.state.isPaused)return;this.$14(!0,!1)}.bind(this),u)}.bind(this),this.$52=function(a){__p&&__p();clearTimeout(this.$4);if(a.target.tagName==="INPUT")return;if(this.state.showDarkWashOverlay)return;if(this.state.isPaused)this.$15(),this.state.isReplyFocused&&this.setState({isReplyFocused:!1});else{if(!this.props.enableNavigation)return;if(a.target.className!=="_ide")return;this.state.navDirectionOnClick===m.PREV?this.$88("tap_backward"):this.state.navDirectionOnClick===m.NEXT&&!this.state.isLastThread&&this.$87("tap_forward")}}.bind(this),this.$53=function(event){this.$1=event.target}.bind(this),this.$54=function(a){var c=a.currentTarget.offsetWidth;a=a.nativeEvent.offsetX;var d=n*c;b("Locale").isRTL()&&(a=c-a);a>=0&&a<=d?this.setState({navDirectionOnClick:m.PREV}):a>=c-d&&a<=c?this.setState({navDirectionOnClick:m.NEXT}):this.setState({navDirectionOnClick:m.STAY_HERE})}.bind(this),this.$63=function(a){this.setState({isReactionSendInProgress:!0}),this.$92(a),this.$14(!1,!1)}.bind(this),this.$64=function(){this.setState({isReactionSendInProgress:!1}),this.$15()}.bind(this),this.$15=function(){if(this.state.isPausedByDev)return;clearTimeout(this.$4);clearTimeout(this.$3);this.setState({isPaused:!1,showPausedOverlay:!1,showDarkWashOverlay:!1,showStoryUI:!0,isViewersPanelShown:!1,isWithPanelShown:!1})}.bind(this),a.autoOpenViewersheet&&(this.state=Object.assign({},this.state,{isViewersPanelShown:!0,isWithPanelShown:!1,isPaused:!0,showStoryUI:!0,showPausedOverlay:!1}))}a.prototype.componentDidMount=function(){this.$2=[b("Visibility").addListener(b("Visibility").HIDDEN,function(){if(this.state.isPaused){this.$13=!1;return}this.$13=!0;this.$14(!1,!0)}.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,function(){this.$13&&this.$15()}.bind(this))],this.$5&&b("Focus").set(this.$5),this.$16(),this.$17(this.props)};a.prototype.UNSAFE_componentWillUpdate=function(a,b){!this.props.allBucketsViewed&&a.allBucketsViewed&&a.onDone(),this.props.bucketID!==a.bucketID?(this.setState(this.$18()),this.$17(a)):this.props.currentThreadIndex!==a.currentThreadIndex&&this.$19(),this.$20(a,b)};a.prototype.componentDidUpdate=function(a,c){a=b("getActiveElement")();!this.state.isReplyFocused&&this.$5&&!this.props.isBucketLive&&(!this.$1||this.$1===a&&a.tagName!=="A"&&a.tagName!=="BUTTON")&&b("Focus").set(this.$5);c.isViewersPanelShown===!0&&this.state.isViewersPanelShown===!1&&this.$21()};a.prototype.$21=function(){this.props.currentThreadID&&b("FBStoriesActions").markThreadViewersSeen(this.props.currentThreadID)};a.prototype.$19=function(){var a=this.props.currentThreadData;if(!a)return;this.setState({isPaused:!1,showDarkWashOverlay:!1,showStoryUI:!0,showPausedOverlay:!1})};a.prototype.$17=function(a){a.isGroupAdminBucket&&b("FBStoriesNuxHelper").checkIfNuxShouldBeShown(b("FBStoryThreadGroupAdminNux.react").nuxID(),function(){this.$14(!1,!1),this.setState({isGroupAdminNuxShown:!0})}.bind(this))};a.prototype.$16=function(){b("FBStoriesLoggingHelper").openMediaLog()};a.prototype.$22=function(){b("FBStoriesLoggingHelper").mediaLog(b("FBStoriesLoggingConstants").ACTION_DELETE_MEDIA)};a.prototype.$23=function(){b("FBStoriesLoggingHelper").mediaLog(b("FBStoriesLoggingConstants").ACTION_OPEN_SEEN_SUMMARY)};a.prototype.$20=function(a,b){a.currentThreadID!==this.props.currentThreadID&&(a.currentThreadID||a.isBucketLive)&&this.$16()};a.prototype.render=function(){__p&&__p();var a="_4tkv"+(this.props.isLandscape&&this.props.isBucketLive?" _fxh":"")+" _24o3"+(this.props.isBucketLive?" _2dnb":""),c=this.props.userInfo,d=c.userID;c.userName;c.userProfilePic;c=this.props.currentThreadData;if(!c)return b("React").createElement("div",{role:"tabpanel",tabIndex:-1,ref:this.$24,className:a});var e=c.media,f=c.cameraPostType,h=b("CameraPostMediaHelper").getType(e),j=b("CameraPostMediaHelper").getWidth(e),n=b("CameraPostMediaHelper").getHeight(e),o=b("CameraPostMediaHelper").isSphericalPhoto(e),q,u,v,y,z,A,B="",C,D,E,F={},G,H,I=[],J,K=!this.props.shouldDisableReply&&b("FBStoriesGatingConfig").isLightweightReactionEnabled;if(!c.isLive){var L=c.time,M=c.participants,N=c.bucketOwner,O=c.threadOwner,P=c.cameraPostSource,Q=c.wwwTextFormatMetadata,R=c.textFormatMetadata,S=c.instagramProfileURL,T=c.originalPostStoryAttribution,U=c.withTags,V=c.inlineActivities,W=c.explicitLocation,X=c.activityDescription;A=c.threadID;B=c.messageText;C=c.isPlainText;D=c.backdropImage;E=c.defaultBackground;G=c.linkAttachment;H=c.mediaBackground;I=c.delightRanges;u=b("CameraPostBucketOwnerHelper").getName(N);q=b("CameraPostBucketOwnerHelper").getId(N);y={rootMessageText:B,wwwTextFormatMetadata:Q,textFormatMetadata:R};F={withTags:U,inlineActivities:V,explicitLocation:W,activityDescription:X,threadID:A};Q=[];this.$25()&&Q.push(b("React").createElement(k,{onClick:this.$26,key:"group_pending_stories"},b("React").createElement(b("Image.react"),{src:g("366764")}),this.$27()));this.$28()&&Q.push(b("React").createElement(k,{disabled:this.props.isStoryUploading,onClick:this.$29,key:"delete_own_thread"},this.props.isStoryUploading&&b("React").createElement(b("XUISpinner.react"),{size:"small"}),b("React").createElement(b("Image.react"),{src:g("114073")}),this.$30(h)));this.$31()&&Q.push(b("React").createElement(k,{onClick:this.$32,key:"delete_story_and_remove_user"},b("React").createElement(b("Image.react"),{src:g("114008")}),this.$33()));this.$34()&&Q.push(b("React").createElement(k,{onClick:this.$35,key:"mute_bucket_owner"},b("React").createElement(b("Image.react"),{src:g("113496")}),b("React").createElement("span",{className:"_65ki"},this.$36(u))));this.$37()&&Q.push(b("React").createElement(k,{onClick:this.$38,key:"report_thread"},b("React").createElement(b("Image.react"),{src:g("372467")}),this.$39()));if(this.props.currentThreadData&&!this.props.currentThreadData.isLive&&this.props.currentThreadData.negativeFeedbackActions){R=this.props.currentThreadData.negativeFeedbackActions;for(var U=0;U<R.length;U++){V=R[U];Q.push(b("React").createElement(k,{onClick:this.$40.bind(this,V),key:(W=V)!=null?W.negative_feedback_action_type:W},b("React").createElement(b("Image.react"),{src:(X=V)!=null?(X=X.negative_feedback_action_icon)!=null?X.uri:X:X,width:16,height:16}),(W=V)!=null?(W=W.title)!=null?W.text:W:W))}}this.$41()&&Q.push(this.$42());z=b("React").createElement("span",null,b("React").createElement(b("SegmentedProgressBar.react"),{paused:this.state.isPaused,currentSegmentIndex:this.props.currentThreadIndex,currentSegmentPercentComplete:this.props.currentThreadPercentDone,segmentCount:this.props.threadsCount}),b("React").createElement(b("CameraPostReportButton.react"),{canReportThreadToFacebook:this.props.canUserReportThreadToFacebook,threadID:A,onPopoverShow:this.$43,onPopoverHide:this.$44,onPauseByDevClick:this.$45,onPopoverItemClick:this.$46,onPopoverItemFocus:this.$47},Q));v=b("React").createElement(b("CameraPostOwnerView.react"),{cameraPostType:f,cameraPostSource:P,isSphericalPhoto:o,participants:M,bucketOwner:N,threadID:A,threadOwner:O,time:L,instagramProfileURL:S,originalPostStoryAttribution:T});X=O.name;V=O.id;X&&V&&(J=b("React").createElement(b("GroupsRemoveUserWithOtherOptionsDialog.react"),{actorID:d.toString(),contentID:A.toString(),contentOwnerName:X,contentOwnerID:V,groupID:b("CameraPostBucketOwnerHelper").getId(c.bucketOwner),onConfirm:this.$48,onHide:this.$49,shouldShowApplyToOtherGroups:!0,shouldShowBlockMember:!0,shouldShowDeclinePendingInvite:!0,shouldShowDeleteComment:!0,shouldShowDeletePoll:!0,shouldShowDeletePost:!0,shouldShowDeleteStory:!0,shouldShowDialog:this.state.isDeleteStoryAndRemoveUserDialogShown,subtitle:this.$50(X)}))}W=200;U=this.state.showPausedOverlay&&!o?b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:x,transitionEnterTimeout:W,transitionLeaveTimeout:W},b("React").createElement(b("ShimButton.react"),{"aria-label":i._("Play"),className:"_ida",onMouseDown:this.$51,onMouseUp:this.$52,onKeyPress:this.$52,tabIndex:0},b("React").createElement("span",{className:"_idd"}))):null;R=b("React").createElement("div",{className:"_6r8a"+(this.state.showDarkWashOverlay===!0?" _6r8b":"")});Q=b("CameraPostMedia.react").getMediaSizeBasedOnWindow();P=null;this.props.canShowProduction&&(P=b("React").createElement(b("XUIButton.react"),{className:"_6fkg",image:b("React").createElement(b("Image.react"),{src:g("492049")}),label:i._("Add to Your Story"),onClick:function(){this.props.onDone(),this.props.openComposerForProduction()}.bind(this)}));M=b("React").createElement("span",null,b("React").createElement("div",{role:"tabpanel",tabIndex:0,ref:this.$24,className:a,onFocus:this.$53,onMouseMove:this.$54},b("React").createElement("div",{className:"_24o4"+(K&&!this.state.isReactionSendInProgress?" _6mh7":"")+(this.state.navDirectionOnClick===m.PREV||this.state.navDirectionOnClick===m.NEXT?" _4drj":""),key:A},b("React").createElement(b("CameraPostMedia.react"),{backdropImage:D,linkAttachment:G,mediaBackground:H,defaultBackground:E,storyMetadata:F,openWithSidePanel:this.$55,onLinkClick:this.$56,media:e,loop:!1,paused:this.state.isPaused,onTimeUpdate:this.props.onTimeUpdate,onMouseDown:o?null:this.$51,onMouseUp:o?null:this.$52,onClick:o?this.$57:null,onDone:this.props.isBucketLive?null:this.$58,onMuteMouseUp:this.props.onClickMute,isBucketLive:this.props.isBucketLive,isMediaMuted:this.props.isStoryMuted,cameraPostType:f,userID:d,threadID:A,showMuteButton:this.state.showStoryUI&&!this.props.isSelectedBucketLiveAndEnded,satpData:y,messageText:B,delightRanges:I,isPlainText:C,expandHandler:this.$59,truncateHandler:this.$60,onVideoPaused:function(){this.state.isPaused||this.$14(!1,!0)}.bind(this)},b("React").createElement(b("ReactCSSTransitionGroup"),{className:"_2up9",transitionName:x,transitionEnterTimeout:s,transitionLeaveTimeout:t},this.$61())),R,U,b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:x,transitionEnterTimeout:s,transitionLeaveTimeout:t},this.state.showStoryUI&&v,this.$62(m.PREV),this.$62(m.NEXT)),b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:l,transitionEnterTimeout:p,transitionLeaveTimeout:p},this.state.isShowingSendingToast&&b("React").createElement(b("CameraPostSendingToast.react"),null)),b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:l,transitionEnterTimeout:r,transitionLeaveTimeout:r},b("React").createElement(b("CameraPostDeletedToast.react"),{key:this.state.isShowingDeletedToast,visible:this.state.isShowingDeletedToast})),b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:l,transitionEnterTimeout:w,transitionLeaveTimeout:w},this.state.isShowingNFXToast&&b("React").createElement(b("CameraPostNFXToast.react"),{nfxPayload:this.state.selectedNFX})),K&&b("React").createElement(b("FBStoriesLightweightReactions.react"),{isAnimating:this.state.isReactionSendInProgress,onReactionClick:this.$63,onReactionEndAnimation:this.$64,onMouseEnter:function(){return this.$14(!1,!0)}.bind(this),onMouseLeave:this.$15})),b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:x,transitionEnterTimeout:s,transitionLeaveTimeout:t},this.state.showStoryUI&&z,this.props.isOwnThread&&this.props.canShowProduction?b("React").createElement("div",{className:"_4wsa"},P):null,this.$65()),b("React").createElement(b("ImagePositioner.react"),{width:Q.width,height:Q.height,imageWidth:j,imageHeight:n},function(a){var c=a.top,d=a.left,e=a.width;a=a.height;return b("React").createElement(b("FBStoriesInteractiveFeedbackOverlay.react"),{currentThreadID:this.props.currentThreadID,topPx:c,leftPx:d,widthPx:e,heightPx:a,overlays:this.props.threadOverlays,isConsumer:!this.props.isOwnThread,onInteractiveOverlayMouseEnter:function(){return this.$14()}.bind(this),onInteractiveOverlayMouseLeave:this.$15})}.bind(this))),b("React").createElement(b("FBStoriesDeleteConfirmationDialog.react"),{confirmAction:this.$66,hideAction:this.$67,mediaType:h,shown:this.state.isDeleteConfirmationDialogShown}),J,b("React").createElement(b("FBStoriesMuteConfirmationDialog.react"),{shown:this.state.isMuteConfirmationDialogShown,hideAction:this.$68,confirmAction:this.$69,bucketOwnerName:u,cameraPostType:f}),this.$70(),b("React").createElement(b("FBStoryThreadGroupAdminNux.react"),{groupID:q||"",onClose:function(){this.$15(),this.setState({isGroupAdminNuxShown:!1})}.bind(this),onNavigateToGroupSettings:this.props.onCloseRequested,shown:this.state.isGroupAdminNuxShown}),b("React").createElement(b("FBStoriesReportToAdminConfirmationDialog.react"),{confirmAction:this.$71,hideAction:this.$72,mediaType:h,shown:this.state.isReportToAdminConfirmationDialogShown}));if(this.props.isBucketLive)return b("React").createElement("div",{className:"_115q"},M,b("React").createElement(b("FBStoryLiveSidePaneContainer.react"),{onDone:this.props.onDone}));N=null;this.props.isOwnThread&&this.state.isViewersPanelShown?N=b("React").createElement("div",{className:"_115r _397_"+(this.props.canShowProduction?" withAddButton":"")},b("React").createElement(b("FBStoryThreadViewers.react"),{viewers:this.props.threadViewers,threadOverlays:this.props.threadOverlays,cameraPostType:f})):this.state.isWithPanelShown&&this.props.currentThreadData&&!this.props.currentThreadData.isLive&&this.props.currentThreadData.withTags&&(N=b("React").createElement("div",{className:"_115r"+(this.props.shouldDisableReply?"":" _115s")+(this.props.canShowProduction?" withAddButton":"")},b("React").createElement(b("FBStoryThreadTagsSidePane.react"),{tags:this.props.currentThreadData.withTags.edges,closeWithTagPane:this.$73})));return N?b("React").createElement("div",{className:"_115q"},b("React").createElement(b("ReactCSSTransitionGroup"),{transitionName:x,transitionEnterTimeout:s,transitionLeaveTimeout:t},N),M):M};a.prototype.$65=function(){__p&&__p();if(this.props.shouldDisableReply)return null;var a=this.props.userInfo,c=a.userID,d=a.userName;a=a.userProfilePic;var e=this.props.currentThreadData;if(!e||e.isLive)return null;var f=e.threadID,g=e.cameraPostType;b("QE2Logger").logExposureForUser("fb_stories_web_reply_bar");var h=b("FBStoriesGatingConfig").isReplyDraftEditorEnabled;if(h)return b("React").createElement(b("CameraPostSendReplyDraftEditor.react"),{cameraPostType:g,replyProfileName:d,replyProfilePic:a,userID:c,threadID:f,ownerID:e.bucketOwner.id,focused:this.state.isReplyFocused,onReplyEntered:this.$74,onFocusInput:this.$75,onStickerSelect:this.$76,onGifSelect:this.$77});else return b("React").createElement(b("CameraPostSendReply.react"),{cameraPostType:g,replyProfileName:d,replyProfilePic:a,userID:c,threadID:f,ownerID:e.bucketOwner.id,focused:this.state.isReplyFocused,onReplyEntered:this.$74,onFocusInput:this.$75,onStickerSelect:this.$76,onGifSelect:this.$77})};a.prototype.$82=function(){this.$14(!1,!1);this.$22();var a=function(){var a=this.props.currentThreadID,b=this.props.bucketID;this.$15();a&&b&&this.$28()&&this.props.onDeleteCurrentThread()}.bind(this);this.$83(a)};a.prototype.$40=function(a){this.setState({isNFXConfirmationDialogShown:a!==null,selectedNFX:a})};a.prototype.$70=function(){if(this.state.isNFXConfirmationDialogShown&&this.state.selectedNFX!==null)return b("React").createElement(b("FBStoriesNFXConfirmationDialog.react"),{confirmAction:this.$85,hideAction:this.$84,nfxPayload:this.state.selectedNFX,shown:this.state.isNFXConfirmationDialogShown&&this.state.selectedNFX!==null});else return null};a.prototype.$62=function(a){__p&&__p();if(!this.state.showStoryUI||this.state.showPausedOverlay||!this.props.enableNavigation)return null;var c=this.props.allowedNavType==="PREV_ONLY"&&a===m.NEXT,d=this.props.allowedNavType==="NEXT_ONLY"&&a===m.PREV;if(d||c)return null;d=function(c){c.preventDefault(),c.stopPropagation(),b("Focus").set(this.$5),a===m.NEXT?this.$87("tap_forward"):this.$88("tap_backward")}.bind(this);c=function(b){b.stopPropagation(),this.setState({navDirectionOnClick:a})}.bind(this);return b("React").createElement("button",{"aria-label":a===m.NEXT?i._("Next Button"):a===m.PREV?i._("Previous Button"):i._("Button"),className:"_24o5"+(a===m.NEXT?" _24o8":"")+(a===m.PREV?" _24o7":"")+(this.state.navDirectionOnClick===a?" _24o6":""),onClick:d,onMouseMove:c,tabIndex:0})};a.prototype.$89=function(){this.$90(o)};a.prototype.$92=function(a){var c=this.props.currentThreadData;if(!c||c.isLive)return;var d=this.props.userInfo.userID,e=c.threadID;c=c.cameraPostType;b("promiseDone")(b("CameraPostGraphQLAPI").sendLightweightReactionReply(d,e,c,a))};a.prototype.$83=function(a){this.$93(q,r,a)};a.prototype.$87=function(a){b("FBStoriesLoggingHelper").storyNavigationLog(a),this.props.onNextThread()};a.prototype.$88=function(a){b("FBStoriesLoggingHelper").storyNavigationLog(a),this.props.onPrevThread()};a.prototype.$96=function(a){this.$15(),this.setState({isReplyFocused:!1})};a.prototype.$78=function(event){__p&&__p();if(event.getModifiers().any||this.state.isReplyFocused||event.target!==this.$5||!this.props.enableNavigation)return!0;var a=b("Event").getKeyCode(event);switch(a){case b("Keys").LEFT:b("Locale").isRTL()?this.$87("tap_forward"):this.$88("tap_backward");return!1;case b("Keys").RIGHT:b("Locale").isRTL()?this.$88("tap_backward"):this.$87("tap_forward");return!1;default:a=String.fromCharCode(a);a.match(/\w/)&&this.setState({isReplyFocused:!0})}return null};a.prototype.$79=function(event){__p&&__p();if(event.getModifiers().any||this.state.isReplyFocused||event.target!==this.$5)return!0;var a=b("Event").getKeyCode(event);switch(a){case b("Keys").SPACE:if(this.$9||this.state.isViewersPanelShown||this.state.showDarkWashOverlay)return!1;!this.state.isPaused?this.$14(!1,!0):this.$15();event.preventDefault();event.stopImmediatePropagation();return!1;default:return null}};a.prototype.$14=function(a,b){this.setState({isPaused:!0,showStoryUI:!0,showPausedOverlay:b}),a&&(clearTimeout(this.$3),this.$3=setTimeout(function(){this.setState({showStoryUI:!1})}.bind(this),v))};a.prototype.$30=function(a){a=a||"";if(!this.$28())return null;switch(a.toUpperCase()){case"PHOTO":return i._("Delete Photo");case"VIDEO":return i._("Delete Video");default:return i._("Delete")}};a.prototype.$34=function(){return(this.props.viewerEntrypoint===b("FBStoriesViewerEntrypoint").HOMEPAGE_TRAY||this.props.viewerEntrypoint===b("FBStoriesViewerEntrypoint").GROUP_MALL||this.props.viewerEntrypoint===b("FBStoriesViewerEntrypoint").PERMANENT_LINK_VIEW)&&!this.props.isUserManagedBucket};a.prototype.$25=function(){__p&&__p();if(!this.props.isGroupAdminBucket)return!1;if(!this.props.currentThreadData)return!1;var a=this.props.currentThreadData.bucketOwner;if(!b("CameraPostBucketOwnerHelper").requiresAdminApproval(a))return!1;var c=b("GroupsStoriesAdminConfig").showPendingStoriesInViewerForGroupId;a=b("CameraPostBucketOwnerHelper").getId(a);return!(a in c)||!c[a]?!1:!0};a.prototype.$31=function(){if(!this.props.currentThreadData||this.props.currentThreadData.isLive)return!1;if(!this.props.userInfo.userID)return!1;var a=this.props.currentThreadData;if(!b("CameraPostTypesHelper").isGroupStory(a.cameraPostType))return!1;var c=a.threadOwner;return!c.id||!c.name?!1:b("CameraPostBucketOwnerHelper").isViewerGroupModerator(a.bucketOwner)||b("CameraPostBucketOwnerHelper").isViewerGroupAdmin(a.bucketOwner)};a.prototype.$41=function(){__p&&__p();if(!this.props.isGroupAdminBucket)return!1;if(!b("gkx")("AT6RL7EW_23_Z7sT3afPg1zrIHaWm6FusQaDwRg0iKZhJlmeAh6YsBgc3U2Kxf24L22XJXI2AcPsliTJtc1_3YxcPwSoGhyJdyIvq46ajiqDsQ"))return!1;if(!this.props.currentThreadData||this.props.currentThreadData.isLive)return!1;var a=this.props.currentThreadData.bucketOwner,c=this.props.currentThreadData.threadOwner.id;if(!c)return!1;return b("CameraPostBucketOwnerHelper").isGroupAdmin(a,c)?!1:!0};a.prototype.$42=function(){if(!this.props.currentThreadData||this.props.currentThreadData.isLive)return null;var a=this.props.currentThreadData.bucketOwner,c=this.props.currentThreadData.threadOwner.id;if(!c)return null;a=b("CameraPostBucketOwnerHelper").isMutedFromGroup(a,c);return a?b("React").createElement(k,{onClick:this.props.onUnmuteMemberFromGroup,key:"unmute_member_from_group"},b("React").createElement(b("Image.react"),{src:g("599480")}),this.$97()):b("React").createElement(k,{onClick:this.props.onMuteMemberFromGroup,key:"mute_member_from_group"},b("React").createElement(b("Image.react"),{src:g("599480")}),this.$98())};a.prototype.$36=function(a){return i._("Mute {bucket_owner_name}",[i._param("bucket_owner_name",a)])};a.prototype.$98=function(){return i._("Mute Member")};a.prototype.$97=function(){return i._("Unmute Member")};a.prototype.$27=function(){return i._("Review Photos\/Videos")};a.prototype.$33=function(){return i._("Delete Story And Remove User")};a.prototype.$50=function(a){return i._("Delete this story and remove {story owner name} from the group?",[i._param("story owner name",a)])};a.prototype.$37=function(){if(this.props.isOwnThread)return!1;if(this.props.isGroupAdminBucket)return!1;var a=this.props.currentThreadData;if(!a)return!1;a=a.cameraPostType;return!b("CameraPostTypesHelper").isGroupStory(a)?!1:b("gkx")("AT6AEel4IRvdKiKTL8K2X0ZTy0U5pjIVXgCmwgOr8ub7vRHBdRmqti6x_q4o1TqHlTVQvjcf0FAzRKiaAQjjYdDkY0RK2TjcwRW1W4i9okBKCw")};a.prototype.$39=function(){return i._("Report to Group Admins")};a.prototype.$28=function(){return this.props.isUserManagedThread};a.prototype.$18=function(){return{isPaused:!1,isPausedByDev:!1,isReplyFocused:!1,navDirectionOnClick:m.STAY_HERE,isShowingSendingToast:!1,isShowingDeletedToast:!1,isShowingNFXToast:!1,showPausedOverlay:!1,showDarkWashOverlay:!1,showStoryUI:!0,isViewersPanelShown:!1,isDeleteConfirmationDialogShown:!1,isMuteConfirmationDialogShown:!1,isNFXConfirmationDialogShown:!1,isGroupAdminNuxShown:!1,isReactionSendInProgress:!1,isReportToAdminConfirmationDialogShown:!1,isWithPanelShown:!1,selectedNFX:null,isDeleteStoryAndRemoveUserDialogShown:!1}};a.prototype.$61=function(){var a=null;this.props.isStoryUploading?a=b("React").createElement(b("FBStoriesOptimisticUploadLabel.react"),null):this.props.isThreadReviewStatusPending?a=b("React").createElement("span",{className:"_449_"},i._("Pending Admin Approval")):this.state.showStoryUI&&this.props.canSeeCurrentThreadViewCount&&(a=this.$99());var c=null,d=this.props.currentThreadData;b("gkx")("AT4ssjYxEC6iIcMjb21325zOUo8QwJJQW76uFH3Xu51HrGsGVqhaia4e_fxQFq3OsQpsFC0NrXf8qLhLuvt68JYqSmRn9rf08RVEl7vyFONUWQ")&&d&&!d.isLive&&d.media&&d.media.message&&d.media.message.text?c=b("React").createElement(b("CameraPostMediaCaptionComponent.react"),{currentThreadData:d,expandHandler:this.$81,truncateHandler:this.$60,messageText:d.media.message.text,openWithSidePanel:this.$55,onLinkClick:this.$56}):c=b("React").createElement(b("FBStoriesFooterMetadataRenderer.react"),{currentThreadData:this.props.currentThreadData,openWithSidePanel:this.$55,onLinkClick:this.$56});return b("React").createElement(b("React").Fragment,null,c,b("React").createElement(b("FBStoriesSponsorRenderer.react"),{currentThreadData:this.props.currentThreadData}),b("React").createElement(b("FBStoriesLinkRenderer.react"),{currentThreadData:this.props.currentThreadData,onLinkClick:this.$56}),b("React").createElement("div",{className:"_2upa"},a))};a.prototype.$99=function(){return b("React").createElement(b("FBStoriesViewersAnchor.react"),{totalViewers:this.props.threadViewers.totalCount,highlighted:this.props.canOpenCurrentThreadViewerSheet&&this.props.threadViewers.hasNewViewers,onClick:this.$80,disabled:!1,color:"light"})};a.prototype.componentWillUnmount=function(){this.$15(),this.$2.forEach(function(a){return a.remove()}),this.$2=[],this.$6&&this.$6.cancel(),this.$7&&this.$7.cancel(),this.state.isViewersPanelShown===!0&&this.$21(),this.$90.cancel(),this.$91.cancel(),this.$93.cancel(),this.$94.cancel(),this.$86.cancel(),this.$95.cancel(),[this.$10,this.$11,this.$12].forEach(function(a){a&&clearTimeout(a)})};a.defaultProps={canOpenCurrentThreadViewerSheet:!1,canSeeCurrentThreadViewCount:!1,canShowProduction:!1,canUserReportThreadToFacebook:!1,enableNavigation:!0,isStoryMuted:!1,isStoryUploading:!1,isUserManagedThread:!1,isUserManagedBucket:!1,isGroupAdminBucket:!1,shouldDisableReply:!1,allowedNavType:"NEXT_ONLY",isBucketLive:!1,isLandscape:!1,isSelectedBucketLiveAndEnded:!1,isThreadReviewStatusPending:!1,currentThreadPercentDone:0,threadOverlays:[],onDone:b("emptyFunction"),onClickMute:b("emptyFunction"),onDeleteCurrentThread:b("emptyFunction"),onMuteBucketOwner:b("emptyFunction"),onMuteMemberFromGroup:b("emptyFunction"),onUnmuteMemberFromGroup:b("emptyFunction"),onReportCurrentThreadToAdmin:b("emptyFunction"),onTakeNegativeFeedbackAction:b("emptyFunction"),onNextThread:b("emptyFunction"),onPrevThread:b("emptyFunction"),onTimeUpdate:function(a){},onCloseRequested:b("emptyFunction"),openComposerForProduction:b("emptyFunction")};e.exports=a}),null);