"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectSql = exports.sqlInjections = exports.InjectCypher = exports.cypherInjections = exports.InjectFileContents = exports.fileContentInjections = exports.InjectPersistenceManager = exports.persistenceManagerInjections = void 0;
const common_1 = require("@nestjs/common");
exports.persistenceManagerInjections = [];
exports.InjectPersistenceManager = (database = 'default') => {
    if (!exports.persistenceManagerInjections.includes(database)) {
        exports.persistenceManagerInjections.push(database);
    }
    return common_1.Inject(`PersistenceManager:${database}`);
};
exports.fileContentInjections = [];
exports.InjectFileContents = (dirNameOrPath, directory) => {
    const filename = fileNameFor(dirNameOrPath, undefined, directory);
    if (!exports.fileContentInjections.includes(filename)) {
        exports.fileContentInjections.push(filename);
    }
    return common_1.Inject(`FileContents:${filename}`);
};
exports.cypherInjections = [];
exports.InjectCypher = (dirNameOrPath, directory) => {
    const filename = fileNameFor(dirNameOrPath, 'cypher', directory);
    if (!exports.cypherInjections.includes(filename)) {
        exports.cypherInjections.push(filename);
    }
    return common_1.Inject(`CYPHER:${filename}`);
};
exports.sqlInjections = [];
exports.InjectSql = (dirNameOrPath, directory) => {
    const filename = fileNameFor(dirNameOrPath, 'sql', directory);
    if (!exports.sqlInjections.includes(filename)) {
        exports.sqlInjections.push(filename);
    }
    return common_1.Inject(`SQL:${filename}`);
};
function fileNameFor(dirNameOrPath, extension, resourceName) {
    if (resourceName) {
        const path = `${dirNameOrPath}/${resourceName}`;
        return require.resolve(extension ? `${path}.${extension}` : `${path}`);
    }
    else {
        return require.resolve(extension ? `${dirNameOrPath}.${extension}` : `${dirNameOrPath}`);
    }
}
//# sourceMappingURL=DrivineInjectionDecorators.js.map