let list = document.querySelector('[data-component="list"]');
let loader = document.querySelector('[data-component="loader"]');
let filterSelect = document.querySelector('[data-component="filter"]');
let renderGenres = function (result) {
  let data = result.data;
  let allGenresContent = '';

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let newGenreContent = `<option value="${item.mal_id}">${item.name} (${item.count})</option>`;

    allGenresContent = allGenresContent + newGenreContent;
  }

  filterSelect.innerHTML = filterSelect.innerHTML + allGenresContent;
};
let renderList = function (result) {
  let data = result.data;
  let allNewItemsContent = '';

  loader.classList.add('d-none');

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let newItemContent = `
        <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
          <a href="details?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
            <span class="position-absolute badge bg-danger top-0 end-0">
                <i class="bi bi-star-fill"></i> ${item.score}
            </span>
            <span class="d-flex flex-column justify-content-center">
                <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
                <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
            </span>
          </a>
        </div>`;

    allNewItemsContent = allNewItemsContent + newItemContent;
  }

  list.innerHTML = allNewItemsContent;
};
let onFilterSelectChange = function () {
  let selectedOption = filterSelect.value;

  loadList(selectedOption);
};
let displayLoadingState = function () {
  loader.classList.remove('d-none');

  // show placeholder
  let items = list.querySelectorAll('[data-component="item"]');

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let image = item.querySelector('[data-component="image"]');
    let title = item.querySelector('[data-component="title"]');

    item.classList.add('placeholder-wave');
    image.classList.add('placeholder');
    title.classList.add('placeholder');
  }
};
let loadList = function (filterOption) {
  let requestUrl = 'https://api.jikan.moe/v4';

  if (filterOption === 'top') {
    requestUrl = requestUrl + '/top/anime';
  } else {
    requestUrl = requestUrl + `/anime?genres=${filterOption}`;
  }

  displayLoadingState();

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(renderList);
};

filterSelect.addEventListener('change', onFilterSelectChange);

fetch('https://api.jikan.moe/v4/genres/anime')
  .then(function (response) {
    return response.json();
  })
  .then(renderGenres);

loadList('top');
