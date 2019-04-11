"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(input = []) {
        this.length = 0;
        if (input.length) {
            this.populateFromArray(input);
        }
    }
    enqueue(item) {
        // Little hack for when generic T = number.
        // If item is the number 0, !item will throw an error.
        if (item === null || item === undefined) {
            throw new Error(`Missing item of type ${typeof item}`);
        }
        const node = {
            value: item,
            next: null,
            prev: null,
        };
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.length++;
            return true;
        }
        this.tail.next = node;
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
        this.length++;
        return true;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        const deleted = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        else {
            this.head.prev.next = null;
            this.head.prev = null;
        }
        this.length--;
        return deleted;
    }
    first() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }
        return this.head;
    }
    isEmpty() {
        return (!this.head && !this.tail && !this.length);
    }
    size() {
        return this.length;
    }
    clear() {
        while (!this.isEmpty()) {
            this.dequeue();
        }
    }
    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
    populateFromArray(array) {
        array.forEach((element) => this.enqueue(element));
        return;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map