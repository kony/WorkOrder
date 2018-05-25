//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "WorkOrder",
    appName: "WorkOrder",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.75.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "WorkOrder",
    isturlbase: "https://mfreddy.konycloud.com/services",
    isMFApp: true,
    appKey: "9dbc2783d5885b7b7a304ddaf9552430",
    appSecret: "33e52c2ccc5378fc11aac59138024740",
    serviceUrl: "https://100006023.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100006023.auth.konycloud.com/appconfig",
        "identity_meta": {
            "reusableGoogleLogin": {
                "success_url": "allow_any"
            },
            "googlesheetsauth": {
                "success_url": "allow_any"
            }
        },
        "integsvc": {
            "konyMpGoogleSheets": "https://mfreddy.konycloud.com/services/konyMpGoogleSheets"
        },
        "service_doc_etag": "000001633E9E5938",
        "appId": "d655de97-0aeb-4748-9b92-927ba54c0e32",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "googleSheets",
        "reportingsvc": {
            "session": "https://mfreddy.konycloud.com/services/IST",
            "custom": "https://mfreddy.konycloud.com/services/CMS"
        },
        "baseId": "0da22091-a484-4144-9a43-a6db546b48da",
        "login": [{
            "alias": "googlesheetsauth",
            "type": "oauth2",
            "prov": "googlesheetsauth",
            "url": "https://100006023.auth.konycloud.com"
        }, {
            "alias": "reusableGoogleLogin",
            "type": "oauth2",
            "prov": "reusableGoogleLogin",
            "url": "https://100006023.auth.konycloud.com"
        }],
        "services_meta": {
            "konyMpGoogleSheets": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/konyMpGoogleSheets"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100006023.auth.konycloud.com/appconfig",
    secureurl: "https://100006023.auth.konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8240
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: applicationController.AS_AppEvents_c8021d53acfb475e8f3bc582216a18cd,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmLogin");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;