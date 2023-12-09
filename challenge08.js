function organizeGifts(gifts) {//v1 210 pts
  // Code here
  const orgGifts = gifts
    .match(/\d+\w/g)
    .map(m =>{
    return {
      name: m.slice(-1),
      cant: parseInt(m.slice(0,-1))
    };
  })

  let result = '';

  for(const gift of orgGifts){
    result += `[${gift.name}]`.repeat(gift.cant/50)
    result += `{${gift.name}}`.repeat((gift.cant%50)/10)
    result += (gift.cant%50)%10 != 0?'('+gift.name.repeat((gift.cant%50)%10)+')':'';
  }
  return result;
}
