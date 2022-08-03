import '@/sass/main.scss'
import { photographerFactory } from '@/js/factories/profile'
import { getPhotographers, displayData, init } from '@/js/pages/index'

photographerFactory();
getPhotographers();
displayData();
init();