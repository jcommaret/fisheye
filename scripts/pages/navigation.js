function goTo(id, data) {  
  const photographerId = id;
  const photographerName = name;

  var params = new URLSearchParams();
  params.append("photographerId", photographerId);  
  params.append("photographerName", photographerName);  
  
  var url = "photographer.html?" + params.toString();
  location.href = url;
  console.log (photographerName);
}