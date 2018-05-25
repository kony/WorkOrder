define(function() {
    var controller = require("com/konymp/sheetlistbox/usersheetlistboxController");
    var actions = require("com/konymp/sheetlistbox/sheetlistboxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "textTitle", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "textTitle", function() {
            return this.view.lblTitle.text;
        });
        defineSetter(this, "isVisiblelistbox", function(val) {
            this.view.listBx.isVisible = val;
        });
        defineGetter(this, "isVisiblelistbox", function() {
            return this.view.listBx.isVisible;
        });
        defineSetter(this, "placeholder", function(val) {
            this.view.listBx.placeholder = val;
        });
        defineGetter(this, "placeholder", function() {
            return this.view.listBx.placeholder;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});