"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatMoney(value) {
    return value % 1 === 0 ? value.toString() : value.toFixed(2).toString();
}
exports.FormatMoney = FormatMoney;
;
