import { ResultMapper } from './ResultMapper';
import { QuerySpecification } from '../query/QuerySpecification';
export declare class AgensGraphResultMapper implements ResultMapper {
    mapQueryResults<T>(results: any[], spec: QuerySpecification<T>): T[];
}
