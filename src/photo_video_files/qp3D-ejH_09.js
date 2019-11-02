if (self.CavalryLogger) { CavalryLogger.start_js(["AAw8W"]); }

__d("UFIMemberMuteDialog",["AsyncRequest","DialogX","GroupReportedPostAuthorConsequences","GroupsMemberMuteDurationDefaults","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnEscape","LayerRefocusOnHide","React","UFIMuteMemberDialog.react","XGroupDeleteFlaggedStoryController","XGroupDeleteReportedContentController","XGroupDeleteReportedStoryController","XGroupsMuteMembersController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("UFIMuteMemberDialog.react").UFIMuteMemberDialog,h=500;a=60;var i=60*a,j=6*i,k=12*i,l=24*i,m=3*l,n=7*l;c={show:function(a,c){var d=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];d={width:h,xui:!0,addedBehaviors:d,causalElement:null};a=b("React").createElement("div",null,b("React").createElement(g,{onConfirm:a,name:c}));c=new(b("DialogX"))(d,a);c.show()},serverShow:function(a,c,d,e,f,i){i=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];i={width:h,xui:!0,addedBehaviors:i,causalElement:null};var j=function(a,g){var h=b("XGroupsMuteMembersController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(h).setData({group_id:c,user_id:d,custom_expiration:g,mute_duration:a,should_reload:e,source:f}).send()};j=b("React").createElement("div",null,b("React").createElement(g,{onConfirm:j,name:a}));a=new(b("DialogX"))(i,j);a.show()},showDeleteContentAndMuteAuthor:function(a,c,d,e,f,i,j,k,l,m){__p&&__p();f=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];j={width:h,xui:!0,addedBehaviors:f,causalElement:null};f=function(a,f){f=this.getSecondsFromMuteDuration(a);a=l?b("XGroupDeleteFlaggedStoryController").getURIBuilder().setEnum("location",k):b("XGroupDeleteReportedStoryController").getURIBuilder();a=a.setFBID("group_id",c).setFBID("reported_id",d).setString("story_id",e).setEnum("author_consequence",b("GroupReportedPostAuthorConsequences").MUTE_AUTHOR).setEnum("source",i).setInt("mute_duration",f).getURI();new(b("AsyncRequest"))().setURI(a).send();m&&m()}.bind(this);f=b("React").createElement("div",null,b("React").createElement(g,{onConfirm:f,name:a}));a=new(b("DialogX"))(j,f);a.show()},showMuteAuthorDialog:function(a,c,d,e,f,i,j){var k=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];k={width:h,xui:!0,addedBehaviors:k,causalElement:null};var l=function(a,g){g=this.getSecondsFromMuteDuration(a);a=b("XGroupDeleteReportedContentController").getURIBuilder().setFBID("group_id",d).setFBID("reportable_id",e).setString("story_id",f).setEnum("author_consequence",b("GroupReportedPostAuthorConsequences").MUTE_AUTHOR).setFBID("author_id_if_action_on_author_only",c).setEnum("source",i).setEnum("location",j).setInt("mute_duration",g).getURI();new(b("AsyncRequest"))().setURI(a).send()}.bind(this);l=b("React").createElement("div",null,b("React").createElement(g,{onConfirm:l,name:a}));a=new(b("DialogX"))(k,l);a.show()},getSecondsFromMuteDuration:function(a){switch(a){case b("GroupsMemberMuteDurationDefaults").ONE_HOUR:return i;case b("GroupsMemberMuteDurationDefaults").SIX_HOURS:return j;case b("GroupsMemberMuteDurationDefaults").HALF_DAY:return k;case b("GroupsMemberMuteDurationDefaults").ONE_DAY:return l;case b("GroupsMemberMuteDurationDefaults").THREE_DAYS:return m;case b("GroupsMemberMuteDurationDefaults").SEVEN_DAYS:return n;default:return 0}}};e.exports=c}),null);