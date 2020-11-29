// soal 1
var list = [[5,3,2,4,1,6], [1,2,2,3,4], [1,3,5,7,9], [1,3,5,7,9], [1,3,5,7,9], [1,3,5,7,2]]
var genap = []

for (let i = 0; i < list.length; i++){
    var temp = 0
    for (let j = 0; j < list.length; j++){ 
        if(list[i][j] % 2 == 0){
            temp = temp + list [i][j]
        }
    }
    genap.push(temp)
}

console.log("Jawaban 1 :", genap)
// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array


// soal 2
// munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA (munculin output mobilnya aja lebih bagus kalo buat pake function)
var bagus = {
  nama: "bagus", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var genta = {
  nama: "genta", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var dika = {
  nama: "dika", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

listOrang = [genta, bagus, dika]
var tempHarga = 0
var namaOrang
var namaMobil
let termahal = listOrang.filter((orang) => { 
  for (let i = 0; i < orang.kendaraan.length; i++){
    if (orang.kendaraan[i].price > tempHarga) {
      tempHarga = orang.kendaraan[i].price
      namaOrang = orang.nama
      namaMobil = `${orang.kendaraan[i].merk} ${orang.kendaraan[i].type}`
    }
  }
})
console.log('Jawaban 2: Mobil termahal adalah milik', namaOrang, 'dengan nama mobil', namaMobil)

// // soal 3
// // ambil nilai dari number1 yang tidak ada di number2
const number = {};
const number1 = [1,5,7,8,2,3,6,4,3]
const number2 = [9,2,1,6,4,2,5,7,1] 
const number3 = [] // [8,3,3]

const a = number1.a;
const b = number2.b;
const c = number3.c;
console.log(a, b);

for (let i = 0; i < number1.length; i++) {
  var checkSame = true
  for (let j = 0; j < number2.length; j++) {
    if (number1[i] != number2[j]) {
      checkSame = false
    } else {
      checkSame = true
      break
    }
  }
  if (checkSame == false) {
    number3.push(number1[i])
  }
}

console.log("Jawaban 3:", number3)

// // soal 4
bagus = {
  money: 1000000000,
  carPreference: {
    buildBy: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    type: ['SUV', 'Hatchback']
  },
  carport: [],
}

let showRoom = [
  {buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car'},
  {buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'honda city', type: 'Hatchback'}, // v
  {buildBy: 'jpn', brand: 'toyota', price: 305000000, model: 'honda city', type: 'sedan'},  
  {buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV'},
  {buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV'},
  {buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV'}, /// v
]

let mobilPilihan = showRoom.filter((mobil) => 
  mobil.buildBy === 'jpn' && mobil.price >= 200000000 && mobil.price <= 450000000 && mobil.type === 'SUV' || mobil.type === 'Hatchback'
)
bagus.carport = mobilPilihan.map((mobil) => mobil.model)
let total = mobilPilihan.reduce((total, mobil) => total + mobil.price, 0)
bagus.money = bagus.money - total
// console.log(mobilPilihan)
// console.log(total)
console.log("Jawaban 4:\n", bagus)

// // outputnya
// /*
// {
//   money: 350000000,
//   carPreference: {
//     type: 'jpn',
//     needed: 2,
//     rangePrice: {from: 200000000, to: 450000000},
//     mandatoryType: ['SUV', 'Hatchback']
//   },
//   carport: [
//     honda city,
//     HRV
//   ],
// }
// */

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Miss White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
]
let presentTrue = videoData.filter((tipe)=>tipe.present===true);

console.log(presentTrue.length);
// listvideoData = []
// var name
// var present
// var rooms
// let data = listvideoData.filter((orang) => { 
//   for (let i = 0; i < orang.present.length; i++){
//     if (orang.present[i] > name) {
//       name = orang.present[i]
//       nama1 = orang.nama
//       nama2 = `${orang.present[i].true} ${orang.present[i].false}`
//     }
//   }
// })

// console.log('Jawaban 2: Mobil termahal adalah milik', nama1, 'dengan nama mobil', nama2)