"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeLocalStorage = void 0;
const LocalStorageAls_1 = require("./LocalStorageAls");
const LocalStorageClsHooked_1 = require("./LocalStorageClsHooked");
function isAlsSupported() {
    const [nodeMajor, nodeMinor] = process.versions.node.split('.');
    const major = Number.parseInt(nodeMajor);
    const minor = Number.parseInt(nodeMinor);
    if (major === 12 && minor >= 17) {
        return true;
    }
    if (major === 13 && minor >= 10) {
        return true;
    }
    return major > 13;
}
function MakeLocalStorage() {
    if (isAlsSupported()) {
        return new LocalStorageAls_1.LocalStorageAls();
    }
    else {
        return new LocalStorageClsHooked_1.LocalStorageClsHooked();
    }
}
exports.MakeLocalStorage = MakeLocalStorage;
//# sourceMappingURL=LocalStorageFactory.js.map