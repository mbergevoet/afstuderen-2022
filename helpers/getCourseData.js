function getQuestionData(question) {
    const questionData = [
        {
            "question": "1",
            "state": "false"
        },
        {
            "question": "2",
            "state": "false"
        },
        {
            "question": "3",
            "state": "false"
        },
        {
            "question": "4",
            "state": "false"
        },
        {
            "question": "5",
            "state": "false"
        }
    ];

    return questionData.map(entry => {
        if (entry.course === course) {
            return entry;
        }
    }).filter(entry => entry !== undefined)
};

module.exports = { getQuestionData };