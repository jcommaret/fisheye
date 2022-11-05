// a adapter
class Media{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
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
    this.name = data.name;
    console.log(this.name);
  }
  render(){
    return `<div class="media">
              <img class="square lightbox-toogle" src="./images/images/${this.image}">
              <div class="info">
                <h2>${this.title}</h2>
                <p>♥ <span class="likes">${this.likes}</p>
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
                <p>♥ <span class="likes">${this.likes}</span></p>
              </div>
            </div>`;
  }
}

export class PhotographerFactory{
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