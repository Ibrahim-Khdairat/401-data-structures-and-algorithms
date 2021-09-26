const repeatedWord=require('../repeatedword');


describe("HASH TABLE TESTS", () => {
    let hashTable;
    beforeAll(() => {
      hashTable = new repeatedWord(50);
      hashTable.add("name", "Mariam");
      hashTable.add("age", "23");
    });
  
    //Adding a key/value to  hashtable .
    it("add the key and value pair to the table.", () => {
      let hash1 = hashTable.hash("name");
      let hash2 = hashTable.hash("age");

      expect(hashTable.map[hash1].head.value).toEqual({ name: "Mariam" });

      expect(hashTable.map[hash2].head.value).toEqual({age: "23" });
      
      
    });
  
    //get value based on a key 
    it("Returns: Value associated with that key in the table", () => {
      expect(hashTable.get("name")).toEqual("Mariam");
      expect(hashTable.get("age")).toEqual("23");
     
    });
  

 
  
   //hash a key
    it("Returns: Index in the collection for that key", () => {
     
        expect(hashTable.hash("name")).toBeLessThan(50);
    });
  
  //, indicating if the key exists in the table
    it(" Returns: Boolean,indicating if the key exists in the table already ", () => {
      expect(hashTable.contains("name")).toBeTruthy();
      expect(hashTable.contains("cat")).toBe(false);
    });

    
    it(" Finds the first word to occur more than once in a string ", () => {
      // let hashTable = new repeatedWord(5000);
      let str='Once upon a time, there was a brave princess who...';

      let str2="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
      expect(hashTable.repeatedWord(str)).toEqual('a');
      expect(hashTable.repeatedWord(str2)).toEqual('it');
    });

    
  });