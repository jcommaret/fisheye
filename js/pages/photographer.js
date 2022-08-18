import { getMediaById } from "../fetch_api";

const init = async () => {
  const id = new URL(document.location).searchParams.get("id");
  // const id = params.get("photographerid"); 
  const medias = await getMediaById(parseInt(id))
  console.log(medias);
  console.log(id);
}

init();
