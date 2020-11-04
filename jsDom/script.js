/* DOM */

// DOM Selection
/*	// document.getElementById() -> element
	const judul = document.getElementById('judul')
	judul.style.backgroundColor = 'red'
	judul.innerHTML = 'Madan'
	//console.log(judul) //yang di kembalikan adalah satu sebuah element spesifik

	// document.getElementsByTagName() -> HTMLCollection
	const section = document.getElementsByTagName('section')
	for( let i = 0;i <= section.length; i++) {
		section[i].style.backgroundColor = 'blue'
		section[1].style.color = 'white'
		//console.log(section) //yang di kembalikan ada HTMLCollection. tidak bisa di manipulasi secara langsung karna banyak. agar bisa yaitu dengan menambahkan index setelah tagname nya agar lebih spesifik
	}

	// document.getElementsByClassName() -> HTMLCollection
	const p1 = document.getElementsByClassName('p1')[0] //bisa langsung di buat index [0] jika hanya 1 dokument saja
	p1.style.color = 'green'
	p1.innerHTML = "doni"
	//console.log(p1) //sama seperti getElementsByTagName() tidak bisa di manipulasi langsung, harus dengan menambahkan index agar lebih spesifik

	// document.querySelector() -> element
	//querySelector bisa mencari dokumen element seperti css. cocok di gunakan ketika element yang kita ingin manipulasi adalah element yang sangat spesifik yang di element tersebut tidak memiliki class, id, ataupun tag yang spesifik
	const li = document.querySelector('#b ul li:nth-child(2)') //kita ingin membuat element li bagian kedua agar memiliki bg warna merah, di karenakan li tidak memiliki class atau pun id, dan jika kita hanya menggunakan tagName li maka dia akan merubah tag li yang pertama kali dia jumpai menjadi bg merah, kita ingin yang di rubah adalah tag li yang kedua. (querySelector akan mengembalikan HANYA 1 element saja. kalau ada 3 element yang sama maka dia akan memilih yang pertama kali dia jumpai). jadi cara nya yaitu dengan menspesifikasikan nya seperti menggunakan selector di css
	li.style.backgroundColor = 'red'

	//document.querySelectoAll() -> nodeList
	// Sama seperti querySelector, perbedaan nya querySelector hanya bisa memanipulasi satu element saja sedangkan querySelectorAll dapat memanipulasi banyak(semua) element html spesifik. cara memanipulasi nya juga sama seperti getElementByClassName dan getElementByTagName yaitu harus menampilkan index setelah tag selector nya dulu agar bisa di manipulasi karna jika tidak maka error
	const li = document.querySelectorAll('li')
	for(let i=0;i<=li.length;i++) {
		li[i].style.backgroundColor = 'red'
	}
*/