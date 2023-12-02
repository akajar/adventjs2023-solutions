function findFirstRepeated(gifts) { //v1 - 220 pts
  // Code here
  const uniqueGifts = []
  for(let gift of gifts){
    if (uniqueGifts.includes(gift)) return gift;
    else uniqueGifts.push(gift);
  }
  return -1;
}
