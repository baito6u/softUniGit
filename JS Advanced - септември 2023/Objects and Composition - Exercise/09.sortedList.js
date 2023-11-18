function createSortedList() {

    let instance = {
        numbersLists: [],
        size: 0,

        add: function (element) {
            this.numbersLists.push(element);
            this.numbersLists.sort(this.comparor);
            this.size += 1;

            return instance;
        },
        remove: function (index) {
            this.validate(index);
            this.numbersLists.splice(index, 1);
            this.size -= 1;

            return instance;
        },
        get: function (index) {
            this.validate(index);

            return this.numbersLists[index];
        },
        // Helper methods
        validate: function (index) {
            if (index < 0 || index >= this.numbersLists.length) {
                throw new Error('Index is out if bounds');
            }
        },
        comparor: function (a, b) {
            return a - b;
        }
    };

    return instance;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));