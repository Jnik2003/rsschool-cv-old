// mobile menu

function mobileMenu(){
	let menu = document.querySelector('.nav-mobile-wrapper');
	let items = document.querySelectorAll('.nav-menu-item');
	let btn = document.querySelector('.burger-btn');
	btn.addEventListener('click', fOpen);


	items.forEach((item) => {
		item.addEventListener('click', fClose);
	})

	function fOpen(){
		if(btn.classList.contains('open-menu')){
			btn.classList.remove('open-menu');
			fClose();
			return;
		}	
		menu.style.left = '0px';
		btn.style.backgroundImage = 'url(/img/icons/menu_close.svg)';
		btn.classList.add('open-menu');
	}
	function fClose(){
		
		menu.style.left = '-350px';
		btn.style.backgroundImage = 'url(/img/icons/menu_open.svg)';
	}
}

mobileMenu()