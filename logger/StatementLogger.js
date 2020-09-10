"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementLogger = void 0;
const common_1 = require("@nestjs/common");
class StatementLogger {
    constructor(sessionId) {
        this.sessionId = sessionId;
        this.logger = new common_1.Logger(StatementLogger.name);
    }
    log(query, hrStart) {
        const hrEnd = process.hrtime(hrStart);
        const uSec = Math.round(hrEnd[1] / 1000);
        this.logger.verbose({
            ...query,
            sessionId: this.sessionId,
            elapsed: `${uSec} µsec`
        });
    }
}
exports.StatementLogger = StatementLogger;
//# sourceMappingURL=StatementLogger.js.map