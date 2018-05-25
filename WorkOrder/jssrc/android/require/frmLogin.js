define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var googlelogin = new com.konymp.googlelogin({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyCopyCopyCopykonympWhiteBackground1",
                "height": "50dp",
                "id": "googlelogin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopykonympglSknFlxfff",
                "top": "1dp",
                "width": "205dp"
            }, {}, {});
            googlelogin.redirectUrlAndroid = "http://googlelogin";
            googlelogin.redirectURLIos = "googlelogin://";
            googlelogin.onLoginSuccess = controller.AS_UWI_h087778160f44ca79cbb90c9237227c5;
            this.add(googlelogin);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});