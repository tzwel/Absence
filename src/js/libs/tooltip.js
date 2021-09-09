/**
 * Tooltip.js
 * A basic script that applies a mouseover tooltip functionality to all elements of a page that have a data-tooltip attribute
 * Matthias Schuetz, http://matthiasschuetz.com
 *
 * Copyright (C) Matthias Schuetz
 * Free to use under the MIT license
 */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (!root.tooltip) {
        // Browser globals
        root.tooltip = factory(root);
    }
}(this, function() {
    let _options = {
        tooltipId: "tooltip",
        offsetDefault: 30
    };

    let _tooltips = [];
    let _tooltipsTemp = null;

    function _bindTooltips(resetTooltips) {
        if (resetTooltips) {
            _tooltipsTemp = _tooltips.concat();
            _tooltips = [];
        }

        Array.prototype.forEach.call(document.querySelectorAll("[data-tooltip]"), function(elm, idx) {
            let tooltipText = (elm.getAttribute("title") || "").trim();
            let options;

            if (resetTooltips && _tooltipsTemp.length && _tooltipsTemp[idx] && _tooltipsTemp[idx].text) {
                if (tooltipText.length === 0) {
                    elm.setAttribute("title", _tooltipsTemp[idx].text);
                    tooltipText = _tooltipsTemp[idx].text;
                }

                elm.removeEventListener("mousemove", _onElementMouseMove);
                elm.removeEventListener("mouseout", _onElementMouseOut);
                elm.removeEventListener("mouseover", _onElementMouseOver);
            }

            if (tooltipText) {
                elm.setAttribute("title", "");
                elm.setAttribute("data-tooltip-id", idx);
                options = _parseOptions(elm.getAttribute("data-tooltip"));
				
                _tooltips[idx] = {
                    text: tooltipText,
                    options: options
                };

                elm.addEventListener("mousemove", _onElementMouseMove);
                elm.addEventListener("mouseout", _onElementMouseOut);
                elm.addEventListener("mouseover", _onElementMouseOver);
            }
        });

        if (resetTooltips) {
            _tooltipsTemp = null;
        }
    }

    function _createTooltip(text, tooltipId) {
        let tooltipElm = document.createElement("div");
        let tooltipText = document.createTextNode(text);
        let options = tooltipId && _tooltips[tooltipId] && _tooltips[tooltipId].options;

        if (options && options["class"]) {
            tooltipElm.setAttribute("class", "tooltip-js " + options["class"]);
        } else {
            tooltipElm.setAttribute("class", "tooltip-js");
        }

        tooltipElm.setAttribute("id", _options.tooltipId);
        tooltipElm.appendChild(tooltipText);

        document.querySelector("body").appendChild(tooltipElm);
    }

    function _getTooltipElm() {
        return document.querySelector("#" + _options.tooltipId);
    }

    function _onElementMouseMove(evt) {
        let tooltipId = this.getAttribute("data-tooltip-id");
        let tooltipElm = _getTooltipElm();
        let options = tooltipId && _tooltips[tooltipId] && _tooltips[tooltipId].options;
        let offset = options && options.offset || _options.offsetDefault;
        let scrollY = window.scrollY || window.pageYOffset;
        let scrollX = window.scrollX || window.pageXOffset;
        let tooltipTop = evt.pageY + offset;
        let tooltipLeft = evt.pageX + offset;

        if (tooltipElm) {
            tooltipTop = (tooltipTop - scrollY + tooltipElm.offsetHeight + 20 >= window.innerHeight ? (tooltipTop - tooltipElm.offsetHeight - 20) : tooltipTop);
            tooltipLeft = (tooltipLeft - scrollX + tooltipElm.offsetWidth + 20 >= window.innerWidth ? (tooltipLeft - tooltipElm.offsetWidth - 20) : tooltipLeft);

            tooltipElm.style.top = tooltipTop + "px";
            tooltipElm.style.left = tooltipLeft + "px";
        }
    }

    function _onElementMouseOut(evt) {
        let tooltipElm = _getTooltipElm();

        if (tooltipElm) {
            document.querySelector("body").removeChild(tooltipElm);
        }
    }

    function _onElementMouseOver(evt) {
        let tooltipId = this.getAttribute("data-tooltip-id");
        let tooltipText = tooltipId && _tooltips[tooltipId] && _tooltips[tooltipId].text;

        if (tooltipText) {
            _createTooltip(tooltipText, tooltipId);	
        }
    }

    function _parseOptions(options) {
        let optionsObj;

        if (options.length) {
            try {
                optionsObj = JSON.parse(options.replace(/'/ig, "\""));
            } catch (err) {
                console.log(err);
            }
        }

        return optionsObj;
    }

    function _init() {
        window.addEventListener("load", _bindTooltips);
    }

    _init();

    return {
        setOptions: function(options) {
            for (let option in options) {
                if (_options.hasOwnProperty(option)) {
                    _options[option] = options[option];
                }
            }
        },
        refresh: function() {
            _bindTooltips(true);
        }
    };
}));