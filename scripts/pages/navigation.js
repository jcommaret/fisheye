function goTo(id) {
  
  const photographerId = id;
  var params = new URLSearchParams();
  params.append("photographerId", photographerId);
  
  var url = "photographer.html?" + params.toString();
  location.href = url;
}

var params = new URLSearchParams(window.location.search),
    photographerId = params.get("photographerId");