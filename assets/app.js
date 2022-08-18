import { getData } from "./js/fetch_api";
import { photographerFactory } from "./js/factories/photographer";
import { getPhotographers, displayData, init} from "./js/pages/index";
import './sass/main.scss';

photographerFactory();
getPhotographers();
displayData();
init()

console.log(getData());