"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegatingPersistenceManager = void 0;
const common_1 = require("@nestjs/common");
class DelegatingPersistenceManager {
    constructor(database, contextHolder, factory) {
        this.database = database;
        this.contextHolder = contextHolder;
        this.factory = factory;
        this.logger = new common_1.Logger(DelegatingPersistenceManager.name);
    }
    async getOne(spec) {
        return this.persistenceManager().getOne(spec);
    }
    async maybeGetOne(spec) {
        return this.persistenceManager().maybeGetOne(spec);
    }
    async openCursor(spec) {
        return this.persistenceManager().openCursor(spec);
    }
    async query(spec) {
        return this.persistenceManager().query(spec);
    }
    persistenceManager() {
        const type = this.contextHolder.currentTransaction ? 'TRANSACTIONAL' : 'NON_TRANSACTIONAL';
        this.logger.verbose(`Using persistence manager: ${type}`);
        return this.factory.buildOrResolve(this.database, type);
    }
}
exports.DelegatingPersistenceManager = DelegatingPersistenceManager;
//# sourceMappingURL=DelegatingPersistenceManager.js.map