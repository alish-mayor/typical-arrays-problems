
exports.min = function min (array) {
  if (array === undefined || array.length < 2 || array.length === 0 || array === undefined){
    return 0
  }
  let minim = array[0]
  for(let i = 0; i<array.length; i++){
    if(array[i] < minim){
      minim = array[i]
    }
  }
  return minim;
}

exports.max = function max (array) {
  if (array === undefined || array.length < 2 || array.length === 0 || array === undefined){
    return 0
  }
  let maxim = array[0]
  for(let i = 0; i<array.length; i++){
    if(array[i] > maxim){
      maxim = array[i]
    }
  }
  return maxim;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length < 2 || array.length === 0 || array === undefined){
    return 0
  }
  let summ = 0
  for(let i = 0; i<array.length; i++){
    summ += array[i]
  }
  return summ/array.length;
}



