import { Connection } from './Connection';
import { ConnectionProvider } from './ConnectionProvider';
export declare class AgensGraphConnectionProvider implements ConnectionProvider {
    readonly name: string;
    readonly host: string;
    readonly user: string | undefined;
    readonly password: string | undefined;
    readonly database: string;
    readonly port: number;
    readonly idleTimeoutMillis: number;
    readonly defaultGraphPath: string | undefined;
    private readonly pool;
    constructor(name: string, host: string, user: string | undefined, password: string | undefined, database: string, port: number, idleTimeoutMillis: number, defaultGraphPath: string | undefined);
    connect(): Promise<Connection>;
    end(): Promise<void>;
    private setSessionId;
    private setGraphPath;
}
