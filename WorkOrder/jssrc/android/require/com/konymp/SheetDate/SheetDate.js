define(function() {
    return function(controller) {
        var SheetDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "12%",
            "id": "SheetDate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_e7df36b918b040dfa572522bb5e75006,
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        SheetDate.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopykonympwlSknFlxfff1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var cal1 = new kony.ui.Calendar({
            "calendarIcon": "calbtn_1.png",
            "dateComponents": [1, 1, 2018],
            "dateFormat": "dd/MM/yyyy",
            "day": 1,
            "formattedDate": "01/01/2018",
            "height": "40dp",
            "hour": 0,
            "id": "cal1",
            "isVisible": true,
            "left": "5%",
            "minutes": 0,
            "month": 1,
            "onSelection": controller.AS_Calendar_bb8157707ba044d4b9dbc0ca45339ee2,
            "seconds": 0,
            "skin": "konympwlSknCalfffOp6050px",
            "top": "40%",
            "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
            "width": "90%",
            "year": 2018,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "id": "lblValue",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympwlSknLbl4",
            "text": "lblValue",
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
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympwlSknLbl3",
            "text": "DATE",
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
        flxMain.add(cal1, lblValue, lblTitle);
        SheetDate.add(flxMain);
        return SheetDate;
    }
})