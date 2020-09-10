import { PersistenceManager } from './PersistenceManager';
import { QuerySpecification } from '../query/QuerySpecification';
import { ConnectionProvider } from '../connection/ConnectionProvider';
import { Cursor } from '../cursor/Cursor';
import { CursorSpecification } from '../cursor/CursorSpecification';
export declare class NonTransactionalPersistenceManager implements PersistenceManager {
    readonly connectionProvider: ConnectionProvider;
    private logger;
    private finderOperations;
    constructor(connectionProvider: ConnectionProvider);
    query<T>(spec: QuerySpecification<T>): Promise<T[]>;
    getOne<T>(spec: QuerySpecification<T>): Promise<T>;
    maybeGetOne<T>(spec: QuerySpecification<T>): Promise<T | undefined>;
    openCursor<T>(spec: CursorSpecification<T>): Promise<Cursor<T>>;
}
