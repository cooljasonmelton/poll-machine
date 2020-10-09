const run = () =>  {
    const btnArr = [...document.getElementsByClassName('option')];
    const txtArr = [...document.getElementsByClassName('results')];
    const chartCvs = document.getElementById('r-chart')

    let resultA = 0
    let resultB = 0
    let resultC = 0

    const updateVote = choice => {
        if (choice === 'a') resultA++
        if (choice === 'b') resultB++
        if (choice === 'c') resultC++
        txtArr.map(txt=> {
            let ch = txt.id.charAt(0)
            if (ch === 'a') return txt.innerHTML = `A:${resultA}`
            if (ch === 'b') return txt.innerHTML = `B:${resultB}`
            if (ch === 'c') return txt.innerHTML = `C:${resultC}`
        })
        addChart()
    }

    const clickableBtns = () => {
        return btnArr.map(btn => {
            return btn.addEventListener('click', () => updateVote(btn.id.charAt(0)))
        })
    }

    const addChart = () => {
        return new Chart(chartCvs, {
            type: 'bar',
            data: {
                datasets: [{
                    maxBarThickness: 100,
                    label: ['A'],
                    data: [resultA],
                    backgroundColor: ['rgba(14, 110, 184)'],
                    borderColor: ['rgba(135, 108, 108)'],
                    borderWidth: 1
                },
                {
                    maxBarThickness: 100,
                    label: ['B'],
                    data: [resultB],
                    backgroundColor: ['rgba(14, 110, 184)'],
                    borderColor: ['rgba(135, 108, 108)'],
                    borderWidth: 1
                },
                {
                    maxBarThickness: 100,
                    label: ['C'],
                    data: [resultC],
                    backgroundColor: ['rgba(14, 110, 184)'],
                    borderColor: ['rgba(135, 108, 108)'],
                    borderWidth: 1
                }
            ]},
            options: {
                title: {
                    display: true,
                    text: "Results"
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            display: true,
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            display: true,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };

    clickableBtns()
    sampleChart()
}

run()