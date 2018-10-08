window.controller = {};

window.controller.getSearchInput = () => {
  let valueToSearch = window.model.getValueToSearchAndCallApi();
  return valueToSearch;
};

window.controller.getVariablesFromApi = (imgUrl, linkToOriginalImg, userOwnerImg, imgTags) => {
  console.log('Controller: ' + imgUrl + linkToOriginalImg + userOwnerImg + imgTags);
  return window.view.showCardImages(imgUrl, linkToOriginalImg, userOwnerImg, imgTags);
};