const horroscopeContents = {
    startSentences: ['Perhaps', 'Greeting','There may be', 'Meeting'],
    middleSentence: ['a stranger', 'a new love who'],
    endSentence: ['will help you reach your goals', 'causes a major upset']
}

const randomPart = (object, sentencePart) => {
    return object[sentencePart][Math.floor(Math.random()* object[sentencePart].length)]
};

const fortune = (starSign='virgo') => {
    let start = randomPart(horroscopeContents, 'startSentences') 
    let middle = randomPart(horroscopeContents, 'middleSentence')
    let end = randomPart(horroscopeContents, 'endSentence')
    return `${start} ${middle} ${end}`
}
console.log(fortune())
//console.log(randomPart(horroscopeContents, 'startSentences'))