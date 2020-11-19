const url = "http://api.coindesk.com/v1/bpi/historical/close.json";
const startDate = document.getElementById('startDate')
const endDate = document.getElementById('endDate')
const submit = document.getElementById('search')


function DrawChart (response){
    console.log(response)
    let labels =Object.keys(response.data.bpi)
    console.log(labels)
    let data = Object.values(response.data.bpi)
    console.log(data)
    const ctx = document.getElementById('myChart');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin Price Index',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data,
            }]
        },
        options: {}
    });
}

axios.get(url).then(DrawChart).catch(err => console.log("ups something went wrong"));



submit.addEventListener('click', () => {
    console.log("HiClick")
    console.log(startDate.value)
    let historicURL = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate.value}&end=${endDate.value}`
    axios.get(historicURL).then(DrawChart).catch(err =>console.log(err))
  }) 