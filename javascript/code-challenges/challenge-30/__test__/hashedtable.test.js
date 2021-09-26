const { HashedTable,LinkedList, Node}=require('../hashedtable');


describe("HASH TABLE TESTS", () => {
    let hashTable;
    beforeAll(() => {
      hashTable = new HashedTable(50);
      hashTable.set("Name", "Ibrahim");
      hashTable.set("Major", "Developer");
    });
  
    //seting a key/value to  hashtable .
    it("set the key and value pair to the table.", () => {
      let hash1 = hashTable.hash("Name");
      let hash2 = hashTable.hash("Major");

      expect(hashTable.map[hash1].head.value).toEqual({ Name: "Ibrahim" });

      expect(hashTable.map[hash2].head.value).toEqual({Major: "Developer" });
      
      
    });
  
    //get value based on a key 
    it("Returns: Value associated with that key in the table", () => {
      expect(hashTable.get("Name")).toEqual("Ibrahim");
      expect(hashTable.get("Major")).toEqual("Developer");
     
    });
  

 
  
   //hash a key
    it("Returns: Index in the collection for that key", () => {
     
        expect(hashTable.hash("Name")).toBeLessThan(50);
    });
  
  //, indicating if the key exists in the table
    it(" Returns: Boolean,indicating if the key exists in the table already ", () => {
      expect(hashTable.contains("Name")).toBeTruthy();
      expect(hashTable.contains("Age")).toBe(false);
    });
  });