/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/sheettextbox/konyLogger");
    konymp.logger = (new KonyLoggerModule("Sheet Text box Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.DEFAULT_COMPONENT_TYPE = "sheetTextBox";
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._columnName = "";
            this._componentType = constants.DEFAULT_COMPONENT_TYPE;
            this.view.tbxName.setEnabled(false);
            this._originalText = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "columnName", function(val) {
                konymp.logger.trace("----------Entering columnName Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._columnName = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting columnName Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "columnName", function(val) {
                konymp.logger.trace("----------Entering columnName Setter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting columnName Setter---------", konymp.logger.FUNCTION_EXIT);
                return this._columnName;
            });
        },
        /**
         * @function getComponentType
         * @scope API exposed
         * @description reads the component type
         */
        getComponentType: function() {
            konymp.logger.trace("----------Entering getComponentType Function---------", konymp.logger.FUNCTION_ENTRY);
            return this._componentType;
        },
        /**
         * @function setEnable
         * @scope API exposed
         * @description enables the textbox
         */
        setEnable: function(bool) {
            konymp.logger.trace("----------Entering setEnable Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (typeof(bool) !== typeof(true)) {
                    throw {
                        "Error": "Invalid parameter",
                        "message": "Invalid parameter to enable component"
                    };
                }
                this.view.tbxName.setEnabled(bool);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setEnable Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setEnable Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getText
         * @scope API exposed
         * @description returns the original text that was saved in the global
         */
        getText: function() {
            konymp.logger.trace("----------Entering getText Function---------", konymp.logger.FUNCTION_ENTRY);
            var returnString = "";
            try {
                returnString = this._originalText;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getText Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getText Function---------", konymp.logger.FUNCTION_EXIT);
            return returnString;
        },
        /**
         * @function setText
         * @scope API exposed
         * @description set the text
         * @param text {String}
         */
        setText: function(text) {
            konymp.logger.trace("----------Entering setText Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.tbxName.text = text;
                this._originalText = text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setText Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setText Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function setGlobalValue
         * @scope API exposed
         * @description set the text to a single global at component scope
         * @param text {String}
         */
        setGlobalValue: function(text) {
            konymp.logger.trace("----------Entering setGlobalValue Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._originalText = text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setGlobalValue Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setGlobalValue Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getTextBoxText
         * @scope API exposed
         * @description returns the text from the text box
         * @param None
         */
        getTextBoxText: function() {
            return this.view.tbxName.text;
        }
    };
});