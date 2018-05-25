define("frmWorkSheet", function() {
    return function(controller) {
        function addWidgetsfrmWorkSheet() {
            this.setDefaultUnit(kony.flex.DP);
            var worksheetlist = new com.konymp.worksheetlist({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "worksheetlist",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            worksheetlist.spreadsheetid = "1K-8xkX-fHLleIXzX_fxlNUSOX0NeAuVMrmodAmg9APM";
            worksheetlist.column1 = "A";
            worksheetlist.range = "RoofWork!A2:O98";
            worksheetlist.column2 = "B";
            worksheetlist.column3 = "C";
            worksheetlist.column4 = "D";
            worksheetlist.chartrange = "";
            worksheetlist.lastRowFirst = false;
            var sheettextbox = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox.labelText = "Name";
            sheettextbox.tbxPlaceholder = "Full Name";
            sheettextbox.columnName = "A";
            var sheetPhoneBox = new com.konymp.sheetPhoneBox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheetPhoneBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheetPhoneBox.textTitle = "Phone";
            sheetPhoneBox.columnName = "B";
            var sheettextbox2 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox2.labelText = "Email";
            sheettextbox2.columnName = "C";
            var sheetlistbox = new com.konymp.sheetlistbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheetlistbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheetlistbox.textTitle = "Status";
            sheetlistbox.columnRange = "ValidationSheet!A2:A7";
            sheetlistbox.columnName = "D";
            var sheettextbox3 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox3.labelText = "Street";
            sheettextbox3.columnName = "E";
            var sheettextbox4 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox4.labelText = "City";
            sheettextbox4.columnName = "F";
            var sheettextbox5 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox5.labelText = "State";
            sheettextbox5.columnName = "G";
            var sheettextbox0dc95eadb357645 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox0dc95eadb357645",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox0dc95eadb357645.labelText = "Zip code";
            sheettextbox0dc95eadb357645.columnName = "H";
            var SheetDate = new com.konymp.SheetDate({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "SheetDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            SheetDate.placeholderCal = "MM/DD/YY";
            SheetDate.textTitle = "Customer Crated Date";
            SheetDate.columnName = "I";
            var sheettextbox0bea2cea4606b48 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox0bea2cea4606b48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox0bea2cea4606b48.labelText = "JobDescription";
            sheettextbox0bea2cea4606b48.columnName = "K";
            var sheettextbox0a0c80ac2424346 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox0a0c80ac2424346",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox0a0c80ac2424346.labelText = "Estimated Work";
            sheettextbox0a0c80ac2424346.columnName = "M";
            var sheettextbox0b619783731ea48 = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox0b619783731ea48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox0b619783731ea48.labelText = "Estimated Price";
            sheettextbox0b619783731ea48.columnName = "L";
            var SheetDate1 = new com.konymp.SheetDate({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "SheetDate1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            SheetDate1.placeholderCal = "MM/DD/YY";
            SheetDate1.textTitle = "Estimate Date";
            SheetDate1.columnName = "J";
            var SheetDate2 = new com.konymp.SheetDate({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "SheetDate2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            SheetDate2.placeholderCal = "MM/DD/YY";
            SheetDate2.textTitle = "Job Date";
            SheetDate2.columnName = "N";
            var sheettextbox0bc897aece32b4b = new com.konymp.sheettextbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "sheettextbox0bc897aece32b4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            sheettextbox0bc897aece32b4b.labelText = "Customer Address";
            sheettextbox0bc897aece32b4b.columnName = "O";
            worksheetlist.flxDetail.add(sheettextbox, sheetPhoneBox, sheettextbox2, sheetlistbox, sheettextbox3, sheettextbox4, sheettextbox5, sheettextbox0dc95eadb357645, SheetDate, sheettextbox0bea2cea4606b48, sheettextbox0a0c80ac2424346, sheettextbox0b619783731ea48, SheetDate1, SheetDate2, sheettextbox0bc897aece32b4b);
            var imgStatus = new kony.ui.Image2({
                "height": "58dp",
                "id": "imgStatus",
                "isVisible": true,
                "onTouchStart": controller.AS_Image_d8a431fb710d46759b747c9a984ea4cf,
                "right": "15%",
                "skin": "slImage",
                "src": "report_icon.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(worksheetlist, imgStatus);
        };
        return [{
            "addWidgets": addWidgetsfrmWorkSheet,
            "enabledForIdleTimeout": false,
            "id": "frmWorkSheet",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f45dd754980d446bb84fd9168fa8be86,
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