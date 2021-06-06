// TEMPLAT LITERAL / TEMPLATE STRING

// HTML Fragments
// const mhs = {
//   nama: "Muhammad Ramadhan",
//   age: 20,
//   nim: 4311901004,
//   email: "madanmr48@SpeechGrammarList.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>`;

// LOOPING
// const mhs = [
//   {
//     nama: "Muhammad Ramadhan",
//     nim: 4311901004,
//   },
//   {
//     nama: "Bunga Dwitamala",
//     nim: 332190142,
//   },
//   {
//     nama: "Doni Juniardi",
//     nim: 4311901012,
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (x) => `<ul>
// <li>${x.nama}</li>
// <li>${x.nim}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;

// 3. CONDITIONALS
// ternary

// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Insyana Sarasvati",
//   feat: "madan",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(Feat ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// 4. NESTED
// HTML Fragments bersarang

const mhs = {
  nama: "Muhammad Ramadhan",
  semester: 4,
  matkul: ["Animasi", "Perancangan Bergerak", "Pemrograman Game", "Olahraga"],
};

const cetakMatkul = (matkul) => {
  return `<ol>
  ${matkul.map((x) => `<li>${x}</li>`).join("")}
  </ol>`;
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester: ${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMatkul(mhs.matkul)}
</div>`;

document.body.innerHTML = el;
