define(function() {
    return function(controller) {
        var googlelogin = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "focusSkin": "CopyCopyCopyCopykonympWhiteBackground1",
            "height": "50dp",
            "id": "googlelogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_f3622c838e5f41a98456493554a7aadd,
            "onTouchEnd": controller.AS_FlexContainer_a128aaee735e40d4a9550100326e35df,
            "onTouchStart": controller.AS_FlexContainer_ce705227110243808eaff6ebb9d3786f,
            "skin": "CopykonympglSknFlxfff",
            "top": "1dp",
            "width": "205dp"
        }, {}, {});
        googlelogin.setDefaultUnit(kony.flex.DP);
        var imgGoogle = new kony.ui.Image2({
            "height": "100%",
            "id": "imgGoogle",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyCopyslImage",
            "src": "konymp_gl_btn_google_signin_light.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgFocusGoogle = new kony.ui.Image2({
            "height": "100%",
            "id": "imgFocusGoogle",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_gl_btn_google_signin_light_pressed.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        googlelogin.add(imgGoogle, imgFocusGoogle);
        return googlelogin;
    }
})