function cariModus(arr) {
  // you can only write your code here!
  var modus = arr[0]
  var counter = []
  for (let i = 0; i < arr.length; i++){
    var temp = 0
    for (let j = 0; j < arr.length; j++){
      if (arr[i] == arr[j]){
        temp++
      }
    }
    counter.push(temp)
    temp = 0
  }
  var current = counter[0]
  for (let i = 0; i < counter.length; i++){
    if (counter[i] > current){
      current = counter[i]
      modus = arr[i]
    }
  }
  if (current == 1){
    return -1
  } else if (current == arr.length){
    return -1
  } else {
    return modus
  }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1