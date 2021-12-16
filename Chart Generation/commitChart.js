import ChartJSImage from 'chart.js-image';

const commitData = (weeksArr) => {
    var monthlyCommits = [];
    var currDate, prevDate;
    for (var i = weeksArr.length - 1; i >= weeksArr.length - 80;) {

        currDate = new Date(weeksArr[i].w * 1000);
        var oneMonthData = 0;
        while (1) {
            if (i < weeksArr.length - 80) break;
            prevDate = new Date(weeksArr[i].w * 1000);
            if (prevDate.getMonth() != currDate.getMonth()) {

                break;
            }
            else {
                oneMonthData += weeksArr[i].c;
                // console.log("break");
            }
            i--;
        }
        monthlyCommits.unshift(oneMonthData);
    }
    return monthlyCommits;
}


const commitChart = (bitcoin, ethereum, cardano, cosmos) => {
    const bitcoinMonthly = commitData(bitcoin);
    const ethereumMonthly = commitData(ethereum);
    const cardanoMonthly = commitData(cardano);
    const cosmosMonthly = commitData(cosmos);
    let labels = ["01/21","02/21","03/21","04/21","05/21","06/21","07/21","08/21","09/21","10/21","11/21","12/21"];

    const line_chart = ChartJSImage().chart({
        "type": "line",
        "data": {
            "labels": labels,
            "datasets": [
                {
                    "label": "Bitcoin",
                    "borderColor": "rgb(255,+99,+132)",
                    "backgroundColor": "rgba(255,+99,+132,+.5)",
                    "data": bitcoinMonthly
                },
                {
                    "label": "Ethereum",
                    "borderColor": "rgb(54,+162,+235)",
                    "backgroundColor": "rgba(54,+162,+235,+.5)",
                    "data": ethereumMonthly
                },
                {
                    "label": "Cardano",
                    "borderColor": "rgb(75,+192,+192)",
                    "backgroundColor": "rgba(75,+192,+192,+.5)",
                    "data":cardanoMonthly
                },
                {
                    "label": "Cosmos",
                    "borderColor": "rgb(255,+205,+86)",
                    "backgroundColor": "rgba(255,+205,+86,+.5)",
                    "data": cosmosMonthly
                }
            ]
        },
        "options": {
            "title": {
                "display": true,
                "text": "Monthly Commit Data trends"
            },
            "scales": {
                "xAxes": [
                    {
                        "scaleLabel": {
                            "display": true,
                            "labelString": "Month"
                        }
                    }
                ],
                "yAxes": [
                    {
                        "stacked": true,
                        "scaleLabel": {
                            "display": true,
                            "labelString": "#commits"
                        }
                    }
                ]
            }
        }
    }) // Line chart
        .backgroundColor('white')
        .width(500) // 500px
        .height(300); // 300px

    line_chart.toURL();  // String: https://image-charts.com/chart.js/2.8.0?icac=documentation&chart=%7Btype%3A%27line%27%2Cdata%3A%7Blabels%3A%5B%27January%27%2C%27February%27%2C%27March%27%2C%27April%27%2C%27May%27%2C%27June%27%2C%27July%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27My+First+dataset%27%2CborderColor%3A%27rgb%28255%2C+99%2C+132%29%27%2CbackgroundColor%3A%27rgba%28255%2C+99%2C+132%2C+.5%29%27%2Cdata%3A%5B57%2C90%2C11%2C-15%2C37%2C-37%2C-27%5D%7D%2C%7Blabel%3A%27My+Second+dataset%27%2CborderColor%3A%27rgb%2854%2C+162%2C+235%29%27%2CbackgroundColor%3A%27rgba%2854%2C+162%2C+235%2C+.5%29%27%2Cdata%3A%5B71%2C-36%2C-94%2C78%2C98%2C65%2C-61%5D%7D%2C%7Blabel%3A%27My+Third+dataset%27%2CborderColor%3A%27rgb%2875%2C+192%2C+192%29%27%2CbackgroundColor%3A%27rgba%2875%2C+192%2C+192%2C+.5%29%27%2Cdata%3A%5B48%2C-64%2C-61%2C98%2C0%2C-39%2C-70%5D%7D%2C%7Blabel%3A%27My+Third+dataset%27%2CborderColor%3A%27rgb%28255%2C+205%2C+86%29%27%2CbackgroundColor%3A%27rgba%28255%2C+205%2C+86%2C+.5%29%27%2Cdata%3A%5B-58%2C88%2C29%2C44%2C3%2C78%2C-9%5D%7D%5D%7D%2Coptions%3A%7Bresponsive%3Atrue%2Ctitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Chart.js+Line+Chart+-+Stacked+Area%27%7D%2Ctooltips%3A%7Bmode%3A%27index%27%7D%2Chover%3A%7Bmode%3A%27index%27%7D%2Cscales%3A%7BxAxes%3A%5B%7BscaleLabel%3A%7Bdisplay%3Atrue%2ClabelString%3A%27Month%27%7D%7D%5D%2CyAxes%3A%5B%7Bstacked%3Atrue%2CscaleLabel%3A%7Bdisplay%3Atrue%2ClabelString%3A%27Value%27%7D%7D%5D%7D%7D%7D&bkg=white&width=700&height=390&icretina=1&ichm=922e17b749b1ab7fab2a14cb742029dc46e50e658457913a9f548793910d2a0d
    line_chart.toFile('chart.png')
        .catch(() => {

        }); // Promi
}

export default commitChart;