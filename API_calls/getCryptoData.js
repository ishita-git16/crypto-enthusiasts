import fetch from 'node-fetch';
import Chart from "chart.js";

const getCryptoData = async (link) => {
    const resp = await fetch(link);
    const res = await resp.json();
    return res;
    console.log(res.following_url);
}





export default getCryptoData;