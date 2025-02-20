const wrapper = document.querySelector('.wrapper');
const opsi = document.querySelector('.opsi');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const box_yes = document.querySelector('.box-yes');
const box_no = document.querySelector('.box-no');
const opsi1 = document.querySelector('.opsi1');
const opsi2 = document.querySelector('.opsi2');

opsi.addEventListener('click', ()=> {
	wrapper.classList.add('active-popup', 'active2');
});

opsi1.addEventListener('click', ()=> {
	wrapper.classList.add('active'); wrapper.classList.remove('active2');
});

opsi2.addEventListener('click', ()=> {
	wrapper.classList.remove('active'); wrapper.classList.add('active2');
});
