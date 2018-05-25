define(function() {
    var controller = require("com/konymp/sheetPhoneBox/usersheetPhoneBoxController");
    var actions = require("com/konymp/sheetPhoneBox/sheetPhoneBoxControllerActions");
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
        defineSetter(this, "placeholderTextBox", function(val) {
            this.view.tbxPhone.placeholder = val;
        });
        defineGetter(this, "placeholderTextBox", function() {
            return this.view.tbxPhone.placeholder;
        });
        defineSetter(this, "srcCall", function(val) {
            this.view.imgCall.src = val;
        });
        defineGetter(this, "srcCall", function() {
            return this.view.imgCall.src;
        });
        defineSetter(this, "srcSms", function(val) {
            this.view.imgSms.src = val;
        });
        defineGetter(this, "srcSms", function() {
            return this.view.imgSms.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});