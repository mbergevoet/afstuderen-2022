const fs = require('fs');

function addToJson(form, res, course, user) {
    let data = []

    const file = fs.readFileSync('./data/data.json', 'utf-8', (err) => {
        if (err) {
            console.error(err)
        }
    })

    const obj = JSON.parse(file)

    data = obj.users

    data.forEach(student => {
        if (student.id === user) {
            let currentCourse = student.surveys.find(courses => courses.survey === course)
            currentCourse.answers = form
            currentCourse.complete = true
            const completedFrom = { users: data }

            const json = JSON.stringify(completedFrom)

            fs.writeFileSync('./data/data.json', json, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        }
    });
}

module.exports = { addToJson }