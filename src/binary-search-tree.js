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
      return this;
    }
    let treeLeaf = this.root();
    while(treeLeaf) {
      if (data === treeLeaf.data) {
        return;
      }
      if (data > treeLeaf.data) {
        if (!treeLeaf.right) {
          treeLeaf.right = node;
          break;
        }
        treeLeaf = treeLeaf.right;
      }
      if (data < treeLeaf.data) {
        if (!treeLeaf.left) {
          treeLeaf.left = node;
          break;
        }
        treeLeaf = treeLeaf.left;
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
    if (!this.root()) {
      return this.root();
    }

    let treeLeaf = this.root();

    while(treeLeaf) {
      if (treeLeaf.data === data) {
        return treeLeaf;
      }
      if (treeLeaf.right && treeLeaf.data < data) {
        treeLeaf = treeLeaf.right
      } else {
        treeLeaf = treeLeaf.left;
      }
    }
    return null;
  }

  remove(data) {
    if (!this.root()) {
      return this.root();
    }
  }

  min() {
    if (!this.root()) {
      return this.root()
    }
    let treeLeaf = this.root();
    while(treeLeaf.left) {
      treeLeaf = treeLeaf.left;
    }
    return treeLeaf.data;
  }

  max() {
    if (!this.root()) {
      return this.root()
    }
    let treeLeaf = this.root();
    while(treeLeaf.right) {
      treeLeaf = treeLeaf.right;
    }
    return treeLeaf.data;
  }
}

module.exports = {
  BinarySearchTree
};