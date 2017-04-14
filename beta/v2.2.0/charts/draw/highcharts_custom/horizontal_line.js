define(["exports","jquery","charts/draw/properties_selector/properties_selector","highstock"],function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.init=void 0;var e=d(b),f=d(c),g={},h=a.init=function(a){function b(a){j.addEvent(k,"click",function(b){k.annotate&&(k.annotate=!1,c(b.yAxis[0].value,b.yAxis[0].axis,a),j.removeEvent(k,"click"))})}function c(a,b,c){var f="horizontalLine_"+(new Date).getTime(),i={value:a,width:2,color:"#ff0000",dashStyle:"shortdash",id:f};c&&e["default"].extend(i,c);var j=b.addPlotLine(i).svgElem.css({cursor:"pointer"}).attr("id",f).translate(0,0).on("mousedown",d).on("dblclick",h);return g[f]=j,j}function d(){k.annotate=!0;var b=e["default"](this).attr("id"),d=g[b],f=!1;j.wrap(j.Pointer.prototype,"drag",function(b,g){if(k.annotate){if(f||(f=!0,e["default"](a).one("mouseup",function(){k.annotate=!1,f=!1,j.removeEvent(k,"mousemove")})),k.isInsidePlot(g.chartX-k.plotLeft,g.chartY-k.plotTop)&&d.element){var h=k.yAxis[0].toValue(g.chartY),l=k.yAxis[0],m={color:d.stroke,width:d["stroke-width"]};i(d.element.id),d=c(h,l,m)}}else b.call(this,g)})}function h(){var a=e["default"](this).attr("id");i(a)}function i(a){e["default"]("#"+a).off(),delete g[a],k.yAxis[0].removePlotLine(a)}var j=Highcharts;if(j){var k=e["default"](a).highcharts(),l={};l.title="Horizontal Line".i18n(),l.inputValues=[{name:"Stroke width".i18n(),type:"number",id:"width","default":2,min:1,max:5},{name:"Stroke color".i18n(),type:"colorpicker",id:"color","default":"#ff0000"}],f["default"].open(l,b)}};a["default"]={init:h}});