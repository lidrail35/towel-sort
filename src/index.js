
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
 return (matrix.length===0) ? [] : ((matrix.map((i, x) => (x%2) ? i.reverse() : i)).join()).split(',').map(x=>+x);
}

