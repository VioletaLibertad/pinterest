window.controller = {};

window.controller.getSearchInput = () => {
  let valueToSearch = window.model.getValueToSearch();
  return valueToSearch;
};

