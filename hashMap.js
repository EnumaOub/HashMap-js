
class HashMap {
    constructor(capacity=16, loadFactor=0.75) {
        this.capacity = capacity;
        this.loadF = loadFactor;
        this.bucket = Array.from( new Array(this.capacity), function() { return []; } );
    };

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % (this.capacity - 1);
    };

    checkKey(index, key) {
        if (this.bucket.length > index) {
            let i = 0;
            for (const [keyV, valV] of this.bucket[index]) {
                if (keyV == key) {
                    return i;
                }
                i++; 
            }
            return null;
        }
        else {
            return null;
        }
    };

    rehash() {
        const oldBucket = this.bucket;
        this.capacity = this.capacity * 2;
        this.bucket = Array.from( new Array(this.capacity), function() { return []; } );
        for (const buckV of oldBucket) {
            for (const [keyV, valV] of buckV) {
                this.set(keyV, valV);
            }
        }
    }

    set(key, value) {
        const index = this.hash(key);
        if (this.bucket.length > index) {
            const keyIndex = this.checkKey(index, key);
            if (keyIndex !== null) {
                this.bucket[index][keyIndex][1] = value;
            }
            else {
                this.bucket[index].push([key, value]);
            }
            if (this.length() > this.loadF * this.capacity) {
                this.rehash();
            }
        }
    };

    get(key) {
        const index = this.hash(key);
        if (this.bucket.length > index) {
            const keyIndex = this.checkKey(index, key);
            if (keyIndex !== null ) {
                return this.bucket[index][keyIndex][1];
            }
            else {
                return null;
            }
        }
    };

    has(key) {
        const index = this.hash(key);
        if (this.bucket.length > index) {
            for (const [keyV, valV] of this.bucket[index]) {
                if (keyV == key) {
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    };

    remove(key) {
        const index = this.hash(key);
        if (this.bucket.length > index) {
            const keyIndex = this.checkKey(index, key);
            if (keyIndex !== null) {
                this.bucket[index].splice(keyIndex, 1);
                return true;
            }
            else {
                return false;
            }
        }
    };

    length() {
        let lengthBucket = 0;
        for (const buckV of this.bucket) {
            lengthBucket += buckV.length;
        }
        return lengthBucket;
    };

    clear() {
        this.bucket = Array.from( new Array(this.capacity), function() { return []; } );
    };

    keys() {
        let keyLst = [];
        for (const buckV of this.bucket) {
            if (buckV.length > 0) {
                for (const [keyV, valV] of buckV) {
                    keyLst.push(keyV)
                }
            }
        }
        return keyLst;
    };

    values() {
        let valLst = [];
        for (const buckV of this.bucket) {
            if (buckV.length > 0) {
                for (const [keyV, valV] of buckV) {
                    valLst.push(valV)
                }
            }
        }
        return valLst;
    };

    entries() {
        let entriesLst = [];
        for (const buckV of this.bucket) {
            if (buckV.length > 0) {
                for (const [keyV, valV] of buckV) {
                    entriesLst.push([keyV, valV])
                }
            }
        }
        return entriesLst;
    };
    
};
 
const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(`All Entries: ${JSON.stringify(test.entries(), null, "")}`);
console.log(`All Keys: ${JSON.stringify(test.keys(), null, "")}`);
console.log(`All Values: ${JSON.stringify(test.values(), null, "")}`);
console.log(`Length: ${test.length()}`);

test.set('lion', 'white')

console.log(`Modif 'lion' value with white Entries: ${JSON.stringify(test.entries(), null, "")}`);

console.log(`Show before add moon Buckets: ${JSON.stringify(test.bucket, null, "")}`);
test.set('moon', 'silver')
console.log(`Show after add moon Buckets: ${JSON.stringify(test.bucket, null, "")}`);
console.log(`Delete ice cream Length: ${test.length()}`);

test.remove('ice cream')
console.log(`Delete ice cream Entries: ${JSON.stringify(test.entries(), null, "")}`);
console.log(`Delete ice cream Length: ${test.length()}`);

console.log(`Get grape: ${test.get('grape')}`);
console.log(`Has grape: ${test.has('grape')}`);

console.log(`Get aaaa: ${test.get('aaaa')}`);
console.log(`Has aaaa: ${test.has('aaaa')}`);

test.clear()
console.log(`Clear Entries: ${JSON.stringify(test.entries(), null, "")}`);