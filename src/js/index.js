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

// === start aside dropdown menu
if (document.querySelector(".drop")) {
	const dropItem = document.querySelectorAll(".drop");

	dropList(dropItem, '.aside__submenu');

	function dropList(els, sub) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.currentTarget.classList.toggle("show");
				let content = e.currentTarget.querySelector(sub);
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
// === end aside dropdown menu

// === start footer drop-mobile
if (document.querySelector(".drop-mobile")) {
	if (window.innerWidth <= 1024) {

		const dropItem = document.querySelectorAll(".drop-mobile");

		dropList(dropItem, '.drop-mobile__submenu');

		function dropList(els, sub) {
			els.forEach((el) => {
				el.addEventListener("click", (e) => {
					e.currentTarget.classList.toggle("show");
					let content = e.currentTarget.querySelector(sub);
					if (content.style.maxHeight) {
						content.style.maxHeight = null;
					} else {
						if (window.clientWidth < 1024) {
							content.style.maxHeight = content.scrollHeight + "px";
						} else {
							content.style.maxHeight = content.scrollHeight + "px";
						}
					}
				});
			});
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth <= 1024) {
				dropItem.forEach((el) => {
					if (el.classList.contains("show")) {
						el.classList.remove("show");
						el.querySelector(".drop-mobile__submenu").style.maxHeight = null;
					}
				});
			}
		});
	}
}
// === end footer drop-mobile

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

// === start GRID GALLERIES SLIDER
if (document.querySelector(".pg-grid__gall")) {
	const prodSliderMain = new Swiper(".pg-grid__gall", {
		slidesPerView: 3,
		spaceBetween: 20,
		freeMode: true,
		breakpoints: {
			1441: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
		},
	});
	const prodSlider = new Swiper(".pg-grid__gal", {
		spaceBetween: 10,
		thumbs: {
			swiper: prodSliderMain,
		}
	});
	
}
// === end GRID GALLERIES SLIDER
// === start NEWEST-SWIPER SLIDER
if (document.querySelector(".n-slider")) {
	const ySlider = new Swiper(".n-slider", {
		slidesPerView: 2,
		spaceBetween: 10,
		navigation: {
			nextEl: ".n-btn-next",
			prevEl: ".n-btn-prev",
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
// === end NEWEST-SWIPER SLIDER
// === start POST SLIDER A
if (document.querySelector(".rubrik__slider")) {
	const allPostSliders = document.querySelectorAll(".rubrik__slider");
	allPostSliders.forEach((slider) => {
		const postSlider = new Swiper(slider, {
			slidesPerView: "auto",
			slidesPerView: 1,
			spaceBetween: 20,
			freemode: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				361: {
					slidesPerView: 1.2,
					spaceBetween: 10
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 20
				},
				1025: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1200: {
					slidesPerView: 3.5,
					spaceBetween: 20
				},
				1441: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			}
		});
	});
}
// === end POST-SWIPER SLIDER

// === start CAT-SLIDER
if (document.querySelector(".cat-slider")) {
	const slidersSame = document.querySelectorAll(".cat-slider");
	slidersSame.forEach((el) => {
		let slidersSameItem = new Swiper(el, {
			spaceBetween: 10,
			slidesPerView: 2,
			navigation: {
				nextEl: el.closest('.container').querySelector(".cat-next"),
				prevEl: el.closest('.container').querySelector(".cat-prev"),
			},
			disabledClass: 'slide-disabled',
			breakpoints: {
				340: {
					slidesPerView: 2.2,
					spaceBetween: 10
				},
				768: {
					slidesPerView: 2.2,
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
	});
}
// === end CAT-SLIDER

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
	document.body.parentElement.classList.add("no-scroll");
	document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
	document.body.parentElement.classList.remove("no-scroll");
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

// === start MODAL ORDER BG
if (document.querySelector(".modal__order-bg")) {
	const modalOrder = document.querySelector(".modal__order-bg");
	const modalOpenBtn = document.querySelectorAll(".jsOrder");
	const modalCloseBtn = document.querySelector(".jsOrderClose");

	modalOpenBtn.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			modalOrder.classList.add("show");
			disableScroll();
		});
	});

	modalCloseBtn.addEventListener("click", (e) => {
		modalOrder.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL ORDER BG

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

// === start RELOCATE BY CLICK IN MOBILE
if (document.querySelector("[data-moblink]")) {
	if (window.innerWidth < 1024) {
		linkInMobile('[data-moblink]');
	}
	
	function linkInMobile(el) {
		const allLinks = document.querySelectorAll(el);

		allLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				let link = e.currentTarget.dataset.moblink;
				location.href = link;
			});
		});
	}

	let rz = false;
	window.addEventListener(
		"resize",		
		function () {
			if (window.innerWidth <= 1024 && rz === false) {
				linkInMobile('[data-moblink]');
				rs = true;
			} else if (window.innerWidth > 1024 && rz === true) {
				rz = false;
			}
		},
		true
	);
}
// === end RELOCATE BY CLICK IN MOBILE

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
if (document.querySelector(".jsCatList")) {
	const boxes = document.querySelectorAll(".jsCatList");

	boxes.forEach((box) => {

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
	});
}
// === end ROLL-LIST

// === start SLIDE-LIST
if (document.querySelector(".slide-list")) {
	const listBlock = document.querySelector(".slide-list");
	const list = document.querySelector(".list");
	const listBtn = document.querySelector(".slide-btn");

	let startHeight = listBlock.clientHeight;
	let fullHeight = list.scrollHeight;

	listBtn.addEventListener("click", (e) => {
		e.stopPropagation();

		if (!listBtn.classList.contains("show")) {
			listBlock.style.maxHeight = fullHeight + "px";
			e.currentTarget.classList.add("show");
		} else {
			listBlock.style.maxHeight = startHeight + "px";
			e.currentTarget.classList.remove("show");
		}
	});
}
// === end SLIDE-LIST

// === === === === === ===
// === start CATALOG FILTER
// -- strat FILTER RADIO
if (document.querySelector(".jsDrop")) {
	const lists = document.querySelectorAll(".jsDrop");
	const drops = document.querySelectorAll(".f-drop");

	drops.forEach((el) => {
		el.addEventListener("click", (e) => {
			let li = e.currentTarget.closest(".list-item");

			if (!el.classList.contains("show") && !el.classList.contains("active")) {
				li.classList.add("active");
			} else {
				li.classList.remove("active");
			}
		});
	});

	dropList(lists);

	function dropList(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();

				let content = e.currentTarget.nextElementSibling;

				if (!e.currentTarget.classList.contains("show")) {
					hideAllItems(drops);
					e.currentTarget.classList.add("show");
					content.style.maxHeight = content.scrollHeight + 50 + "px";
				} else {
					content.style.maxHeight = null;
					e.currentTarget.classList.remove("show");
					if (el.closest(".list-item").classList.contains("active")) {
						el.closest(".list-item").classList.remove("active");
					}
				}
			});
		});
	}

	function hideAllItems(els) {
		els.forEach((el) => {
			if (el.classList.contains("show")) {
				el.classList.remove("show");
				el.nextElementSibling.style.maxHeight = null;
			}
		});
	}

	document.addEventListener("click", (e) => {
		lists.forEach((el) => {
			if (el.classList.contains("f-drop")) {
				el.classList.remove("show");
				el.nextElementSibling.style.maxHeight = null;
			}
		});
	});
}
// -- end FILTER RADIO

// -- FILTER CHECKBOX
if (document.querySelector(".jsDropChk")) {
	const lists = document.querySelectorAll(".jsDropChk");
	const drops = document.querySelectorAll(".f-drop");
	const dropBtns = document.querySelectorAll(".jsDropBtn");
	const dropChkItem = document.querySelectorAll(".checkbox label");

	dropList(lists);
	dropBtnsClose(dropBtns);
	activateChkBtn(dropChkItem);
	showChecked(lists);
	writeChecked(lists);

	function writeChecked(els) {
		els.forEach((el) => {
			let res = 0;
			let chks = el.nextElementSibling.querySelectorAll(".checkbox-real");
			chks.forEach((ipt) => {
				ipt.checked ? res++ : res;
			});
			if (res > 0 && !el.classList.contains("jsGoodsOn")) {
				el.innerHTML = el.innerHTML + "<span>" + res + "</span>";
				el.classList.add("jsGoodsOn");
			} else if (res > 0 && el.classList.contains("jsGoodsOn")) {
				el.querySelector("span").textContent = res;
			} else {
				if (el.classList.contains("jsGoodsOn")) {
					el.classList.remove("jsGoodsOn");
					el.querySelector("span").remove();
				}
			}
		});
	}

	function showChecked(els) {
		els.forEach((el) => {
			let res = 0;
			let chks = el.nextElementSibling.querySelectorAll(".checkbox-real");
			chks.forEach((ipt) => {
				ipt.checked ? res++ : res;
			});
		});
	}

	function activateChkBtn(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();
				let currBtn = e.currentTarget
					.closest(".f-droplist")
					.querySelector(".f-drop-btn");

				if (!currBtn.classList.contains("active")) {
					currBtn.classList.add("active");
				}
			});
		});
	}

	function dropBtnsClose(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();

				let drop = e.currentTarget.closest(".f-droplist");
				let content = drop.previousElementSibling;

				drop.style.maxHeight = null;
				content.classList.remove("show");

				if (e.currentTarget.closest(".list-item").classList.contains("active")) {
					e.currentTarget.closest(".list-item").classList.remove("active");
				}
				writeChecked(lists);
			});
		});
	}

	function dropList(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();
				showChecked(lists);

				let content = e.currentTarget.nextElementSibling;

				if (!e.currentTarget.classList.contains("show")) {
					hideAllItems(drops);
					e.currentTarget.classList.add("show");
					content.style.maxHeight = content.scrollHeight + 50 + "px";
				}
			});
		});
	}

	function hideAllItems(els) {
		els.forEach((el) => {
			if (el.classList.contains("show")) {
				el.classList.remove("show");
				el.nextElementSibling.style.maxHeight = null;
			}
		});
	}

	document.addEventListener("click", (e) => {
		lists.forEach((el) => {
			if (
				el.classList.contains("show") &&
				!el.nextElementSibling
					.querySelector(".jsDropBtn")
					.classList.contains("active")
			) {
				el.classList.remove("show");
				el.nextElementSibling.style.maxHeight = null;
				if (el.closest(".list-item").classList.contains("active")) {
					el.closest(".list-item").classList.remove("active");
				}
			}
		});
	});
}
// -- FILTER CHECKBOX

// -- start FILTER RANGE
if (document.querySelector(".filter-range")) {
	// - range actions
	const rangeInput = document.querySelectorAll(".filter-input input"),
		priceInput = document.querySelectorAll(".filter-range input"),
		progress = document.querySelector(".filter-progress");

	let priceGap = 550;

	priceInput.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(priceInput[0].value),
				maxVal = parseInt(priceInput[1].value);

			if (maxVal - minVal >= priceGap && maxVal <= 10000) {
				if (e.target.className === "input-min") {
					rangeInput[0].value = minVal;
					progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
				} else {
					rangeInput[1].value = maxVal;
					progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
				}
			}
		});
	});

	rangeInput.forEach((input) => {
		input.addEventListener("input", (e) => {
			if (
				!e.currentTarget
					.closest(".f-droplist")
					.querySelector(".jsDropBtn")
					.classList.contains("active")
			) {
				e.currentTarget
					.closest(".f-droplist")
					.querySelector(".jsDropBtn")
					.classList.add("active");
			}

			let minVal = parseInt(rangeInput[0].value),
				maxVal = parseInt(rangeInput[1].value);

			if (maxVal - minVal < priceGap) {
				if (e.target.className === "range-min") {
					rangeInput[0].value = maxVal - priceGap;
				} else {
					rangeInput[1].value = minVal + priceGap;
				}
			} else {
				priceInput[0].value = minVal;
				priceInput[1].value = maxVal;
				progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
				progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		});
	});

	// - filter actions
	const listsRange = document.querySelectorAll(".jsDropRange");
	const rangeInputs = document.querySelectorAll(".filter-range input");
	const drops = document.querySelectorAll(".f-drop");

	dropRange(listsRange);

	rangeInputs.forEach((el) => {
		el.addEventListener("change", (e) => {
			e.currentTarget
				.closest(".f-droplist")
				.querySelector(".jsDropBtn")
				.classList.add("active");
		});
	});

	function dropRange(els) {
		els.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();

				let content = e.currentTarget.nextElementSibling;

				if (!e.currentTarget.classList.contains("show")) {
					hideAllItems(drops);
					e.currentTarget.classList.add("show");
					content.style.maxHeight = content.scrollHeight + 50 + "px";
				} else {
					content.style.maxHeight = null;
					e.currentTarget.classList.remove("show");
				}
			});
		});
	}

	document.addEventListener("click", (e) => {
		listsRange.forEach((el) => {
			if (
				el.classList.contains("show") &&
				!el.nextElementSibling
					.querySelector(".jsDropBtn")
					.classList.contains("active")
			) {
				el.classList.remove("show");
				el.nextElementSibling.style.maxHeight = null;
			}
		});
	});
}
// -- end FILTER RANGE

// - start SLIDE LIST
const listBlock = document.querySelector(".slide-list");
if (listBlock) {
	const list = document.querySelector(".list");
	const listBtn = document.querySelector(".slide-btn");

	let startHeight = listBlock.clientHeight;
	let fullHeight = list.scrollHeight;

	// console.log("startHeight: " + startHeight);
	// console.log("fullHeight: " + list.scrollHeight);

	listBtn.addEventListener("click", (e) => {
		e.stopPropagation();

		if (!listBtn.classList.contains("show")) {
			listBlock.style.maxHeight = fullHeight + "px";
			e.currentTarget.classList.add("show");
		} else {
			listBlock.style.maxHeight = startHeight + "px";
			e.currentTarget.classList.remove("show");
		}
	});
}
// - end SLIDE LIST

// - start FILTER SHOW MORE
const filterShowMoreBtn = document.querySelectorAll(".jsDropMore");
if (filterShowMoreBtn) {
	filterShowMoreBtn.forEach((el) => {
		el.addEventListener("click", (e) => {
			e.stopPropagation();
			e.currentTarget.closest(".f-droplist").classList.toggle("hide-more");
		});
	});
}
// - end FILTER SHOW MORE
// === end CATALOG FILTER
// === start ACCORDION
if (document.querySelector(".accordion-btn")) {
	const acc = document.getElementsByClassName("accordion-btn");
	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			if (!this.classList.contains("active")) {
				closeAccTabs();
				toggleAcc(this);
				console.log("Non Active");
			} else {
				closeAccTabs();
				console.log("Active");
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
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight =
				acc[0].nextElementSibling.scrollHeight + "px";
		}
	}
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight =
						acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}
// === end ACCORDION

// === start BLOG TAB
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};

function hideAll(els) {
	els.forEach((item) => {
		item.style.display = "none";
	});
}

function delAllActiveBtns(els) {
	els.forEach((item) => {
		item.contains.classList = "active" ? item.classList.remove("active") : false;
	});
}

if (document.querySelector(".jsTab")) {
	const allTabs = document.querySelectorAll(".jsTab");

	allTabs.forEach((tab) => {
		const btns = tab.querySelectorAll(".thb");
		const blocks = tab.querySelectorAll(".tbc");
		btns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				let currBtn = e.currentTarget.dataset.btn;
				let currBlock = tab.querySelector("[data-text=" + currBtn + "]");

				delAllActiveBtns(btns);
				let isClass = e.currentTarget.contains.classList == "active";
				!isClass ? e.currentTarget.classList.add("active") : false;

				hideAll(blocks);

				if (currBlock) {
					fadeIn(currBlock, 1000, "grid");
				} else {
					fadeIn(blocks[0], 1000, "grid");
				}
			});
		});
	});
}
// === end BLOG TAB

// === start SMOOTH-SCROLL TO ANCHOR
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		 e.preventDefault();

		 document.querySelector(this.getAttribute('href')).scrollIntoView({
			  behavior: 'smooth'
		 });
	});
});
// === end SMOOTH-SCROLL TO ANCHOR