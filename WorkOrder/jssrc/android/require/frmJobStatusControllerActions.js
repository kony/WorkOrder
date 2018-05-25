define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBackBtn **/
    AS_FlexContainer_c107df2f15494d2c9854c60851222962: function AS_FlexContainer_c107df2f15494d2c9854c60851222962(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWorkSheet");
        ntf.navigate();
    },
    /** preShow defined for frmJobStatus **/
    AS_Form_h021cfc3e7a24021968c0106d10de8f7: function AS_Form_h021cfc3e7a24021968c0106d10de8f7(eventobject) {
        var self = this;
        this.view.worksheetCell.fetchAndSetCellData();
        this.view.worksheetCell2.fetchAndSetCellData();
        this.view.worksheetCell3.fetchAndSetCellData();
        this.view.worksheetCell4.fetchAndSetCellData();
        this.view.worksheetCell5.fetchAndSetCellData();
        this.view.worksheetCell6.fetchAndSetCellData();
    }
});