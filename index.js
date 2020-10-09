const run = () =>  {
    const btnArr = [...document.getElementsByClassName('option')];
    const txtArr = [...document.getElementsByClassName('results')];

    let resultA = 0
    let resultB = 0
    let resultC = 0

    const updateVote = choice => {
        if (choice === 'a') resultA++
        if (choice === 'b') resultB++
        if (choice === 'c') resultC++
        return txtArr.map(txt=> {
            let ch = txt.id.charAt(0)
            if (ch === 'a') return txt.innerHTML = `A:${resultA}`
            if (ch === 'b') return txt.innerHTML = `B:${resultB}`
            if (ch === 'c') return txt.innerHTML = `C:${resultC}`
        })
    }

    const clickableBtns = () => {
        return btnArr.map(btn => {
            return btn.addEventListener('click', () => updateVote(btn.id.charAt(0)))
        })
    }

    clickableBtns()
}

run()