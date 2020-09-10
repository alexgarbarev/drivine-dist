"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgensGraphConnection = void 0;
const AgensGraphResultMapper_1 = require("../mapper/AgensGraphResultMapper");
const AgensGraphCursor_1 = require("../cursor/AgensGraphCursor");
const StatementLogger_1 = require("../logger/StatementLogger");
const common_1 = require("@nestjs/common");
const DatabaseType_1 = require("./DatabaseType");
const PgCursor = require('pg-cursor');
class AgensGraphConnection {
    constructor(client, resultMapper) {
        this.client = client;
        this.resultMapper = resultMapper;
        this.logger = new common_1.Logger(AgensGraphConnection.name);
        this.resultMapper = new AgensGraphResultMapper_1.AgensGraphResultMapper();
    }
    sessionId() {
        return this.client['sessionId'];
    }
    async query(spec) {
        spec.finalize();
        const hrStart = process.hrtime();
        const logger = new StatementLogger_1.StatementLogger(this.sessionId());
        const result = await this.client.query(spec.appliedStatement(), spec.mapParameters(DatabaseType_1.DatabaseType.AGENS_GRAPH));
        logger.log(spec, hrStart);
        return this.resultMapper.mapQueryResults(result.rows, spec);
    }
    async openCursor(spec) {
        const pgCursorSpec = new PgCursor(spec.appliedStatement(), spec.mapParameters(DatabaseType_1.DatabaseType.AGENS_GRAPH));
        const pgCursor = await this.client.query(pgCursorSpec);
        return new AgensGraphCursor_1.AgensGraphCursor(this.sessionId(), spec, pgCursor, this.resultMapper);
    }
    async startTransaction() {
        await this.client.query(`BEGIN`);
    }
    async commitTransaction() {
        await this.client.query(`COMMIT`);
    }
    async rollbackTransaction() {
        await this.client.query(`ROLLBACK`);
    }
    async release(err) {
        if (err) {
            this.logger.warn(`Closing session with error: ${err}`);
        }
        this.client.release(err);
        return Promise.resolve();
    }
}
exports.AgensGraphConnection = AgensGraphConnection;
//# sourceMappingURL=AgensGraphConnection.js.map