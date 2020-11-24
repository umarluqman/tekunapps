export function PostData(type, userData) {
  let BaseURL = "https://tekun2.nakmenangtender.com/api/";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("test", res);
        resolve(res);
      })
      .catch((error) => {
        console.log("test", error);
        reject(error);
      });
  });
}
