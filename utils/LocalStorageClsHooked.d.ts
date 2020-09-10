import { LocalStorage } from "./LocalStorage";
import { Namespace } from "cls-hooked";
export declare class LocalStorageClsHooked implements LocalStorage {
    readonly namespace: Namespace;
    constructor();
    run(fn: (...args: any[]) => void): void;
    runAndReturn<T>(fn: (...args: any[]) => T): T;
    runPromise<T>(fn: (...args: any[]) => Promise<T>): Promise<T>;
    isInsideRun(): boolean;
    get<T>(key: string): T;
    set<T>(key: string, object: T): void;
    tearDown(): void;
}
