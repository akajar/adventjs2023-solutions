function findNaughtyStep(original, modified) { //260 pts
  // Code here
  if(original == modified) return '';
  const larger = original.length > modified.length? original: modified;
  for(const index in larger){
    if(original[index] != modified[index]) return larger[index];
  }
}
