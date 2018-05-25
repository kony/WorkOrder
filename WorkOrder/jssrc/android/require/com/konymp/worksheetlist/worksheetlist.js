define(function() {
    return function(controller) {
        var worksheetlist = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "worksheetlist",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        worksheetlist.setDefaultUnit(kony.flex.DP);
        var flxList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "konympwlSknFlxfff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxList.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympwlSknFlx252b32",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxLogout = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogout",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_onClickLogOut_e39d4e12b8c9401db759a7164297d10d,
            "right": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxLogout.setDefaultUnit(kony.flex.DP);
        var imgLogout = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "48px",
            "id": "imgLogout",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_logout.png",
            "top": "0dp",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLogout.add(imgLogout);
        var lblHeaderName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeaderName",
            "isVisible": true,
            "skin": "konympwlSknLblfff",
            "text": "LEADS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxRefresh = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRefresh",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_ed3a036954c54b8ba9ebe3069974d3ba,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxRefresh.setDefaultUnit(kony.flex.DP);
        var imgRefresh = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "48px",
            "id": "imgRefresh",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_refresh.png",
            "top": "0dp",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRefresh.add(imgRefresh);
        flxHeader.add(flxLogout, lblHeaderName, flxRefresh);
        var flxChart = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30.60%",
            "id": "flxChart",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChart.setDefaultUnit(kony.flex.DP);
        var verticalbar = new com.konymp.verticalbar({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "verticalbar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        verticalbar.enableGrid = false;
        verticalbar.chartData = {
            "data": [{
                "colorCode": "#FF6600",
                "label": "S",
                "value": "25"
            }, {
                "colorCode": "#00A2D9",
                "label": "M",
                "value": "20"
            }, {
                "colorCode": "#8BC53E",
                "label": "T",
                "value": "10"
            }, {
                "colorCode": "#00A2D9",
                "label": "W",
                "value": "30"
            }, {
                "colorCode": "#FF6600",
                "label": "T",
                "value": "40"
            }, {
                "colorCode": "#00A2D9",
                "label": "F",
                "value": "10"
            }, {
                "colorCode": "#8BC53E",
                "label": "S",
                "value": "13"
            }],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "Value",
                "columnHeaderType": "text",
                "columnID": "value",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "adb02a6b13a046f4861d9d64ef0c34ee"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Color Code",
                "columnHeaderType": "text",
                "columnID": "colorCode",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "f7ad02b6f3df4493bb1ef588ab70e008"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Label",
                "columnHeaderType": "text",
                "columnID": "label",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "b59fe0cbc1394743a3214ea7583c0180"
            }]
        };
        verticalbar.chartTitle = "Last 7 Days";
        verticalbar.xAxisTitle = "";
        verticalbar.lowValue = "0";
        verticalbar.enableGridAnimation = false;
        verticalbar.titleFontSize = "12";
        verticalbar.yAxisTitle = "";
        verticalbar.titleFontColor = "#000000";
        verticalbar.highValue = "10";
        verticalbar.bgColor = "#D8D8D8";
        verticalbar.enableChartAnimation = true;
        verticalbar.enableStaticPreview = true;
        verticalbar.onClick = controller.AS_onClickLogOut_e39d4e12b8c9401db759a7164297d10d;
        flxChart.add(verticalbar);
        var segList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgIndicator": "konymp_wl_chevron.png",
                "lblColumn1": "John Smith",
                "lblColumn2": "3456 W Sand lake Rd, 23819",
                "lblColumn3": "8:00 - 10:00 AM",
                "lblColumn4": "Open"
            }, {
                "imgIndicator": "konymp_wl_chevron.png",
                "lblColumn1": "John Smith",
                "lblColumn2": "3456 W Sand lake Rd, 23819",
                "lblColumn3": "8:00 - 10:00 AM",
                "lblColumn4": "Open"
            }, {
                "imgIndicator": "konymp_wl_chevron.png",
                "lblColumn1": "John Smith",
                "lblColumn2": "3456 W Sand lake Rd, 23819",
                "lblColumn3": "8:00 - 10:00 AM",
                "lblColumn4": "Open"
            }],
            "groupCells": false,
            "height": "62%",
            "id": "segList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_a219221d0a5d4299b0a78e20e4913f33,
            "pageOffDotImage": "pageoffdot_1.png",
            "pageOnDotImage": "pageondot_1.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxMain",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "1d1d265f",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxIndicator": "flxIndicator",
                "flxMain": "flxMain",
                "flxSpace": "flxSpace",
                "flxTemp": "flxTemp",
                "imgIndicator": "imgIndicator",
                "lblColumn1": "lblColumn1",
                "lblColumn2": "lblColumn2",
                "lblColumn3": "lblColumn3",
                "lblColumn4": "lblColumn4"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxList.add(flxHeader, flxChart, segList);
        var flxActionButton = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2%",
            "clipBounds": true,
            "height": "75dp",
            "id": "flxActionButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_c944332993b242f480e0238ec69719b7,
            "right": "2%",
            "skin": "slFbox",
            "width": "75dp",
            "zIndex": 1
        }, {}, {});
        flxActionButton.setDefaultUnit(kony.flex.DP);
        var imgFAB = new kony.ui.Image2({
            "height": "100%",
            "id": "imgFAB",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_fa_bg.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgAdd = new kony.ui.Image2({
            "height": "100%",
            "id": "imgAdd",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_fa_icon_plus.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxActionButton.add(imgFAB, imgAdd);
        var flxDetail1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDetail1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDetail1.setDefaultUnit(kony.flex.DP);
        var flxHeaderDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxHeaderDetail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympwlSknFlx252b32",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderDetail.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_b7d4c891499f4bdf99411ad60f9c4db9,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "40px",
            "id": "imgBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_back.png",
            "top": "0dp",
            "width": "40px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBack.add(imgBack);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_i5f1abafdd3a4a52abed70530f8963a5,
            "right": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "48px",
            "id": "imgEdit",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_edit.png",
            "top": "0dp",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var lblDetailHeaderName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDetailHeaderName",
            "isVisible": true,
            "skin": "konympwlSknLblfff",
            "text": "LEADS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeaderDetail.add(flxBack, flxEdit, lblDetailHeaderName);
        var flxHeaderDetailEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxHeaderDetailEdit",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "konympwlSknFlx252b32",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderDetailEdit.setDefaultUnit(kony.flex.DP);
        var flxCancel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_b37c9ef4324a460fb367e82e2e2868ea,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxCancel.setDefaultUnit(kony.flex.DP);
        var imgCancel = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "48px",
            "id": "imgCancel",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_cancel.png",
            "top": "0dp",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCancel.add(imgCancel);
        var flxDone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_d8a3994cf3d14d98abd4a2294ccc6c83,
            "right": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxDone.setDefaultUnit(kony.flex.DP);
        var imgDone = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "48px",
            "id": "imgDone",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_wl_done.png",
            "top": "0dp",
            "width": "48px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDone.add(imgDone);
        var lblHeaderNameDetailEdit = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeaderNameDetailEdit",
            "isVisible": true,
            "skin": "konympwlSknLblfff",
            "text": "LEADS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeaderDetailEdit.add(flxCancel, flxDone, lblHeaderNameDetailEdit);
        var flxDetail = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "92%",
            "horizontalScrollIndicator": true,
            "id": "flxDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "konympwlsknScrollFlxffffff",
            "top": "8%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDetail.setDefaultUnit(kony.flex.DP);
        flxDetail.add();
        flxDetail1.add(flxHeaderDetail, flxHeaderDetailEdit, flxDetail);
        worksheetlist.add(flxList, flxActionButton, flxDetail1);
        return worksheetlist;
    }
})