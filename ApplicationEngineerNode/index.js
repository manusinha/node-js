var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.activity;
handle["/activity"] = requestHandlers.activity;
handle["/currencyConversion"] = requestHandlers.currencyConversion;
handle["/conversionRate"] = requestHandlers.conversionRate;
handle["/convertCurrency"] = requestHandlers.convertCurrency;
handle["/showConversionRate"] = requestHandlers.showConversionRate;


server.start(router.route, handle);
