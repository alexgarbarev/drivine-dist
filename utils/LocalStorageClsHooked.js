"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageClsHooked = void 0;
const cls = require("cls-hooked");
const uuid_1 = require("uuid");
class LocalStorageClsHooked {
    constructor() {
        const namespaceName = `__local_storage_${uuid_1.v4()}__`;
        this.namespace = cls.createNamespace(namespaceName);
    }
    run(fn) {
        return this.namespace.run(fn);
    }
    runAndReturn(fn) {
        return this.namespace.runAndReturn(fn);
    }
    async runPromise(fn) {
        return this.namespace.runPromise(fn);
    }
    isInsideRun() {
        return !!this.namespace.active;
    }
    get(key) {
        return this.namespace.get(key);
    }
    set(key, object) {
        this.namespace.set(key, object);
    }
    tearDown() {
        this.namespace['_contexts'] = null;
        const namespaceName = this.namespace['name'];
        cls.destroyNamespace(namespaceName);
    }
}
exports.LocalStorageClsHooked = LocalStorageClsHooked;
//# sourceMappingURL=LocalStorageClsHooked.js.map