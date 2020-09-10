"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorSpecification = void 0;
const QuerySpecification_1 = require("../query/QuerySpecification");
class CursorSpecification extends QuerySpecification_1.QuerySpecification {
    constructor() {
        super(...arguments);
        this.batch = 100;
    }
    batchSize(size) {
        this.batch = size;
        return this;
    }
}
exports.CursorSpecification = CursorSpecification;
//# sourceMappingURL=CursorSpecification.js.map