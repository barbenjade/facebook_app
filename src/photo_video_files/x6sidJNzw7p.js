if (self.CavalryLogger) { CavalryLogger.start_js(["lheSJ"]); }

__d("LiveVideoBroadcastVideoTitleInput.react",["cx","fbt","BUITextInput_DEPRECATED.react","React","XUIGrayText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){var a=this.props.isRequired?h._("Add a title for your live broadcast"):h._("Add a title for your live broadcast (optional)");return b("React").createElement("div",null,b("React").createElement("div",{className:"_3-95"},b("React").createElement(b("XUIGrayText.react"),{shade:"medium",size:"meta1",weight:"bold"},h._("Title")),this.props.subtitle?b("React").createElement(b("XUIGrayText.react"),{className:"_3-99",shade:"light",size:"meta1"},this.props.subtitle):null),b("React").createElement(b("BUITextInput_DEPRECATED.react"),{className:"_2hey",height:"tall",maxLength:255,placeholder:a,value:this.props.title,onChange:this.props.onChange}))};function a(){i.apply(this,arguments)}e.exports=a}),null);