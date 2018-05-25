define(function() {
    var controller = require("com/konymp/SheetDate/userSheetDateController");
    var actions = require("com/konymp/SheetDate/SheetDateControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isVisibleCalendar", function(val) {
            this.view.cal1.isVisible = val;
        });
        defineGetter(this, "isVisibleCalendar", function() {
            return this.view.cal1.isVisible;
        });
        defineSetter(this, "placeholderCal", function(val) {
            this.view.cal1.placeholder = val;
        });
        defineGetter(this, "placeholderCal", function() {
            return this.view.cal1.placeholder;
        });
        defineSetter(this, "textTitle", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "textTitle", function() {
            return this.view.lblTitle.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});