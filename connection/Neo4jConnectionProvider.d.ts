import { ConnectionProvider } from './ConnectionProvider';
import { Connection } from './Connection';
export declare class Neo4jConnectionProvider implements ConnectionProvider {
    readonly name: string;
    readonly host: string;
    readonly port: number;
    readonly user: string;
    readonly password: string | undefined;
    private driver;
    constructor(name: string, host: string, port: number, user: string, password: string | undefined);
    connect(): Promise<Connection>;
    end(): Promise<void>;
}
