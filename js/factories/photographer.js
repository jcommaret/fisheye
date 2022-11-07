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
    this.portrait = data.portrait;
    this.name = data.name;
    console.log(this.name);
    
  }

  render(){
    return `<div class="media">
              <img class="square lightbox-toogle" src="./images/images/${this.portrait}">
              <div class="info">
                <h2>${this.title}</h2>
                <p>♥ <span class="likes">${this.likes}</p>
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
      case "default" : {
        return new Media(data)
      }
    }
  }
}