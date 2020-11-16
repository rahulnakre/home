import GhostContentAPI from "@tryghost/content-api";
const { GHOST_SERVER_URL, GHOST_KEY } = process.env;
const api = new GhostContentAPI({
  url: GHOST_SERVER_URL,
  key: GHOST_KEY,
  version: "v3"
});

export async function getPostInfoList() {
  return await api.posts 
    .browse({
      limit: "all",
      fields: "id,title,slug,published_at,reading_time"
    })
    .catch(err => {
      console.log(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts 
    .read({
      slug: postSlug,
    })
    .catch(err => {
      console.log(err);
    });
}
