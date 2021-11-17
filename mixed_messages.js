const horroscopeContents = {
    startSentences: ['Perhaps', 'Greeting','There may be', 'Meeting'],
    middleSentence: ['a stranger', 'a new love'],
    endSentence: ['will help you reach your goals',]
}

const randomPart = (object, sentencePart) => {
    return object[sentencePart][Math.floor(Math.random()* object[sentencePart].length)]
};

const fortune = (starSign) => {
    let start = randomPart(horroscopeContents, 'startSentences') 
    let middle = randomPart(horroscopeContents, 'middleSentences')
    let end = randomPart(horroscopeContents, 'endSentences')
    return `${start} ${middle} ${end}`
}
console.log(randomPart(horroscopeContents, 'startSentences'))