define("frmJobStatus", function() {
    return function(controller) {
        function addWidgetsfrmJobStatus() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXHEADER",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var lblHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "skin": "SKNLBLHEADER",
                "text": "STATUS",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBackBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBackBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_c107df2f15494d2c9854c60851222962,
                "skin": "slFbox",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxBackBtn.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "48dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "konymp_wl_back.png",
                "width": "48dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackBtn.add(imgBack);
            flxHeader.add(lblHeader, flxBackBtn);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxCellWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxCellWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxCellWrapper.setDefaultUnit(kony.flex.DP);
            var worksheetCell = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell.displayType = "poker chip";
            worksheetCell.readOnly = true;
            worksheetCell.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell.sheetName = "Reports";
            worksheetCell.columnName = "B";
            worksheetCell.rowNumber = 1;
            var lblJobStatusName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJobStatusName",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Jobs Open",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBorderRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxBorderRight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "SKNFLXSEPERATORBG",
                "width": "2dp",
                "zIndex": 1
            }, {}, {});
            flxBorderRight.setDefaultUnit(kony.flex.DP);
            flxBorderRight.add();
            var flxBorderBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxBorderBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXSEPERATORBG",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxBorderBottom.setDefaultUnit(kony.flex.DP);
            flxBorderBottom.add();
            flxCellWrapper.add(worksheetCell, lblJobStatusName, flxBorderRight, flxBorderBottom);
            var CellWrapper2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "CellWrapper2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CellWrapper2.setDefaultUnit(kony.flex.DP);
            var worksheetCell2 = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell2.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell2.displayType = "poker chip";
            worksheetCell2.readOnly = true;
            worksheetCell2.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell2.sheetName = "Reports";
            worksheetCell2.columnName = "B";
            worksheetCell2.rowNumber = 2;
            var lblJobStatusName1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJobStatusName1",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Estimate Schedule",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBorderBottom1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxBorderBottom1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXSEPERATORBG",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxBorderBottom1.setDefaultUnit(kony.flex.DP);
            flxBorderBottom1.add();
            CellWrapper2.add(worksheetCell2, lblJobStatusName1, flxBorderBottom1);
            var CellWrapper3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "CellWrapper3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "33%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CellWrapper3.setDefaultUnit(kony.flex.DP);
            var worksheetCell3 = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell3.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell3.displayType = "poker chip";
            worksheetCell3.readOnly = true;
            worksheetCell3.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell3.sheetName = "Reports";
            worksheetCell3.columnName = "B";
            worksheetCell3.rowNumber = 1;
            var lblJobStatusName3 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJobStatusName3",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Completed",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxBorderRight0dae202b46d1043 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "CopyflxBorderRight0dae202b46d1043",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "SKNFLXSEPERATORBG",
                "width": "2dp",
                "zIndex": 1
            }, {}, {});
            CopyflxBorderRight0dae202b46d1043.setDefaultUnit(kony.flex.DP);
            CopyflxBorderRight0dae202b46d1043.add();
            var CopyflxBorderBottom0e08b136436ad4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxBorderBottom0e08b136436ad4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXSEPERATORBG",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            CopyflxBorderBottom0e08b136436ad4c.setDefaultUnit(kony.flex.DP);
            CopyflxBorderBottom0e08b136436ad4c.add();
            CellWrapper3.add(worksheetCell3, lblJobStatusName3, CopyflxBorderRight0dae202b46d1043, CopyflxBorderBottom0e08b136436ad4c);
            var CellWrapper4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "CellWrapper4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "slFbox",
                "top": "33%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CellWrapper4.setDefaultUnit(kony.flex.DP);
            var worksheetCell4 = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell4.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell4.displayType = "poker chip";
            worksheetCell4.readOnly = true;
            worksheetCell4.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell4.sheetName = "Reports";
            worksheetCell4.columnName = "B";
            worksheetCell4.rowNumber = 3;
            var CopylblJobStatusName0baf315afd5e343 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopylblJobStatusName0baf315afd5e343",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Job Scheduled",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxBorderBottom0fe50d65b5a2c44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxBorderBottom0fe50d65b5a2c44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXSEPERATORBG",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            CopyflxBorderBottom0fe50d65b5a2c44.setDefaultUnit(kony.flex.DP);
            CopyflxBorderBottom0fe50d65b5a2c44.add();
            CellWrapper4.add(worksheetCell4, CopylblJobStatusName0baf315afd5e343, CopyflxBorderBottom0fe50d65b5a2c44);
            var CellWrapper5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "CellWrapper5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "66%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CellWrapper5.setDefaultUnit(kony.flex.DP);
            var worksheetCell5 = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell5.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell5.displayType = "poker chip";
            worksheetCell5.readOnly = true;
            worksheetCell5.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell5.sheetName = "Reports";
            worksheetCell5.columnName = "B";
            worksheetCell5.rowNumber = 5;
            var lblJobStatusName5 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJobStatusName5",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Estimated",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxBorderRight0cb716c932c3245 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "CopyflxBorderRight0cb716c932c3245",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "SKNFLXSEPERATORBG",
                "width": "2dp",
                "zIndex": 1
            }, {}, {});
            CopyflxBorderRight0cb716c932c3245.setDefaultUnit(kony.flex.DP);
            CopyflxBorderRight0cb716c932c3245.add();
            CellWrapper5.add(worksheetCell5, lblJobStatusName5, CopyflxBorderRight0cb716c932c3245);
            var CellWrapper6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "CellWrapper6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "slFbox",
                "top": "66%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            CellWrapper6.setDefaultUnit(kony.flex.DP);
            var worksheetCell6 = new com.konymp.worksheetCell({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "worksheetCell6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympwcSknFlxDefault",
                "top": "0dp",
                "width": "95%"
            }, {}, {});
            worksheetCell6.sknPokerChipText = "CopykonympwcsknlblpokerChip0d23933962bd947";
            worksheetCell6.displayType = "poker chip";
            worksheetCell6.readOnly = true;
            worksheetCell6.spreadsheetId = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetCell6.sheetName = "Reports";
            worksheetCell6.columnName = "B";
            worksheetCell6.rowNumber = 3;
            var lblJobStatusName6 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJobStatusName6",
                "isVisible": true,
                "skin": "CopydefLabel0heaa639a436746",
                "text": "Closed",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CellWrapper6.add(worksheetCell6, lblJobStatusName6);
            flxBody.add(flxCellWrapper, CellWrapper2, CellWrapper3, CellWrapper4, CellWrapper5, CellWrapper6);
            this.add(flxHeader, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmJobStatus,
            "enabledForIdleTimeout": false,
            "id": "frmJobStatus",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_h021cfc3e7a24021968c0106d10de8f7,
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