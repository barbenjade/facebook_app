if (self.CavalryLogger) { CavalryLogger.start_js(["gbfai"]); }

__d("UFISubscribeLink.react",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props.subscribeAction?g._("Turn On Notifications"):g._("Turn Off Notifications"),c=this.props.subscribeAction?g._("Get a notification whenever someone comments."):g._("Stop getting notifications when someone comments.");return b("React").createElement("a",{className:"UFISubscribeLink",href:"#",role:"button","aria-live":"polite",title:c,onClick:this.props.onClick},a)};function a(){h.apply(this,arguments)}a.propTypes={subscribeAction:c.bool,onClick:c.func};e.exports=a}),null);