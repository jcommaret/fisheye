// Imports SCSS
import '../../sass/main.scss' 
import '../utils/fa'

// Import modale
import * as modalForm from '../utils/modal'
import * as lightbox from '../utils/lightbox'
import * as slider from '../utils/slider'

import "../utils/form"

import { getMediaById, getPhotographersById } from "../fetch_api"

import { MediaFactory } from "../factories/media"
import { PhotographerFactory } from "../factories/photographer"

import { Dropdown } from '../utils/dropdown'
import { CopyPhotographerName, CopyPrice} from '../utils/copyInformations'
import { sortbyLikes, sortbyDate, sortbyTitle } from '../utils/filters'
import { getTotalLikes, IncrementLikes, AddTotalLikes, RemoveTotalLikes } from '../utils/likes'

// Display medias
export async function displayMedias(media) {
  const mediasSection = document.querySelector(".medias_section")
  mediasSection.innerHTML=" " 
  media.forEach((m) => {
    const type = m.image? "image" : "video"    
    const mediaModel = new MediaFactory(m, type)
    mediasSection.innerHTML+=mediaModel.render() 
  })
}

// Display photographers
export async function displayPhotographer(photographers) {
  const photographerSection = document.querySelector(".photograph")
  const type = photographers.portrait? "image" : "video"    
  const photographerModel = 
    new PhotographerFactory(
      photographers, 
      type
  )
  photographerSection.innerHTML+=photographerModel.render() 
  modalForm.init() 
  lightbox.init()
  slider.init()
}

// Init
const init = async () => {
  const id = new URL(document.location).searchParams.get("id")
  const medias = await getMediaById(parseInt(id))
  const photographers = await getPhotographersById(parseInt(id))
  // Display medias and photographers
  displayMedias(medias)
  displayPhotographer(photographers)
  // Dropdown
  Dropdown()
  // Copys
  CopyPhotographerName()
  CopyPrice()
  // Filters
  sortbyDate(medias)
  sortbyLikes(medias)
  sortbyTitle(medias)
  // Likes
  getTotalLikes(medias)  
  IncrementLikes()
  AddTotalLikes()
  
}

init()