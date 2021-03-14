import "../sass/style.scss";
import { blocks } from "./blocks";
blocks.initAuto();

const searchInput = blocks.init(document.getElementById("searchInput"));
const searchEngines = new blocks.searchEngines(document.getElementById("searchEnginesContainer"), { searchInput });

const addSearchEngineForm = blocks.init(document.getElementById("addSearchEngineForm"));
addSearchEngineForm.addSearchEngineForm.refs = {
  modal: addSearchEngineForm.modal,
  searchEngines: searchEngines,
};
