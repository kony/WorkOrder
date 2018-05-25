define(function() {
    return function(controller) {
        var verticalbar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "verticalbar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        verticalbar.setDefaultUnit(kony.flex.DP);
        var verticalBarBrowser = new kony.ui.Browser({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "id": "verticalBarBrowser",
            "isVisible": true,
            "left": "0dp",
            "requestURLConfig": {
                "URL": "",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        verticalbar.add(verticalBarBrowser);
        return verticalbar;
    }
})