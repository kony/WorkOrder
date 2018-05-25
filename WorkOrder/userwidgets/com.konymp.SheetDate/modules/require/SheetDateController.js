/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {

    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/SheetDate/konyLogger");
    konymp.logger = (new KonyLoggerModule("Sheet Date Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.DEFAULT_COLUMN_ERROR_MSG = "Invalid value provided for Column";
    constants.DEFAULT_ERROR_MESSAGE = "Sorry! Something went wrong.";
    constants.DEFAULT_DATA_ERROR_MSG = "Please provide Selection Options";
    constants.DEFAULT_DATE_FORMAT = "MM/dd/yyyy";
    constants.DEFAULT_COMPONENT_TYPE = "sheetDateComponent";

    return {


        constructor: function(baseConfig, layoutConfig, pspConfig) {

            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._columnName = "";
            this._selectedValue = "";
            this.view.flxMain.cal1.dateFormat = constants.DEFAULT_DATE_FORMAT;

        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {

            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "columnName", function(val) {

                konymp.logger.trace("----------Entering columnName Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== "" && val !== undefined && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
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

            defineGetter(this, "columnName", function() {
                return this._columnName;
            });
        },

        /**
         * @function getComponentType
         * @scope private
         * @description returns the type of the component
         */
        getComponentType: function() {
            konymp.logger.trace("----------Entering getComponentType Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                return constants.DEFAULT_COMPONENT_TYPE;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getComponentType Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getComponentType Function---------", konymp.logger.FUNCTION_EXIT);


        },

        /**
         * @function onSelectionDone
         * @scope private
         * @description modifies global values after selction of date
         */
        onSelectionDone: function() {

            konymp.logger.trace("----------Entering onSelectionDone Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._selectedValue = this.view.flxMain.cal1.formattedDate;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting onSelectionDone Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting onSelectionDone Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function getLabelData
         * @scope private
         * @description returns the text of the lblValue
         */
        getLabelData: function() {

            konymp.logger.trace("----------Entering getLabelData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this.view.flxMain.lblValue.text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getLabelData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getLabelData Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function setLabelData
         * @scope private
         * @description sets the text for lblValue
         */
        setLabelData: function(text) {

            konymp.logger.trace("----------Entering setLabelData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.flxMain.lblValue.text = text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setLabelData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setLabelData Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function resetSelectedValue
         * @scope private
         * @description resets the selected value global
         */
        resetSelectedValue: function() {

            konymp.logger.trace("----------Entering resetSelectedValue Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._selectedValue = "";
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting resetSelectedValue Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting resetSelectedValue Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function resetSelectedValue
         * @scope private
         * @description returns the selected value global
         */
        getSelectedValue: function() {

            konymp.logger.trace("----------Entering getSelectedValue Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this._selectedValue;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getSelectedValue Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getSelectedValue Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function setSelectedDate
         * @scope private
         * @description sets the date to the calendar widget
         */
        setSelectedDate: function(stringDate) {

            konymp.logger.trace("----------Entering setSelectedDate Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var splitDate = stringDate.split("/");
                var month = splitDate[0];
                var day = splitDate[1];
                var year = splitDate[2];
              	if(year.length === 2)
                  {
                    var fullYear  = (year < 90) ? '20' + year : '19' + year;
                    year = fullYear;
                  }               
                this.view.flxMain.cal1.dateComponents = [day, month, year];
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setSelectedDate Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setSelectedDate Function---------", konymp.logger.FUNCTION_EXIT);
        }
    };
});