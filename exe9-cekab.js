function checkAB(num) {
  // you can only write your code here!
  var a = []
  var b = []
  for (let i = 0; i < num.length; i++){
    if (num[i] == "a"){
      a.push(i)
    }
    if (num[i] == "b"){
      b.push(i)
    }
  }
  var result = false
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
      if (a[i] - b[j] == 4 || a[i] - b[j] == -4){
        result = true
      }
    }
  }
  return result  
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false