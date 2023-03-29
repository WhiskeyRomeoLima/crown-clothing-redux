// function addTo80(n) {
//   console.log('Some code that takes a long time')
//   return n+80
// }
// console.log(addTo80(10))


let cache = {}
function memoizedAddTo80(n){
 if (n in cache) {
  return cache[n]
 } else {
  console.log('Some code that takes a long time')
  return cache[n] =  n+80
 }
}

console.log('1', memoizedAddTo80(10))
console.log('2', memoizedAddTo80(10))