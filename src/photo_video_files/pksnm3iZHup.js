if (self.CavalryLogger) { CavalryLogger.start_js(["nbFt6"]); }

__d("MontageReplyContainer.react",["cx","CurrentUser","MercuryMessageActions","MercuryMessageObject","MercuryTriodeSourceUtil","MontageMessageReactionsWebGraphQLMutation","MontageReplyAction","MontageReplyComposer.react","MontageReplyLWR.react","React","XAsyncRequest"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.$4=function(a,c){a=this.$2.constructUserGeneratedMessageObject(a,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),this.props.threadID);a.montage_reply_data={message_id:this.props.montageMessageID,reply_action:b("MontageReplyAction").MESSAGE_REACTION};this.$1.send(a);if(c){a=b("MontageMessageReactionsWebGraphQLMutation").getURI({actor_id:this.$3,message_id:this.props.montageMessageID,actions:c});new(b("XAsyncRequest"))(a).setMethod("POST").send()}}.bind(this),this.$3=b("CurrentUser").getID(),this.$1=b("MercuryMessageActions").getForFBID(this.$3),this.$2=b("MercuryMessageObject").getForFBID(this.$3)}a.prototype.render=function(){return b("React").createElement("div",{className:"_2x5j"},b("React").createElement(b("MontageReplyComposer.react"),null),b("React").createElement(b("MontageReplyLWR.react"),{sendReply:this.$4,startedTime:this.props.startedTime}))};e.exports=a}),null);