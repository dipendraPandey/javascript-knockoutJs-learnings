const posts = [
  { title: "First Post", body: "Body of the First Post is here " },
  { title: "second Post", body: "Body of the Second Post is here " },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}
getPosts();

let createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
};

createPost(
  { title: "Third Post", body: "This is the body of third Post" },
  getPosts
);
