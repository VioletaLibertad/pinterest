window.view = {};

window.view.showCardImages = (imgUrl, linkToOriginalImg, userOwnerImg, imgTags) => {
  console.log('View: ' + imgUrl + linkToOriginalImg + userOwnerImg + imgTags);
  imgUrl.forEach(image => {
    imageContainer.innerHTML += `
    <div class="card">
      <img class="card-img" src="${image}" alt="Card image">
    </div>`;
  });
};