define(function() {
    var controller = require("com/konymp/googlelogin/usergoogleloginController");
    var actions = require("com/konymp/googlelogin/googleloginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "logoScaleMode", function(val) {
            this.view.imgGoogle.imageScaleMode = val;
        });
        defineGetter(this, "logoScaleMode", function() {
            return this.view.imgGoogle.imageScaleMode;
        });
        defineSetter(this, "iconSource", function(val) {
            this.view.imgGoogle.src = val;
        });
        defineGetter(this, "iconSource", function() {
            return this.view.imgGoogle.src;
        });
        defineSetter(this, "iconFocusSource", function(val) {
            this.view.imgFocusGoogle.src = val;
        });
        defineGetter(this, "iconFocusSource", function() {
            return this.view.imgFocusGoogle.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});