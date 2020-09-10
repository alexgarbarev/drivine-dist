"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neo4jResultMapper = void 0;
const class_transformer_1 = require("class-transformer");
const neo4j = require('neo4j-driver');
class Neo4jResultMapper {
    mapQueryResults(records, spec) {
        const results = this.mapToNative(records);
        if (spec.transformType) {
            return class_transformer_1.plainToClass(spec.transformType, results);
        }
        else if (spec.mapper) {
            return results.map((it) => spec.mapper(it));
        }
        return results;
    }
    mapToNative(records) {
        const data = new Array(records.length);
        for (let i = 0; i < records.length; i++) {
            const record = records[i];
            const item = {};
            for (let j = 0; j < record.keys.length; j++) {
                const key = record.keys[j];
                item[key] = toNative(record.get(j));
            }
            data[i] = item;
        }
        return data;
    }
}
exports.Neo4jResultMapper = Neo4jResultMapper;
const toNative = (val) => {
    if (val == undefined) {
        return val;
    }
    if (val instanceof neo4j.types.Node) {
        return toNative(val.properties);
    }
    if (val instanceof neo4j.types.Relationship) {
        return toNative(val.properties);
    }
    if (val instanceof neo4j.types.Point) {
        return val;
    }
    if (neo4j.isInt(val)) {
        return toNumberOrThrow(val);
    }
    if (Array.isArray(val)) {
        return val.map((a) => toNative(a));
    }
    if (isRecord(val)) {
        return toNative(recordToNative(val));
    }
    if (typeof val === 'object') {
        return mapObj(toNative, val);
    }
    return val;
};
const recordToNative = (rec) => {
    const out = {};
    rec.keys.forEach((key, index) => {
        out[key] = rec._fields[index];
    });
    return out;
};
const isRecord = (obj) => typeof obj._fields !== 'undefined' && typeof obj.keys !== 'undefined';
const mapObj = (fn, obj) => {
    const out = {};
    Object.keys(obj).forEach((key) => {
        out[key] = fn(obj[key]);
    });
    return out;
};
const toNumberOrThrow = (val) => {
    if (val.inSafeRange()) {
        return val.toNumber();
    }
    throw new Error(`${val} is not in safe range to convert to number`);
};
//# sourceMappingURL=Neo4jResultMapper.js.map