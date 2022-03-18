const strings = ['a', 'b', 'c', 'd']

//4*4 = 16 bytesof storage

//push
strings.push('e'); // O(1)

//pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift('x') // O(n)

//splice
strings.splice(2,0, 'alien') //O(n) or O(n/2)

console.log(strings)