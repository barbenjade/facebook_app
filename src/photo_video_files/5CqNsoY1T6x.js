if (self.CavalryLogger) { CavalryLogger.start_js(["L0dnY"]); }

__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAttachmentID=function(a){this.$1.attachment_id=a;return this};a.prototype.setAttachmentType=function(a){this.$1.attachment_type=a;return this};a.prototype.setIsFromViewer=function(a){this.$1.is_from_viewer=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={attachment_id:!0,attachment_type:!0,is_from_viewer:!0,vc:!0};e.exports=a}),null);