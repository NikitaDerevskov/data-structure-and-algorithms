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

    public size (): number {
        if (this.list) return this.list.size;
        return 0;
    };
    public isEmpty(): boolean { return !this.list };
    public addFront(data: T): void {
        const newNode = new Node(data);
        if (this.list) {
            newNode.next = this.list.head;
            this.list.head = newNode;
            this.list.size++;
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            };
        }
    };
    public addBack(data: T): void { };
    public addAt(index: number, data: T): void { };
    public peekFront(): T { };
}

export function deleteKnode(linkedList, k: number) {
    let slowPointer = 0;
    let fastPointer = slowPointer + k;
    // обработать крайние случаи когда K больше чем длинна linkedlist.
}
