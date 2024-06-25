import { useEffect, useMemo, useState } from "react";
import styles from "./App.module.scss";
import questions from "./assets/questions_aws_practitioner";

const randomNumber = (max) => {
  let random = Math.random();
  random = random * max;
  random = Math.trunc(random);
  return random;
};

const NUM_TO_LETTER = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
};

function App() {
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [finish, setFinish] = useState(false);

  const questionsBase = useMemo(
    () => questions.map((question, index) => ({ ...question, id: index + 1 })),
    []
  );

  const { correct, errors } = useMemo(
    () => ({
      correct: questionsAnswered.filter((answer) => answer.correctAnswer)
        .length,
      errors: questionsAnswered.filter((answer) => !answer.correctAnswer)
        .length,
    }),
    [questionsAnswered]
  );

  const handlerResponse = (option) => {
    if (questionsAnswered.some((answer) => answer.id == currentQuestion?.id))
      return;
    setQuestionsAnswered([
      ...questionsAnswered,
      {
        ...currentQuestion,
        correctAnswer: option.position == currentQuestion?.answer.position,
        answeredUser: option.position,
      },
    ]);
  };

  const changeQuestion = () => {
    const missingQuestions = questionsBase.filter(
      (question) =>
        !questionsAnswered.some((answer) => answer.id == question.id)
    );
    if (missingQuestions.length == 0) return setFinish(true);
    const idsRemaining = missingQuestions.map((question) => question.id);
    const random = randomNumber(idsRemaining.length);
    const nexQuestion = missingQuestions.find(
      (question) => question.id == idsRemaining[random]
    );
    setCurrentQuestion({ ...nexQuestion });
  };

  const verifyStyleAnswer = (option) => {
    const currentQuestionWasAnswered = questionsAnswered.some(
      (answer) => answer.id == currentQuestion?.id
    );
    if (!currentQuestionWasAnswered) return "";
    const styleOption =
      option.position == currentQuestion.answer.position
        ? styles.correct_answer
        : styles.wrong_answer;
    return `${styleOption} ${
      questionsAnswered.find((answer) => answer.id == currentQuestion.id)
        .answeredUser == option.position && styles.option_selected
    }`;
  };

  useEffect(() => {
    const random = randomNumber(questionsBase.length);
    setCurrentQuestion(
      questionsBase.find((questionBase) => questionBase.id == random)
    );
  }, [questionsBase]);

  return (
    <div className={styles.container_app}>
      <div
        className={styles.questionnaire}
        style={{ justifyContent: finish && "center" }}
      >
        <div className={styles.header}>
          <h2>Cantidad de preguntas : {questionsBase.length}</h2>
          <h2>Cantidad de preguntas resueltas : {correct + errors}</h2>
          <h2>Cantidad de acertadas : {correct}</h2>
          <h2>Cantidad de erradas : {errors}</h2>
        </div>
        {!finish && (
          <>
            <button
              disabled={
                !questionsAnswered.some(
                  (answer) => answer.id == currentQuestion?.id
                )
              }
              onClick={changeQuestion}
              className={styles.button}
            >
              Siguiente
            </button>
            {currentQuestion?.question && (
              <div className={styles.question}>{currentQuestion.question}</div>
            )}
            <div className={styles.container_options}>
              {currentQuestion?.options.map((option) => (
                <label
                  onClick={() => handlerResponse(option)}
                  className={`${styles.option} ${verifyStyleAnswer(
                    option
                  )} ${verifyStyleAnswer(option)}`}
                  key={`${option.option}-${currentQuestion?.id}`}
                >
                  {`${NUM_TO_LETTER[option.position]} ) ${option.option}`}
                </label>
              ))}
              {questionsAnswered.some(
                (answer) => answer.id == currentQuestion?.id
              ) && (
                <span className={styles.justification}>
                  {currentQuestion.justification}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
