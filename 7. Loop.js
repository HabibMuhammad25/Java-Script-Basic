for (let i = 0; i < 5; i++) {
      console.log(i);
}

/* output
0
1
2
3
4
*/


console.log("_____________________________")
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for (const arrayItem of myArray) {
      console.log(arrayItem)
}
/* output
Luke
Han
Chewbacca
Leia
*/



console.log("_____________________________")
let i = 1;

while (i <= 20) {
      console.log(i);
      i++;
}


console.log("_____________________________")
let j = 1;

do {
      console.log(j);
      j++;
} while (j <= 25);