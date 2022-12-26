export default quizdata = {
    Hygiene: [
        {
            question: "How long should you brush your teeth for",
            options: ["2 minutes", "1 hour", "10 seconds", "10 minutes"],
            correct_option: "2 minutes"
        },
        {
            question: "What colour should your teeth be?",
            options: ["Red", "Pink", "White", "Blue"],
            correct_option: "White"
        },
        {
            question: "How often should you floss?",
            options: ["Once a month", "Every day", "2-3 Time a week", "Never"],
            correct_option: "2 -3 Times a week"
        }
    ],
    BrushingTeeth: [
        {
            question: "Test Question for brushing teeth",
            options: ["1", "2", "3", "4"],
            correct_option: "3"
        },
    ],
    ToothHealth: [
        {
            question: "Test question for ToothHealth",
            options: ["1", "3", "63", "4"],
            correct_option: "63"
        }
    ],
    GumHealth: [
        {
            question: "Test question for GumHealth",
            options: ["21", "32", "73", "24"],
            correct_option: "24"
        }
    ],
    ToothDecay: [
        {
            question: "Test question for ToothDecay",
            options: ["11", "33", "3", "52"],
            correct_option: "11"
        }
    ],
    HowToFloss: [
        {
            question: "Test question for HowToFloss",
            options: ["111", "43", "33", "1"],
            correct_option: "111"
        }
    ]


};

// https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html 
function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

export function getDailyQuiz() {
    const QUIZ_SIZE = 4;

    let quizzes = [];
    // Get each question an put it in quizzes
    Object.keys(quizdata).forEach((quiz) => quizzes.push(...quizdata[quiz]));
    while (quizzes.length > QUIZ_SIZE) {
        quizzes.splice(Math.floor(Math.random() * quizzes.length), 1);
    }
    quizzes = shuffleArray(quizzes);

    return quizzes;
}