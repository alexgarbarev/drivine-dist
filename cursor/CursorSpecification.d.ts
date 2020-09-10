import { QuerySpecification } from '../query/QuerySpecification';
export declare class CursorSpecification<T> extends QuerySpecification<T> {
    batch: number;
    batchSize(size: number): this;
}
