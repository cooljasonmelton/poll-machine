const run = () =>  {

    // VOTE BTN ARR
    const btnArr = [...document.getElementsByClassName('option')];
    // RESULT TEXT ARR
    const txtArr = [...document.getElementsByClassName('results')];
    // CHART CANVAS
    let chartCvs = document.getElementById('r-chart')

    // INITIAL VOTE COUNT
    let resultA = 0
    let resultB = 0
    let resultC = 0

    // ADD CLICK LISTENER TO BTNS
    const clickableBtns = () => {
        return btnArr.map(btn => {
            return btn.addEventListener('click', () => updateVote(btn.id.charAt(0)))
        })
    }




    const updateVote = (choice) => {
        // ADD ONE TO CHOICE
        if (choice === 'a') resultA++
        if (choice === 'b') resultB++
        if (choice === 'c') resultC++

        // UPDATE RESULT TEXT
        txtArr.map(txt=> {
            let ch = txt.id.charAt(0)
            if (ch === 'a') return txt.innerHTML = resultA
            if (ch === 'b') return txt.innerHTML = resultB
            if (ch === 'c') return txt.innerHTML = resultC
        })

        // UPDATE CHART DATA
        newChart.data.datasets[0].data = [resultA]
        newChart.data.datasets[1].data = [resultB]
        newChart.data.datasets[2].data = [resultC]
        newChart.update()
    }

    // CHART SPECS
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
            // TURN OFF ANNOYING HOVER POPUP
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