function findFirstRepeated(gifts) {
  // Code here
  const uniqueGifts = []

  for(let gift of gifts){
    if (uniqueGifts.includes(gift)) return gift;
    else uniqueGifts.push(gift);
  }

  return -1;
}
