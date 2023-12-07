function decode(message) { //280 pts
  // Code here
  const stack = [];
  for(const m of message){
    if(m != ')') stack.push(m);
    else{
      const rev = stack.slice(stack.lastIndexOf('(')+1)
      rev.reverse()
      stack.splice(stack.lastIndexOf('('))
      stack.push(...rev)
    }
  }
  return stack.join('');
}
