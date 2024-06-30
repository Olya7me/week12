function generateRandomWord() {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъэьэюя'

    const index1 = Math.floor(Math.random() * alphabet.length)
    const index2 = Math.floor(Math.random() * alphabet.length)
    const index3 = Math.floor(Math.random() * alphabet.length)
    const index4 = Math.floor(Math.random() * alphabet.length)

    const randomWord = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4]

    console.log('Слуйное слово из четырех букв: ', randomWord)
}
generateRandomWord()