define({
    AS_AppEvents_c8021d53acfb475e8f3bc582216a18cd: function AS_AppEvents_c8021d53acfb475e8f3bc582216a18cd(eventobject) {
        var self = this;
        handleDeeplinkCallback(eventobject);
        return kony.application.getCurrentForm();
    }
});