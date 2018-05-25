define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgCall **/
    AS_Image_cdd9734f88804a20b9b8f435872477c7: function AS_Image_cdd9734f88804a20b9b8f435872477c7(eventobject, x, y) {
        var self = this;
        //kony.phone.dial(this.view.flxMain.tbxPhone.text);
        this.dialCall();
    },
    /** onTouchStart defined for imgSms **/
    AS_Image_g5765488e54f49fcbc5ca7ebdbd9927d: function AS_Image_g5765488e54f49fcbc5ca7ebdbd9927d(eventobject, x, y) {
        var self = this;
        // kony.phone.sendSMS(this.view.flxMain.tbxPhone.text, "");
        this.sendSMS();
    }
});