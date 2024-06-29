class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    createNode(value, next) {
        const newNode = new Node();
        newNode.next = next;
        newNode.value = value;
        return newNode
    }

    prepend(data) {
        this.head = this.createNode(data, this.head);
    };

    append(data) {
        if (this.head == null) {
            this.prepend(data);
        }
        else {
            let nextVal = this.head;
            while(nextVal.next != null) {
                nextVal = nextVal.next;
            };
            nextVal.next = this.createNode(data, null);
        }
    };

    size() {
        let nextVal = this.head;
        let i = 1;
        while(nextVal.next != null) {
            nextVal = nextVal.next;
            i++;
        };
        return i;
    };

    getHead() {
        return this.head;
    };

    getTail() {
        let nextVal = this.head;
        while(nextVal.next != null) {
            nextVal = nextVal.next;
        };
        return nextVal;
    };

    at(index) {
        let nextVal = this.head;
        let i = 0;
        while(nextVal.next != null && i < index) {
            nextVal = nextVal.next;
            i++;
        };
        return nextVal;
    };

    pop() {
        let prevVal = this.head;
        let nextVal = prevVal.next;
        while(nextVal.next != null) {
            prevVal = prevVal.next;
            nextVal = prevVal.next;
        };
        const value = nextVal.value;
        prevVal.next = null;
        nextVal.value = null;
        return value;
    };

    contains(value) {
        let nextVal = this.head;
        let checkVal = nextVal.value === value;
        while(nextVal.next != null && !(checkVal)) {
            nextVal = nextVal.next;
            checkVal = nextVal.value === value;
        };
        return checkVal;
    };

    find(value) {
        let nextVal = this.head;
        let i = 0;
        let checkVal = nextVal.value === value;
        while(nextVal.next != null && !(checkVal)) {
            nextVal = nextVal.next;
            checkVal = nextVal.value === value;
            i++
        };
        return checkVal ? i: null;
    };

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value)
            return this.head.value
        }
        else if (index > 0) {
            let nextVal = this.head;
            let newVal = null;
            let i = 0;
            while(nextVal.next != null && i < index - 1 ) {
                nextVal = nextVal.next;
                i++;
            };
            if (i === index - 1) {
                newVal = this.createNode(value, nextVal.next)
                nextVal.next = newVal;
                return newVal.value;
            }
            else {
                return "Couldn't find the index: " + index;
            }
            
        }
        else {
            return "Please Enter a positive number";
        }
    };

    updateLinks(node) {
        let prevVal = node;
        if (prevVal.next != null) {
            let nextVal = prevVal.next;
            while(nextVal.next != null) {
                prevVal = prevVal.next;
                nextVal = prevVal.next;
            };
        }
    };

    replaceNode(nodeIni, nodeReplace) {
        if (nodeIni != null) {
            if ( nodeReplace != null) {
                nodeIni.value = nodeReplace.value;
                nodeIni.next = nodeReplace.next;
            }
            else {
                this.pop()
            }
        }
    }

    removeAt(index) {
        if (index === 0) {
            const value = this.head .value;
            this.replaceNode(this.head , this.head.next);
            this.updateLinks(this.head);
            return value;
        }
        else if (index > 0) {
            let nextVal = this.head;
            let i = 0;
            while(nextVal.next != null && i < index ) {
                nextVal = nextVal.next;
                i++;
            };
            if (i === index) {
                const value = nextVal.value;
                this.replaceNode(nextVal, nextVal.next);
                this.updateLinks(nextVal);
                return value;
            }
            else {
                return "Couldn't find the index: " + index;
            }
            
        }
        else {
            return "Please Enter a positive number";
        }
    }

    toString() {
        let nextVal = this.head;
        process.stdout.write("( " + nextVal.value + " )");
        while(nextVal.next != null) {
            nextVal = nextVal.next;
            process.stdout.write(" -> ( " + nextVal.value + " )");
        };
        process.stdout.write(" -> " + nextVal.next);
        process.stdout.write("\n");
    };
};
 
const lList = new LinkedList();
lList.prepend("A");
lList.append("B");
lList.toString();
lList.append("C");
lList.toString();
lList.prepend("A0");
lList.toString();
console.log(`Size Linked List: ${lList.size()}`);
console.log(`Head Linked List: ${lList.getHead().value}`);
console.log(`Tail Linked List: ${lList.getTail().value}`);
console.log(`At index 1 Linked List: ${lList.at(1).value}`);
console.log(`At index 2 Linked List: ${lList.at(2).value}`);
console.log(`Contains "C" Linked List: ${lList.contains("C")}`);
console.log(`Find "C" Linked List: ${lList.find("C")}`);
// console.log(`Pop Linked List: ${lList.pop()}`);
// lList.toString();
// console.log(`Contains "C" Linked List: ${lList.contains("C")}`);
// console.log(`Find "C" Linked List: ${lList.find("C")}`);
// console.log(`Find "A0" Linked List: ${lList.find("A0")}`);
// console.log(`Pop Linked List: ${lList.pop()}`);
// lList.toString();

console.log("\n");

console.log(`insertAt("D", 2)  Linked List: ${lList.insertAt("D", 2)}`);
lList.toString();
console.log(`removeAt(2)  Linked List: ${lList.removeAt(2)}`);
lList.toString();
console.log("\n");

console.log(`insertAt("E", 4)  Linked List: ${lList.insertAt("E", 4)}`);
lList.toString();
console.log(`removeAt(4)  Linked List: ${lList.removeAt(4)}`);
lList.toString();
console.log("\n");

console.log(`insertAt("F", 0)  Linked List: ${lList.insertAt("F", 0)}`);
lList.toString();
console.log(`removeAt(0)  Linked List: ${lList.removeAt(0)}`);
lList.toString();
console.log("\n");

console.log(`insertAt("G", 1)  Linked List: ${lList.insertAt("G", 1)}`);
lList.toString();
console.log(`removeAt(1)  Linked List: ${lList.removeAt(1)}`);
lList.toString();
console.log("\n");

console.log(`insertAt("H", 100)  Linked List: ${lList.insertAt("H", 100)}`);
lList.toString();
console.log(`removeAt(100)  Linked List: ${lList.removeAt(100)}`);
lList.toString();
console.log("\n");

console.log(`insertAt("I", -55)  Linked List: ${lList.insertAt("I", -55)}`);
lList.toString();
console.log(`removeAt(-55)  Linked List: ${lList.removeAt(-55)}`);
lList.toString();
console.log("\n");
