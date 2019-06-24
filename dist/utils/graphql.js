"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_1 = require("graphql");
exports.fetchGraphQLSchema = function(endpoint) {
  return tslib_1.__awaiter(_this, void 0, void 0, function() {
    return tslib_1.__generator(this, function(_a) {
      return [
        2 /*return*/,
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: graphql_1.introspectionQuery })
        })
          .then(function(res) {
            return res.json();
          })
          .then(function(json) {
            return json.data;
          })
      ];
    });
  });
};
