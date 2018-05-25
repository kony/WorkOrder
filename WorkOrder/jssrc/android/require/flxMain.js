define("flxMain", function() {
    return function(controller) {
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxTemp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTemp",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxTemp.setDefaultUnit(kony.flex.DP);
        var lblColumn1 = new kony.ui.Label({
            "id": "lblColumn1",
            "isVisible": true,
            "left": "5%",
            "skin": "konympwlSknLbl252b3250px",
            "text": "John Smith",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblColumn2 = new kony.ui.Label({
            "id": "lblColumn2",
            "isVisible": true,
            "left": "5%",
            "skin": "konympwlSknLbl252B32Op6042px",
            "text": "3456 W Sand lake Rd, 23819",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblColumn3 = new kony.ui.Label({
            "id": "lblColumn3",
            "isVisible": true,
            "left": "5%",
            "skin": "konympwlSknLbl252B32Op6042px",
            "text": "Open",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblColumn4 = new kony.ui.Label({
            "id": "lblColumn4",
            "isVisible": true,
            "left": "5%",
            "skin": "konympwlSknLbl252B32Op6042px",
            "text": "727 8121 9821",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        flxTemp.add(lblColumn1, lblColumn2, lblColumn3, lblColumn4, flxSpace);
        var flxIndicator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98dp",
            "id": "flxIndicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxIndicator.setDefaultUnit(kony.flex.DP);
        var imgIndicator = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "55%",
            "height": "48px",
            "id": "imgIndicator",
            "isVisible": true,
            "skin": "slImage",
            "src": "konymp_wl_chevron.png",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIndicator.add(imgIndicator);
        flxMain.add(flxTemp, flxIndicator);
        return flxMain;
    }
})