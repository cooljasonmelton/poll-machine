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
                    maxBarThickness: 70,
                    label: ['A'],
                    data: [resultA],
                    backgroundColor: ['#56A3A6'],
                    borderColor: ['gray'],
                    borderWidth: 1
                },
                {
                    maxBarThickness: 70,
                    label: ['B'],
                    data: [resultB],
                    backgroundColor: ['#DB504A'],
                    borderColor: ['gray'],
                    borderWidth: 1
                },
                {
                    maxBarThickness: 70,
                    label: ['C'],
                    data: [resultC],
                    backgroundColor: ['#E3B505'],
                    borderColor: ['gray'],
                    borderWidth: 1
                }
            ]},
            options: {
                title: {
                    display: true,
                    text: "Results"
                },
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
    };

    clickableBtns()
    addChart()
}

run()