import getCryptoData from "./API_calls/getCryptoData.js";
import commitChart from "./Chart Generation/commitChart.js";

const bitcoinRaw = await getCryptoData("https://api.github.com/repos/bitcoin/bitcoin/stats/contributors");
const ethereumRaw = await getCryptoData("https://api.github.com/repos/ethereum/go-ethereum/stats/contributors");
const polkadotRaw = await getCryptoData("https://api.github.com/repos/paritytech/polkadot/stats/contributors");
const cosmosRaw = await getCryptoData("https://api.github.com/repos/cosmos/cosmos-sdk/stats/contributors");

const bitcoinMonthly = bitcoinRaw[0].weeks;
const ethereumMonthly = ethereumRaw[0].weeks;
const polkadotMonthly = polkadotRaw[0].weeks;
const cosmosMonthly = cosmosRaw[0].weeks;
     
commitChart(bitcoinMonthly,ethereumMonthly,polkadotMonthly,cosmosMonthly);
//   line_chart.toDataURI(); // Promise<String> : data:image/png;base64,iVBORw0KGgo...
//   line_chart.toBuffer(); // Promise<Buffer> : Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 ...




