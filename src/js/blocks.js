import { SearchInput } from "./classes/SearchInput";
import { SearchEngines } from "./classes/SearchEngines";
import { Modal } from "./classes/Modal";
import { SearchEngineForm } from "./classes/SearchEngineForm";
import { Dropdown } from "./classes/Dropdown";
import { SearchEngineFormTrigger } from "./classes/SearchEngineFormTrigger";
import { Trigger } from "./classes/Trigger";

export const blocks = {
  searchInput: SearchInput,
  searchEngines: SearchEngines,
  modal: Modal,
  searchEngineForm: SearchEngineForm,
  dropdown: Dropdown,
  searchEngineFormTrigger: SearchEngineFormTrigger,
  trigger: Trigger
};

window.weakMap = new WeakMap();

blocks.init = (DOMElement, blockParams = {}) => {
  let initedBlocks = {};
  for (const name in blockParams) {
    initedBlocks[name] = new blocks[name](DOMElement, blockParams[name]);
  }
  window.weakMap.set(DOMElement, initedBlocks);
  return initedBlocks;
  /* return Object.keys(initedBlocks).length > 1 ? initedBlocks : initedBlocks[Object.keys(initedBlocks)[0]]; */
};

blocks.initAuto = () => {
  document.querySelectorAll('[data-js]').forEach((DOMElement) => {
    blocks.init(DOMElement, JSON.parse(DOMElement.dataset.js));
  });
};
