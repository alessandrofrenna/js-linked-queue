import { Queue } from "../lib/queue";

class People {
  public name?: string;
  public age?: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

let queue: any = null;
let queueArray: any = null;
let peopleQueue: any = null;

beforeAll(() => {
  queue = new Queue<number>();
  queueArray = new Queue<string>(["mark", "alex", "luke", "rose", "alice", "bob", "carl"]);
  peopleQueue = new Queue<People>();
});

afterAll(() => {
  queue.clear();
  queueArray.clear();
  peopleQueue.clear();
});

test("The queue should be empty", () => {
  expect(queue.isEmpty()).toBeTruthy();
});

test("Dequeuing from an empty queue must thrown a 'queue underflow' error", () => {
  expect(() => { queue.dequeue(); }).toThrow(Error);
});

test("Enqueuing an empty item must throw a 'missing item' error", () => {
  expect(() => { queue.enqueue(); }).toThrow(Error);
});

test("The queue head value should be a number", () => {
  queue.enqueue(10);
  expect(typeof queue.head.value).toBe("number");
});

test("The queue first() method should return the head of the queue", () => {
  expect(queue.first()).toEqual(queue.head);
});

test("Dequeuing from the queue should result in empty queue", () => {
  queue.dequeue();
  expect(queue.isEmpty()).toBeTruthy();
});

test("Tthe queue is empty; first() should throw an error", () => {
  expect(() => { queue.first(); }).toThrow(Error);
});

test("Populating the queue with array. Queue length should be 7", () => {
  expect(queueArray.size()).toBe(7);
});

test("Dequeuing from queueArray must return mark string", () => {
  expect(queueArray.dequeue()).toBe("mark");
});

test("Iterator must extract a list of names as string", () => {
  for (const name of queueArray) {
    expect(name).toBeDefined();
    expect(typeof name).toBe("string");
  }
});

test("Invoking clear() queueArray should be empty", () => {
  queueArray.clear();
  expect(queueArray.size()).toBe(0);
});
