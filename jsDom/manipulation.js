// DOM

// DOM Manipulation
// DOM Manipulation Element

/* Latihan
1. hapus attribut href pada link
2. tambahkan atribut target dan isi dengan _blank pada link
3. buat class kedua pada section B
4. rubah tulisan paragraf 1 menjadi belajar javascript
5. rubah warna section a menjadi biru dan warna tulisan putih
6. menambahkan class b pada section b
7. merubah clas p3 menjadi paragraf 3
*/

document.querySelector('#container #a a').removeAttribute('href');
document.getElementsByTagName('a')[0].setAttribute('target', '_blank') // [0] merupakan index pertama dari beberapa element, jadi [0] artinya pilih item pertama dari beberapa items
document.querySelectorAll('#b')[0].classList.add('kedua')
document.querySelector('.p1').innerHTML = "Belajar javascript"
document.getElementById('a').style.backgroundColor = 'blue'; document.getElementById('a').style.color = 'white';
document.querySelector('section:nth-child(2)').classList.add('b') //nth:child(2) ini merupakan sudo class css yang artinya memilih item ke 2 dari element yang di pilih. index awal nya di mulai dari 1 bukan 0. jadi artinya pilih section yang kedua yang ada di dalam document halaman web
document.getElementsByClassName('p3')[0].setAttribute('class', 'paragraf3')

// DOM Manipulation Node
// - Membuat tag p dengan isi madan dan dalam section A
const p = document.createElement('p') // buat element p
const textP = document.createTextNode('Madan') // buat element textP berupa tulisan yang berisi madan
p.append(textP) // gabungkan element p dan textP

const sectionA = document.getElementById('a') // seleksi section id A
sectionA.append(p) // tambahkan element p di dalam dan di akhir element parent nya yaitu section id A

// - membuat li baru setelah item 1 di section B
const liBaru = document.createElement('li')
const textLi = document.createTextNode('Item Baru')
liBaru.append(textLi)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

li2.after(liBaru)

//  - menghapus link
const link = document.getElementsByTagName('a')[0]

link.remove()

// - mengganti paragraf 4 di section B
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const textH2 = document.createTextNode('Judul Baru!')

h2Baru.append(textH2)

p4.replaceWith(h2Baru)

// bukti hasil manipulasi node
p.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'



