//  example input
//  A:5, B:9, C:12, D:13, E:16, F:45

// example output tree
//         (*,100)
//        /       \
//    (F,45)     (*,55)
//             /        \
//         (C,12)     (*,43)
//                   /      \
//               (B,9)     (*,34)
//                         /     \
//                    (A,5)    (D,13)(E,16)


class Node {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function huffmanCoding(freqs) {
    let nodes = Object.entries(freqs).map(([c, f]) => new Node(c, f))

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq)
        const left = nodes.shift()
        const right = nodes.shift()
        nodes.push(new Node(null, left.freq + right.freq, left, right))
    }

    const codes = {}
    function build(node, code = "") {
        if (!node.left && !node.right) codes[node.char] = code;
        if (node.left) build(node.left, code + "0")
        if (node.right) build(node.right, code + "1")
    }
    build(nodes[0])
    return codes
}

console.log(huffmanCoding({A:5, B:9, C:12, D:13, E:16, F:45}))