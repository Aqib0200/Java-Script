const marvelHeros = ["Thor", "Ironman", "Captain", "Hulk"]
const dcHeros = ["Shaktiman", "Jin", "Alladin"]
// marvelHeros.push(dcHeros);
// console.log(marvelHeros[4][2]);

// const heros = marvelHeros.concat(dcHeros)
// console.log(heros);
// const allHeros = [...marvelHeros,...dcHeros]
// console.log(allHeros);

const allArr = [1, 2, 3, [4, 5],6, 7,[8]]
const myAllArr = allArr.flat(Infinity)
console.log(myAllArr);

console.log(Array.isArray("Aqib"))
console.log(Array.from("Aqib"))
console.log(Array.isArray("Aqib"))
