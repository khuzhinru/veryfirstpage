import { SearchInput } from "./classes/SearchInput";
import { SearchEngines } from "./classes/SearchEngines";
import { Modal } from "./classes/Modal";
import { AddSearchEngineForm } from "./classes/addSearchEngineForm";
import { Dropdown } from "./classes/Dropdown";

export const blocks = {
  searchInput: SearchInput,
  searchEngines: SearchEngines,
  modal: Modal,
  addSearchEngineForm: AddSearchEngineForm,
  dropdown: Dropdown,
};

blocks.init = (DOMElement) => {
  let initedBlocks = {};
  const blockParams = JSON.parse(DOMElement.dataset.js);
  for (const name in blockParams) {
    initedBlocks[name] = new blocks[name](DOMElement, blockParams[name]);
  }
  return Object.keys(initedBlocks).length > 1 ? initedBlocks : initedBlocks[Object.keys(initedBlocks)[0]];
};

blocks.initAuto = () => {
  document.querySelectorAll('[data-init="auto"]').forEach((DOMElement) => {
    blocks.init(DOMElement);
  });
};
