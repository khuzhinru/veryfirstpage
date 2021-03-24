import "../sass/style.scss";
import { blocks } from "./blocks";
blocks.initAuto();

const searchInput = new blocks.searchInput(document.getElementById("searchInput"));
const searchEngines = new blocks.searchEngines(document.getElementById("searchEnginesContainer"), { searchInput });
window.userSearchEngines = searchEngines;
