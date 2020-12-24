class Node<T> {
    public data : T;
    public next: Node<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

interface List<T> {
    head: Node<T>,
    tail: Node<T>,
    size: number
}

class LinkedList<T> implements Iterable<T> {
    private list: List<T> | undefined;

    constructor() {
        this.list = undefined;
    }

    public size (): number { return 0 };
    public isEmpty(): boolean { return false };
    public addFront(data: T): void { };
    public addBack(data: T): void { };
    public addAt(index: number, data: T): void { };
    public peekFront(): T { };
}

export function deleteKnode(linkedList, k: number) {
    let slowPointer = 0;
    let fastPointer = slowPointer + k;
    // обработать крайние случаи когда K больше чем длинна linkedlist.
}
