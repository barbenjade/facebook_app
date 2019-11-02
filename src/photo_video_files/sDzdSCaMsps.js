if (self.CavalryLogger) { CavalryLogger.start_js(["oZO58"]); }

__d("MessengerQuickCamActions",["MessengerQuickCamDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({CLOSE:null,COUNT_DOWN_TIMER:null,COUNT_DOWN_TIMER_START:null,PROCESS_RECORDING:null,REGISTER_QUICKCAM:null,REMOVE_ALL_LISTENERS:null,REQUEST_USER_MEDIA:null,RETAKE:null,SEND_PHOTO:null,SEND_VIDEO:null,SET_MEDIA:null,SHUTTER_OFF:null,STOP_VIDEO:null,TAKE_VIDEO:null,UPDATE_PROGRESS:null,UPLOAD_COMPLETE:null,UPLOAD_ERROR:null,USER_MEDIA_ERROR:null});a={Types:g,close:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.CLOSE})},countDownTimer:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.COUNT_DOWN_TIMER})},countDownTimerStart:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.COUNT_DOWN_TIMER_START})},processRecording:function(a){b("MessengerQuickCamDispatcher").dispatch({type:g.PROCESS_RECORDING,videoBlob:a})},registerQuickCam:function(a,c){b("MessengerQuickCamDispatcher").dispatch({type:g.REGISTER_QUICKCAM,source:a,quickcam:c})},requestUserMedia:function(a,c){b("MessengerQuickCamDispatcher").dispatch({type:g.REQUEST_USER_MEDIA,viewer:a,threadID:c})},retake:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.RETAKE})},sendPhoto:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.SEND_PHOTO})},sendVideo:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.SEND_VIDEO})},setMedia:function(a){b("MessengerQuickCamDispatcher").dispatch({type:g.SET_MEDIA,videoStream:a})},stopVideo:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.STOP_VIDEO})},shutterOff:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.SHUTTER_OFF})},takeVideo:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.TAKE_VIDEO})},updateProgress:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.UPDATE_PROGRESS})},uploadError:function(a){b("MessengerQuickCamDispatcher").dispatch({type:g.UPLOAD_ERROR,error:a})},uploadComplete:function(a){b("MessengerQuickCamDispatcher").dispatch({type:g.UPLOAD_COMPLETE,data:a})},userMediaError:function(){b("MessengerQuickCamDispatcher").dispatch({type:g.USER_MEDIA_ERROR})}};e.exports=a}),null);