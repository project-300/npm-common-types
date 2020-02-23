"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MobileNumberWithExtension(phoneNumber) { return "+353" + phoneNumber.substring(1); }
exports.MobileNumberWithExtension = MobileNumberWithExtension;
;
function MobileNumberNoExtension(phoneNumber) { return "0" + phoneNumber.substring(4); }
exports.MobileNumberNoExtension = MobileNumberNoExtension;
;
