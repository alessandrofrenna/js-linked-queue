/**
 * @author Alessandro Frenna <alessandrofrenna95@gmail.com>
 * @description Queue data structure implemented by a linked list
 */
import { Node } from "types/node";
export declare class Queue<T> {
    private head;
    private tail;
    private length;
    constructor(input?: T[]);
    enqueue(item: T): boolean;
    dequeue(): T;
    first(): Node<T>;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    [Symbol.iterator](): IterableIterator<T>;
    private populateFromArray;
}
