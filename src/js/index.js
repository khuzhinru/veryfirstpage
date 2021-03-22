import "../sass/style.scss";
import { blocks } from "./blocks";
blocks.initAuto();

const searchInput = blocks.init(document.getElementById("searchInput"));
const searchEngines = new blocks.searchEngines(document.getElementById("searchEnginesContainer"), { searchInput });
