if (self.CavalryLogger) { CavalryLogger.start_js(["n7C8T"]); }

__d("ReactComposerLiveBroadcastPreviewEmbedDialog.react",["cx","fbt","FBClipboardLink.react","React","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","XUIText.react","XUITextInput.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={isLoading:!0},b}a.prototype.render=function(){return b("React").createElement(b("XUIDialog.react"),{shown:this.props.shown,onToggle:this.props.onToggle,width:500},b("React").createElement(b("XUIDialogTitle.react"),null,h._("Embed Video")),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("div",null,b("React").createElement("span",null,b("React").createElement(b("XUIText.react"),{size:"header4",display:"block",className:"_o9w"},h._("Copy and paste this code into your website")),b("React").createElement(b("XUITextInput.react"),{className:"_o9x _o9w",value:this.props.embeddedHtml,readonly:"true"}),b("React").createElement(b("FBClipboardLink.react"),{className:"_o9w",value:this.props.embeddedHtml},b("React").createElement(b("XUIButton.react"),{label:"Copy to Clipboard"}))))),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogOkayButton.react"),{use:"confirm",action:"cancel"})))};a.propTypes={accessToken:c.string.isRequired,broadcastID:c.string.isRequired,embeddedHtml:c.string.isRequired,shown:c.bool.isRequired,onToggle:c.func.isRequired};e.exports=a}),null);