function findFirstRepeated(gifts) { //v3 - 340 pts
  // Code here
  return gifts.find((gift,i) => gifts.indexOf(gift) != i)??-1;
}

// function findFirstRepeated(gifts) { //v2 - 260 pts
//   // Code here
//   const seen = new Set();
//   for(const gift of gifts){
//     if (seen.has(gift)) return gift;
//     seen.add(gift);
//   }
//   return -1;
// }

// function findFirstRepeated(gifts) { //v1 - 220 pts
//   // Code here
//   const uniqueGifts = []
//   for(let gift of gifts){
//     if (uniqueGifts.includes(gift)) return gift;
//     else uniqueGifts.push(gift);
//   }
//   return -1;
// }
