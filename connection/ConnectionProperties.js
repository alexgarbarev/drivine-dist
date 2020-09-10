"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPropertiesFromEnv = void 0;
const DatabaseType_1 = require("./DatabaseType");
const assert = require("assert");
function ConnectionPropertiesFromEnv(connectionName) {
    const prefix = connectionName ? `${connectionName}_` : '';
    const databaseType = process.env[`${prefix}DATABASE_TYPE`];
    const host = process.env[`${prefix}DATABASE_HOST`];
    const port = Number(process.env[`${prefix}DATABASE_PORT`]);
    const userName = process.env[`${prefix}DATABASE_USER`];
    const password = process.env[`${prefix}DATABASE_PASSWORD`];
    const idleTimeout = Number(process.env[`${prefix}DATABASE_IDLE_TIMEOUT`]);
    const databaseName = process.env[`${prefix}DATABASE_NAME`];
    const defaultGraphPath = process.env[`${prefix}DATABASE_DEFAULT_GRAPH_PATH`];
    assert(databaseType, `${prefix}DATABASE_TYPE for named connection is required.`);
    assert(host, `${prefix}DATABASE_HOST for named connection is required.`);
    if (databaseType === DatabaseType_1.DatabaseType.AGENS_GRAPH) {
        assert(databaseName, `${prefix}DATABASE_NAME for named connection is required.`);
    }
    return {
        databaseType: databaseType,
        host: host,
        port: port,
        userName: userName,
        password: password,
        idleTimeout: idleTimeout,
        databaseName: databaseName,
        defaultGraphPath: defaultGraphPath
    };
}
exports.ConnectionPropertiesFromEnv = ConnectionPropertiesFromEnv;
//# sourceMappingURL=ConnectionProperties.js.map