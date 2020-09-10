"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neo4jConnectionProvider = void 0;
const Neo4jConnection_1 = require("./Neo4jConnection");
const Neo4jResultMapper_1 = require("../mapper/Neo4jResultMapper");
const neo = require('neo4j-driver');
const shortId = require("shortid");
class Neo4jConnectionProvider {
    constructor(name, host, port, user, password) {
        this.name = name;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        const authToken = neo.auth.basic(this.user, this.password);
        this.driver = neo.driver(`bolt://${this.host}:${this.port}`, authToken);
    }
    async connect() {
        const session = this.driver.session();
        session['sessionId'] = shortId.generate();
        const connection = new Neo4jConnection_1.Neo4jConnection(session, new Neo4jResultMapper_1.Neo4jResultMapper());
        return Promise.resolve(connection);
    }
    async end() {
        return this.driver.close();
    }
}
exports.Neo4jConnectionProvider = Neo4jConnectionProvider;
//# sourceMappingURL=Neo4jConnectionProvider.js.map