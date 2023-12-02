function manufacture(gifts, materials) { // v1 - 270 pts
  // Code here
  return gifts.filter(gift => {
    for(let t of gift.split('')){
      if(!materials.includes(t)) return false;
    }
    return true;
  });
}
