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
		//console.log(section) //yang di kembalikan ada HTMLCollection. tidak bisa di manipulasi secara langsung karna banyak. agar bisa dengan menambahkan index setelah tagname nya agar lebih spesifik
	}

	// document.getElementsByClassName() -> HTMLCollection
	const p1 = document.getElementsByClassName('p1')[0] //bisa langsung di buat index [0] jika hanya 1 dokument saja
	p1.style.color = 'green'
	p1.innerHTML = "doni"
	//console.log(p1) //sama seperti getElementsByTagName() tidak bisa di manipulasi langsung, harus dengan menambahkan
					 // index agar lebih spesifik
*/
	// document.querySelector() -> element
	const h1 = document.querySelector('section')
	console.log(h1)