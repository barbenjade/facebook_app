if (self.CavalryLogger) { CavalryLogger.start_js(["wEG4o"]); }

__d("LiveVideoBroadcastVolumeMeterContainer.react",["FluxContainer","LiveVideoBroadcastBroadcastStore","LiveVideoBroadcastDispatcher","LiveVideoBroadcastVolumeMeter.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){g.constructor.call(this,a),b("LiveVideoBroadcastDispatcher").explicitlyRegisterStores([b("LiveVideoBroadcastBroadcastStore")]),this.state={mediaStream:null}}a.getStores=function(){return[b("LiveVideoBroadcastBroadcastStore")]};a.calculateState=function(){var a=b("LiveVideoBroadcastBroadcastStore").getState().toObject();a=a.mediaStream;return{mediaStream:a}};a.prototype.render=function(){return b("React").createElement(b("LiveVideoBroadcastVolumeMeter.react"),{className:this.props.className,fillStyle:this.props.fillStyle,height:this.props.height,mediaStream:this.state.mediaStream,width:this.props.width})};e.exports=b("FluxContainer").create(a)}),null);