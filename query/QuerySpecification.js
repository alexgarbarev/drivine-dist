"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpecification = void 0;
const DatabaseType_1 = require("../connection/DatabaseType");
const DrivineError_1 = require("../DrivineError");
const assert = require("assert");
class QuerySpecification {
    constructor(statement) {
        this.parameters = [];
        if (statement) {
            this.withStatement(statement);
        }
    }
    withStatement(statement) {
        if (typeof statement === 'string') {
            this.statement = { text: statement, language: 'CYPHER' };
        }
        else {
            assert(statement.text, 'statement text is required');
            assert(statement.language, 'statement language is require');
            this.statement = statement;
        }
        return this;
    }
    bind(parameters) {
        if (parameters && parameters.length > 0) {
            this.parameters = parameters;
        }
        return this;
    }
    map(mapper) {
        this.mapper = mapper;
        return this;
    }
    transform(type) {
        this.transformType = type;
        return this;
    }
    skip(results) {
        this._skip = results;
        return this;
    }
    limit(results) {
        this._limit = results;
        return this;
    }
    finalize() {
        Object.freeze(this);
        return this;
    }
    appliedStatement() {
        return `${this.statement.text} ${this.skipClause()} ${this.limitClause()}`;
    }
    mapParameters(type) {
        const params = this.parameters ? this.parameters : [];
        if (type == DatabaseType_1.DatabaseType.AGENS_GRAPH) {
            if (this.statement.language === 'CYPHER') {
                return params.map((it) => JSON.stringify(it));
            }
            else if (this.statement.language === 'SQL') {
                return params;
            }
            else {
                throw new DrivineError_1.DrivineError(`${this.statement.language} is not supported on AgensGraph`);
            }
        }
        else if (type == DatabaseType_1.DatabaseType.NEO4J) {
            assert(this.statement.language === 'CYPHER', `${this.statement.language} is not supported on Neo4j.`);
            const mapped = params.map((it, index) => ({ [index + 1]: it }));
            return Object.assign({}, ...mapped);
        }
        else {
            throw new DrivineError_1.DrivineError(`Database type ${type} is not supported.`);
        }
    }
    skipClause() {
        if (this._skip) {
            return `${this.statement.language === 'CYPHER' ? `SKIP` : `OFFSET`} ${this._skip}`;
        }
        return ``;
    }
    limitClause() {
        return this._limit ? `LIMIT ${this._limit}` : ``;
    }
}
exports.QuerySpecification = QuerySpecification;
//# sourceMappingURL=QuerySpecification.js.map