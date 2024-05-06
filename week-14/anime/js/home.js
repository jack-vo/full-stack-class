let list = document.querySelector('[data-component="list"]');
let loader = document.querySelector('[data-component="loader"]');
let filterSelect = document.querySelector('[data-component="filter"]');
let paginationSelect = document.querySelector(
  '[data-component="pagination:select"]'
);
let paginationPrev = document.querySelector(
  '[data-component="pagination:previous"]'
);
let paginationNext = document.querySelector(
  '[data-component="pagination:next"]'
);
// We store previous filter option so we can rebuild pagination if needed
let currentFilterOption = '';
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
let onPaginationSelectChange = function () {
  let selectedPage = paginationSelect.value;

  loadList(currentFilterOption, selectedPage);
};
let displayLoadingState = function () {
  loader.classList.remove('d-none');
  paginationSelect.disabled = true;
  paginationNext.disabled = true;
  paginationPrev.disabled = true;

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
let removeLoadingState = function () {
  loader.classList.add('d-none');
  paginationSelect.disabled = false;
  paginationNext.disabled = false;
  paginationPrev.disabled = false;
};
let renderPagination = function (result) {
  let pagination = result.pagination;
  let paginationItems = pagination.items;
  let paginationOptionsContent = '';

  for (let i = 1; i <= paginationItems.count; i++) {
    let itemContent = '';

    if (i === 1) {
      itemContent = `<option selected value="${i}">${i}</option>`;
    } else {
      itemContent = `<option value="${i}">${i}</option>`;
    }

    paginationOptionsContent = paginationOptionsContent + itemContent;
  }

  paginationSelect.innerHTML = paginationOptionsContent;
};
let loadList = function (filterOption, page) {
  let requestUrl = 'https://api.jikan.moe/v4/';
  let shouldRebuildPagination = false;

  if (currentFilterOption !== filterOption) {
    currentFilterOption = filterOption;
    shouldRebuildPagination = true;
  }

  let params = {};

  if (filterOption === 'top') {
    requestUrl = requestUrl + 'top/anime';
  } else {
    requestUrl = requestUrl + 'anime';
    params.genres = filterOption;
  }

  if (page) {
    params.page = page;
  }

  let searchParams = new URLSearchParams(params);
  let searchParamsString = searchParams.toString();

  if (searchParamsString) {
    requestUrl = `${requestUrl}?${searchParams.toString()}`;
  }

  displayLoadingState();

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      renderList(result);

      if (shouldRebuildPagination) {
        renderPagination(result);
      }

      removeLoadingState();
    });
};
let onPaginationNextClick = function () {
  let selectedPage = paginationSelect.value;
  let lastPage = paginationSelect.lastChild.value;

  selectedPage = parseInt(selectedPage, 10);
  lastPage = parseInt(lastPage, 10);

  let nextPage = selectedPage + 1;

  if (nextPage <= lastPage) {
    paginationSelect.value = nextPage;
    loadList(currentFilterOption, nextPage);
  }
};
let onPaginationPrevClick = function () {
  let selectedPage = paginationSelect.value;

  selectedPage = parseInt(selectedPage, 10);

  let previousPage = selectedPage - 1;

  if (previousPage >= 1) {
    paginationSelect.value = previousPage;
    loadList(currentFilterOption, previousPage);
  }
};

filterSelect.addEventListener('change', onFilterSelectChange);
paginationSelect.addEventListener('change', onPaginationSelectChange);
paginationNext.addEventListener('click', onPaginationNextClick);
paginationPrev.addEventListener('click', onPaginationPrevClick);

fetch('https://api.jikan.moe/v4/genres/anime')
  .then(function (response) {
    return response.json();
  })
  .then(renderGenres);

loadList('top');
