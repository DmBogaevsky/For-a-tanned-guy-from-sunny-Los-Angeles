function fnMethods(method, url, body = null) {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization:
      "Bearer ya29.A0ARrdaM9vWZqTrvSr7MpKC7iv-AjaB6yMmiOqxIO15cT4RFmCKsg-TDXYiwEC1nG_1iadNViL3RUNO9PijF0E66bgsiR2aW4wsYkXk67h_z-TwWNL3w6WKDB9OWEo6CloaiRSqtFNO8WeQDtUwjbVzQkxTEIwQg",
  };
  let options = {
    method: method,
    headers: headers,
  };
  if (body && method === "POST") {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then((responce) => {
    if (responce.ok && method === "DELETE") {
      return;
    }
    if (responce.ok && method === "POST" && !body) {
      return;
    }
    if (responce.ok) {
      return responce.json();
    }
    return responce.json().then((error) => {
      // перемепнная
      const e = new Error("Error");
      e.data = error;
      throw e;
    });
  });
}
const uploadVidioUrl =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o'";

const selectedVideo = document.getElementById("videoFile");

selectedVideo.addEventListener("change", (event) => {
  const videoFile = event.target.files[0];
  const formData = new FormData();
  formData.append("userVideo", videoFile);
  formData.append("snippet", {
    categoryId: "22",
    description: "Some video from internet.",
    title: "Test video upload.",
  });
  formData.append("status", { privacyStatus: "private" });
  
  return fnMethods("POST", uploadVidioUrl, formData)
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
});

// const requestUrl =
//   "https://www.googleapis.com/youtube/v3/channels?peart=snippet,contentDetails%2Cstatistics&id=UCG6LFbnu6W4Lm5hr6hUwEpQ&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o";

// const videoUrl =
//   "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o";

// const deleteComment =
//   "https://youtube.googleapis.com/youtube/v3/comments?id=UgxwUN8ptL7H-6AHWzx4AaABAg&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o";

// function aboutChannel(params) {
//   let requestUrlVidioList = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${params.items[0].contentDetails.relatedPlaylists.uploads}&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o`;
//   console.log(
//     `title : ${params.items[0].snippet.title} \ndescription : ${params.items[0].snippet.description} \nviewCount: ${params.items[0].statistics.viewCount} \nvideoCount: ${params.items[0].statistics.videoCount}` // переменые
//   );
//   return requestUrlVidioList;
// }

// getPlaylistId = (method, url) => fnMethods(method, url);

// myResultFunction = (method, url) =>
//   fnMethods(method, url)
//     .then((itemsValues) => aboutChannel(itemsValues))
//     .then((videoListInfo) => getPlaylistId("GET", videoListInfo))
//     .then((videoList) => {
//       const itemsNames = videoList.items.map((item) => item.snippet.title);
//       const videoIds = videoList.items.map(
//         (item) => item.contentDetails.videoId
//       );
//       console.log(
//         itemsNames.toString() +
//           `\ntotalResults: ${videoList.pageInfo.totalResults}`
//       );
//       const requests = videoIds.map((id) =>
//         fnMethods(
//           "GET",
//           `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o`
//         )
//       );
//       const PromiseIdsArray = Promise.all(requests).then((responses) => {
//         const moreViewsVideos = responses
//           .filter((response) => response.items[0].statistics.viewCount > 16)
//           .map((id) => id.items[0].id);
//         return moreViewsVideos;
//       });
//       return PromiseIdsArray;
//     })
//     .then((idsArray) => {
//       const comments = idsArray.map((id) => {
//         fnMethods(
//           "POST",
//           `https://youtube.googleapis.com/youtube/v3/videos/rate?id=${id}&rating=like&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o`
//         );
//         const resources = {
//           snippet: {
//             videoId: `${id}`,
//             topLevelComment: { snippet: { textOriginal: "Hello Dima" } },
//           },
//         };
//         const comment = fnMethods("POST", videoUrl, resources);
//         return comment;
//       });
//       const commentsArr = Promise.all(comments);
//       return commentsArr;
//     })
//     .then((commentsArr) => {
//       const commentsIdsArr = commentsArr.map((comment) => comment.id);
//       return commentsIdsArr;//переписать
//     })
//     .then((commentsIdsArr) => {
//       const deleteComments = commentsIdsArr.map((commentId) => {
//         fnMethods(
//           "DELETE",
//           `https://youtube.googleapis.com/youtube/v3/comments?id=${commentId}&key=AIzaSyCxdGjmcZMTip9eTySei5a3klNtqLFLK3o`
//         );
//       });
//       Promise.all(deleteComments);
//       return "Delete Complited";// переписать
//     });

// ----------------------------------------------------------------------------------------------

// myResultFunction("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// function getSomething(method, url, body = null) {
//   const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer ya29.A0ARrdaM-3AOVQzvaxAwr6PgFhuaHyiLyfPCDbIuQPIOY4NCkiKXo0hgYuPMAwsr-KYaUrgjKM6vzs3Dj6mPcPu-d1x9FOAFdhrG2rmEAiKQ2JujqbYFAoDEMSQesAXggu6bOysgXTX5svzPajJZSosrF4XcHabw",
//   };
//   let options = {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   };

//   if (method === "GET") {
//     options = null;
//   }
//   return fetch(url, options).then((responce) => {
//     if (responce.ok) {
//       return responce.json();
//     }
//     return responce.json().then((error) => {
//       const e = new Error("Error");
//       e.data = error;
//       throw e;
//     });
//   });
// }

// const resurs = {
//   snippet: {
//     videoId: "AyrlOBV6Eig",
//     topLevelComment: { snippet: { textOriginal: "Hello everybody" } },
//   },
// };

// getSomething("POST", videoUrl, resurs)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// getPlaylistId("GET", requestUrlVidioList)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// async function sendRequest(method, url, body = null) {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   let options = {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   };

//   if (method === "GET") {
//     options = null;
//   }
//   const responce = await fetch(url, options);
//   if (responce.ok) {
//     return responce.json();
//   }
//   const error = await responce.json();
//   const e = new Error("Error");
//   e.data = error;
//   throw e;
// }
// const body = {
//   name: "Dmitriy",
//   age: 23,
// };

// sendRequest("POST", requestUrl, body)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// sendRequest("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });
