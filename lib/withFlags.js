"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  inject: ['ld'],
  computed: {
    flags: function flags() {
      return this.ld.flags;
    }
  }
};
exports.default = _default;