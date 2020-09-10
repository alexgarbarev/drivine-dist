"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlStatement = exports.cypherStatement = void 0;
exports.cypherStatement = (text) => ({ text: text, language: 'CYPHER' });
exports.sqlStatement = (text) => ({ text: text, language: 'SQL' });
//# sourceMappingURL=Statement.js.map