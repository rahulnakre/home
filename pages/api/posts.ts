import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://ec2-34-228-197-74.compute-1.amazonaws.com",
  key: 'edf1cc6b9a31d57c73875565e4',
  version: "v3"
});

export async function getPosts() {
  return await api.posts 
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.log(err);
    });
}