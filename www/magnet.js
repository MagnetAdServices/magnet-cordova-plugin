var magnet = {
    Position: {
        TOP: 100,
        BOTTOM: 101
    },
	
    Event: {
        onInterstitialAdReceived: "onMagnetInterstitialAdReceived",
        onInterstitialAdFailed: "onMagnetInterstitialAdFailed",
		onBannerAdReceived: "onMagnetBannerAdReceived",
        onBannerAdFailed: "onMagnetBannerAdFailed",
		onRewardedAdReceived: "onMagnetRewardedAdReceived",
		onRewardedAdFailed: "onMagnetRewardedAdFailed",
		onRewardedAdClose: "onMagnetRewardClose",
		onRewardedAdFinish: "onMagnetRewardedAdFinish"
    },
    
	initialize: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'initialize',
            []
        );
    },
    
	setTestMode: function (testMode, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'setTestMode',
            [
                {'TEST_MODE': testMode}
            ]
        );
    },
	
	loadInterstitial: function (adUnitId, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'loadInterstitial',
			[
				{'AD_UNIT_ID': adUnitId}
            ]
        );
    },
	
    showInterstitial: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'showInterstitial',
            []
        );
    },
    
	showBanner: function (adUnitId, position, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'showBanner',
            [
                {'AD_UNIT_ID': adUnitId, 'BANNER_POSITION': position}
            ]
        );
    },
    
	removeBanner: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'removeBanner',
            []
        );
    },
    
	stopBanner: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'stopBanner',
            []
        );
    },
	
	loadRewarded: function (adUnitId, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'loadRewarded',
			[
				{'AD_UNIT_ID': adUnitId}
            ]
        );
    },
	
    showRewarded: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'MagnetCordovaPlugin',
            'showRewarded',
            []
        );
    }
};
module.exports = magnet;
