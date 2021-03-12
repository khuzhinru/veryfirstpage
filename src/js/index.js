import "../sass/style.scss";
import { SearchInput } from "./classes/SearchInput.js";
import { SearchEngines } from "./classes/SearchEngines.js";
import { Modal } from "./classes/Modal.js";
import { AddSearchEngineForm } from "./classes/addSearchEngineForm.js";

const searchInput = new SearchInput(document.getElementById("searchInput"));
const searchEngines = new SearchEngines(document.getElementById("searchEnginesContainer"), { searchInput });
const addSearchEngineModal = new Modal(document.getElementById('addSearchEngineModal'));
const addSearchEngineForm = new AddSearchEngineForm(document.getElementById('addSearchEngineForm'), { searchEngines, addSearchEngineModal });
const addSearchEngineBtn = document.querySelector('[data-name="addBtn"]');
addSearchEngineBtn.onclick = addSearchEngineModal.show;