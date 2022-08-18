import { getData } from "./js/fetch_api";
import {getPhotographers, displayData, init} from "./js/pages/index";
import './sass/main.scss';

getPhotographers();
displayData();
init()

console.log(getData());