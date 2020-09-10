import { QuerySpecification } from '../query/QuerySpecification';
import { Cursor } from '../cursor/Cursor';
import { CursorSpecification } from '../cursor/CursorSpecification';
export interface PersistenceManager {
    query<T>(spec: QuerySpecification<T>): Promise<T[]>;
    getOne<T>(spec: QuerySpecification<T>): Promise<T>;
    maybeGetOne<T>(spec: QuerySpecification<T>): Promise<T | undefined>;
    openCursor<T>(spec: CursorSpecification<T>): Promise<Cursor<T>>;
}
