class Media{
  constructor(data){
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
  }
  render(){
    return `<div class="media">
              <img 
                src="https://via.placeholder.com/No+Media+To+Render">
            </div>`
  }
}

class Image extends Media{
  constructor(data){
    super(data)
    this.image = data.image 
  }
  render(){
    const div = document.createElement('div')
    div.setAttribute('id', this.id)
    div.setAttribute('class', 'media')
    div.innerHTML = `<img class="square media-media lightbox-toogle" src="./images/images/${this.image}"/>`
    div.innerHTML += `<div class="info">
                        <h2 class="media-title">${this.title}</h2>
                        <div class="likes-btn">
                          <div id="count" class="count">${this.likes}
                            <i class="fa-regular  fa-heart"></i>
                          </div>
                        </div>
                      </div>`
    
    return div
    }
}

export class Video extends Media{
  constructor(data){
    super(data)
    this.video = data.video 
  }
  render(){
    const div = document.createElement('div')
    div.setAttribute('id', this.id)
    div.setAttribute('class', 'media')
    div.innerHTML = `<video  class="square media-media lightbox-toogle" src="./images/images/${this.video}">`
    div.innerHTML += `<div class="info">
                        <h2 class="media-title">${this.title}</h2>
                        <div class="likes-btn">
                          <div id="count" class="count">${this.likes}
                            <i class="fa-regular  fa-heart"></i>
                          </div>
                        </div>
                      </div>`
    
    return div
  }
}

export class MediaFactory{
  constructor(data, type){
    switch (type){
      case "image" : { 
        return new Image(data)
      }
      case "video" : {
        return new Video(data)
      }
      case "default" : {
        return new Media(data)
      }
    }
  }
}