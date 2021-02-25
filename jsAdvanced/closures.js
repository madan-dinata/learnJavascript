// Closure merupakan kombinasi antara function dan lingkungan lexical di dalam fuction tersebut.
// Closure adalah function yang mengakses / menggunakan variabel dari function parent nya

// function coba() {
//     let age = 20
//     return function(name) { 
//         console.dir(`Halo, nama saya ${name}, umur ${age} tahun`)
//         //ini adalah closure karna menggambil variabel age di atas parent scope nya, yaitu di function coba()
//     }
// }

// let panggil = coba()
// panggil("madan", 20)



// function salam(time) {
//     return function(name) {
//         console.log(`Halo ${name}, Selamat ${time}`)
//         // Ini adalah closure karna menggunakan variabel time dari  function salam()
//     }
// }

// let selamatPagi = salam("Pagi")
// let selamatSiang = salam("Siang")
// let selamatMalam = salam("Malam")

// selamatPagi("Madan")


// Bisa seperti ini agar lebih simple

// const add = (() => {
//     let counter = 0
//     return () => ++counter
// })()

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())


function Mahasiswa(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    }
    
let madan = new Mahasiswa("madan", 20)

