"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgensGraphConnectionProvider = void 0;
const AgensGraph = require('@liberation-data/agensgraph/lib');
const AgensGraphConnection_1 = require("./AgensGraphConnection");
const AgensGraphResultMapper_1 = require("../mapper/AgensGraphResultMapper");
class AgensGraphConnectionProvider {
    constructor(name, host, user, password, database, port, idleTimeoutMillis, defaultGraphPath) {
        this.name = name;
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
        this.port = port;
        this.idleTimeoutMillis = idleTimeoutMillis;
        this.defaultGraphPath = defaultGraphPath;
        this.pool = new AgensGraph.Pool({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.database,
            max: 40,
            idleTimeoutMillis: this.idleTimeoutMillis,
            connectionTimeoutMillis: 5000
        });
    }
    async connect() {
        const client = await this.pool.connect();
        if (!Object.prototype.hasOwnProperty.call(client, 'sessionId')) {
            await this.setSessionId(client);
        }
        if (this.defaultGraphPath && client['graphPath'] !== this.defaultGraphPath) {
            await this.setGraphPath(client, this.defaultGraphPath);
        }
        return new AgensGraphConnection_1.AgensGraphConnection(client, new AgensGraphResultMapper_1.AgensGraphResultMapper());
    }
    async end() {
        await this.pool.end();
    }
    async setSessionId(client) {
        const statement = `
            select format('%s.%s', to_hex(extract(epoch from backend_start)::int), to_hex(pid)) as sid
            from pg_stat_activity
            where pid = pg_backend_pid()`;
        const result = await client.query(statement);
        client['sessionId'] = result.rows[0].sid;
    }
    async setGraphPath(client, path) {
        await client.query(`set graph_path = ${path}`);
        client['graphPath'] = path;
    }
}
exports.AgensGraphConnectionProvider = AgensGraphConnectionProvider;
//# sourceMappingURL=AgensGraphConnectionProvider.js.map