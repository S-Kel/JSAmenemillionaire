let tree;
const setUp = function() {
    tree = new Tree();

    for (let i = 0; i < 10; i++) {
        tree.addValue(Math.floor(Math.random() * 100));
    }
    console.log(tree);
    tree.traverse();

    let result = tree.search(10);
    if (result == null) {
        console.log("Not found");

    } else {
        console.log(result);
    }


}