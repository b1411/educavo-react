function QuestionWithOneAnswer({ question, answerId }) {
    return (
        <div className="question-with-one-answer">
            <h3>{`${answerId + 1}. ` + question.question}</h3>
            <div className="answers">
                {question.answers.map((answer, index) => (
                    <div className="answer" key={index}>
                        <label htmlFor={answer}>
                            <input
                                type="radio"
                                name={question.question}
                                id={answer}
                                value={answer}
                            />
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

function QuestionWithMultipleAnswers({ question, answerId }) {
    return (
        <div className="question-with-multiple-answers">
            <h3>{`${answerId + 1}. ` + question.question}</h3>
            <div className="answers">
                {question.answers.map((answer, index) => (
                    <div className="answer" key={index}>
                        <label htmlFor={answer}>
                            <input
                                type="checkbox"
                                name={question.question}
                                id={answer}
                                value={answer}
                            />
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Quiz({ quiz }) {
    let score = 0;
    function handleQuiz(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const answers = {};
        for (let [key, value] of formData.entries()) {
            if (answers[key]) {
                answers[key].push(value);
            } else {
                answers[key] = [value];
            }
        }
        quiz.forEach((question) => {
            const userAnswers = answers[question.question] || [];

            if (question.type === "one-answer") { 
                if (question.correctAnswer === userAnswers[0]) {
                    score++;
                }
            } else if (
                question.type === "multiple-answers" &&
                userAnswers?.length === question.correctAnswers.length
            ) {
                let correct = true;
                question.correctAnswers.forEach((correctAnswer) => {
                    if (!userAnswers?.includes(correctAnswer)) {
                        correct = false;
                    }
                });
                if (correct) {
                    score++;
                }
            }
        });

        setTimeout(() => {
            console.log(score);
            alert(score);

            score = 0;
        }, 0);
    }

    return (
        <div className="quiz">
            <form onSubmit={(e) => handleQuiz(e)} method="post">
                {quiz.map((question, index) =>
                    question.type === "one-answer" ? (
                        <QuestionWithOneAnswer
                            question={question}
                            key={index}
                            answerId={index}
                        />
                    ) : (
                        <QuestionWithMultipleAnswers
                            question={question}
                            key={index}
                            answerId={index}
                        />
                    ),
                )}
                <button type="submit" className="readon orange-btn">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default Quiz;
