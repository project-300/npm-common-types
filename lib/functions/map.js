"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetMidpoint(a, b) {
    return {
        latitude: (a.latitude + b.latitude) / 2,
        longitude: (a.longitude + b.longitude) / 2
    };
}
exports.GetMidpoint = GetMidpoint;
;
