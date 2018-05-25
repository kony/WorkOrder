/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/sheetPhoneBox/konyLogger");
    konymp.logger = (new KonyLoggerModule("Sheet Phone box Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.DEFAULT_COMPONENT_TYPE = "sheetPhoneBox";
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._columnName = "";
            this._componentType = constants.DEFAULT_COMPONENT_TYPE;
            this.view.flxMain.tbxPhone.setEnabled(false);
            this._originalPhone = "";
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
            try {
                return this._componentType;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getComponentType Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getComponentType Function---------", konymp.logger.FUNCTION_EXIT);
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
                this.view.flxMain.tbxPhone.setEnabled(bool);
                this.view.flxMain.imgCall.isVisible = !bool;
                this.view.flxMain.imgSms.isVisible = !bool;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setEnable Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setEnable Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getText
         * @scope API exposed
         * @description get the text
         */
        getText: function() {
            konymp.logger.trace("----------Entering getText Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this._originalPhone;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getText Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getText Function---------", konymp.logger.FUNCTION_EXIT);
            return returnString;
        },
        /**
         * @function getTextboxText
         * @scope API exposed
         * @description get the text
         */
        getTextboxText: function() {
            konymp.logger.trace("----------Entering getTextboxText Function---------", konymp.logger.FUNCTION_ENTRY);
            var returnString = "";
            try {
                returnString = this.view.flxMain.tbxPhone.text;
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
                this.view.flxMain.tbxPhone.text = text;
                this._originalPhone = text;
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
                this._originalPhone = text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setGlobalValue Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setGlobalValue Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function dialCall
         * @description dials a call to the specified number
         * @param None
         */
        dialCall: function() {
            try {
                kony.phone.dial(this.view.flxMain.tbxPhone.text);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting dialCall Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting dialCall Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function sendSMS
         * @description sends SMS to the specific number
         * @param None
         */
        sendSMS: function() {
            try {
                kony.phone.sendSMS(this.view.flxMain.tbxPhone.text, "");
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting sendSMS Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting sendSMS Function---------", konymp.logger.FUNCTION_EXIT);
        }
    };
});