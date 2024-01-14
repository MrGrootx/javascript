// 5aa056df78d070bb784376917095f6c7
const api_url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-12-12&sortBy=publishedAt&apiKey=c48331c6ab19466d8db12780d436e488";

async function getNewsData() {
  try {
    const response = await fetch(api_url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(`ERROR`, error);
  }
 

}

const newsData = getNewsData().then((res) => {
  const data = res.articles;

  data.forEach(element => {
    console.log(element);
  });
})
