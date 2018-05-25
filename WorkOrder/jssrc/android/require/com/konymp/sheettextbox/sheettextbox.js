define(function() {
    return function(controller) {
        var sheettextbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "12%",
            "id": "sheettextbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        sheettextbox.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympwlSknLbl",
            "text": "NAME",
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
        var tbxName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "konympwlSknTbx252b32Op6050px",
            "height": "40dp",
            "id": "tbxName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "konympwlSknTbx252b32Op6050px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5%",
            "width": "90%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var flxNameSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxNameSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "skin": "CopyslFbox",
            "top": "-4dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxNameSpace.setDefaultUnit(kony.flex.DP);
        flxNameSpace.add();
        flxMain.add(lblName, tbxName, flxNameSpace);
        sheettextbox.add(flxMain);
        return sheettextbox;
    }
})