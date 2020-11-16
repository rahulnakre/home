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
      // fields: "id,title,slug,html,publishedAt,reading_time,og_image,og_title,og_description"
    })
    .catch(err => {
      console.log(err);
    });
}
// id: string;
// title: string;
// html: string;
// publishedAt: string;
// readingTime: string;
// ogImage: string;
// ogTitle: string;
// ogDescription: string;
// twitterImage: string;
// twitterTitle: string;
// twitterDescription: string;
// metaTitle: string;
// metaDescription: string;