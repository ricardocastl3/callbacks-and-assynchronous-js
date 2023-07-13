const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("Error in login"));
    }

    console.log(`Usuario logado`);
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["Video01", "Video02", "Video03"]);
  }, 1500);
};

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "Video title" });
  }, 2000);
};

const user = loginUser(
  "ricardo@gmail.com",
  "1234567",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log(videos);
      getVideoDetails(videos[0], (videoDetail) => {
        console.log(videoDetail);
      });
    });
  },
  (error) => {
    console.log(error);
  }
);

console.log({ user });
