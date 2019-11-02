if (self.CavalryLogger) { CavalryLogger.start_js(["OX5X2"]); }

__d("FBStoryContainer.react",["CameraPostMediaHelper","CurrentUser","ErrorBoundary.react","FBStoriesActions","FBStoriesCurrentThreadDataHelper","FBStoriesGroupAdminActions","FBStoriesStore","FBStoriesViewerCard.react","FBStoryThread.react","FluxContainer","React","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={allowedNavType:"NEXT_ONLY",bucketID:null,canUserReportThreadToFacebook:!1,currentThreadIndex:0,currentThreadData:null,currentThreadID:null,threadsCount:0,threadViewers:{hasNewViewers:!1,friends:[],connections:[],nonFriendsCount:0,totalCount:0,totalNew:0},bucketOwner:{id:"",name:"",short_name:"",gender:"",is_viewer_friend:!1,profile_picture:null,is_employee:!1},userInfo:{userID:b("CurrentUser").getID(),userName:b("CurrentUser").getName()},allBucketsViewed:!1,shouldDisableReply:!1,isOwnThread:!1,isStoryUploading:!1,isUserManagedThread:!1,isUserManagedBucket:!1,isGroupAdminBucket:!1,showPausedOverlay:!1,showStoryUI:!0,isBucketLive:!1,isLandscape:!1,isSelectedBucketLiveAndEnded:!1,isThreadReviewStatusPending:!1,threadOverlays:[],viewerEntrypoint:null},this.$1=function(){var a=this.state.currentThreadID,c=this.state.bucketID;a&&c&&b("FBStoriesActions").deleteThreadFromBucket(a,c)}.bind(this),this.$2=function(){b("FBStoriesActions").muteBucketOwner(this.state.bucketOwner,this.state.bucketID)}.bind(this),this.$7=function(){var a=this.state.currentThreadID;a&&b("FBStoriesActions").reportThreadToAdmin(a)}.bind(this),this.$5=function(){if(!this.state.currentThreadData||this.state.currentThreadData.isLive)return;var a=this.state.currentThreadData.bucketOwner,c=this.state.currentThreadData.threadOwner,d=this.state.currentThreadData.threadID;if(!a||!c)return;b("FBStoriesGroupAdminActions").showMuteFromGroupDialog(a,c,d)}.bind(this),this.$6=function(){if(!this.state.currentThreadData||this.state.currentThreadData.isLive)return;var a=this.state.currentThreadData.bucketOwner,c=this.state.currentThreadData.threadOwner;if(!a||!c)return;b("FBStoriesGroupAdminActions").unmuteFromGroup(a,c)}.bind(this),this.$8=function(a){var c=this.state.currentThreadID;c&&b("FBStoriesActions").takeNegativeFeedbackAction(c,a)}.bind(this),this.$3=function(){this.state.allowedNavType!=="PREV_ONLY"?b("FBStoriesActions").nextThread():this.props.onDone()}.bind(this),this.$4=function(){this.state.allowedNavType!=="NEXT_ONLY"&&b("FBStoriesActions").prevThread()}.bind(this),c}a.getStores=function(){return[b("FBStoriesStore")]};a.calculateState=function(a){a=b("FBStoriesStore").getCurrentThreadViewers();var c=b("FBStoriesStore").isOwnThread(),d=b("FBStoriesStore").getCurrentThreadStatusForSelectedBucket()==="UPLOADING",e=b("FBStoriesStore").isCurrentThreadUserManaged(),f=b("FBStoriesStore").isCurrentBucketUserManaged(),g=b("FBStoriesStore").isCurrentBucketGroupAdmin(),h=b("FBStoriesStore").getCurrentThreadData(),i=b("FBStoriesCurrentThreadDataHelper").getCameraPostMedia(h),j=b("CameraPostMediaHelper").getHeight(i);i=b("CameraPostMediaHelper").getWidth(i);j=j<i;i={bucketID:b("FBStoriesStore").getSelectedBucketId(),canOpenCurrentThreadViewerSheet:b("FBStoriesStore").canOpenCurrentThreadViewerSheet(),canSeeCurrentThreadViewCount:b("FBStoriesStore").canSeeCurrentThreadViewCount(),canUserReportThreadToFacebook:b("FBStoriesStore").canUserReportCurrentThreadToFacebook(),currentThreadIndex:b("FBStoriesStore").getCurrentThreadIndexForSelectedBucket(),currentThreadPercentDone:b("FBStoriesStore").getCurrentThreadPercentDone(),currentThreadID:b("FBStoriesStore").getCurrentThreadIDForSelectedBucket(),threadsCount:b("FBStoriesStore").getThreadCountForSelectedBucket(),threadOverlays:b("FBStoriesStore").getCurrentThreadOverlays(),bucketOwner:b("FBStoriesStore").getSelectedBucketOwner(),userInfo:b("FBStoriesStore").getUserInfo(),allBucketsViewed:b("FBStoriesStore").areAllBucketsViewed(),shouldDisableReply:b("FBStoriesStore").shouldDisableReply(),currentThreadData:h,isOwnThread:c,isStoryUploading:d,isUserManagedThread:e,isUserManagedBucket:f,isGroupAdminBucket:g,threadViewers:a,allowedNavType:b("FBStoriesStore").getAllowedNavigationType(),isBucketLive:b("FBStoriesStore").isSelectedBucketLive(),isLandscape:j,isSelectedBucketLiveAndEnded:b("FBStoriesStore").isSelectedBucketLiveAndEnded(),isThreadReviewStatusPending:b("FBStoriesStore").isCurrentThreadReviewStatusPending(),viewerEntrypoint:b("FBStoriesStore").getCurrentViewerEntrypoint()};return i};a.prototype.render=function(){return b("gkx")("AT5YFMflVW0KjhIobDWpauZQcJOVbWuHN1bb9Js1JXtGLnyOS99xaxViPE6MQxuWTehQvURF-Sd83Zi2XZrO0kNs")?b("React").createElement(b("FBStoriesViewerCard.react"),babelHelpers["extends"]({},this.props,this.state,{onDeleteCurrentThread:this.$1,onMuteBucketOwner:this.$2,onNextThread:this.$3,onPrevThread:this.$4})):b("React").createElement(b("ErrorBoundary.react"),null,b("React").createElement(b("FBStoryThread.react"),babelHelpers["extends"]({},this.props,this.state,{canShowProduction:b("gkx")("AT7gEdGanQ_sqs6rfBbzB7Sz2XgVo58xElrze5JGvpYOqLfuidpteOwWHPlBFOaKGG1dzm6S7dP28KcmA5swvTzuzBNtkdJxAHTiPO_YW4h4Fg"),onDeleteCurrentThread:this.$1,onMuteBucketOwner:this.$2,onMuteMemberFromGroup:this.$5,onUnmuteMemberFromGroup:this.$6,onReportCurrentThreadToAdmin:this.$7,onTakeNegativeFeedbackAction:this.$8,onNextThread:this.$3,onPrevThread:this.$4,onTimeUpdate:this.$9})))};a.prototype.$9=function(a){b("FBStoriesActions").updateCurrentThreadPercentDone(a)};e.exports=b("FluxContainer").create(a)}),null);