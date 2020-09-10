import { PersistenceManager } from './PersistenceManager';
import { TransactionContextHolder } from '../transaction/TransactonContextHolder';
import { PersistenceManagerFactory } from './PersistenceManagerFactory';
import { QuerySpecification } from '../query/QuerySpecification';
import { Cursor } from '../cursor/Cursor';
import { CursorSpecification } from '../cursor/CursorSpecification';
export declare class DelegatingPersistenceManager implements PersistenceManager {
    readonly database: string;
    readonly contextHolder: TransactionContextHolder;
    readonly factory: PersistenceManagerFactory;
    private logger;
    constructor(database: string, contextHolder: TransactionContextHolder, factory: PersistenceManagerFactory);
    getOne<T>(spec: QuerySpecification<T>): Promise<T>;
    maybeGetOne<T>(spec: QuerySpecification<T>): Promise<T | undefined>;
    openCursor<T>(spec: CursorSpecification<T>): Promise<Cursor<T>>;
    query<T>(spec: QuerySpecification<T>): Promise<T[]>;
    private persistenceManager;
}
