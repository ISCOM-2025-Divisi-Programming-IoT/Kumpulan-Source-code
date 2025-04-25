// array vs obj
// const array = [1, 2, 3, 4, 5, 6];

// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i] + " index ke -  " + i);
// }

// console.log(array);

// const obj = {
//     nama: "strux",
//     npm:2308201012830,
//     paralel:"E",
//     umur:99
// };

// console.log(obj);
// console.log(obj.npm);

// operator ternary
// let umur =  "18"
// let dewasa = 18
// let dewasa = umur >= 18 ? "dewasa" : "bocil";

// stict equality
// = ngecek value aja
// === ngecek sampai tipe data
// if (umur = dewasa) {
//     console.log("benar");
// }else{
//     console.log("salah");
// }

// console.log(dewasa);

// function
// function halo() {
// //   console.log(halo());
//   return "hello world";
// }

// console.log(halo());

// function a() {}

// function luasPersegiPanjang(panjang, lebar) {
//   let luas = 0;
//   let p = panjang;
//   let l = lebar;
//   luas = p * l;
//   console.log("didalam function");

//   console.log(halo());
//   console.log(p);
//   console.log(l);

//   return luas;
// }

// console.log("luas: "+luasPersegiPanjang(10, 5));

// // array
// const jurusanFik = ["infor", "sifo", "sada", "bisdi"];

// // push
// // jurusanFik.push("cybersecurity");

// jurusanFik[0] = "cybersecurity";
// console.log(jurusanFik);

// console.log(mahasiswa[2].npm);
// console.log(mahasiswa[3].age);

// ("use strict");
// // Object.freeze(jurusanFik);

// jurusanFik[3] = "sifo";
// console.log(jurusanFik);

// jurusanFik.push("cybersecurity");
// jurusanFik.push("web3");

// pop
// jurusanFik.pop();

// unshift
// jurusanFik.unshift("sifo");
// console.log(jurusanFik);

// shift
// jurusanFik.shift();
// console.log(jurusanFik);

// foreach
// mahasiswa.forEach((mhs) => {
//     console.log(mhs.nama);
//     console.log(mhs.age);

// });

// for

// map
// mahasiswa.map((mhs) => {
//   // console.log(mhs);
//   mhs.npm = "230" + mhs.npm;
//   return mhs;
// });

// deepcopy / struktur clone
// const arr = [
//   { nama: "udin", umur: "gaada yang tau" },
//   { nama: "budi", umur: "gaada yang tau" },
// ];

// const mahasiswa = [
//   {
//     nama: "strux",
//     npm: "92309",
//     age: 99,
//   },
//   {
//     nama: "haped",
//     npm: "92323",
//     age: 992,
//   },
//   { nama: "abyan", npm: "9203", age: 19 },
//   {
//     nama: "devan",
//     npm: "92309",
//     age: 23,
//   },
// ];

// const mahasiswaFormat = mahasiswa.map((mhs) => {
//   return {
//     ...mhs,
//     npm: "230" + mhs.npm,
//   };
// });

// const mahasiswaFormat2 = mahasiswa.map((mhs) => ({
//   npm: "230" + mhs.npm
// }));

// console.log(mahasiswa);
// console.log(mahasiswaFormat);
// console.log(mahasiswaFormat2);

// mahasiswaFormat = mahasiswa.map((mhs) => {
//   //   console.log("sebelum berubah " + mhs.npm);
//   mhs.npm = "230" + mhs.npm;
//   //   console.log("setelah berubah " + mhs.npm);
//   return mhs
// });
// console.log("aseli " + JSON.stringify(mahasiswa));
// console.log("modifikasi " + JSON.stringify(mahasiswaFormat));

const jurusanFik = [
  "infor",
  "sifo",
  "sada",
  "bisdi",
  "abc",
  "def",
  "ghi",
  "jkl",
];
//                      0       1       2       3       4     5     6      7

// slice
// const bekasFTI = jurusanFik.slice(1, 6);
// console.log(bekasFTI);

// splice
// const testing = jurusanFik.splice(1, 3);
// jurusanFik.splice(3,2);
// console.log(jurusanFik);

// includes
// let cek = jurusanFik.includes("abd")
// console.log(cek);

// indexof
// console.log(jurusanFik.indexOf("abc"));

// find
let array = [1, 2, 3, 4];
let cek = array.find((item) => {
  return item > 5;
});
console.log(cek);
// findindex

// let cek = jurusanFik.findIndex((j) => {
//   return j === "sifo";
// });
// console.log(cek);

// ngecek array
// for (let j = 0; j < jurusanFik.length; j++) {
//     let jurusan = jurusanFik[j];
//     console.log(jurusan);
// }
