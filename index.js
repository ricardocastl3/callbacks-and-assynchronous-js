const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject(new Error("Error in login"));
    }
    console.log("User logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Get User Videos')
      resolve(["Video01", "Video02", "Video03"]);
    }, 1500);
  });
};

const getVideoDetails = (video, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Get Video Detail")
      resolve({ title: "Video title" });
    }, 2000);
  });
};

loginUser("ricardo@gmail.com", "12345")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetails(videos[0]))
  .then((videoDetail) => console.log({videoDetail}))
  .catch((error) => {
    console.log(error);
  });
