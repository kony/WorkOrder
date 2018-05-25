define({
    AS_AppEvents_c8021d53acfb475e8f3bc582216a18cd: function AS_AppEvents_c8021d53acfb475e8f3bc582216a18cd(eventobject) {
        var self = this;
        handleDeeplinkCallback(eventobject);
        return kony.application.getCurrentForm();
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.googlelogin", "googlelogin", "googleloginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "googlelogin",
            "name": "com.konymp.googlelogin"
        });
        kony.mvc.registry.add("com.konymp.SheetDate", "SheetDate", "SheetDateController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "SheetDate",
            "name": "com.konymp.SheetDate"
        });
        kony.mvc.registry.add("com.konymp.sheetlistbox", "sheetlistbox", "sheetlistboxController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "sheetlistbox",
            "name": "com.konymp.sheetlistbox"
        });
        kony.mvc.registry.add("com.konymp.sheetPhoneBox", "sheetPhoneBox", "sheetPhoneBoxController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "sheetPhoneBox",
            "name": "com.konymp.sheetPhoneBox"
        });
        kony.mvc.registry.add("com.konymp.sheettextbox", "sheettextbox", "sheettextboxController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "sheettextbox",
            "name": "com.konymp.sheettextbox"
        });
        kony.mvc.registry.add("com.konymp.verticalbar", "verticalbar", "verticalbarController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "verticalbar",
            "name": "com.konymp.verticalbar"
        });
        kony.mvc.registry.add("com.konymp.worksheetCell", "worksheetCell", "worksheetCellController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "worksheetCell",
            "name": "com.konymp.worksheetCell"
        });
        kony.mvc.registry.add("com.konymp.worksheetlist", "worksheetlist", "worksheetlistController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "worksheetlist",
            "name": "com.konymp.worksheetlist"
        });
        kony.mvc.registry.add("flxMain", "flxMain", "flxMainController");
        kony.mvc.registry.add("frmJobStatus", "frmJobStatus", "frmJobStatusController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmWorkSheet", "frmWorkSheet", "frmWorkSheetController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});