const { default: axios } = require("axios");

const busStop = 18141
const api = `https://arrivelah2.busrouter.sg/?id=${busStop}`;

async function loadBusData() {
    console.log("START");
    axios.get(api).then(response => {
        console.log(response.data.services[0].next.time)
    });
    console.log("END");}
loadBusData();