define(function() {
    var controller = require("com/konymp/worksheetCell/userworksheetCellController");
    var actions = require("com/konymp/worksheetCell/worksheetCellControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "sknPokerChipBackground", function(val) {
            this.view.flxPoker.skin = val;
        });
        defineGetter(this, "sknPokerChipBackground", function() {
            return this.view.flxPoker.skin;
        });
        defineSetter(this, "sknPokerChipText", function(val) {
            this.view.lblText.skin = val;
        });
        defineGetter(this, "sknPokerChipText", function() {
            return this.view.lblText.skin;
        });
        defineSetter(this, "sknTextBoxBackground", function(val) {
            this.view.flxTextBox.skin = val;
        });
        defineGetter(this, "sknTextBoxBackground", function() {
            return this.view.flxTextBox.skin;
        });
        defineSetter(this, "sknTextBox", function(val) {
            this.view.tbxMain.skin = val;
        });
        defineGetter(this, "sknTextBox", function() {
            return this.view.tbxMain.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});