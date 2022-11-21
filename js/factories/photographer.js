// a adapter
class Media{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
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
    this.portrait = data.portrait;
  }

  render(){
    return `<div class=photograph-header>
              <div> 
                <h1>${this.name}</h1>
                <div class="location">${this.city}, ${this.country}</div>
                <div class="tagline">${this.tagline}</div>
                <div class="price">${this.price}€</div>
              </div>
    
              <div class="contact">
                <button class="btn btn-contact modal-toogle">Contactez-moi</button>
              </div>
              
              <div class="photograph-photo">
                <img class="portrait" src="images/photographers/${this.portrait}" alt="photo de ${this.name}">
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