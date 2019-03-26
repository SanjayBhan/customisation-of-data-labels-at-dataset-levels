
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      var FusionCharts = window.FusionCharts;
      factory(FusionCharts);
  }
}(function (FusionCharts) {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extension = __webpack_require__(1);

var _extension2 = _interopRequireDefault(_extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

FusionCharts.addDep(_extension2['default']);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var startsRGBA = /^rgba/i,
    cleanColorCode = /[#\s]/ig,
    COLOR_WHITE = 'FFFFFF',
    UNDEF = void 0,
    DASH_DEF = 'none',
    BLANK = '',
    COMMA = ',',
    POSITION_MIDDLE = 'middle',
    POSITION_START = 'start',
    POSITION_END = 'end',
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    hiddenStr = 'hidden',
    visibleStr = 'visible',
    chartList = ['bar2D', 'bar3D'];

function getDashStyle(len, gap, apply) {
  return apply || apply === UNDEF ? [len, gap] : DASH_DEF;
}

function getFirstValue() {
  var arg, i, l;
  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    }
    return arg;
  }
  return BLANK;
}

function pluck() {
  var arg, i, l;
  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    }
    return arg;
  }
  return undefined;
}

function pluckNumber() {
  var arg, i, l;

  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    } else if (isNaN(arg = Number(arg))) {
      continue;
    }
    return arg;
  }
  return undefined;
}

function convertColor(color, alpha, rgba) {
  var R = 0,
      G = 0,
      B = 0,
      colorStr,
      tempArr;

  if (rgba && rgba.match(startsRGBA)) {
    tempArr = rgba.split(COMMA);
    R = tempArr[0].slice(tempArr[0].indexOf('(') + 1);
    G = tempArr[1];
    B = tempArr[2];
    if (!alpha && alpha !== 0) {
      alpha = parseInt(tempArr[3].slice(0, tempArr[3].indexOf(')')) * 100, 10);
    }
  }
  if (color) {
    if (color.match(startsRGBA)) {
      tempArr = color.split(COMMA);
      R = tempArr[0].slice(tempArr[0].indexOf('(') + 1);
      G = tempArr[1];
      B = tempArr[2];
    } else {
      colorStr = color.replace(cleanColorCode, BLANK).split(COMMA)[0];
      switch (colorStr.length) {
        case 3:
          colorStr = colorStr.charAt(0) + colorStr.charAt(0) + colorStr.charAt(1) + colorStr.charAt(1) + colorStr.charAt(2) + colorStr.charAt(2);
          break;
        case 6:
          break;
        default:
          colorStr = (colorStr + COLOR_WHITE).slice(0, 6);
          break;
      }
      R = parseInt(colorStr.slice(0, 2), 16) || 0;
      G = parseInt(colorStr.slice(2, 4), 16) || 0;
      B = parseInt(colorStr.slice(4, 6), 16) || 0;
    }
  }

  if (!alpha && alpha !== 0) {
    alpha = 100;
  }
  if (typeof alpha === 'string') {
    alpha = alpha.split(COMMA)[0];
  }
  alpha = parseInt(alpha, 10) / 100;
  return 'rgba(' + R + COMMA + G + COMMA + B + COMMA + alpha + ')';
}

function _drawLabel() {
  var dataSet = this,
      chart = dataSet.getFromEnv('chart'),
      chartConf = chart.config,
      JSONData = dataSet.config.JSONData,
      animationManager = dataSet.getFromEnv('animationManager'),
      canvasConf = chart.getChildren('canvas')[0].config,
      style = chart.config.dataLabelStyle,
      setDataArr = JSONData.data,
      categories = chart.config.categories,
      is3D = chart.config.is3D,
      isStacked = chart.config.isstacked,
      catLen = categories && categories.length,
      dataSetLen = setDataArr && setDataArr.length,
      len,
      dataStore = dataSet.getData(),
      SmartLabel = chart.getFromEnv('smartLabel'),
      dataObj,
      attr,
      yDepth = canvasConf.yDepth,
      xDepth = canvasConf.xDepth,
      numberFormatter = chart.getFromEnv('number-formatter'),
      i,
      j,
      displayValue = '',
      setData,
      placeValuesInside = chartConf.placevaluesinside,
      canvasWidth = chartConf.canvasWidth,
      canvasLeft = chartConf.canvasLeft,
      graphic,
      height,
      gutter = 2,
      valuePadding = chartConf.valuepadding + gutter,
      textY,
      textX,
      outsideColSpace,
      isNegative,
      yPos,
      xPos,
      width,
      setValue,
      dataLabelContainer = dataSet.getContainer('labelGroup'),
      textAnchor,
      textWidth,
      xAdjust,
      chartAttrs = dataSet.getFromEnv('chart-attrib'),
      fillColor,
      backgroundColor,
      fontBdrColor,
      borderColor,
      borderThickness,
      borderPadding,
      borderRadius,
      borderDash,
      GUTTER_4 = 4,
      skipInfo = dataSet.getSkippingInfo && dataSet.getSkippingInfo(),
      skippingApplied = skipInfo && skipInfo.skippingApplied,
      plotDrawArray = skipInfo && skipInfo.labelDraw || [],
      plotDrawArrayLength = plotDrawArray.length,
      config,
      plotLabel,
      plotLabelCheck,
      dim,
      tempGraphics,
      visible = dataSet.getState('visible'),
      callback = function callback() {
    this.hide();
  };

  visible && dataLabelContainer.show();
  SmartLabel.setStyle(style);
  len = skippingApplied ? plotDrawArrayLength : catLen < dataSetLen ? catLen : dataSetLen;

  for (j = 0; j < len; j++) {
    i = skippingApplied ? plotDrawArray[j] : j;
    dataObj = dataStore[i];
    config = dataObj && dataObj.config;
    setValue = config && config.setValue;
    // Condition arises when user has removed data in real time update
    if (dataObj === UNDEF || setValue === UNDEF || setValue === null || config.labelSkip === true) {
      tempGraphics = dataObj && dataObj.graphics;
      if (tempGraphics) {
        tempGraphics.label && tempGraphics.label.hide();
      }

      config && delete config.labelSkip;

      continue;
    }
    graphic = dataObj.graphics;

    // Condition arises when feedData enters less number of data in a dataset compared to the other.
    if (!graphic) {
      continue;
    }

    setData = setDataArr[i];
    yPos = dataObj._yPos;
    xPos = dataObj._xPos;
    setValue = numberFormatter.getCleanValue(setData.value);
    isNegative = pluckNumber(setValue) < 0;
    height = dataObj._height;
    width = dataObj._width;

    textAnchor = isStacked ? POSITION_MIDDLE : isNegative ?
    /** @todo this boolean check needs optimisation */
    placeValuesInside ? POSITION_START : POSITION_END : placeValuesInside ? POSITION_END : POSITION_START;
    displayValue = config.displayValue;
    plotLabelCheck = graphic.label;
    // Dont draw values if the respective conditions are not satisfied
    if (config.showValue && defined(displayValue) && displayValue !== BLANK && setValue !== null) {
      fillColor = convertColor(pluck(JSONData.valuefontcolor, chartAttrs.valuefontcolor, style.inCancolor), pluckNumber(JSONData.valuefontalpha, JSONData.valuealpha, chartAttrs.valuefontalpha, chartAttrs.valuealpha, 100));

      backgroundColor = JSONData.valuebgcolor || chartAttrs.valuebgcolor ? convertColor(pluck(JSONData.valuebgcolor, chartAttrs.valuebgcolor), pluckNumber(JSONData.valuebgalpha, JSONData.valuealpha, chartAttrs.valuebgalpha, chartAttrs.valuealpha, 100)) : BLANK;

      fontBdrColor = getFirstValue(JSONData.valuebordercolor, chartAttrs.valuebordercolor, BLANK);
      borderColor = fontBdrColor ? convertColor(fontBdrColor, pluckNumber(JSONData.valueborderalpha, JSONData.valuealpha, chartAttrs.valueborderalpha, chartAttrs.valuealpha, 100)) : BLANK;

      borderThickness = pluckNumber(JSONData.valueborderthickness, chartAttrs.valueborderthickness, 1);
      borderPadding = pluckNumber(JSONData.valueborderpadding, chartAttrs.valueborderpadding, 2);
      borderRadius = pluckNumber(JSONData.valueborderradius, chartAttrs.valueborderradius, 0);
      borderDash = pluckNumber(JSONData.valueborderdashed, chartAttrs.valueborderdashed, 0) ? getDashStyle(pluckNumber(JSONData.valueborderdashlen, chartAttrs.valueborderdashlen, 4), pluckNumber(JSONData.valueborderdashgap, chartAttrs.valueborderdashgap, 2)) : DASH_DEF;

      // Preparing the attributes of the text
      attr = {
        text: displayValue,
        fill: fillColor,
        'text-bound': [backgroundColor, borderColor, borderThickness, borderPadding, borderRadius, borderDash],
        'line-height': style.lineHeight,
        // todo-text direction missing
        visibility: dataSet.getState('visible') ? visibleStr : hiddenStr
      };

      dim = SmartLabel.getOriSize(displayValue);

      textWidth = dim.width;
      textWidth += valuePadding;
      xAdjust = valuePadding;
      textY = yPos + height * 0.5;

      textX = xPos + (isNegative ? 0 : width);

      if (isNegative) {
        outsideColSpace = xPos - canvasLeft;
      } else {
        outsideColSpace = canvasLeft + canvasWidth - (xPos + width);
      }
      // For stacked charts values are always placed at middle
      if (isStacked) {
        textX += (isNegative ? width : -width) * 0.5;
        textX = Math.max(canvasLeft + textWidth * 0.5, textX);
        textX = Math.min(canvasLeft + canvasWidth - textWidth * 0.5, textX);
        // If 3D chart then xDepth and yDepth is also to be considered for
        // calculating x y position
        textX -= is3D ? xDepth : 0;
        textY += is3D ? yDepth : 0;
      } else {
        if (placeValuesInside) {
          // If label fits inside the data plot
          if (width >= textWidth) {
            textX += isNegative ? xAdjust : -xAdjust;
            if (is3D) {
              textY += yDepth;
              textX -= xDepth;
            }
          } else {
            // If label fits outside the data plot
            if (textWidth < outsideColSpace) {
              textX += isNegative ? -xAdjust : xAdjust;
              textAnchor = isNegative ? POSITION_END : POSITION_START;
              if (is3D && isNegative) {
                textX -= xDepth;
              }
            } else {
              // Label management for negative values
              if (isNegative) {
                textX = xPos + width + Math.max(textWidth - xPos - width + canvasLeft, 0) - xAdjust;
                // If negative value then drawing text from end
                textAnchor = POSITION_END;
              } else {
                textX = xPos - Math.max(textWidth - (canvasLeft + canvasWidth - xPos), 0) + xAdjust;
                textAnchor = POSITION_START;
              }
              // Taking xDepth yDepth into consideration for 3d charts
              if (is3D) {
                textX -= xDepth;
                textY += yDepth;
              }
            }
          }
        } else {
          // If space is available inside plot
          if (outsideColSpace >= textWidth) {
            textX += isNegative ? -xAdjust : xAdjust;
            if (is3D && isNegative) {
              textX -= xDepth;
              textY += xDepth;
            }
          } else {
            // If space not available inside plot
            textX += isNegative ? xAdjust + textWidth : -(xAdjust + textWidth);
            if (is3D) {
              textX -= xDepth;
              textY += yDepth;
            }
          }
        }
      }
      // If value gets out of canvas
      if (textX > canvasLeft + canvasWidth || textX < canvasLeft) {
        textX = canvasLeft + GUTTER_4;
        textAnchor = POSITION_START;
      }

      attr['text-anchor'] = textAnchor;

      // If label is not created then create it
      attr.x = textX;
      attr.y = textY;
      attr.fill = fillColor;
      attr['text-bound'] = [backgroundColor, borderColor, borderThickness, borderPadding, borderRadius, borderDash];
      attr.opacity = visible ? 1 : 0;
      plotLabel = animationManager.setAnimation({
        el: plotLabelCheck || 'text',
        container: dataLabelContainer,
        component: dataSet,
        attr: attr,
        callback: !visible && callback,
        label: 'plotLabel'
      });
      if (!plotLabelCheck) {
        graphic.label = plotLabel;
      }
    } else if (graphic.label) {
      graphic.label = animationManager.setAnimation({
        el: graphic.label,
        component: dataSet
      });
    }
  }
  dataSet.config.labelDrawn = true;
};

var extension = {
  extension: function extension(FusionCharts) {
    FusionCharts.addEventListener('instantiated', function (event) {
      if (event.sender.getType() === 'dataset') {
        var dataSet = event.sender,
            _parseLabelAttributes = dataSet.parseLabelAttributes;

        dataSet.parseLabelAttributes && (dataSet.parseLabelAttributes = function () {
          _parseLabelAttributes.apply(dataSet, arguments);

          var chart = dataSet.getFromEnv('chart'),
              style = chart.config.style,
              chartAttrs = dataSet.getFromEnv('chart-attrib'),
              JSONData = dataSet.config.JSONData,
              attr,
              dataObj = arguments[0],
              config = dataObj && dataObj.config,
              backgroundColor,
              fontBdrColor,
              borderColor,
              borderThickness,
              borderPadding,
              borderRadius,
              borderDash;

          if (config && config.props && config.props.label && config.props.label.attr) {
            attr = config.props.label.attr;
            attr.fill = convertColor(pluck(JSONData.valuefontcolor, chartAttrs.valuefontcolor, style.inCancolor), pluckNumber(JSONData.valuefontalpha, JSONData.valuealpha, chartAttrs.valuefontalpha, chartAttrs.valuealpha, 100));

            backgroundColor = JSONData.valuebgcolor || chartAttrs.valuebgcolor ? convertColor(pluck(JSONData.valuebgcolor, chartAttrs.valuebgcolor), pluckNumber(JSONData.valuebgalpha, JSONData.valuealpha, chartAttrs.valuebgalpha, chartAttrs.valuealpha, 100)) : BLANK;

            fontBdrColor = getFirstValue(JSONData.valuebordercolor, chartAttrs.valuebordercolor, BLANK);
            borderColor = fontBdrColor ? convertColor(fontBdrColor, pluckNumber(JSONData.valueborderalpha, JSONData.valuealpha, chartAttrs.valueborderalpha, chartAttrs.valuealpha, 100)) : BLANK;

            borderThickness = pluckNumber(JSONData.valueborderthickness, chartAttrs.valueborderthickness, 1);
            borderPadding = pluckNumber(JSONData.valueborderpadding, chartAttrs.valueborderpadding, 2);
            borderRadius = pluckNumber(JSONData.valueborderradius, chartAttrs.valueborderradius, 0);
            borderDash = pluckNumber(JSONData.valueborderdashed, chartAttrs.valueborderdashed, 0) ? getDashStyle(pluckNumber(JSONData.valueborderdashlen, chartAttrs.valueborderdashlen, 4), pluckNumber(JSONData.valueborderdashgap, chartAttrs.valueborderdashgap, 2)) : DASH_DEF;

            attr['text-bound'] = [backgroundColor, borderColor, borderThickness, borderPadding, borderRadius, borderDash];
          }
        });

        if (chartList.indexOf(dataSet.getName()) >= 0) {
          dataSet.drawLabel = _drawLabel;
        }
      }
    });
  },
  name: 'customise-data-labels-at-dataset-level-ext',
  type: 'extension',
  requiresFusionCharts: true
};

exports['default'] = extension;

/***/ })
/******/ ]);
}));

//# sourceMappingURL=fusioncharts.extension.customize-data-labels-at-dataset-level.js.map