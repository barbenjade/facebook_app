if (self.CavalryLogger) { CavalryLogger.start_js(["yDMbM"]); }

__d("LiveVideoBroadcastAPIVideo.react",["cx","React","VideoComponentContextMenu.react","VideoComponentEmbeddedControls.react","VideoComponentLiveEndScreen.react","VideoComponentWithLiveBroadcast.react","VideoDataContainer.react","VideoPlayer.react","VideoPlayerLoggerSource"],(function(a,b,c,d,e,f,g){"use strict";var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){return!this.props.videoID?null:b("React").createElement("div",{className:"_6096"},b("React").createElement(b("VideoDataContainer.react"),{videoID:this.props.videoID||""},b("React").createElement(b("VideoPlayer.react"),{autoplay:!0,className:"_6096",disableClickPlayPause:!0,height:undefined,startMuted:!0,subOrigin:b("VideoPlayerLoggerSource").LIVE_VIDEO_PREVIEW,videoData:b("VideoDataContainer.react").VIDEO_DATA_PLACEHOLDER,width:undefined},b("React").createElement(b("VideoComponentEmbeddedControls.react"),{showFullscreenButton:!1,showSettingsButton:!0}),b("React").createElement(b("VideoComponentContextMenu.react"),null),b("React").createElement(b("VideoComponentLiveEndScreen.react"),null),b("React").createElement(b("VideoComponentWithLiveBroadcast.react"),null))))};function a(){h.apply(this,arguments)}e.exports=a}),null);