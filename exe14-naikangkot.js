function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []
  for (let i = 0; i < arrPenumpang.length; i++){
    var display = {}
    display.penumpang = arrPenumpang[i][0]
    display.naikDari = arrPenumpang[i][1]
    display.tujuan = arrPenumpang[i][2]
    for (let k = 0; k < rute.length; k++){
      if (arrPenumpang[i][1] == rute[k]){
        var naik = k+1
      }
      if (arrPenumpang[i][2] == rute[k]){
        var turun = k+1
      }
    }
    display.bayar = (turun - naik) * 2000
    result.push(display)
    display = {}
  }
  return result
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]