function organizeGifts(gifts) {//v2 250 pts
  // Code here
  const orgGifts = gifts
    .match(/\d+\w/g)
    .map(m => [m.slice(-1), m.slice(0,-1)*1]);

  let result = '';

  for(const gift of orgGifts){
    const [name,cant] = [gift[0],gift[1]]
    if(cant >= 50) result += `[${name}]`.repeat(cant/50)
    if(cant >= 10) result += `{${name}}`.repeat((cant%50)/10)
    if(cant%50%10 > 0) result += '('+name.repeat(cant%50%10)+')'
  }
  return result;
}
// function organizeGifts(gifts) {//v1 210 pts
//   // Code here
//   const orgGifts = gifts
//     .match(/\d+\w/g)
//     .map(m =>{
//     return {
//       name: m.slice(-1),
//       cant: parseInt(m.slice(0,-1))
//     };
//   })

//   let result = '';

//   for(const gift of orgGifts){
//     result += `[${gift.name}]`.repeat(gift.cant/50)
//     result += `{${gift.name}}`.repeat((gift.cant%50)/10)
//     result += (gift.cant%50)%10 != 0?'('+gift.name.repeat((gift.cant%50)%10)+')':'';
//   }
//   return result;
// }
