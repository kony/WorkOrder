/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/sheetlistbox/konyLogger");
    konymp.logger = (new KonyLoggerModule("List box Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.DEFAULT_COLUMN_ERROR_MSG = "Invalid range provided for Column. Please provide range in A1 notation";
    constants.DEFAULT_ERROR_MESSAGE = "Sorry! Something went wrong.";
    constants.DEFAULT_DATA_ERROR_MSG = "Please provide Selection Options";
    constants.DEFAULT_SPREADSHEET_ERROR_MSG = "Invalid spreadsheet Id";
    constants.DEFAULT_COMPONENT_TYPE = "listBoxComponent";
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._columnRange = "";
            this._listBoxData = "";
            this._selectedValue = "";
            this._spreadsheetId = "";
            this._data = "";
            this._labelText = "";
            this._columnName = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "columnName", function(val) {
                this._columnName = val;
            });
            defineGetter(this, "columnName", function(val) {
                return this._columnName;
            });
            defineSetter(this, "columnRange", function(val) {
                konymp.logger.trace("----------Entering columnRange Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== "" && val !== undefined) {
                    var regex = /((('.+')|([a-zA-Z0-9]+))\!)?([a-zA-Z]+([1-9]\d*)(:([a-zA-Z]+)?([1-9]\d*)?)?|((:[a-zA-Z]+([1-9]\d*)?)))/g;
                    if (regex.test(val)) {
                        this._columnRange = val;
                    } else {
                        konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                        throw {
                            "Error": "DataInvalid",
                            "message": constants.DEFAULT_COLUMN_ERROR_MSG
                        };
                    }
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting columnRange Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "columnRange", function() {
                return this._columnRange;
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
        },
        /**
         * @function fetchAndSetListBoxData
         * @scope private
         * @description fetched data from backend and populates in the listbox
         */
        fetchAndSetListBoxData: function() {
            konymp.logger.trace("----------Entering fetchAndSetListBoxData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                function callMeAfterSuccess(data) {
                    var mapArr = [];
                    for (var i = 0; i < data.length; i++) {
                        var mapObj = {
                            "mykey": i,
                            "myvalue": data[i]
                        };
                        mapArr.push(mapObj);
                    }
                    this.view.flxMain.listBx.masterDataMap = [mapArr, "mykey", "myvalue"];
                    this.view.flxMain.listBx.placeholder = data[0];
                }
                this.getBackendData(callMeAfterSuccess.bind(this));
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting fetchAndSetListBoxData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting fetchAndSetListBoxData Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _onSelectionDone
         * @scope private
         * @description updates the global variable on selection done
         */
        _onSelectionDone: function() {
            konymp.logger.trace("----------Entering _onSelectionDone Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._selectedValue = this.view.flxMain.listBx.selectedKeyValue[1];
                this._selectionMadeFlag = 1;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onSelectionDone Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onSelectionDone Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getLabelData
         * @scope private
         * @description returns the label data
         */
        getLabelData: function() {
            konymp.logger.trace("----------Entering getLabelData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this._labelText;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getLabelData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getLabelData Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function setLabelData
         * @scope private
         * @description updates the label text
         * @param {string} text
         */
        setLabelData: function(text) {
            try {
                konymp.logger.trace("----------Entering setLabelData Function---------", konymp.logger.FUNCTION_ENTRY);
                this._labelText = text;
                this.view.flxMain.lblValue.text = this._labelText;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setLabelData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setLabelData Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getBackendData
         * @scope private
         * @description fetches data from the backend
         * @param {string} callmeAfterSuccess - callback method to populate data
         */
        getBackendData: function(callmeAfterSuccess) {
            konymp.logger.trace("----------Entering getBackendData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var data = {
                    "spreadsheetId": this.getSpreadsheetId(),
                    "range": this._columnRange,
                    "majorDimension": "ROWS"
                };
                this._fetchData("konyMpGoogleSheets", "spreadsheets_values_get", data, this._operationSuccess.bind(this, callmeAfterSuccess), this._operationFailure.bind(this));
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getBackendData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getBackendData Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _fetchData
         * @scope private
         * @description calls the get service and returns the data
         * @param {string} serviceName
         * @param {string} operationName
         * @param {string} data
         * @param {string} succescallback
         * @param {string} errorcallback
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
         * @description success callback for _fetchData
         * @param {string} callmeAfterSuccess
         * @param {string} response
         */
        _operationSuccess: function(callmeAfterSuccess, response) {
            konymp.logger.trace("----------Entering _operationSuccess Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var data = this._processData(response.values);
                this._data = data;
                this._callbackCheck = 1;
                if (callmeAfterSuccess !== undefined && typeof callmeAfterSuccess === 'function') {
                    callmeAfterSuccess(data);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _operationSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }
        },
        /**
         * @function _operationFailure
         * @scope private
         * @description error callback for _fetchData
         * @param {string} response
         */
        _operationFailure: function(response) {
            konymp.logger.trace("----------Entering _operationFailure Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._createToast(constants.DEFAULT_ERROR_MESSAGE);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _operationFailure Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _operationFailure Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _processData
         * @scope private
         * @description processes recieved data into required format
         * @param {string} response
         */
        _processData: function(data) {
            konymp.logger.trace("----------Entering _processData Function---------", konymp.logger.FUNCTION_ENTRY);
            var result = [];
            try {
                var i, j;
                var header = [];
                for (i = 0; i < data.length; i++) {
                    var tempArr = data[i];
                    for (j = 0; j < tempArr.length; j++) {
                        if (tempArr[j]) {
                            result.push(data[i][j]);
                        }
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _processData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _processData Function---------", konymp.logger.FUNCTION_EXIT);
            return result;
        },
        /**
         * @function getSpreadsheetId
         * @scope private
         * @description returns spreadsheetId to fetch data
         */
        getSpreadsheetId: function() {
            konymp.logger.trace("----------Entering getSpreadsheetId Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var spreadsheetid = this._spreadsheetId;
                if (spreadsheetid) {
                    return spreadsheetid;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting getSpreadsheetId Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting getSpreadsheetId Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function setSpreadsheetId
         * @scope private
         * @description sets spreadsheetId
         * @param {string} id
         */
        setSpreadsheetId: function(id) {
            konymp.logger.trace("----------Entering setSpreadsheetId Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (id !== "") {
                    this._spreadsheetId = id;
                } else {
                    konymp.logger.warn(constants.DEFAULT_SPREADSHEET_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_SPREADSHEET_ERROR_MSG
                    };
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting setSpreadsheetId Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting setSpreadsheetId Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getSelectedValue
         * @scope private
         * @description returns selected value from the list box
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
         * @function resetSelectedValue
         * @scope private
         * @description resets the selcted Value global
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
        }
    };
});