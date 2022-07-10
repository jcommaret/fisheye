function goTo(id) {  
  const photographerId = id;

  var params = new URLSearchParams();
  params.append("photographerId", photographerId);    
  
  var url = "photographer.html?" + params.toString();
  location.href = url;
}