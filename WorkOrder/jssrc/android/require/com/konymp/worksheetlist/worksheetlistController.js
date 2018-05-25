define(function() {
    var controller = require("com/konymp/worksheetlist/userworksheetlistController");
    var actions = require("com/konymp/worksheetlist/worksheetlistControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "left1", function(val) {
            this.view.flxDetail1.left = val;
        });
        defineGetter(this, "left1", function() {
            return this.view.flxDetail1.left;
        });
        defineSetter(this, "chartVisibility", function(val) {
            this.view.flxChart.isVisible = val;
        });
        defineGetter(this, "chartVisibility", function() {
            return this.view.flxChart.isVisible;
        });
        defineSetter(this, "isVisibleAddRow", function(val) {
            this.view.flxActionButton.isVisible = val;
        });
        defineGetter(this, "isVisibleAddRow", function() {
            return this.view.flxActionButton.isVisible;
        });
        defineSetter(this, "headerName", function(val) {
            this.view.lblHeaderName.text = val;
        });
        defineGetter(this, "headerName", function() {
            return this.view.lblHeaderName.text;
        });
        defineGetter(this, "flxDetail", function() {
            return this.view.flxDetail;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClickLogOut_e39d4e12b8c9401db759a7164297d10d = function() {
        if (this.onClickLogOut) {
            this.onClickLogOut.apply(this, arguments);
        }
    }
    return controller;
});