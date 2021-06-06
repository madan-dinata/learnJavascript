// // const repeat = (n, action) => {
// //   for (let i = 0; i < n; i++) {
// //     action(i);
// //   }
// // };

// // repeat(2, alert);

// // const kumpulan = [-3, -2, -1, 0, 1, 2, "madan", "bunga", true, false, 10, 11];

// // const str = kumpulan
// //   .filter((x) => x.toFixed)
// //   .filter((x) => x >= 3)
// //   .map((x) => x + 5)
// //   .reduce((x, a) => x + a, 0);

// // console.info(str);

// // Ambil elemen video

// const videos = Array.from(document.querySelectorAll("[data-duration]"));
// const jumlahVideo = document.querySelector(".jumlah-video");
// const totalDurasi = document.querySelector(".total-durasi");

// // pilih hanya yang jsLanjutan
// const jsLanjutan = videos
//   .filter((x) => x.textContent.includes("JAVASCRIPT LANJUTAN"))

//   // ambil durasi masing2 video
//   .map((x) => x.dataset.duration)

//   // ubah durasi menjadi integer, ubah menit menjadi detik
//   .map((waktu) => {
//     const parts = waktu.split(":").map((part) => parseFloat(part));

//     return parts[0] * 60 + parts[1];
//   })

//   // jumlahkan semua detik nya
//   .reduce((x, y) => x + y, 0);

// // ubah format nya jadi jam-menit-detik
// const jam = Math.floor(jsLanjutan / 3600);
// const sisaJSlanjut = jsLanjutan - jam * 3600;
// const menit = Math.floor(sisaJSlanjut / 60);
// const detik = sisaJSlanjut - menit * 60;
// // simpan di dom

// totalDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

// const jumlah = videos.filter((x) => x.textContent.includes("JAVASCRIPT LANJUTAN")).length;

// jumlahVideo.textContent = `${jumlah} Video`;

// console.log(jumlah);

// const double = (x) => x * 2;
// const triple = (x) => x * 3;
// const quadrople = (x) => x * 4;

// console.log(double(2));
// console.log(triple(2));
// console.log(quadrople(2));

const multiplier = (multiplier) => {
  return (x) => {
    return x * multiplier;
  };
};

let double = multiplier(2);
let triple = multiplier(3);
let quadrople = multiplier(4);

console.log(triple(9));
