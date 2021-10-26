const posts = [
  { title: "First Post", body: "Body of the First Post is here " },
  { title: "second Post", body: "Body of the Second Post is here " },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${index}>${post.title}</li>`;
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

async function initialization() {
  await createPost({
    title: "Third Post",
    body: "This is the body of third Post",
  });
  getPosts();
}

initialization();

// next example of async await
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Accounting meeting",
      time: "3 PM",
      location: "Google Meet",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});
const addToCalendar = (meeting) => {
  const message = `${meeting.name} is schedule at ${meeting.time} on ${meeting.location}`;
  return Promise.resolve(message);
};

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const message = await addToCalendar(meetingDetails);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
}
myMeeting();
