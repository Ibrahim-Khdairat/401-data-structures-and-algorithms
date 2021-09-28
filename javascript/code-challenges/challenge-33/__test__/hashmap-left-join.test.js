const HashTable = require('../hashmap-left-join');


describe("HASH LEFT JOIN TESTS", () => {
    let hashTable1;
    let hashTable2;

    beforeAll(() => {
        hashTable1 = new HashTable(50);
        hashTable1.add("fond", "enamored");
        hashTable1.add("warth", "anger");
        hashTable1.add("diligent", "employed");
        hashTable1.add("outfit", "garb");
        hashTable1.add("guide", "usher");


        hashTable2 = new HashTable(50);
        hashTable2.add("fond", "averse");
        hashTable2.add("warth", "delight");
        hashTable2.add("diligent", "idle");
        hashTable2.add("guide", "follow");
        hashTable2.add("flow", "jam");

    });


    it("Return the left join between two hashmaps", () => {
        let expected = [
            ["warth", "anger", "delight"],
            ["diligent", "employed", "idle"],
            ["guide", "usher", "follow"],
            ["fond", "enamored", "averse"],
            ["outfit", "garb", "empty"],
        ];
        let hashTable = new HashTable(500);

        expect(hashTable.leftJoin(hashTable1, hashTable2)).toEqual(
            expected
        );
    });

});