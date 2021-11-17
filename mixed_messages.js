const horroscopeContents = {
    startSentences: ['If you’ve been', 'Greeting','There may be', 'Meeting'],
    middleSentence: ['a stranger', 'a new love'],
    endSentence: ['to help you reach your goals',]
}

const randomPart = (object, sentencePart) => {
    console.log(object[sentencePart])
    let randomPart = object[sentencePart][Math.floor(Math.random()* object[sentencePart].length)]
    return randomPart

    //console.log(Math.floor(Math.random()* object[sentencePart].length))
}
//console.log(horroscopeContents.startSentences)
console.log(randomPart(horroscopeContents, 'startSentences'))