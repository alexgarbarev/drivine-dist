"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunWithDrivine = void 0;
const DrivineContext_1 = require("../context/DrivineContext");
exports.RunWithDrivine = (options) => {
    if (!global['$$runWithDrivine$$']) {
        const drivineContext = DrivineContext_1.inDrivineContext();
        if (options && options.transaction) {
            drivineContext.withTransaction(options.transaction);
        }
        hookLifecycleMethods(drivineContext);
        hookTestMethods(drivineContext);
        global['$$runWithDrivine$$'] = true;
    }
};
function hookLifecycleMethods(drivineContext) {
    const lifecycleMethodsToOverride = ['beforeAll', 'beforeEach', 'afterAll', 'afterEach'];
    lifecycleMethodsToOverride.forEach((methodName) => {
        const original = global[methodName];
        global[methodName] = (fn, timeout) => {
            original(async () => drivineContext.run(fn), timeout);
        };
    });
}
function hookTestMethods(drivineContext) {
    const testMethodsToOverride = ['it', 'test'];
    testMethodsToOverride.forEach((methodName) => {
        const original = global[methodName];
        global[methodName] = (name, fn, timeout) => {
            original(name, async () => drivineContext.run(fn), timeout);
        };
    });
}
//# sourceMappingURL=TestUtils.js.map