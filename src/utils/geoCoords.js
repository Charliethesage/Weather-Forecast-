function geoCoords() {
  return new Promise((resolve, reject) => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve(coords);
        },
        (err) => {
          reject(err);
        }
      );
    } else {
      console.log("Oops something went wrong");
    }
  });
}

export default geoCoords;
