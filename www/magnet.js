var magnet = {
    Position: {
        TOP_LEFT: 1,
        TOP_CENTER: 2,
        TOP_RIGHT: 3,
        MIDDLE_LEFT: 4,
        MIDDLE_CENTER: 5,
        MIDDLE_RIGHT: 6,
        BOTTOM_LEFT: 7,
        BOTTOM_CENTER: 8,
        BOTTOM_RIGHT: 9,
        TOP_APP:10,
        BOTTOM_APP:11
    },
    BannerSize: {
        BANNER: {width:320,height:50},
        IAB_MRECT:{width:300,height:250},
        IAB_BANNER: {width:468,height:60},
        IAB_LEADERBOARD: {width:728,height:90},
        SMART_BANNER: {width:-1,height:-2},
        IAB_WIDE_SKYSCRAPER: {width:160,height:600},
        IPHONE_LANDSCAPE: {width:480,height:32},
        IPAD_PORTRAIT: {width:769,height:90},
        IPAD_LANDSCAPE: {width:1024,height:90}
    },
    Event: {
        onBannerDismiss: "onAdmobBannerDismiss",
        onBannerFailedReceive: "onAdmobBannerFailedReceive",
        onBannerLeaveApplication: "onAdmobBannerLeaveApplication",
        onBannerPresent: "onAdmobBannerPresent",
        onBannerReceive: "onAdmobBannerReceive",
        onInterstitialDismiss: "onAdmobInterstitialDismiss",
        onInterstitialFailedReceive: "onAdmobInterstitialFailedReceive",
        onInterstitialLeaveApplication: "onAdmobInterstitialLeaveApplication",
        onInterstitialPresent: "onAdmobInterstitialPresent",
        onInterstitialReceive: "onAdmobInterstitialReceive"
    },
    Error:["ERROR_CODE_ERNAL_ERROR","ERROR_CODE_INVALID_REQUEST","ERROR_CODE_NETWORK_ERROR","ERROR_CODE_NO_FILL"],
    Params:function(){
      isTesting=false;
      isForChild=false;
      gender=0;//0 unknown,1 male,2 female
      extra={};//key value pair like {'keywork':'admob phonegap','corlor':0xffffff}
    },
    loadInterstitial: function (param,successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'magnet',
            'loadInterstitial',
            [
                param
            ]
        );
    }
};
module.exports = magnet;
