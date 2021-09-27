const Treeintersection=require('../treeintersection');
const Node = require("../node");
const BinaryTree = require("../binaryTree");
describe('Hashmap tree intersection',()=>{
  let tree1;
  let tree2;

  beforeAll(()=>{
      let one = new Node(1);
      let two = new Node(2);
      let three = new Node(3);
      let four = new Node(4);
      let five = new Node(5);
      let six = new Node(6);
      let seven = new Node(7);
      let eight = new Node(8);
      let nine = new Node(9);
      let ten=new Node(10);

      one.left=two;
      one.right=three;
      two.left=four;
      two.right=five;
      three.left=six;
      three.right=seven
      four.left=eight;
      four.right=nine;
      nine.left=ten;
      
      let one2 = new Node(1);
      let two2 = new Node(12);
      let three2 = new Node(13);
      let four2 = new Node(14);
      let five2 = new Node(15);
      let six2 = new Node(6);
      let seven2 = new Node(17);
      let eight2 = new Node(18);
      let nine2 = new Node(19);
      let ten2=new Node(10);
      
      one2.left=two2;
      one2.right=three2;
      two2.left=four2;
      two2.right=five2;
      three2.left=six2;
      three2.right=seven2
      four2.left=eight2;
      four2.right=nine2;
      nine2.left=ten2;

      tree1=new BinaryTree(one);
      tree2=new BinaryTree(one2);
      // console.log(tree1);
  });

it("Find common values in 2 binary trees.", () => {
    let hashTable = new Treeintersection(500);
    let output = [1,10,6];

    expect(hashTable.treeIntersection(tree1, tree2)).toEqual(
      output
    );
  });
    
  });