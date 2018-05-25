/**
 * Created by Team Kony.
 * Copyright (c) 2018 Kony Inc. All rights reserved.
 */
define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/worksheetlist/konyLogger");
    konymp.logger = (new KonyLoggerModule("Worksheet List Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    var constants = constants || {};
    constants.COLUMN1 = "A";
    constants.COLUMN2 = "B";
    constants.COLUMN3 = "C";
    constants.COLUMN4 = "D";
    constants.DEFAULT_COLUMN_ERROR_MSG = "Invalid value provided for Column";
    constants.DEFAULT_ERROR_MESSAGE = "Sorry! Something went wrong.";
    constants.DEFAULT_SUCCESS_ADD_MSG = "Successfully added the data.";
    constants.DEFAULT_SUCCESS_UPDATE_MSG = "Succesfully updated the values.";
    constants.DEFAULT_FAILURE_ADD_MSG = "Failed to add the data.";
    constants.DEFAULT_FAILURE_UPDATE_MSG = "Failed to update the values.";
    constants.DEFAULT_BOOL_ERROR_MSG = "Sort order not set";
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._data = [];
            this._chartData = [];
            this._revData = [];
            this._rowNumberSelected = null;
            this._rowNumberSelectedRev = null;
            this._params = null;
            this._spreadsheetId = "";
            this._range = "";
            this._rangechart = "";
            this._isAddClicked = false;
            this._column1 = constants.COLUMN1;
            this._column2 = constants.COLUMN2;
            this._column3 = constants.COLUMN3;
            this._column4 = constants.COLUMN4;
            this.view.flxList.left = "0%";
            this.view.flxDetail1.left = "100%";
            this._lastRowFirst = false;
            this._bufferData = [];
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "spreadsheetid", function(val) {
                konymp.logger.trace("----------Entering spreadsheetid Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._spreadsheetId = val;
                konymp.logger.trace("----------Exiting spreadsheetid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "range", function(val) {
                konymp.logger.trace("----------Entering range Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._range = val;
                konymp.logger.trace("----------Exiting range Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartrange", function(val) {
                konymp.logger.trace("----------Entering chartrange Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._rangechart = val;
                konymp.logger.trace("----------Exiting chartrange Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "column1", function(val) {
                konymp.logger.trace("----------Entering column1 Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._column1 = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting column1 Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "column2", function(val) {
                konymp.logger.trace("----------Entering column2 Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._column2 = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting column2 Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "column3", function(val) {
                konymp.logger.trace("----------Entering column3 Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._column3 = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting column3 Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "column4", function(val) {
                konymp.logger.trace("----------Entering column4 Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (val !== undefined && val !== "" && val.length == 1 && val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
                    this._column4 = val;
                } else {
                    konymp.logger.warn(constants.DEFAULT_COLUMN_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_COLUMN_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting column4 Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lastRowFirst", function(val) {
                konymp.logger.trace("----------Entering lastRowFirst Setter---------", konymp.logger.FUNCTION_ENTRY);
                if (typeof(val) == "boolean") this._lastRowFirst = val;
                else {
                    konymp.logger.warn(constants.DEFAULT_BOOL_ERROR_MSG);
                    throw {
                        "Error": "DataInvalid",
                        "message": constants.DEFAULT_BOOL_ERROR_MSG
                    };
                }
                konymp.logger.trace("----------Exiting column4 Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function fetchAndSetData
         * @scope API exposed
         * @description fetch and set list data
         */
        fetchAndSetData: function() {
            konymp.logger.trace("----------Entering fetchAndSetData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.application.showLoadingScreen();
                this.view.flxDetail1.left = "100%";
                this.view.segList.data = [];
                if (this.view.flxList.flxChart.isVisible) this.view.segList.height = "61%";
                else this.view.segList.height = "92%";
                this.view.verticalbar.isVisible = false;
                var data = {
                    "spreadsheetId": this._spreadsheetId,
                    "range": this._range,
                    "majorDimension": "ROWS"
                };
                this._fetchData("konyMpGoogleSheets", "spreadsheets_values_get", data, this._operationSuccess.bind(this), this._operationFailure.bind(this));
                if (this.chartVisibility === true) {
                    data = {
                        "spreadsheetId": this._spreadsheetId,
                        "range": this._rangechart,
                        "majorDimension": "ROWS"
                    };
                    this._fetchData("konyMpGoogleSheets", "spreadsheets_values_get", data, this._chartFetchSuccess.bind(this), this._operationFailure.bind(this));
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting fetchAndSetData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting fetchAndSetData Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _processChartData
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
                    var data = this._processData(res.values);
                    this._data = data;
                    var widgetDataMap = {
                        "lblColumn1": this._column1,
                        "lblColumn2": this._column2,
                        "lblColumn3": this._column3,
                        "lblColumn4": this._column4,
                        "imgIndicator": "src",
                    };
                    data = this._addImageSrc(data);
                    if (this._lastRowFirst) {
                        var revData = [];
                        var lastIndex = data.length - 1;
                        for (var i = 0; i < data.length; i++) {
                            revData[i] = data[lastIndex];
                            lastIndex--;
                        }
                        this._revData = revData;
                        this.view.segList.widgetDataMap = widgetDataMap;
                        this.view.segList.setData(revData);
                    } else {
                        this.view.segList.widgetDataMap = widgetDataMap;
                        this.view.segList.setData(data);
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _operationSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _operationSuccess Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _addImageSrc
         * @scope private
         * @description adding chevron image to data
         * @param data {JSON Array}
         */
        _addImageSrc: function(data) {
            konymp.logger.trace("----------Entering _addImageSrc Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                for (var i = 0; i < data.length; i++) {
                    data[i].src = "konymp_wl_chevron.png";
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _addImageSrc Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _addImageSrc Function---------", konymp.logger.FUNCTION_EXIT);
            return data;
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
         * @function _processData
         * @scope private
         * @description process data for list
         * @param data {JSON Array}
         */
        _processData: function(data) {
            konymp.logger.trace("----------Entering _processData Function---------", konymp.logger.FUNCTION_ENTRY);
            var result = [];
            try {
                var i;
                var header = [];
                for (i = 0; i < data[0].length; i++) {
                    var charValue = String.fromCharCode(65 + i);
                    header.push(charValue);
                }
                for (i = 0; i < data.length; i++) {
                    var tempData = data[i];
                    var tempHeaderData = {};
                    var tempContainerData = {};
                    var tempArray = [];
                    for (var j = 0; j < tempData.length; j++) {
                        tempContainerData[header[j]] = tempData[j];
                    }
                    result.push(tempContainerData);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _processData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _processData Function---------", konymp.logger.FUNCTION_EXIT);
            return result;
        },
        /**
         * @function _onSegRowClick
         * @scope private
         * @description function to be invoked on click of segment row
         * @param eventobject {JSON Object}
         * @param sectionNumber {Number}
         * @param rowNumber {NUmber}
         */
        _onSegRowClick: function(eventobject, sectionNumber, rowNumber) {
            konymp.logger.trace("----------Entering _onSegRowClick Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._navigateToDetail();
                this._rowNumberSelected = rowNumber;
                var segLength = this._data.length;
                this._rowNumberSelectedRev = segLength - rowNumber - 1;
                var navigationParam = {};
                if (this._lastRowFirst) {
                    navigationParam.data = this._revData[rowNumber];
                    navigationParam.rowNumber = this._rowNumberSelectedRev;
                } else {
                    navigationParam.data = this._data[rowNumber];
                    navigationParam.rowNumber = rowNumber;
                }
                this._addDatatoDetail(navigationParam);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onSegRowClick Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onSegRowClick Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _addDatatoDetail
         * @scope private
         * @description add data to detail
         * @param param {JSON Object}
         */
        _addDatatoDetail: function(params) {
            konymp.logger.trace("----------Entering _addDatatoDetail Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (params !== null && params !== undefined) {
                    this.data = params.data;
                    this._params = params;
                    delete params.data.src;
                    var receivedData = params.data;
                    var widgetArray = this.view.flxDetail.widgets();
                    widgetArray.forEach(function(widget) {
                        if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetTextBox") {
                            if (receivedData[widget.columnName] !== undefined && receivedData[widget.columnName] !== null) {
                                widget.setText(receivedData[widget.columnName]);
                            } else {
                                widget.setText("");
                            }
                        } else if (widget.getComponentType() !== undefined && widget.getComponentType() !== null && receivedData[widget.columnName] !== null && widget.getComponentType() == "listBoxComponent") {
                            widget.isVisiblelistbox = false;
                            if (receivedData[widget.columnName] !== undefined && receivedData[widget.columnName] !== null) {
                                widget.setLabelData(receivedData[widget.columnName]);
                            } else {
                                widget.setLabelData("");
                            }
                        } else if (widget.getComponentType() !== undefined && widget.getComponentType() !== null && receivedData[widget.columnName] !== null && widget.getComponentType() == "sheetDateComponent") {
                            widget.isVisibleCalendar = false;
                            if (receivedData[widget.columnName] !== undefined && receivedData[widget.columnName] !== null) {
                                widget.setLabelData(receivedData[widget.columnName]);
                            } else {
                                widget.setLabelData("");
                            }
                        } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetPhoneBox") {
                            if (receivedData[widget.columnName] !== undefined && receivedData[widget.columnName] !== null) {
                                widget.setText(receivedData[widget.columnName]);
                            } else {
                                widget.setText("");
                            }
                        }
                    });
                    widgetArray.forEach(function(widget) {
                        if (widget.getComponentType() !== undefined && (widget.getComponentType() == "sheetTextBox" || widget.getComponentType() == "sheetPhoneBox")) {
                            widget.setEnable(false);
                        }
                    });
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _addDatatoDetail Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _addDatatoDetail Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _onClickEdit
         * @scope private
         * @description action to be invoke on click of edit
         * @param data {JSON Array}
         */
        _onClickEdit: function() {
            var spreadsheetid = this._spreadsheetId;
            konymp.logger.trace("----------Entering _onClickEdit Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var self = this;
                this.view.flxHeaderDetail.isVisible = false;
                this.view.flxHeaderDetailEdit.isVisible = true;
                var widgetArray = this.view.flxDetail.widgets();
                widgetArray.forEach(function(widget) {
                    if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetTextBox") {
                        widget.setEnable(true);
                        widget.setGlobalValue(widget.getText());
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() !== null && widget.getComponentType() == "listBoxComponent") {
                        widget.isVisiblelistbox = true;
                        widget.resetSelectedValue();
                        widget.setSpreadsheetId(spreadsheetid);
                        widget.fetchAndSetListBoxData();
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() !== null && widget.getComponentType() == "sheetDateComponent") {
                        var selDate = widget.getLabelData();
                        var placeholder = widget.getLabelData();
                        if (selDate === undefined || selDate === "") {
                            placeholder = " ";
                            selDate = self.getTodaysDate();
                        }
                        widget.isVisibleCalendar = true;
                        widget.setSelectedDate(selDate);
                        widget.placeholderCal = placeholder;
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetPhoneBox") {
                        widget.setEnable(true);
                        widget.setGlobalValue(widget.getText());
                    }
                });
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickEdit Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickEdit Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _getTextFromWidgetHavingColumn
         * @scope private
         * @description fetching of text from sheettextbox component based on column
         * @param index {Integer}
         */
        _getTextFromWidgetHavingColumn: function(index) {
            konymp.logger.trace("----------Entering _getTextFromWidgetHavingColumn Function---------", konymp.logger.FUNCTION_ENTRY);
            var textValue = "";
            try {
                var charIndex = String.fromCharCode(index);
                var widgetArray = this.view.flxDetail.widgets();
                widgetArray.forEach(function(widget) {
                    if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetTextBox") {
                        if (widget.columnName === charIndex) {
                            textValue = widget.getTextBoxText();
                        }
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "listBoxComponent") {
                        if (widget.getLabelData() !== undefined) {
                            if (widget.columnName === charIndex) {
                                var selectedValue = widget.getSelectedValue();
                                if (selectedValue !== "") widget.setLabelData(selectedValue);
                                textValue = widget.getLabelData();
                                widget.resetSelectedValue();
                            }
                        }
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetDateComponent") {
                        if (widget.getLabelData() !== undefined) {
                            if (widget.columnName === charIndex) {
                                var selectedDate = widget.getSelectedValue();
                                if (selectedDate !== "") widget.setLabelData(selectedDate);
                                textValue = widget.getLabelData();
                                widget.resetSelectedValue();
                            }
                        }
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetPhoneBox") {
                        if (widget.columnName === charIndex) {
                            textValue = widget.getTextboxText();
                        }
                    }
                });
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _getTextFromWidgetHavingColumn Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _getTextFromWidgetHavingColumn Function---------", konymp.logger.FUNCTION_EXIT);
            return textValue;
        },
        /**
         * @function _onClickDone
         * @scope private
         * @description action to be invoked on click of done
         */
        _onClickDone: function() {
            konymp.logger.trace("----------Entering _onClickDone Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var data = [];
                var getFirstColumn = this._getFirstColumnName(this._range);
                var getLastColumn = this._getLastColumnName(this._range);
                var startIndex = getFirstColumn.charCodeAt(0);
                var endIndex = getLastColumn.charCodeAt(0);
                for (var i = startIndex; i <= endIndex; i++) {
                    var text = this._getTextFromWidgetHavingColumn(i);
                    if (text === "" && this._isAddClicked === false) {
                        text = this.data[String.fromCharCode(i)];
                    }
                    data.push(text);
                }
                var range = this._range;
                var data1 = {
                    "spreadsheetId": this._spreadsheetId,
                    "range": range,
                    "values": data,
                    "value_range": range
                };
                if (this._isAddClicked) {
                    this._isAddClicked = false;
                    this._fetchData("konyMpGoogleSheets", "spreadsheets_values_append", data1, this._addSuccess.bind(this), this._addFailure.bind(this));
                } else {
                    this._updateData(data);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickDone Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickDone Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _addSuccess
         * @scope private
         * @description success callback for adding of data
         * @param res {JSON Array}
         */
        _addSuccess: function(res) {
            konymp.logger.trace("----------Entering _addSuccess Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._createToast(constants.DEFAULT_SUCCESS_ADD_MSG);
                this._navigateTolist();
                this._onClickRefresh();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _addSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _addSuccess Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _addFailure
         * @scope private
         * @description failue callback of add data to sheets.
         * @param res {JSON Array}
         */
        _addFailure: function(res) {
            konymp.logger.trace("----------Entering _addFailure Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.application.dismissLoadingScreen();
                this._createToast(constants.DEFAULT_FAILURE_ADD_MSG);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _addFailure Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _addFailure Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _updateData
         * @scope private
         * @description updates data in sheet
         * @param data {JSON Array}
         */
        _updateData: function(data) {
            konymp.logger.trace("----------Entering _updateData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var KNYMobileFabric = new kony.sdk.getCurrentInstance();
                var serviceName = "konyMpGoogleSheets";
                var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
                var operationName = "spreadsheets_values_update";
                var rangeForIndex = this._range;
                var index = 0;
                if (this._lastRowFirst) index = Number(this._rowNumberSelectedRev + this._evaluateRowBuffer(rangeForIndex)).toFixed().toString();
                else index = Number(this._rowNumberSelected + this._evaluateRowBuffer(rangeForIndex)).toFixed().toString();
                var getFirstColumn = this._getFirstColumnName(this._range);
                var getLastColumn = this._getLastColumnName(this._range);
                var sheet = this._range.split("!")[0];
                var range = sheet + "!" + getFirstColumn + index + ":" + getLastColumn + index;
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
            konymp.logger.trace("----------Exiting _updateData Function---------", konymp.logger.FUNCTION_EXIT);
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
                this._navigateTolist();
                this.view.flxHeaderDetail.isVisible = true;
                this.view.flxHeaderDetailEdit.isVisible = false;
                this._onClickRefresh();
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
                this._navigateTolist();
                this.view.flxHeaderDetail.isVisible = true;
                this.view.flxHeaderDetailEdit.isVisible = false;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _updateFailure Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _updateFailure Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _onClickCancel
         * @scope private
         * @description action to be invoked on click of cancel
         */
        _onClickCancel: function() {
            konymp.logger.trace("----------Entering _onClickCancel Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (this._isAddClicked === false) {
                    this.view.flxHeaderDetail.isVisible = true;
                    this.view.flxHeaderDetailEdit.isVisible = false;
                    var widgetArray = this.view.flxDetail.widgets();
                    widgetArray.forEach(function(widget) {
                        if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetTextBox") {
                            widget.setEnable(false);
                            var originalText = widget.getText();
                            widget.setText(originalText);
                        } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "listBoxComponent") {
                            widget.isVisiblelistbox = false;
                        } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetDateComponent") {
                            widget.isVisibleCalendar = false;
                        } else if (widget.getComponentType() == "sheetPhoneBox") {
                            widget.setEnable(false);
                            var originalPhone = widget.getText();
                            widget.setText(originalPhone);
                        }
                    });
                } else {
                    this._isAddClicked = false;
                    this._navigateTolist();
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickCancel Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickCancel Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _navigateTolist
         * @scope private
         * @description navigate to list
         */
        _navigateTolist: function() {
            konymp.logger.trace("----------Entering _navigateTolist Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.flxList.left = "0%";
                this.view.flxDetail1.left = "100%";
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _navigateTolist Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _navigateTolist Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _navigateToDetail
         * @scope private
         * @description navigate to detail page
         */
        _navigateToDetail: function() {
            konymp.logger.trace("----------Entering _navigateToDetail Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.flxList.left = "-100%";
                this.view.flxDetail1.left = "0%";
                this.view.lblHeaderNameDetailEdit.text = this.headerName;
                this.view.lblDetailHeaderName.text = this.headerName;
                if (this._isAddClicked === false) {
                    this.view.flxHeaderDetail.isVisible = true;
                    this.view.flxHeaderDetailEdit.isVisible = false;
                } else {
                    this.view.flxHeaderDetail.isVisible = false;
                    this.view.flxHeaderDetailEdit.isVisible = true;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _navigateToDetail Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _navigateToDetail Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _onClickBack
         * @scope private
         * @description action to be invoked on click of back button
         * @param data {JSON Array}
         */
        _onClickBack: function() {
            konymp.logger.trace("----------Entering _onClickBack Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._navigateTolist();
                this._onClickRefresh();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickBack Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickBack Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _chartFetchSuccess
         * @scope private
         * @description success callback of chart data fetching
         * @param res {JSON Array}
         */
        _chartFetchSuccess: function(res) {
            konymp.logger.trace("----------Entering _chartFetchSuccess Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.verticalbar.isVisible = true;
                var data = this._processChartData(res.values);
                this._chartData = data;
                this.view.verticalbar.createChart(data);
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _chartFetchSuccess Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _chartFetchSuccess Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _onClickRefresh
         * @scope private
         * @description format the data for charts
         */
        _onClickRefresh: function() {
            konymp.logger.trace("----------Entering _onClickRefresh Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.fetchAndSetData();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickRefresh Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickRefresh Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _processChartData
         * @scope private
         * @description format the data for charts
         * @param data {JSON Array}
         */
        _processChartData: function(data) {
            konymp.logger.trace("----------Entering _processChartData Function---------", konymp.logger.FUNCTION_ENTRY);
            var result = [];
            try {
                var i;
                var header = [];
                header.push("label");
                header.push("value");
                header.push("colorCode");
                var colorCode = ["#FF6600", "#00A2D9", "#8BC53E", "#00A2D9", "#FF6600", "#00A2D9", "#8BC53E"];
                for (i = 0; i < data.length; i++) {
                    var tempData = data[i];
                    var tempHeaderData = {};
                    var tempContainerData = {};
                    var tempArray = [];
                    for (var j = 0; j < tempData.length; j++) {
                        tempContainerData[header[j]] = tempData[j];
                    }
                    tempContainerData[header[j]] = colorCode[i % 7];
                    result.push(tempContainerData);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _processChartData Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _processChartData Function---------", konymp.logger.FUNCTION_EXIT);
            return result;
        },
        /**
         * @function _onClickFAB
         * @scope private
         * @description action to be invoke on click of FAB
         */
        _onClickFAB: function() {
            konymp.logger.trace("----------Entering _onClickFAB Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this._isAddClicked = true;
                this._resetDetailandEnable();
                this._navigateToDetail();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _onClickFAB Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _onClickFAB Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _resetDetailandEnable
         * @scope private
         * @description resets the detail page and enable the textbox for editing
         */
        _resetDetailandEnable: function() {
            konymp.logger.trace("----------Entering _resetDetailandEnable Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var self = this;
                var spreadsheetid = this._spreadsheetId;
                var widgetArray = this.view.flxDetail.widgets();
                widgetArray.forEach(function(widget) {
                    if (widget.getComponentType() !== undefined && (widget.getComponentType() == "sheetTextBox" || widget.getComponentType() == "sheetPhoneBox")) {
                        widget.setText("");
                        widget.setEnable(true);
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "listBoxComponent") {
                        widget.isVisiblelistbox = true;
                        widget.setLabelData("");
                        widget.isVisiblelistbox = true;
                        widget.resetSelectedValue();
                        widget.setSpreadsheetId(spreadsheetid);
                        widget.fetchAndSetListBoxData();
                    } else if (widget.getComponentType() !== undefined && widget.getComponentType() == "sheetDateComponent") {
                        widget.isVisibleCalendar = true;
                        widget.setLabelData("");
                        var date = self.getTodaysDate();
                        widget.setSelectedDate(date);
                        widget.placeholderCal = " ";
                    }
                });
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _resetDetailandEnable Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _resetDetailandEnable Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function _getLastColumnName
         * @scope private
         * @description finds last column char of the sheets
         * @param range {String}
         */
        _getLastColumnName: function(range) {
            konymp.logger.trace("----------Entering _getLastColumnName Function---------", konymp.logger.FUNCTION_ENTRY);
            var lastColumn;
            try {
                var rangeValue = range.split("!")[1];
                var lastRange = rangeValue.split(":")[1];
                lastColumn = lastRange.charAt(0);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _getLastColumnName Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _getLastColumnName Function---------", konymp.logger.FUNCTION_EXIT);
            return lastColumn;
        },
        /**
         * @function _getFirstColumnName
         * @scope private
         * @description finds first column char of the sheets
         * @param range {String}
         */
        _getFirstColumnName: function(range) {
            konymp.logger.trace("----------Entering _getFirstColumnName Function---------", konymp.logger.FUNCTION_ENTRY);
            var lastColumn;
            try {
                var rangeValue = range.split("!")[1];
                var lastRange = rangeValue.split(":")[0];
                lastColumn = lastRange.charAt(0);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _getFirstColumnName Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _getFirstColumnName Function---------", konymp.logger.FUNCTION_EXIT);
            return lastColumn;
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
        /**
         * @function _evaluateRowBuffer
         * @scope private
         * @description calculates the buffer between first row and beginning of selected row
         * @param rangeForIndex {String}
         */
        _evaluateRowBuffer: function(rangeForIndex) {
            konymp.logger.trace("----------Entering _evaluateRowBuffer Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var rowStartNum;
                var range = rangeForIndex;
                var splitSheetName = range.split("!")[1];
                var reg = /:/;
                if (reg.test(splitSheetName)) {
                    var rowValue = splitSheetName.split(":")[0];
                    rowStartNum = rowValue.substr(1);
                    return parseInt(rowStartNum);
                } else {
                    rowStartNum = splitSheetName.substr(1);
                    if (rowStartNum) {
                        return parseInt(rowStartNum);
                    } else return 0;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                konymp.logger.trace("----------Exiting _evaluateRowBuffer Function---------", konymp.logger.FUNCTION_EXIT);
            }
            konymp.logger.trace("----------Exiting _evaluateRowBuffer Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getTodaysDate
         * @scope private
         * @description returns todays date in mm/dd/yy format
         * @param none
         */
        getTodaysDate: function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yy = today.getFullYear().toString().slice(2);
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var finalDate = mm + '/' + dd + '/' + yy;
            return finalDate;
        }
    };
});