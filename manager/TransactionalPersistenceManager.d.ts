import { TransactionContextHolder } from '../transaction/TransactonContextHolder';
import { PersistenceManager } from './PersistenceManager';
import { CursorSpecification } from '../cursor/CursorSpecification';
import { QuerySpecification } from '../query/QuerySpecification';
import { Cursor } from '../cursor/Cursor';
export declare class TransactionalPersistenceManager implements PersistenceManager {
    readonly contextHolder: TransactionContextHolder;
    readonly database: string;
    private finderOperations;
    constructor(contextHolder: TransactionContextHolder, database: string);
    query<T>(spec: QuerySpecification<T>): Promise<T[]>;
    getOne<T>(spec: QuerySpecification<T>): Promise<T>;
    maybeGetOne<T>(spec: QuerySpecification<T>): Promise<T | undefined>;
    openCursor<T>(spec: CursorSpecification<T>): Promise<Cursor<T>>;
    private currentTransactionOrThrow;
}
