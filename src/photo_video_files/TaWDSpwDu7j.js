if (self.CavalryLogger) { CavalryLogger.start_js(["Dkjhh"]); }

__d("FBStoriesCardSATPMedia.react",["cx","CameraPostSATPComponent.react","React","XUISpinner.react","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){if(!this.props.satpData)return null;var a=b("React").createElement(b("XUISpinner.react"),{background:"dark",className:"_2out",size:"large"});return b("React").createElement("div",{className:"_ide",onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp,ref:this.props.mediaDivRef},b("React").createElement(b("CameraPostSATPComponent.react"),{satpData:this.props.satpData,className:"_1s5n"}),this.props.showLoadingSpinner&&a)};function a(){h.apply(this,arguments)}a.defaultProps={mediaDivRef:b("emptyFunction"),onMouseDown:b("emptyFunction"),onMouseUp:b("emptyFunction"),satpData:{rootMessageText:"",wwwTextFormatMetadata:null,textFormatMetadata:null,backdropImage:null},showLoadingSpinner:!1};e.exports=a}),null);