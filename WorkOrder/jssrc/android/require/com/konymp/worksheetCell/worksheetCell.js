define(function() {
    return function(controller) {
        var worksheetCell = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "12%",
            "id": "worksheetCell",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_ae4fb243b80c42c99f664c4821a57e94,
            "skin": "konympwcSknFlxDefault",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        worksheetCell.setDefaultUnit(kony.flex.DP);
        var flxPoker = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPoker",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "konympwcsknflxpokerchip",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxPoker.setDefaultUnit(kony.flex.DP);
        var lblText = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblText",
            "isVisible": true,
            "left": "11dp",
            "skin": "konympwcsknlblpokerChip",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPoker.add(lblText);
        var flxTextBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTextBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympwcSknFlxDefault",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTextBox.setDefaultUnit(kony.flex.DP);
        var tbxMain = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "height": "40dp",
            "id": "tbxMain",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "3%",
            "secureTextEntry": false,
            "skin": "konympwcSknTbxfff",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "18dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
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
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "75%",
            "onClick": controller.AS_FlexContainer_f60216d7347448bdb7697c2cbb03becf,
            "skin": "slFbox",
            "top": "33dp",
            "width": "16%",
            "zIndex": 1
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgEdit",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_wl_edit_black.png",
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var flxCancel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "75%",
            "onClick": controller.AS_FlexContainer_bbbd068137474267af2551c70f60ce85,
            "skin": "slFbox",
            "top": "0dp",
            "width": "8%",
            "zIndex": 1
        }, {}, {});
        flxCancel.setDefaultUnit(kony.flex.DP);
        var imgCancel = new kony.ui.Image2({
            "height": "100%",
            "id": "imgCancel",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_wl_cancel_black.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCancel.add(imgCancel);
        var flxDone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxDone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "84%",
            "onClick": controller.AS_FlexContainer_ff5fdf2fe49f46bba70cedb1a028c9f0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "8%",
            "zIndex": 1
        }, {}, {});
        flxDone.setDefaultUnit(kony.flex.DP);
        var imgDone = new kony.ui.Image2({
            "height": "100%",
            "id": "imgDone",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_wl_done_black.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDone.add(imgDone);
        flxTextBox.add(tbxMain, flxEdit, flxCancel, flxDone);
        worksheetCell.add(flxPoker, flxTextBox);
        return worksheetCell;
    }
})