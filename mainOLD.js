var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style.backgroundImage);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        // modal.classList.add('open');
        // backdrop.classList.add('open');
    })
};

var closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    // if (modal) {
    //     modal.classList.remove('open');
    // }
    // backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    // mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', (closeModal));
};

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    // mobileNav.classList.add('open');
    // backdrop.classList.add('open');
});

