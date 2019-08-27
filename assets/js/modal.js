var playBtn = document.querySelector('.play');
var modalContainer = document.querySelector('.modal-bg');
var thumbnailImage = document.querySelector('.season2');
var episode = document.querySelector('.episode1');
var mainPage = document.querySelector('.no-filter');
var hamburgerMenu = document.querySelector('.top-nav__menu');
var episodeBg = document.querySelector('.episode1-bg');
var closeModal = document.querySelector('.close');
var closeEpisode = document.querySelector('.close2');
var navCollection = document.querySelector('.top-nav__collection');
var mainLogo = document.querySelector('.mainlogo');

document.onload = nav_hide();

function nav_hide() {
    navCollection.style.display = 'none';
    hamburgerMenu.style.display = 'block';
}

mainLogo.addEventListener('click', function () {
    if (navCollection.style.display === 'none') {
        navCollection.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
    }
});

playBtn.addEventListener('click', function () {
    if (modalContainer.style.display === 'none') {
        modalContainer.style.display = 'block';
        closeModal.style.display = 'block';
    }
});

thumbnailImage.addEventListener('click', function () {
    if (modalContainer.style.display === 'none') {
        modalContainer.style.display = 'block';
        closeModal.style.display = 'block';
    }
});

modalContainer.addEventListener('click', function () {
    if (episode.style.display === 'none') {
        episode.style.display = 'block';
        modalContainer.style.display = 'none';
        mainPage.style.display = 'none';
        hamburgerMenu.style.display = 'none';
        closeEpisode.style.display = 'block';
    }
});

closeModal.addEventListener('click', function () {
    if (modalContainer.style.display === 'block') {
        modalContainer.style.display = 'none';
        closeModal.style.display = 'none';
        mainPage.style.display = 'block';
    }
});

episodeBg.addEventListener('click', function () {
    if (episode.style.display === 'block') {
        episode.style.display = 'none';
        mainPage.style.display = 'block';
        modalContainer.style.display = 'block';
    }
});

closeEpisode.addEventListener('click', function () {
    if (episode.style.display === 'block') {
        episode.style.display = 'none';
        closeEpisode.style.display = 'none';
        mainPage.style.display = 'block';
        hamburgerMenu.style.display = 'block';
        closeModal.style.display = 'none';
    }
});