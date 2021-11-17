const horroscopeContents = {
    startSentences: ['Perhaps forgetting', 'Greeting','Today', 'Meeting', 'Putting to oneside' ],
    middleSentence: ['a stranger', 'a new love', 'Jupiter', 'Mars', 'your friends' ],
    endSentence: ['helps you reach your goals', 'causes a major upset', 'leads to new opportunities', 'can be the start of something better']
}

const randomPart = (object, sentencePart) => {
    return object[sentencePart][Math.floor(Math.random()* object[sentencePart].length)]
};

const fortune = (starSign='Virgo') => {
    let start = randomPart(horroscopeContents, 'startSentences') 
    let middle = randomPart(horroscopeContents, 'middleSentence')
    let end = randomPart(horroscopeContents, 'endSentence')
    return `${starSign}: ${start} ${middle} ${end}.`
}
console.log(fortune())
//console.log(randomPart(horroscopeContents, 'startSentences'))