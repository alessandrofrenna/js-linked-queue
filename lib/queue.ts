/**
 * @author Alessandro Frenna <alessandrofrenna95@gmail.com>
 * @description Queue data structure implemented by a linked list
 */
import { Node } from "types/node";

export class Queue<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private length: number = 0;

  constructor(input: T[] = []) {
    if (input.length) {
      this.populateFromArray(input);
    }
  }

  public enqueue(item: T): boolean {
    // Little hack for when generic T = number.
    // If item is the number 0, !item will throw an error.
    if (item === null || item === undefined) {
      throw new Error(`Missing item of type ${typeof item}`);
    }

    const node: Node<T> = {
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

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    const deleted: T = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev.next = null;
      this.head.prev = null;
    }
    this.length--;
    return deleted;
  }

  public first(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.head.value;
  }

  public isEmpty(): boolean {
    return (!this.head && !this.tail && !this.length);
  }

  public size(): number {
    return this.length;
  }

  public clear(): void {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }

  public *[Symbol.iterator](): IterableIterator<T> {
    let current: Node<T> = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  private populateFromArray(array: T[]): void {
    array.forEach((element: T): boolean => this.enqueue(element as T));
    return;
  }
}
