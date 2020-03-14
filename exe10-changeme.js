function changeMe(arr) {
  // you can only write your code here!
  if (arr == false){
    console.log(`""`)
  }
  var result = []
  for (let i = 0; i < arr.length; i++){
    var temp = {}
    temp.firstName = arr[i][0]
    temp.lastName = arr[i][1]
    temp.gender = arr[i][2]
    if (arr[i][3] !== undefined){
      temp.age = arr[i][3]
    } else {
      temp.age = "Invalid Birth Year"
    }
    result.push(temp)
    temp = {}
    console.log(i+1 + ". " + arr[i][0] + " " + arr[i][1] + ":")
    console.log(result[i])
  }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""