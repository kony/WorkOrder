define(function() {
    return function(controller) {
        var sheetlistbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "12%",
            "id": "sheetlistbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        sheetlistbox.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopykonympwlSknFlxfff",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympwlSknLbl1",
            "text": "SELECT",
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
        var lblValue = new kony.ui.Label({
            "id": "lblValue",
            "isVisible": true,
            "left": "5%",
            "skin": "konympwlSknLbl252B32Op6050px",
            "text": "John Smith",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "45%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var listBx = new kony.ui.ListBox({
            "height": "40dp",
            "id": "listBx",
            "isVisible": true,
            "left": "5%",
            "masterData": [
                ["lb1", "Listbox One"],
                ["lb2", "Listbox Two"],
                ["lb3", "Listbox Three"]
            ],
            "onSelection": controller.AS_ListBox_d7a598d234894cc9b5efadbb95caf937,
            "skin": "konympwlSknLbx252b32Op6050px",
            "top": "40%",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "applySkinsToPopup": true,
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        });
        flxMain.add(lblTitle, lblValue, listBx);
        sheetlistbox.add(flxMain);
        return sheetlistbox;
    }
})