import { ResultMapper } from './ResultMapper';
import { QuerySpecification } from '../query/QuerySpecification';
export declare class Neo4jResultMapper implements ResultMapper {
    mapQueryResults<T>(records: any[], spec: QuerySpecification<T>): T[];
    mapToNative(records: any[]): any[];
}
