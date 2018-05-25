/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {

    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/worksheetCell/konyLogger");
    konymp.logger = (new KonyLoggerModule("WorkSheet Cell Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.DEFAULT_COMPONENT_TYPE = "workSheetCell";
    constants.DEFAULT_ERROR_MESSAGE = "Something went wrong";
    constants.DEFAULT_SUCCESS_UPDATE_MSG = "Successfully Updated the values";
    constants.DEFAULT_FAILURE_UPDATE_MSG = "Failed to update the values";

    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {

            this._displayType = "";
            this._readOnly = true;
            this._spreadsheetId = "";
            this._sheetName = "";
            this._rowNumber = 0;
            this._cellData = "";

        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {

            //GENERAL
            defineSetter(this, "displayType", function(val) {
                konymp.logger.trace("----------Entering displayType Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined) {
                    this._displayType = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting displayType Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "displayType", function(val) {
                konymp.logger.trace("----------Entering displayType Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting displayType Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._displayType;
            });

            //TEXTBOX
            defineSetter(this, "readOnly", function(val) {
                konymp.logger.trace("----------Entering readOnly Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined) {
                    this._readOnly = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting readOnly Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "readOnly", function(val) {
                konymp.logger.trace("----------Entering readOnly Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting readOnly Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._readOnly;
            });

            //SPREADSHEET
            defineSetter(this, "spreadsheetId", function(val) {
                konymp.logger.trace("----------Entering spreadsheetId Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined) {
                    this._spreadsheetId = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting spreadsheetId Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "spreadsheetId", function(val) {
                konymp.logger.trace("----------Entering spreadsheetId Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting spreadsheetId Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._spreadsheetId;
            });

            defineSetter(this, "sheetName", function(val) {
                konymp.logger.trace("----------Entering sheetName Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined) {
                    this._sheetName = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting sheetName Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "sheetName", function(val) {
                konymp.logger.trace("----------Entering sheetName Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting sheetName Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._sheetName;
            });

            defineSetter(this, "columnName", function(val) {
                konymp.logger.trace("----------Entering columnName Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._columnName = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting columnName Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "columnName", function(val) {
                konymp.logger.trace("----------Entering columnName Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting columnName Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._columnName;
            });


            defineSetter(this, "rowNumber", function(val) {
                konymp.logger.trace("----------Entering rowNumber Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined) {
                    this._rowNumber = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting rowNumber Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "rowNumber", function(val) {
                konymp.logger.trace("----------Entering rowNumber Getter---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.trace("----------Exiting rowNumber Getter---------", konymp.logger.FUNCTION_EXIT);
                return this._rowNumber;
            });
        },

        /**
         * @function setDisplayType
         * @scope private
         * @description UI changes based on the display type
         * @param none
         */
        setDisplayType: function() {

            this._setWidthAndHeight(this._displayType);
            if (this._displayType === "text box") {
                this.view.flxPoker.isVisible = false;
                this.view.flxTextBox.isVisible = true;
                this.view.flxTextBox.flxDone.isVisible = false;
                this.view.flxTextBox.flxCancel.isVisible = false;
                this.view.flxTextBox.tbxMain.setEnabled(false);
                this._checkForReadOnly();
            } else if (this._displayType === "poker chip") {
                this.view.flxPoker.isVisible = true;
                this.view.flxTextBox.isVisible = false;
            }
        },

        /**
         * @function _checkForReadOnly
         * @scope private
         * @description checks if property readOnly is enabled for textbox or not
         * @param none
         */
        _checkForReadOnly: function() {

            if (this._readOnly) {
                this.view.flxTextBox.flxEdit.isVisible = false;
            } else {
                this.view.flxTextBox.flxEdit.isVisible = true;
            }
        },

        /**
         * @function _onClickEdit
         * @scope private
         * @description on click functionality for edit
         * @param none
         */
        _onClickEdit: function() {

            this.view.flxTextBox.tbxMain.setEnabled(true);
            this.view.flxTextBox.tbxMain.setFocus(true);
            this.view.flxTextBox.flxEdit.isVisible = false;
            this.view.flxTextBox.flxDone.isVisible = true;
            this.view.flxTextBox.flxCancel.isVisible = true;
            this.view.flxTextBox.tbxMain.skin = "konympwcSknTbxfffBor1px";

        },
        /**
         * @function _onClickDone
         * @scope private
         * @description on click functionality for done
         * @param none
         */
        _onClickDone: function() {

            this.view.flxTextBox.tbxMain.skin = "konympwcSknTbxfff";
            this.view.flxTextBox.tbxMain.setEnabled(false);
            this.view.flxTextBox.flxEdit.isVisible = true;
            this.view.flxTextBox.flxDone.isVisible = false;
            this.view.flxTextBox.flxCancel.isVisible = false;
            this._cellData = this.view.flxTextBox.tbxMain.text;
            this._updateSheet();
        },
        /**
         * @function _onClickCancel
         * @scope private
         * @description on click functionality for cancel
         * @param none
         */
        _onClickCancel: function() {

            this.view.flxTextBox.tbxMain.skin = "konympwcSknTbxfff";
            this.view.flxTextBox.tbxMain.text = "";
            this.view.flxTextBox.tbxMain.setEnabled(false);
            this.view.flxTextBox.flxEdit.isVisible = true;
            this.view.flxTextBox.flxDone.isVisible = false;
            this.view.flxTextBox.flxCancel.isVisible = false;
            this.view.flxTextBox.tbxMain.text = this._cellData;
        },

        /**
         * @function fetchAndSetCellData
         * @scope API exposed
         * @description fetch and set cell data
         */
        fetchAndSetCellData: function() {

            var data = {
                "spreadsheetId": this._spreadsheetId,
                "range": this._sheetName + "!" + this._columnName + this._rowNumber,
                "majorDimension": "ROWS"
            };
            this._fetchData("konyMpGoogleSheets", "spreadsheets_values_get", data, this._operationSuccess.bind(this), this._operationFailure.bind(this));
        },

        /**
         * @function _updateSheet
         * @scope private
         * @description updates the cell content of the sheet
         * @param none
         */
        _updateSheet: function() {

            try {
                var KNYMobileFabric = new kony.sdk.getCurrentInstance();
                var serviceName = "konyMpGoogleSheets";
                var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
                var operationName = "spreadsheets_values_update";
                var range = this._sheetName + "!" + this._columnName + this._rowNumber;
                var data = [];
                data[0] = this._cellData;
                var data1 = {
                    "spreadsheetId": this._spreadsheetId,
                    "range": range,
                    "values": data,
                    "value_range": range
                };
                integrationObj.invokeOperation(operationName, {}, data1, this._updateSuccess.bind(this), this._updateFailure.bind(this));
            } catch (exception) {

                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _updateData Function---------", konymp.logger.FUNCTION_EXIT);
            }
        },

        /**
         * @function _updateSuccess
         * @scope private
         * @description success callback of update 
         * @param res {JSON Array}
         */
        _updateSuccess: function(res) {
            konymp.logger.trace("----------Entering _updateSuccess Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._createToast(constants.DEFAULT_SUCCESS_UPDATE_MSG);

            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _updateSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }

            konymp.logger.trace("----------Exiting _updateSuccess Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function _updateFailure
         * @scope private
         * @description failue callback of update
         * @param res {JSON Array}
         */
        _updateFailure: function(res) {


            konymp.logger.trace("----------Entering _updateFailure Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.application.dismissLoadingScreen();
                this._createToast(constants.DEFAULT_FAILURE_UPDATE_MSG);

            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _updateFailure Function---------", konymp.logger.FUNCTION_EXIT);
            }

            konymp.logger.trace("----------Exiting _updateFailure Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function _setWidthAndHeight
         * @scope private
         * @description change the dimensions of the component based on display type
         * @param type {String}
         */

        _setWidthAndHeight: function(type) {

            if (type === "text box") {
                this.view.height = "12%";
                this.view.width = "100%";
                this.view.skin = "konympwcSknFlxDefault";
            } else if (type === "poker chip") {
                this.view.height = "60dp";
                this.view.width = "60dp";
                this.view.skin = "konympwcsknflxpokerchip";
            }
        },

        /**
         * @function _fetchData
         * @scope private
         * @description fetch the data from sheet
         * @param serviceName {String}
         * @param operationName {String}
         * @param data {JSON Array}
         * @param succescallback {JS Function}
         * @param errorcallback {JS Function}
         */
        _fetchData: function(serviceName, operationName, data, succescallback, errorcallback) {
            konymp.logger.trace("----------Entering _fetchData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var KNYMobileFabric = new kony.sdk.getCurrentInstance();
                var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
                integrationObj.invokeOperation(operationName, {}, data, succescallback, errorcallback);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _fetchData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _fetchData Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function _operationSuccess
         * @scope private
         * @description success callback of fetching of sheet data
         * @param res {JSON Array}
         */
        _operationSuccess: function(res) {
            konymp.logger.trace("----------Entering _operationSuccess Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.application.dismissLoadingScreen();
                if (res !== undefined || res !== null) {
                    //alert(res.values[0][0]);
                    this._cellData = res.values[0][0];
                    this.view.flxPoker.lblText.text = res.values[0][0];
                    this.view.flxTextBox.tbxMain.text = res.values[0][0];
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _operationSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }

            konymp.logger.trace("----------Exiting _operationSuccess Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function _operationFailure
         * @scope private
         * @description failure callback of fetching sheet data
         * @param res {JSON Object}
         */
        _operationFailure: function(res) {
            konymp.logger.trace("----------Entering _operationFailure Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.application.dismissLoadingScreen();
                this._createToast(constants.DEFAULT_ERROR_MESSAGE);

            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _operationFailure Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _operationFailure Function---------", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function _createToast
         * @scope private
         * @description shows toast with given text
         * @param text {String}
         */
        _createToast: function(text) {
            konymp.logger.trace("----------Entering _createToast Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var toast = new kony.ui.Toast({
                    "text": text,
                    "duration": constants.SHORT
                });
                var offset = {
                    gravity: constants.TOAST_POS_BOTTOM_CENTER,
                    y: 30
                };
                toast.alignConfig = offset;
                toast.show();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _createToast Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _createToast Function---------", konymp.logger.FUNCTION_EXIT);
        },

    };
});