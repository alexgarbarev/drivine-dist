import { DatabaseType } from '../connection/DatabaseType';
import { Statement } from './Statement';
export declare type ClassType<T> = new (...args: any[]) => T;
export declare class QuerySpecification<T> {
    statement: Statement;
    parameters: any[];
    mapper?: (result: any) => T;
    transformType?: ClassType<T>;
    private _skip;
    private _limit;
    constructor(statement?: string | Statement);
    withStatement(statement: string | Statement): this;
    bind(parameters?: any[]): this;
    map(mapper: (result: any) => T): this;
    transform(type: ClassType<T>): this;
    skip(results: number): this;
    limit(results: number): this;
    finalize(): this;
    appliedStatement(): string;
    mapParameters(type: DatabaseType): any;
    private skipClause;
    private limitClause;
}
