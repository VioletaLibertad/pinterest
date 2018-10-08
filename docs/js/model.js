window.model = {};
let infoApi = [];

window.model.pressEnterLikeClick = () => {
  document.getElementById('search-input').addEventListener('keyup', (event) => {
    searchInput.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("search-btn").click();
    }
  });
};

window.model.getValueToSearch = () => {
  let valueToSearch = document.getElementById('search-input').value;
  console.log(valueToSearch);
  let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${valueToSearch}&image_type=photo`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(imgData => {
    infoApi.push(imgData.hits);
    infoApi.forEach(index => {
      index.forEach(element => {
        let imgUrl = element.largeImageURL;
        console.log(imgUrl);
        imageContainer.innerHTML += `<div class="card">
          <img class="card-img" src="${imgUrl}" alt="Card image">
        </div>
      </div>`;
      });
    });
  })
  .catch(error => {
    console.log('Ha habido un error: ' + error);
  })
};