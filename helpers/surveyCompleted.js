const fs = require('fs');

function surveyCompleted(user) {

    const file = fs.readFileSync('./data/data.json', 'utf-8', (err) => {
        if (err) {
            console.error(err)
        }
    })

    const obj = JSON.parse(file)

    data = obj.users

    return data.map(student => {
        if (student.id === user) {
            return student.surveys
        }
    }).filter(entry => entry !== undefined);

}

module.exports = { surveyCompleted }