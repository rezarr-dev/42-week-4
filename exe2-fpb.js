function fpb(angka1, angka2) {
  // you can only write your code here!
  var result = 0
  var bigger = 0
  if (angka1 > angka2){
    bigger = angka1
  } else {
    bigger = angka2
  }
  for (let i = 1; i <= bigger; i++){
    if (angka1 % i == 0 && angka2 % i == 0){
      result = i
    }
  }
  return result
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1