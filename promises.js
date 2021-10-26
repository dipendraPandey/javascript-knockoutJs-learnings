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

let createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 5000);
  });
};

// createPost({ title: "Third Post", body: "This is the body of third Post" })
//   .then(getPosts)
//   .catch((error) => {
//     alert(error);
//   });

const promise1 = Promise.resolve("Hello world");
const promise2 = "hello Universe";

Promise.all([promise1, promise2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));

// understanding Promises here with next example here

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Marketing Meeting",
      location: "Skype",
      time: "1 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
  return Promise.resolve(calendar);
};
meeting
  .then(addToCalendar)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
