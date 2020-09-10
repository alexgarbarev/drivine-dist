import { Connection } from './Connection';
import { PoolClient } from 'pg';
import { QuerySpecification } from '../query/QuerySpecification';
import { ResultMapper } from '../mapper/ResultMapper';
import { CursorSpecification } from '../cursor/CursorSpecification';
import { AgensGraphCursor } from '../cursor/AgensGraphCursor';
export declare class AgensGraphConnection implements Connection {
    readonly client: PoolClient;
    readonly resultMapper: ResultMapper;
    private logger;
    constructor(client: PoolClient, resultMapper: ResultMapper);
    sessionId(): string;
    query<T>(spec: QuerySpecification<T>): Promise<any[]>;
    openCursor<T>(spec: CursorSpecification<T>): Promise<AgensGraphCursor<T>>;
    startTransaction(): Promise<void>;
    commitTransaction(): Promise<void>;
    rollbackTransaction(): Promise<void>;
    release(err?: Error): Promise<void>;
}
