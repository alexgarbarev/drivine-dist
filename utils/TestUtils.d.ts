import { TransactionOptions } from '../transaction/Transactional';
export interface DrivineRunnerOptions {
    transaction?: TransactionOptions;
}
export declare const RunWithDrivine: (options?: DrivineRunnerOptions | undefined) => void;
