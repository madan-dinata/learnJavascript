// 1. Object Literal
// Problem : tidak efektif untuk membuat object yang banyak
// let mahasiswa = {
//     nama: "Muhammad Ramadhan",
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat Makan ${this.nama}`)
//     }
// }

// 2. Function Declaration
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy += porsi
//         console.log(`Halo ${this.nama}, Selamat makan`)
//     },
    
//     main: function(jam) {
//         this.energy -= jam
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     },

//     tidur: function(jam) {
//         this.energy += jam * 2
//         console.log(`Halo ${this.nama}, Selamat tidur`)
//     }
// }

// const Mahasiswa = (nama, energy) => {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa
// }

// let madan = Mahasiswa('madan', 20)

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Hello ${this.nama}, Selamat Makan`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     return `Hello ${this.nama}, Selamat Main`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return `Hello ${this.nama}, Selamat Tidur`
// }

// let madan = new Mahasiswa('madan', 10)

// Versi Class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Hello ${this.nama}, Selamat Makan`;
    }
    
    main(jam) {
        this.energi -= jam;
        return `Hello ${this.nama}, Selamat Main`;
    }
    
    tidur(jam) {
        this.energi += jam * 2;
        return `Hello ${this.nama}, Selamat Tidur`
    }
}

let madan = new Mahasiswa('madan', 10)



// 3. Constructur
// keyword new
// function mahasiswa(nama, energy) {
//     this.nama = nama
//     this.energy = energy

//     this.makan = function(porsi) {
//         this.energy += porsi
//         console.log(`Halo ${this.nama}, Selamat makan`)
//     }

//     this.main = function(jam) {
//         this.energy -= jam
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     }
// }

// let madan = new mahasiswa('madan', 20)