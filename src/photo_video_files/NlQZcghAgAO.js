if (self.CavalryLogger) { CavalryLogger.start_js(["8hzBR"]); }

__d("ChatAttachmentAttribution.react",["cx","ImmutableObject","MercuryAttachmentAttribution.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};a.prototype.render=function(){return b("React").createElement(b("MercuryAttachmentAttribution.react"),{attachment:this.props.attachment,className:"_1ekr _4i_6"})};function a(){h.apply(this,arguments)}a.propTypes={attachment:c.instanceOf(b("ImmutableObject")),onAttachmentLoad:c.func};e.exports=a}),null);