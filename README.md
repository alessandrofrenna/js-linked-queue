# JS Linked Queue
[![Build Status](https://travis-ci.com/alessandrofrenna/js-linked-queue.svg?branch=version-0.1.1)](https://travis-ci.com/alessandrofrenna/js-linked-queue) [![CodeFactor](https://www.codefactor.io/repository/github/alessandrofrenna/js-linked-queue/badge)](https://www.codefactor.io/repository/github/alessandrofrenna/js-linked-queue) [![Coverage Status](https://coveralls.io/repos/github/alessandrofrenna/js-linked-queue/badge.svg?branch=master)](https://coveralls.io/github/alessandrofrenna/js-linked-queue?branch=master)


A queue data structure implemented as a dubly linked list with Typesctipt with support for generic types.

## Changelog

  * 0.2.1
    - first method now return type `T` instead `Node<T>`

## Installation

Install the package using a javascript package manager:

1. Yarn
```bash
  > yarn add js-linked-queue
```

2. Npm
```bash
  > npm install --save js-linked-queue
```

## Usage
Using js-linked-queue is simple and can be used either with Javascript or Typescript.

Here an example with typescript
```typescript
  import { Queue } from "js-linked-queue";

  // Because the queue supports generics you can 
  // put anything as a value for a queue node
  class Person {
    public name;
    public age;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  // Create the queue
  const peopleQueue = new Queue<Person>();

  // To add people to queue use the enqueue function
  peopleQueue.enqueue(new Person("Mark", 23));
  peopleQueue.enqueue(new Person("Lucas", 43));

  // To delete an item from the head of the queue use dequeue
  peopleQueue.dequeue(); // reduce the queue size by one element

  // Use first() to get the head of the queue
  peopleQueue.first(); // Person { name: Lucas, age: 43}

  // You can even populate a queue from an existing object array
  const people: Person[] = [
    new Person("Alex", 23),
    new Person("Mary", 52),
    new Person("Alice", 19),
    new Person("Rita", 79),
    new Person("Frank", 57)
  ];

  const family = new Queue<Person>(people);

  // With a for-of loop you can iterate through the queue's elements:
  for(const relative of family) {
    console.log(`Hello, ${relative.name}`);
  }
```

Simple usage for javascript version of the example.

---

### Api

Queue's apis.

1. ##### `Queue<T>.constructor(input: T[] = [])`
    The default queue constructor accept an array of generic type `T` that by default is set as an empty array
2. #### `instance.enqueue(item:T): boolean`
    The enqueue method take an item of type `T` and return a `boolean`: true for correct enqueuing, false otherwise
3. #### `instance.dequeue(): T`
    The dequeue method is used to remove an element from the head of the queue and returns the value `T` of the `Node<T>` deleted from the queue
4. #### `instance.first(): T`
    The first method return the value of type `T` inside the head node of the queue
5. #### `instance.isEmpty(): boolean`
    The isEmpty method return a `boolean`; true if the queue is empty otherwise false
6. #### `instance.size(): number`
    The size method return the queue size as a `number`
7. #### `instance.clear(): void`
    The clear method is used to completely delete the queue's elements
8. #### `[Symbol.iterator]`
    Used for iterating though the queue's elements


#### 