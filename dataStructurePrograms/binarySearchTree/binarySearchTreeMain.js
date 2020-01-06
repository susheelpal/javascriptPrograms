
/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarySearchTreeMain.js
 *                      2. if nodemon installed cmd> nodemon binarySearchTreeMain.js
 *
 *  Purpose         : create a binary search tree.
 *
 *  @description    : number of binary search tree
 *  @file           : binarySearchTreeMain.js
 *  @overview       : create a binary search tree.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-01-2020
 ******************************************************************************/

 let bst=require('./binarySearchTreeBL')
let BST = new bst.BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 
                          
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  
  
let root = BST.getRootNode(); 
              
// prints 5 7 9 10 13 15 17 22 25 27 
BST.inorder(root); 
