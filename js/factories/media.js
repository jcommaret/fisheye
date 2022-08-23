class Media{
  constructor(data){
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  render(){
    return `<div class="media">
              <img src="https://via.placeholder.com/No+Media+To+Render">
            </div>`;
  }
}

class Image extends Media{
  constructor(data){
    super(data)
    this.image = data.image; 
  }
  render(){
    return `<div class="media">
              <img class="square" src="./images/images/${this.image}">
              <div class="info">
                <h2>${this.title}</h2>
                <p>♥ ${this.likes}</p>
              </div>
            </div>`;
          }
}

export class Video extends Media{
  constructor(data){
    super(data)
    this.video = data.video; 
  }
  render(){
    return `<div class="media">
              <video class="square" src="./images/images/${this.video}"></video>
              <div class="info">
                <h2>${this.title}</h2>
                <p>♥ ${this.likes}</p>
              </div>
            </div>`;
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

