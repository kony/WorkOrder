define(function() {
    return function(controller) {
        var sheetPhoneBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "12%",
            "id": "sheetPhoneBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        sheetPhoneBox.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympwlSknLbl2",
            "text": "PHONE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var tbxPhone = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "40dp",
            "id": "tbxPhone",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "2%",
            "secureTextEntry": false,
            "skin": "CopykonympwlSknTbx",
            "text": "123456789",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "41%",
            "width": "60%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var imgCall = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgCall",
            "isVisible": true,
            "left": "65%",
            "onTouchStart": controller.AS_Image_cdd9734f88804a20b9b8f435872477c7,
            "skin": "slImage",
            "src": "konymp_wl_call.png",
            "top": "40%",
            "width": "14%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgSms = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgSms",
            "isVisible": true,
            "left": "80%",
            "onTouchStart": controller.AS_Image_g5765488e54f49fcbc5ca7ebdbd9927d,
            "skin": "slImage",
            "src": "konymp_wl_sms.png",
            "top": "40%",
            "width": "15%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(lblTitle, tbxPhone, imgCall, imgSms);
        sheetPhoneBox.add(flxMain);
        return sheetPhoneBox;
    }
})