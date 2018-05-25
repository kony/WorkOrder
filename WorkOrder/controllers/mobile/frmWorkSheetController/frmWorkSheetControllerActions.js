define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgStatus **/
    AS_Image_d8a431fb710d46759b747c9a984ea4cf: function AS_Image_d8a431fb710d46759b747c9a984ea4cf(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmJobStatus");
        ntf.navigate();
    },
    /** preShow defined for frmWorkSheet **/
    AS_Form_f45dd754980d446bb84fd9168fa8be86: function AS_Form_f45dd754980d446bb84fd9168fa8be86(eventobject) {
        var self = this;
        this.view.worksheetlist.fetchAndSetData();
    }
});