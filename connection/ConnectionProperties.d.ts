import { DatabaseType } from './DatabaseType';
export interface ConnectionProperties {
    databaseType: DatabaseType;
    host: string;
    port?: number;
    userName?: string;
    password?: string;
    idleTimeout?: number;
    databaseName?: string;
    defaultGraphPath?: string;
}
export declare function ConnectionPropertiesFromEnv(connectionName?: string): ConnectionProperties;
