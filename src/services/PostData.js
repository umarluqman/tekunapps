export function PostData(type, user_info) {
  let BaseURL = "https://tekun2.nakmenangtender.com/api/v2/";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_info),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
}
