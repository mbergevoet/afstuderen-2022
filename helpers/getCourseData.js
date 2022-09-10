function getCourseData(course) {
    const courseData = [
        {
            "course": "kickoff",
            "question": "Hoe vond je de Kick Off? Beoordeel het vak hier",
            "teacherOne": "Koop Reynders",
            "teacherTwo": "Joost Faber"
        },
        {
            "course": "webbappfromscratch",
            "courseName": "Web App From Scratch",
            "question": "Hoe vond je het vak Web App From Scratch? Beoordeel het vak hier",
            "teacherOne": "Suus Ten Voorde",
            "teacherTwo": "Joost Faber"
        },
        {
            "course": "csstotherescue",
            "courseName": "CSS To The Rescue",
            "question": "Hoe vond je het vak CSS To The Rescue? Beoordeel het vak hier",
            "teacherOne": "Sanne 'T Hooft",
            "teacherTwo": "Vasilis Van Gemert"
        },
        {
            "course": "progressivewebapp",
            "courseName": "Progressive Web App",
            "question": "Hoe vond je het vak Progressive Web App? Beoordeel het vak hier",
            "teacherOne": "Joost Faber",
            "teacherTwo": "Declan Rek"
        },
        {
            "course": "browsertechnologies",
            "courseName": "Browser Technologies",
            "question": "Hoe vond je het vak Browser Technologies? Beoordeel het vak hier",
            "teacherOne": "Koop Reynders",
            "teacherTwo": "Peter Paul Koch"
        },
        {
            "course": "weeklynerd",
            "courseName": "Weekly Nerd",
            "question": "Hoe vond je van de Weekly Nerd? Beoordeel het vak hier",
            "teacherOne": "Koop Reynders",
            "teacherTwo": "Joost Faber"
        },
        {
            "course": "realtimeweb",
            "courseName": "Real Time Web",
            "question": "Hoe vond je van het vak Real Time Web? Beoordeel het vak hier",
            "teacherOne": "Unknown",
            "teacherTwo": "Unknown"
        },
    ];

    return courseData.map(entry => {
        if (entry.course === course) {
            return entry;
        }
    }).filter(entry => entry !== undefined)
};

module.exports = { getCourseData };