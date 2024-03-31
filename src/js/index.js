// === start aside menu
const burgerBtn = document.querySelector(".jsBurger");
const asideMenu = document.querySelector(".aside__menu");
const asideMenuClose = document.querySelector(".aside__menu-close");
const asideMenuList = document.querySelector(".aside__menu-list");
const overLay = document.getElementById("overlay");

if (burgerBtn && asideMenu) {
	// clicked burger btn & slide up the aside menu
	burgerBtn.addEventListener("click", (e) => {
		e.stopPropagation(); // this is necessary so that the menu opens isn't intercepted by another handler "with an asterisk in the comment"
		asideMenu.classList.add("open");
		overLay.classList.add("show");
	});

	// clicked close btn and aside menu slide out
	asideMenuClose.addEventListener("click", () => {
		asideMenu.classList.remove("open");
		overLay.classList.remove("show");
	});

	// when the document resizes the menu closes
	window.addEventListener("resize", () => {
		if (asideMenu.classList.contains("open")) {
			asideMenu.classList.remove("open");
			overLay.classList.remove("show");
		}
	});

	//* close the menu when clicking outside of it
	document.addEventListener("click", (e) => {
		const isList = e.composedPath().includes(asideMenuList);
		const isListOpened = asideMenu.classList.contains("open");

		if (!isList && isListOpened) {
			asideMenu.classList.remove("open");
			overLay.classList.remove("show");
		}
	});
}
// === end aside menu

// === start dropdown menu
if (document.querySelector(".drop")) {
	const dropItem = document.querySelectorAll(".drop");

	dropList(dropItem);

	function dropList(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.currentTarget.classList.toggle("show");
				let content = e.currentTarget.querySelector(".aside__submenu");
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					if (window.clientWidth < 1024) {
						content.style.maxHeight = content.scrollHeight + "px";
					} else {
						content.style.maxHeight = content.scrollHeight + 40 + "px";
					}
				}
			});
		});
	}

	window.addEventListener("resize", () => {
		dropItem.forEach((el) => {
			if (el.classList.contains("show")) {
				el.classList.remove("show");
				el.querySelector(".aside__submenu").style.maxHeight = null;
			}
		});
	});
}
// === end dropdown menu

// === start FORM SEARCH Header
if (document.querySelector(".jsSearchTop")) {
	const srchBtn = document.querySelector(".jsSearchTop");
	const srchTop = document.querySelector('.search-top');
	const srchForm = document.querySelector('.search-top__form');
	const srchClose = srchTop.querySelector('.search-top__close');

	srchBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		srchTop.classList.add("show");
	});

	document.addEventListener("keyup", (e) => {
		if (e.key === 'Escape') {
			srchTop.classList.remove('show');
			srchForm.reset();
		}
	});

	srchClose.addEventListener("click", (e) => {
		srchTop.classList.remove('show');
		srchForm.reset();
	});

	//* close the menu when clicking outside of it
	document.addEventListener("click", (e) => {
		const isList = e.composedPath().includes(srchTop);
		const isListOpened = srchTop.classList.contains("show");

		if (!isList && isListOpened) {
			srchTop.classList.remove("show");
			srchForm.reset();
		}
	});
}
// === end FORM SEARCH Header

// === start MAIN-HERO SLIDER
if (document.querySelector(".main-hero__swiper")) {
	const xSlider = new Swiper(".main-hero__swiper", {
		loop: true,
		slidesPerView: 1,

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

	});
}
// === end MAIN-HERO SLIDER
// === start newest-swiperSLIDER
if (document.querySelector(".newest-swiper")) {
	const ySlider = new Swiper(".newest-swiper", {
		slidesPerView: 2,
		spaceBetween: 10,
		navigation: {
			nextEl: ".newest-swiper__next",
			prevEl: ".newest-swiper__prev",
		},
		disabledClass: 'slide-disabled',
		breakpoints: {
			340: {
			  slidesPerView: 2.2,
			  spaceBetween: 10
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			1025: {
			  slidesPerView: 4,
			  spaceBetween: 20
			},
			1441: {
			  spaceBetween: 30,
			  slidesPerView: 4
			}
		 }
	});
}
// === end SLIDER

// === start READ MORE
if (document.querySelector(".jsReadMore")) {
	const readMoreBtns = document.querySelectorAll(".jsReadMore");

	readMoreBtns.forEach((rmBtn) => {
		rmBtn.addEventListener("click", (e) => {
			e.currentTarget.previousElementSibling.classList.toggle("full-height");
		});
	});
}
// === end READ MORE

// === start TOGGLE SCROLL
let disableScroll = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
	document.body.classList.add("no-scroll");
	document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
	document.body.classList.remove("no-scroll");
	document.body.style.paddingRight = 0;
};
// === end TOGGLE SCROLL

// === start MODAL CALLBACK
if (document.querySelector(".callback-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenModal");
	const modalWin = document.querySelector(".callback-bg");
	const closeWin = document.querySelector(".callback-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL CALLBACK

// === start TAB
if (document.querySelector(".drop-head")) {
	const acc = document.getElementsByClassName("drop-head");

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			if (!this.classList.contains("active")) {
				closeAccTabs();
				toggleAcc(this);
			} else {
				closeAccTabs();
			}
		});
	}

	function toggleAcc(e) {
		e.classList.toggle("active");
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	function closeAccTabs() {
		for (let i = 0; i < acc.length; i++) {
			if (acc[i].classList.contains("active")) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.removeAttribute("style");
			}
		}
	}

	// Open first accordion tab by default
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
		}
	}

	// When resizing - auto-height adjustment
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}
// === end TAB

// === start RELOCATE BY CLICK
if (document.querySelector("[data-postlink]")) {
	const allPosts = document.querySelectorAll("[data-postlink]");

	allPosts.forEach((post) => {
		post.addEventListener("click", (e) => {
			let link = e.currentTarget.dataset.postlink;
			location.href = link;
		});
	});
}
// === end RELOCATE BY CLICK

// === start ADD TO FAVORITE
const favBtns = document.querySelectorAll('.jsFav');
if (favBtns.length > 0) {
	favBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('on');
		});
	});
}
// === end ADD TO FAVORITE

// === start QUANTITY
const quant = document.querySelectorAll(".jsQ");

if (quant.length > 0) {
	quant.forEach((el) => {
		const minus = el.querySelector(".minus");
		const plus = el.querySelector(".plus");
		const min = +el.querySelector(".result").dataset.min;
		const res = el.querySelector(".result");

		minus.addEventListener("click", function () {
			res.value > min ? res.value-- : res.value = min;
		});

		plus.addEventListener("click", function () {
			res.value++;
		});
	});
}
// === end QUANTITY

// === start press button "В КОРЗИНУ"
const toCart = document.querySelectorAll(".jsToCart");
if (toCart.length > 0) {
	toCart.forEach((el) => {
		el.addEventListener('click', (e) => {
			try {
				e.currentTarget.nextElementSibling.classList.remove('none');
				e.currentTarget.classList.add('none');
			} catch {
				console.error('Next element in Product Card is missing!');
			}
		});
	});
}
// === end press button "В КОРЗИНУ"

// === start ROLL-LIST
if (document.getElementById("categoriesList")) {
	const box = document.getElementById("categoriesList");

	let isDown = false;
	let startX;
	let startY;
	let scrollLeft;
	let scrollTop;

	box.addEventListener("mousedown", (e) => {
		isDown = true;
		startX = e.pageX - box.offsetLeft;
		startY = e.pageY - box.offsetTop;
		scrollLeft = box.scrollLeft;
		scrollTop = box.scrollTop;
		box.style.cursor = "grabbing";
	});

	box.addEventListener("mouseleave", () => {
		isDown = false;
		box.style.cursor = "grab";
	});

	box.addEventListener("mouseup", () => {
		isDown = false;
		box.style.cursor = "grab";
	});

	document.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - box.offsetLeft;
		const y = e.pageY - box.offsetTop;
		const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
		const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
		box.scrollLeft = scrollLeft - walkX;
		box.scrollTop = scrollTop - walkY;
	});
}
// === end ROLL-LIST
