"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgensGraphResultMapper = void 0;
const class_transformer_1 = require("class-transformer");
class AgensGraphResultMapper {
    mapQueryResults(results, spec) {
        if (spec.transformType) {
            return class_transformer_1.plainToClass(spec.transformType, results);
        }
        else if (spec.mapper) {
            return results.map((it) => spec.mapper(it));
        }
        return results;
    }
}
exports.AgensGraphResultMapper = AgensGraphResultMapper;
//# sourceMappingURL=AgensGraphResultMapper.js.map