import { Connection } from './Connection';
export interface ConnectionProvider {
    name: string;
    connect(): Promise<Connection>;
    end(): Promise<void>;
}
