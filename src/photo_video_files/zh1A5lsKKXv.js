if (self.CavalryLogger) { CavalryLogger.start_js(["IeHKN"]); }

__d("MercuryAttachmentRenderer",["cx","BootloadedComponent.react","ChatAttachmentAttribution.react","EmojiSticker.react","ImmutableObject","JSResource","MercuryAttachment","MercuryAttachmentAudioClip.react","MercuryAttachmentFile.react","MercuryAttachmentPhoto.react","MercuryAttachmentPhotoGrid.react","MercuryAttachmentVideo.react","MercuryConfig","MercuryIDs","MercuryShareAttachment.react","MercuryShareAttachmentRenderLocations","MessengerDecoratorUtil","MessengerFromViewerUtils","MessengerHotLikeUtils","MessengerSupportedEmojiUtils","MessengerWebDriverTestIDs","QE2Logger","React","Sticker.react","StickerAssetType","StickerConstants","StoryAttachmentStyle","XStickerAssetController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=12;a={renderFile:function(a,c,d){return b("React").createElement(b("MercuryAttachmentFile.react"),{isSafeToSkipShim:a.url_skipshim,name:a.name,onAttachmentLoad:d,open_url:c?null:a.open_url,rel:a.rel,shimhash:a.url_shimhash,type:a.icon_type,url:a.url})},renderAudioClip:function(a,c,d,e,f){var g=a.metadata.duration/1e3,h=b("MercuryShareAttachmentRenderLocations").CHAT,i=100,j=c?160:400,k=100;g>=5&&(k=(1-Math.pow(10,(g-5)/-30))*(j-i)+i);return[b("React").createElement(b("MercuryAttachmentAudioClip.react"),{customColor:d,duration:a.metadata.duration/1e3,isChat:c,isFromViewer:b("MessengerFromViewerUtils").isFromViewer(e),location:h,key:"audioClip",onAttachmentLoad:f,rootClassName:b("MercuryAttachment").hasAttribution(a)?"_4yjw":"",showHelp:!1,src:a.url,width:k}),b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a),key:"audioAttribution",onAttachmentLoad:f})]},renderVideo:function(a,c,d,e,f){var g=c?a.metadata.chat_size:a.metadata.inbox_size,h=c?a.metadata.chat_preview:a.metadata.inbox_preview;if(!g||!h)return null;var i=d&&(d.thread_fbid||d.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(d.thread_id));return b("React").createElement("div",null,b("React").createElement(b("MercuryAttachmentVideo.react"),{attachment:new(b("ImmutableObject"))(a),duration:a.metadata.duration,isChat:c,isVisible:f,threadID:d&&d.thread_id,threadFBID:i,name:a.name,onAttachmentLoad:e,pageID:a.metadata.pageid,thumbSize:g,thumbnail:h,videoSize:a.metadata.dimensions,videoID:a.metadata.fbid,videoURI:a.url}))},constructStickerComponent:function(a,c,d,e,f,g){__p&&__p();e=e?"chatScrolled/":"messengerScrolled/";e+=a.thread_id;if(!c){c=b("MessengerHotLikeUtils").getMetadataForHotLike(a.sticker_id);if(!c){var h={},i={height:b("StickerConstants").THREAD_SIZE,width:b("StickerConstants").THREAD_SIZE},j=i.height;i=i.width;h.height=j;h.width=i;h.stickerID=a.sticker_id;h.spriteURI="";h.spriteURI2x="";h.paddedSpriteURI="";h.paddedSpriteURI2x="";c=h}}j=null;c.stickerID?j=c.stickerID.toString():a.sticker_id&&(j=a.sticker_id.toString());i=null;c.packID&&(i=c.packID.toString());h=b("XStickerAssetController").getURIBuilder().setInt("sticker_id",j);a=null;var k=null;window.devicePixelRatio&&window.devicePixelRatio>1?(k=c.paddedSpriteURI2x,a=c.spriteURI2x):(k=c.paddedSpriteURI,a=c.spriteURI);return b("React").createElement(b("Sticker.react"),{accessibilityLabel:c.accessibilityLabel,animationTrigger:"hover",customColor:g,frameCount:c.frameCount||1,frameRate:c.frameRate||83,framesPerCol:c.framesPerCol||1,framesPerRow:c.framesPerRow||1,onAttachmentLoad:f,onStickerClick:d,packID:i,paddedSpriteURI:k,sourceHeight:c.height,sourceURI:h.setEnum("image_type",b("StickerAssetType").IMAGE).getURI().toString(),sourceWidth:c.width,spriteURI:a,stickerID:j,subscribedThreadID:e,testID:b("MessengerWebDriverTestIDs").STICKER})},constructEmojiLikeAttachment:function(a,c,d){a=b("MessengerSupportedEmojiUtils").getHotLikeEmojiData(c.body,a.size)||b("MessengerSupportedEmojiUtils").getHotLikeEmojiDataTransition(c.body,a.size);if(!a)return null;a=a.emoji;return b("React").createElement(b("EmojiSticker.react"),{className:"_2poz _ui9",key:"sticker:"+c.message_id,emoji:c.body,emojiImage:a,sourceURI:"",onAttachmentLoad:d})},renderPhotoAttachments:function(a,c,d,e){__p&&__p();var f=a.length;if(!f)return null;var g=c&&c.thread_fbid;c&&!g&&(b("MercuryIDs").isLocalThread(c.thread_id)?null:b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id));if(f===1){g=a[0];f=b("MercuryAttachment").resizeContain({width:d-h,height:d},{width:g.preview_width,height:g.preview_height});return b("React").createElement("div",{className:"_55pk _59go"+(b("MercuryAttachment").hasAttribution(g)?" _4yjw":"")},b("React").createElement(b("MercuryAttachmentPhoto.react"),{image:g,width:f.width,hasAttribution:b("MercuryAttachment").hasAttribution(g),height:f.height,photoEncodings:g.photo_encodings,message:c,onAttachmentLoad:e,round:!0}),b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a[0])}))}return b("React").createElement("div",{className:"_55pk"},b("React").createElement(b("MercuryAttachmentPhotoGrid.react"),{images:a,size:d-h,message:c}))},sortAttachmentsStablyByType:function(a){__p&&__p();var c=[b("MercuryAttachment").isEmojiLikeAttachment,b("MercuryAttachment").isPhotoAttachment,b("MercuryAttachment").isShareAttachment,b("MercuryAttachment").isFileAttachment,b("MercuryAttachment").isErrorAttachment];c.push(function(a){return!0});var d=c.map(function(a){return[]});a.forEach(function(a){for(var b=0;b<c.length;b++)if(c[b](a)){d[b].push(a);break}});return Array.prototype.concat.apply([],d)},constructStoryBasedShareAttachment:function(a,c,d,e,f,g){__p&&__p();var h,i,j,k=b("MercuryShareAttachmentRenderLocations").CHAT,l=c.share&&c.share.style_list&&c.share.style_list[0]===b("StoryAttachmentStyle").CULTURAL_MOMENT_HOLIDAY_CARD,m={maxWidth:e},n=null;a&&a.platform_xmd&&(n=JSON.parse(a.platform_xmd));j=(j=c)!=null?(j=j.share)!=null?(j=j.messenger_ctas)!=null?(j=j[0])!=null?j.page_id:j:j:j:j;i=(i=c)!=null?(i=i.share)!=null?(i=i.target)!=null?(i=i.items)!=null?(i=i[0])!=null?(i=i.call_to_actions)!=null?(i=i[0])!=null?i.page_id:i:i:i:i:i:i:i;j=j||i;i=j?b("MercuryIDs").getParticipantIDFromUserID(j):a.author;j=b("MessengerFromViewerUtils").isFromViewer(a);var o=j?"_fy8":"_fy9";b("QE2Logger").logExposureForUser("messenger_growth_www_share_flow");h=((h=c)!=null?(h=h.share)!=null?(h=h.style_list)!=null?h[0]:h:h:h)===b("StoryAttachmentStyle").MONTAGE_DIRECT;return b("MercuryConfig").MNFWD&&b("MercuryAttachment").isShareAttachment(c)&&c.share&&c.share.share_id&&!b("MessengerDecoratorUtil").isP2P(c)&&!b("MessengerDecoratorUtil").isEventAttachment(c)&&!h&&(!c.share.target||!c.share.target.lwa_type)?b("React").createElement("div",null,b("React").createElement("div",{className:o},b("React").createElement(b("BootloadedComponent.react"),{key:"forwardimages:"+c.id,bootloadPlaceholder:b("React").createElement("div",null),bootloadLoader:b("JSResource")("ChatPhotoForwardButton.react").__setRef("MercuryAttachmentRenderer"),attachmentIDs:[c.share.share_id],attachmentTypes:[c.attach_type],isFromViewer:j})),b("React").createElement("div",{className:"_3_om"+(d&&!l&&!h?" _3cpq":""),style:m},b("React").createElement(b("MercuryShareAttachment.react"),{attachment:c.share,isFromViewer:j,isSponsored:a.is_sponsored,isVisible:g,location:k,maxWidth:e,messageID:a.message_id,mnMessageType:n&&n.template_type,onComponentLoaded:f,pageID:i,threadID:a.thread_id,timestamp:a.timestamp,author:a.author}))):b("React").createElement("div",{className:"_3_om"+(d&&!l&&!h?" _3cpq":""),style:m},b("React").createElement(b("MercuryShareAttachment.react"),{attachment:c.share,isFromViewer:j,isSponsored:a.is_sponsored,isVisible:g,location:k,maxWidth:e,messageID:a.message_id,mnMessageType:n&&n.template_type,onComponentLoaded:f,pageID:i,threadID:a.thread_id,timestamp:a.timestamp,author:a.author}))}};e.exports=a}),null);