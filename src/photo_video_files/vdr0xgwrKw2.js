if (self.CavalryLogger) { CavalryLogger.start_js(["D9\/D8"]); }

__d("MontageSpotlightViewer_message.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"MontageSpotlightViewer_message",type:"UserMessage",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"message_id",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"message_sender",storageKey:null,args:null,concreteType:"MessagingParticipant",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"message_source_data",storageKey:null,args:null,concreteType:"MessageSourceData",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"message_source",args:null,storageKey:null}]},{kind:"FragmentSpread",name:"MontageCard_message",args:null},{kind:"FragmentSpread",name:"MontageCardText_userMessage",args:null},{kind:"LinkedField",alias:null,name:"blob_attachments",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"FragmentSpread",name:"MontageCardPhoto_photoAttachment",args:null},{kind:"FragmentSpread",name:"MontageCardVideo_videoAttachment",args:null}]},{kind:"LinkedField",alias:null,name:"sticker",storageKey:null,args:null,concreteType:"Sticker",plural:!1,selections:[{kind:"FragmentSpread",name:"MontageCardSticker_sticker",args:null}]}]};e.exports=a}),null);