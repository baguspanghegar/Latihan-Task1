let table = [
  ["Kode Absen", "Name", "No Hp", "Github"],
  ["RCTN043ONL004", "Andika Wijaya", "82316747626", "https://github.com/andikawij"],
  ["RCTN043ONL005", "Ken Grisya", "081223123428", "https://github.com/kengirisya"],
  ["RCTN043ONL002", "Bagus Panghegar", "082299304615", "https://github.com/baguspanghegar"],
  ["RCTN043ONL001", "M Genta Ari Shandi", "085155476774", "https://github.com/geardy47"],
  ["RCTN043ONL003", "Nadya Sylviani", "'081219101996", "https://gitlab.com/nadyaslvn"],
  ["RCTN043ONL006", "Mars Theolando", "81511239138", "https://github.com/Clareand"],
  ["RCTN043ONL007", "Hapri Mariga", "082113958883", ""],
  ["RCTN043ONL008", "Novia", "08980084400", ""],
]

let perkenalan = "Hallo Nama: "+table[4][1]+", Kode Absen: "+table[2][1]+", No Hp: "+table[3][2]+", Github: "+table[3][3]

console.log("Pakai plus: \n"+perkenalan)
console.log("\n")

const kenal = "Hallo Nama: "+table[4][1]+", Kode Absen: "+table[2][1]+", No Hp: "+table[3][2]+", Github: "+table[3][3]

console.log("Pakai BackTick: \n"+kenal)
/*
  Halo nama: Udin, kode absen: a123, no hp: 058123221, github link: www.github.com 
 */