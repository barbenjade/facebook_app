if (self.CavalryLogger) { CavalryLogger.start_js(["izDfX"]); }

__d("LiveVideoBroadcastMetadataSection.react",["cx","fbt","LiveVideoBroadcastConstants","LiveVideoBroadcastContentTagSelector.react","LiveVideoBroadcastCrossshareGroupSelector.react","LiveVideoBroadcastGameSelectorGamerGraph.react","LiveVideoBroadcastVideoTitleInput.react","LiveVideoTJAppSelectorGatedModule","React","gkx","immutable"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("LiveVideoTJAppSelectorGatedModule").reactElement,k=b("LiveVideoBroadcastConstants").BROADCAST_STATE;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={title:this.props.title},this.$6=function(event){this.setState({title:event.target.value}),this.props.onTitleChange&&this.props.onTitleChange(event)}.bind(this),b}a.prototype.render=function(){"use strict";var a=this.props.broadcastState===k.EDITING;if(this.props.hasGamingContext){var c=this.props.isPageTarget&&b("gkx")("AT4igJVbgwyUgFbxCg5mahbn9xiUIkhX2lXADR3WjofeROUFVFVKNPzNT5AeZsZ9c335PdstbfA1neaSq5RlL-3E")&&!a;return b("React").createElement("div",null,this.props.shouldShowGameSelector?this.$1():null,this.$2(),this.$3(),this.props.isPageTarget?this.$4():null,c?this.$5():null)}c=!this.props.isPageTarget&&b("gkx")("AT4PWa8CEM4YRF7fKF1eUHS8epgv52wHMXcwGWI6dY07XCYr3i2LayvwsM6WCwicbOvELMDxZjHzxB6kWMfsgE8YLnFchWiOVAn_NklsLhFfig")&&!a;return b("React").createElement("div",null,this.$3(),this.props.isPageTarget?this.$4():null,this.props.shouldShowGameSelector?this.$1():null,this.$2(),c?this.$5():null)};a.prototype.$3=function(){"use strict";return b("React").createElement("div",{className:this.props.hasGamingContext?"_2pif":""},b("React").createElement(b("LiveVideoBroadcastVideoTitleInput.react"),{isRequired:this.props.isTitleRequired,subtitle:this.props.isTitleRequired?h._("(required)"):null,title:this.state.title,onChange:this.$6}))};a.prototype.$4=function(){"use strict";var a=h._("Tags");return b("React").createElement("div",{className:"_2pif"},b("React").createElement(b("LiveVideoBroadcastContentTagSelector.react"),{accessToken:this.props.accessToken,contentTags:this.props.contentTags,shouldShowSelectorNUX:!1,title:a,onContentTagChange:this.props.onContentTagChange}))};a.prototype.$1=function(){"use strict";var a=this.props.game?this.props.game:null;return b("React").createElement("div",{className:this.props.hasGamingContext?"":"_2pif"},b("React").createElement(b("LiveVideoBroadcastGameSelectorGamerGraph.react"),{hasGamingContext:this.props.hasGamingContext,selectedGame:a,onGameChange:this.props.onGameChange}))};a.prototype.$2=function(){"use strict";var a=j?b("React").createElement("div",{className:"_2pif"},b("React").createElement(j,{selectedVideoTJApp:this.props.videoTJApp,onVideoTJAppChange:this.props.onVideoTJAppChange})):null;return a};a.prototype.$5=function(){"use strict";return b("React").createElement("div",{className:"_2pif"},b("React").createElement(b("LiveVideoBroadcastCrossshareGroupSelector.react"),{actorID:this.props.actorID,selectedGroups:this.props.groups,onGroupsChange:this.props.onGroupsChange}))};e.exports=a}),null);