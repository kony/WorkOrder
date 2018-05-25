define(function() {
    var controller = require("com/konymp/sheettextbox/usersheettextboxController");
    var actions = require("com/konymp/sheettextbox/sheettextboxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "labelText", function(val) {
            this.view.lblName.text = val;
        });
        defineGetter(this, "labelText", function() {
            return this.view.lblName.text;
        });
        defineSetter(this, "tbxPlaceholder", function(val) {
            this.view.tbxName.text = val;
        });
        defineGetter(this, "tbxPlaceholder", function() {
            return this.view.tbxName.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});