const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  treeRoot = null;

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
    if (!this.root()) {
      this.treeRoot = node;
      return;
    }
    let treeBranch = this.root();
    while(treeBranch) {
      if (data === treeBranch.data) {
        return;
      }
      if (data > treeBranch.data) {
        if (!treeBranch.right) {
          treeBranch.right = node;
          break;
        }
        treeBranch = treeBranch.right;
      }
      if (data < treeBranch.data) {
        if (!treeBranch.left) {
          treeBranch.left = node;
          break;
        }
        treeBranch = treeBranch.left;
      }
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  find(data) {
    let treeBranch = this.root();
    while(treeBranch) {
      if (treeBranch.data === data) {
        return treeBranch;
      }
      if (treeBranch.right && data > treeBranch.data) {
        treeBranch = treeBranch.right;
      } else {
        treeBranch = treeBranch.left;
      }
    }
    return null;
  }

  remove(data) {    
    this.treeRoot = this.removeLeaf(this.root(), data);
  }
  
  removeLeaf(treeBranch, data) {       
    if (data < treeBranch.data) {
      treeBranch.left = this.removeLeaf(treeBranch.left, data);
      return treeBranch;
    } 
    else if (data > treeBranch.data) {
      treeBranch.right = this.removeLeaf(treeBranch.right, data);
      return treeBranch;
    }     
    else {        
      if (treeBranch.left && treeBranch.right) {
        const minRightLeaf = this.searchMinLeaf(treeBranch.right);
        treeBranch.data = minRightLeaf.data; 
        treeBranch.right = this.removeLeaf(treeBranch.right, minRightLeaf.data);
        return treeBranch;
      } 
      if (treeBranch.left === null) {
        treeBranch = treeBranch.right;
        return treeBranch;
      }         
      else if (treeBranch.right === null) {
        treeBranch = treeBranch.left;
        return treeBranch;
      }  
      treeBranch = null;
      return treeBranch;
    } 
  }

  searchMinLeaf(treeBranch) {
    if (treeBranch.left === null){
      return treeBranch;
    }
    else {
      return this.searchMinLeaf(treeBranch.left);
    }
  }

  min() {
    if (!this.root()) {
      return this.root()
    }
    let treeBranch = this.root();
    while(treeBranch.left) {
      treeBranch = treeBranch.left;
    }
    return treeBranch.data;
  }

  max() {
    if (!this.root()) {
      return this.root()
    }
    let treeBranch = this.root();
    while(treeBranch.right) {
      treeBranch = treeBranch.right;
    }
    return treeBranch.data;
  } 
}

module.exports = {
  BinarySearchTree
};