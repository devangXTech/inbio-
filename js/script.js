const openMenu = document.getElementById('open-menu'),
		closeMenu = document.getElementById('close-menu');
const menu = document.querySelector('#header nav ul')

openMenu.addEventListener('click',()=>{
	menu.classList.add('active');
});

closeMenu.addEventListener('click',()=>{
	menu.classList.remove('active');
});

window.addEventListener('scroll',()=>{
	menu.classList.remove('active');
});	

const header = document.getElementById('header');

window.addEventListener('scroll',()=>{
	if(window.pageYOffset > 150){
		header.classList.add('active');
	}else{
		header.classList.remove('active');
	};
});

const imgContainer = document.querySelector('.portfolio #img-container'),
		closeImgContainer = document.querySelector('.portfolio #img-container #close-img-container'),
		boxs = document.querySelectorAll('.portfolio .box');

boxs.forEach(box=>{
	box.addEventListener('click',()=>{
		imgContainer.classList.add('active');
	});
});

closeImgContainer.addEventListener('click',()=>{
	imgContainer.classList.remove('active');
});

const filterBtn = document.querySelectorAll('.resume .filter-btn');
const filterContent = document.querySelectorAll('.resume .filter-content');

filterBtn.forEach(btn =>{
	let btnDataName = btn.getAttribute('data-name');

	btn.addEventListener('click',()=>{
		filterContent.forEach(content =>{
			let filterContentDataName =  content.getAttribute('data-name');
			if(btnDataName == filterContentDataName){
				content.style.display = "flex";
				content.style.animation = ".5s popUp linear"
			}else{
				content.style.display = "none";
			}
		});
		let active = document.querySelector('.resume .filter-btn.active');
		active.classList.remove('active')
		btn.classList.add('active')
	});
});

const clientFilterBtn = document.querySelectorAll('.client .filter-btn button');
const clientFilterBox = document.querySelectorAll('.client .box-2');

clientFilterBtn.forEach(btn =>{
	btn.addEventListener('click',()=>{
		let active =  document.querySelector('.client .filter-btn button.active');
		active.classList.remove('active');
		btn.classList.add('active');
	});
});

const pricingFilterBtn = document.querySelectorAll('.pricing .pricing-btn button');
const pricingBox = document.querySelectorAll('.pricing .pricing-box-body');

pricingFilterBtn.forEach(btn =>{
	btn.addEventListener('click',()=>{
		const active = document.querySelector('.pricing .pricing-btn button.active');
		active.classList.remove('active');
		btn.classList.add('active');

		const filter = btn.getAttribute('data-filter');

		pricingBox.forEach(box =>{
			if(box.classList.contains(filter)){
				box.classList.add('active');
				box.style.animation = "1s boxFade linear";
			}else{
				box.classList.remove('active');
			};
		});
	});
});

const scrollTop = document.getElementById('scroll-top');

scrollTop.addEventListener('click',()=>{
	window.scrollTo(0,0);
});

window.addEventListener('scroll',()=>{
	if(window.pageYOffset > 150){
		scrollTop.classList.add('active');
	}else{
		scrollTop.classList.remove('active');
	};
});

  // var typed = new Typed('#typed', {
  //   stringsElement: '#typed-strings'
  // });
var typed = new Typed('#typed', {
  strings: ['developer.','professional coder.'],
    typeSpeed: 100,
    startDelay: 200,
    backSpeed: 50,
    loop: true,
});