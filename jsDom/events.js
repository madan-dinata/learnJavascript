// const p3 = document.querySelector('.p3')

// function ubahWarnaP2() {
// 	p2.style.backgroundColor = 'lightgreen'
// }

// function ubahWarnaP3() {
// 	p3.style.backgroundColor = 'lightgreen'
// }

// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarnaP2


// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function() {
// 	const ul = document.querySelector('section#b ul')
// 	const liBaru = document.createElement('li')
// 	const textLiBaru =  document.createTextNode('Item Baru')
// 	liBaru.append(textLiBaru)
// 	ul.append(liBaru)
// })

const p3 = document.querySelector('.p3')

p3.addEventListener('dblclick', function() {
	p3.style.backgroundColor = 'lightgreen';
})

p3.addEventListener('mouseleave', function(e) {
	p3.style.backgroundColor = 'aqua';
})

const card = document.querySelector('aside')
card.addEventListener('click', function() {
	card.classList.toggle('large')
})