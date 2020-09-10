import { DatabaseType } from './DatabaseType';
import { ConnectionProvider } from './ConnectionProvider';
import { DatabaseRegistry } from './DatabaseRegistry';
import { ConnectionProperties } from './ConnectionProperties';
export declare class ConnectionProviderBuilder {
    private logger;
    private _type;
    private _host;
    private _port?;
    private _userName?;
    private _password?;
    private _idleTimeout?;
    private _name?;
    private _defaultGraphPath?;
    private registry;
    constructor(registry: DatabaseRegistry);
    withProperties(properties: ConnectionProperties): this;
    withType(type: DatabaseType): this;
    host(host: string): this;
    port(port: number): this;
    userName(userName: string): this;
    password(password: string): this;
    idleTimeout(idleTimeout: number): this;
    databaseName(name: string): this;
    defaultGraphPath(path: string): this;
    buildOrResolve(name?: string): ConnectionProvider;
    private buildAgensGraphProvider;
    private buildNeo4jProvider;
}
