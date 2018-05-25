define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for googlelogin **/
    AS_FlexContainer_ce705227110243808eaff6ebb9d3786f: function AS_FlexContainer_ce705227110243808eaff6ebb9d3786f(eventobject, x, y) {
        var self = this;
        this.view.imgGoogle.isVisible = false;
        this.view.imgFocusGoogle.isVisible = true;
    },
    /** onTouchEnd defined for googlelogin **/
    AS_FlexContainer_a128aaee735e40d4a9550100326e35df: function AS_FlexContainer_a128aaee735e40d4a9550100326e35df(eventobject, x, y) {
        var self = this;
        this.view.imgGoogle.isVisible = true;
        this.view.imgFocusGoogle.isVisible = false;
    },
    /** onClick defined for googlelogin **/
    AS_FlexContainer_f3622c838e5f41a98456493554a7aadd: function AS_FlexContainer_f3622c838e5f41a98456493554a7aadd(eventobject) {
        var self = this;
        this.invokeIdentitySerivce("reusableGoogleLogin");
    }
});