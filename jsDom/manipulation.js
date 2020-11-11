// DOM

// DOM Manipulation
// DOM Element
// const button = document.querySelector('button')
// judul.classList.toggle('biru-muda')
// judul.classList.toggle('biru-muda')

/* Latihan
1. hapus attribut href pada link
2. tambahkan atribut target dan isi dengan _blank pada link
3. buat class kedua pada section B
4. rubah tulisan paragraf 1 menjadi belajar javascript
5. rubah warna section a menjadi biru dan warna tulisan putih
*/
document.querySelector('section#a a').removeAttribute('href')
document.querySelector('section#a a').setAttribute('target', '_blank')
document.querySelector('section#b').classList.toggle('kedua')
document.querySelectorAll('section#a p')[0].innerHTML = 'Belajar Javascript'
document.getElementById('a').style.backgroundColor = 'blue'
document.getElementById('a').style.color = 'White'