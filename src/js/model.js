window.model = {};
let infoApi = [];
let imgUrl = [];
let linkToOriginalImg;
let userOwnerImg;
let imgTags;

window.model.pressEnterLikeClick = () => {
  document.getElementById('search-input').addEventListener('keyup', (event) => {
    searchInput.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("search-btn").click();
    }
  });
};

window.model.getValueToSearchAndCallApi = () => {
  let valueToSearch = document.getElementById('search-input').value;
  console.log(valueToSearch);
  let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${valueToSearch}&image_type=photo`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(imgData => {
    infoApi.push(imgData.hits);
    infoApi.forEach(index => {
      index.forEach(element => {
        imgUrl.push(element.largeImageURL);
        linkToOriginalImg = element.pageURL;
        userOwnerImg = element.user;
        imgTags = element.tags;
        // console.log('Model: ' + imgUrl + linkToOriginalImg + userOwnerImg + imgTags);
      });
      // console.log('Model second: ' + imgUrl + linkToOriginalImg + userOwnerImg + imgTags);
      return imgUrl, linkToOriginalImg, userOwnerImg, imgTags;
    });
    // console.log('Model third: ' + imgUrl + linkToOriginalImg + userOwnerImg + imgTags);
    return window.controller.getVariablesFromApi(imgUrl, linkToOriginalImg, userOwnerImg, imgTags);
  })
  .catch(error => {
    console.log('Ha habido un error: ' + error);
  });
};