function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var result = 0
  var kali = []
  for (let i = 0; i <= angka; i++){
    if (angka % i == 0){
      kali.push(`${i}${angka/i}`)
    }
  }
  for (let i = 0; i < kali.length; i++){
    for (let j = 0; j < kali.length; j++){
      if (kali[i] > kali[j]){
        let temp2 = kali[i]
        kali[i] = kali[j]
        kali[j] = temp2
      }
    }
  }
  result = kali[0].length
  return result
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2