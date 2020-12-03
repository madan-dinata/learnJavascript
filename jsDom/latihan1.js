// Bermain Dengan Warna

// Ubah Warna
const ubahWarna = document.getElementById('tUbahWarna')
const body = document.querySelector('body')

ubahWarna.addEventListener('click', function () {
	body.classList.toggle('biru-muda')
})

// Acak Warna
const tAcakWarna = document.createElement('button')
const textButton = document.createTextNode('Acak Warna')
tAcakWarna.append(textButton)
tAcakWarna.setAttribute('type', 'button')

tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function () {
	const r = Math.round(Math.random() * 255 + 1)	
	const g = Math.round(Math.random() * 255 + 1)	
	const b = Math.round(Math.random() * 255 + 1)	
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

// Slide Warna

const merah = document.querySelector('input[name=merah]')
const hijau = document.querySelector('input[name=hijau]')
const biru = document.querySelector('input[name=biru]')

merah.addEventListener('input', function () {
	const r = merah.value
	const g = hijau.value
	const b = biru.value
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

hijau.addEventListener('input', function () {
	const r = merah.value
	const g = hijau.value
	const b = biru.value
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

biru.addEventListener('input', function () {
	const r = merah.value
	const g = hijau.value
	const b = biru.value
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})