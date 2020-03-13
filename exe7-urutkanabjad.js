function urutkanAbjad(str) {
  // you can only write your code here!
  var newString = []
  var result = ""
  for (let i = 0; i < str.length; i++){
    newString.push(str[i])
  }
  for (let i = 1; i < newString.length; i++){
    for (let j = 0; j < newString.length; j++){
      if (newString[i] < newString[j]){
        let temp = newString[i]
        newString[i] = newString[j]
        newString[j] = temp
      }
    }
  }
  for (let i = 0; i < newString.length; i++){
    result += newString[i]
  }
  return result
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'