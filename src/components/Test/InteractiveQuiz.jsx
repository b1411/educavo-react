import { useState } from "react";
import { Modal } from "react-bootstrap";
import Parse from "parse";
import { useRootContext } from "../Context/context";
import { useEffect } from "react";
import { useRef } from "react";

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
    let [score, setScore] = useState(0);
    const [showModal, setShowModal] = useState(false);
    let courseId = useRootContext().courseId;
    const [accessToTest, setAccessToTest] = useState(true);
    const formRef = useRef(null);

    // useEffect(() => {
    //     if (Array.from(Parse.User.current().get("acceptedTests"))?.includes(courseId)) {
    //         setShowModal(true);
    //     }
    // }, [courseId]);

    async function handleQuiz(e) {
        e.preventDefault();

        const formData = new FormData(formRef.current);
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
                    setScore((prev) => prev + 1);
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
                    setScore((prev) => prev + 1);
                }
            }
        });

        setShowModal(true);

        if (score >= (quiz.length - 1) / 2 && score <= quiz.length - 1) {
            let user = Parse.User.current();
            let userTests = user.get("acceptedTests");
            Array.from(userTests)?.push(courseId);
            user.set("acceptedTests", userTests);
            await user.save();
            setAccessToTest(false);
        }
    }

    return (
        <>
            {accessToTest ? (
                <>
                    <div className="quiz">
                        <form onSubmit={(e) => handleQuiz(e)} ref={formRef}>
                            {quiz.slice(0, quiz.length - 1).map((question, index) =>
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
                </>
            ) : (
                "Вы уже прошли тест!"
            )}
            <Modal show={showModal} centered keyboard>
                <Modal.Body
                    style={{
                        padding: "50px 0 0 0",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <i
                        className="fa fa-times close-icon"
                        onClick={() => {
                            setShowModal(false);
                            setScore(0);
                        }}
                    ></i>
                    {score >= 0 && score <= (quiz.length - 1) / 2 ? (
                        <>
                            <i
                                className="fa fa-times-circle-o fa-5x"
                                style={{
                                    color: "red",
                                    marginBottom: "15px",
                                }}
                            ></i>
                            <h4>Вы не прошли тест</h4>
                        </>
                    ) : (
                        <>
                            <i
                                className="fa fa-check-circle-o fa-5x"
                                style={{
                                    color: "green",
                                    marginBottom: "15px",
                                }}
                            ></i>
                            <h4>Вы прошли тест</h4>
                            <p>
                                Вам доступны{" "}методические пособия:<br/>
                                {
                                    quiz[quiz.length - 1].manualLinks.map((el, index) => {
                                        return (
                                            <a href={"https://rcos.kz/assets/" + el} download>
                                                {index + 1}{" "}
                                            </a>
                                        )
                                    })
                                }
                            </p>
                        </>
                    )}
                    <p>
                        Ваш результат: {score} из {quiz.length - 1}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Quiz;
