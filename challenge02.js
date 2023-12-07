function manufacture(gifts, materials) { // v1 - 270 pts
  // Code here
  return gifts.filter(gift => gift.split('').every(i => materials.includes(i)));
}
