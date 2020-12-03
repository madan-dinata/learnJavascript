# learnJavascript
a repository to store my javascript learning files

## DOM
DOM (Document Object Model) adalah antar muka pemrograman berbasis objek yang mempresentasikan dokumen web. DOM di gunakan saat kita ingin menyeleksi dan memanipulasi halaman web kita. DOM akan membuat seluruh komponen dari halaman web kita dapat di akses dan di manipulasi dengan mempresentasikan halaman web kita dalam bentuk objek, saat itu la kita dapat menyeleksi dan memanipulasi halaman web.

Dalam DOM ada yang di sebut DOM tree, DOM tree adalah representasi struktur dari komponen halaman web.
Adapun beberapa hal yang perlu di ketahui di dalam DOM	
	
#### DOM Selection

-> cara menyeleksi komponen atau tag-tag dalam halaman web.
- getElementById() 		: menyeleksi berdasarkan id 					: mengembalikan satu element
- getElementsByTagName() 	: menyeleksi berdasarkan tag 					: mengembalikan banyak element / HTMLCollection
- getElementsByClassName() 	: menyeleksi berdasarkan class 				: mengembalikan banyak element / HTMLCollection
- querySelector()		: menyeleksi berdasarkan selector seperti css : mengembalikan satu element
- querySelectorAll()		: menyeleksi berdasarkan selector seperti css : mengembalikan banyak element / NODELIST.

	

	
	

#### DOM Manipulation

-> cara memanipulasi komponen atau tag yang sudah di seleksi.

Saya kategorikan menjadi dua. yaitu manipulasi element dan manipulasi NODE. manipulasi element menangkap element untuk mengubah isi nya atau mengubah warna nya maupun teks nya. Manipulasi Node untuk menambah element maupun menghilangkan sebuah element.

* **Manipulasi Element**
	- element.innerHTML 		: merubah isi dari sebuah tag 
	- element.style.property 	: merubah style/css dari sebuah tag
	- element.setAttribute()	: memanipulasi attribut pada tag html yang di seleksi
	- element.classList 		: memanipulasi class pada tag html
	- dsb..

* **Manipulasi Node**
	- parentNode.append()		: menambahkan element di akhir sebuah parent
	- parentNode.prepend()		: menambahkan element di awal sebuah parent
	- childNode.before()		: menambahkan element sebelum sebuah element child
	- childNode.after()			: menambahkan element setelah sebuah element child
	- childNode.remove()		: menghapus element child
	- childNode.replaceWith()	: menimpa element child dengan element baru
	- dsb..

#### DOM Events

-> mempresentasikan sebuah kejadian yang terjadi di dalam DOM