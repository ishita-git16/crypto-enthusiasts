import getCryptoData from "./API_calls/getCryptoData.js";


const obj = await getCryptoData("https://api.github.com/users/Zcash");

console.log(obj.following_url);