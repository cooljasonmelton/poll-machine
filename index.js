const run = () =>  {
    const btnArr = [...document.getElementsByClassName('option')];
    const txtArr = [...document.getElementsByClassName('results')];
    let chartCvs = document.getElementById('r-chart')

    let resultA = 0
    let resultB = 0
    let resultC = 0

    const clickableBtns = () => {
        return btnArr.map(btn => {
            return btn.addEventListener('click', () => updateVote(btn.id.charAt(0), newChart))
        })
    }

    const updateVote = (choice, chart) => {
        if (choice === 'a') resultA++
        if (choice === 'b') resultB++
        if (choice === 'c') resultC++
        txtArr.map(txt=> {
            let ch = txt.id.charAt(0)
            if (ch === 'a') return txt.innerHTML = resultA
            if (ch === 'b') return txt.innerHTML = resultB
            if (ch === 'c') return txt.innerHTML = resultC
        })

        chart.data.datasets[0].data = [resultA]
        chart.data.datasets[1].data = [resultB]
        chart.data.datasets[2].data = [resultC]
        chart.update()
    }

    const newChart = new Chart(chartCvs, {
        type: 'bar',
        data: {
            datasets: [{
                maxBarThickness: 70,
                label: 'A',
                data: [resultA],
                backgroundColor: ['#56A3A6'],
                borderColor: ['gray'],
                borderWidth: 1
            },
            {
                maxBarThickness: 70,
                label: 'B',
                data: [resultB],
                backgroundColor: ['#DB504A'],
                borderColor: ['gray'],
                borderWidth: 1
            },
            {
                maxBarThickness: 70,
                label: 'C',
                data: [resultC],
                backgroundColor: ['#E3B505'],
                borderColor: ['gray'],
                borderWidth: 1
            }
        ]},
        options: {
            title: {
                display: true,
                text: ["Results"]
            },
            tooltips: { enabled: false },
            scales: {
                yAxes: [{
                    ticks: {
                        display: true,
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    clickableBtns()
}

run()