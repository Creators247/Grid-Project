export default function range (start ,end ,stop=1) {
  let output = []
  if(typeof end === 'undefined'){
    end = start
    start = 0
  }
  for(let i = start; i < end ; i += stop ){
    output.push(i);
  }
  return output
}

