/**
 * @author Alessandro Frenna <alessandrofrenna95@gmail.com>
 * @description queue node type for the linked list implementation
 */

export type Node<T> = {
  element: T;
  next: Node<T>;
  prev: Node<T>;
} | any;
