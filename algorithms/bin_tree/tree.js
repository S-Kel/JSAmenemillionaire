function Tree() {
    this.root = null;
}
// PROTOTYPES
Tree.prototype.traverse = function() {
    if (this.root != null)
        this.root.visit();
}
Tree.prototype.search = function(val) {
    return this.root.search(val);
}
Tree.prototype.addValue = function(val) {
    let node = new Node(val);
    if (this.root == null) this.root = node;
    else this.root.addNode(node);
}