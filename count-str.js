
const strLorem20 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis adipisci enim quae corrupti optio omnis inventore vel alias possimus pariatur?'


const countingVogals = (vogals) => {
    
    const countChars = vogals.reduce((acc, vogal) => {

        [...strLorem20].forEach((loremChar) => {

             acc[vogal] = acc[vogal] || 0
            loremChar === vogal ? acc[vogal] += 1 : ''
        })

        return acc
    }, {})

    return countChars
}    

const alfabeth = ['A', 'E', 'I', 'O', 'U', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

const alphabFormated = [...alfabeth.join('').toLowerCase()]

log(countingVogals(alphabFormated))
log(alphabFormated)
