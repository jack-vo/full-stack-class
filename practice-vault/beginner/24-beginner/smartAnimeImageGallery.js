class SmartAnimeImageGallery {
  #animes;
  #container;
  #lightbox;

  constructor(container) {
    this.#container = container;
    this.#loadAnime();
  }

  #loadAnime() {
    this.#container.innerHTML = '<div class="loading">Loading animes...</div>';

    fetch('https://api.jikan.moe/v4/top/anime')
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          this.#animes = result.data;
          this.#render();
          this.#setup();
        }.bind(this)
      );
  }

  #render() {
    let items = [];

    for (let i = 0; i < this.#animes.length; i++) {
      let anime = this.#animes[i];
      items.push(`
        <li class="list-item">
            <img src="${anime.images.jpg.image_url}" title="${anime.title}" data-id="${anime.mal_id}"/>
        </li>`);
    }

    this.#container.innerHTML = `
    <div class="image-gallery">
        <ul class="list">${items.join('')}</ul>
        <div class="lightbox hidden">
            <div class="lightbox-content">
                <img class="lightbox-img"/>
                <div class="lightbox-title">
                </div>
            </div>
            <button class="lightbox-button">Close</button>
        </div>
    </div>
    `;
  }

  #setup() {
    this.#lightbox = this.#container.querySelector('.lightbox');

    this.#lightbox
      .querySelector('.lightbox-button')
      .addEventListener('click', this.#onCloseLightbox.bind(this));

    let allImages = this.#container.querySelectorAll('.list img');

    for (let i = 0; i < allImages.length; i++) {
      let img = allImages[i];

      img.addEventListener('click', this.#onImageItemSelected.bind(this));
    }
  }

  #onImageItemSelected(event) {
    let img = event.target;
    let animeId = Number(img.getAttribute('data-id'));
    let selectedAnime;

    for (let i = 0; i < this.#animes.length; i++) {
      let anime = this.#animes[i];

      if (anime.mal_id === animeId) {
        selectedAnime = anime;

        break;
      }
    }

    this.#lightbox.querySelector('.lightbox-img').src =
      selectedAnime.images.jpg.large_image_url;
    this.#lightbox.querySelector('.lightbox-title').innerHTML =
      selectedAnime.title;
    this.#lightbox.classList.remove('hidden');
  }

  #onCloseLightbox() {
    this.#lightbox.classList.add('hidden');
  }
}

export default SmartAnimeImageGallery;
