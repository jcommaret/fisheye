export function getParams(){
  var params = new URLSearchParams(window.location.search),
    pid = params.get("photographerId");
    return pid;
};