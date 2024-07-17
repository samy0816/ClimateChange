import React, {useState} from 'react';
import SplineWrapper from "../components/SplineWrapper.tsx";
import Layout from "../components/Layout.tsx";
import Title from "../components/Title.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import Select from "../components/Select.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import questionsLevel1 from '../json/questionsLevel1.json';
import questionsLevel2 from '../json/questionsLevel2.json';
import questionsLevel3 from '../json/questionsLevel3.json';
import { addLog } from '../../logging.ts';

type Answers = {
    [key: number]: string;
};

type Correctness = {
    [key: number]: boolean | null;
};

const Quiz: React.FC = () => {
    const [level, setLevel] = useState<number | null>(null);
    const [answers, setAnswers] = useState<Answers>({});
    const [correctness, setCorrectness] = useState<Correctness>({});
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [showReason, setShowReason] = useState<boolean>(false);
    const [showSummary, setShowSummary] = useState<boolean>(false);

    const handleSelect = (questionId: number, answer: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));

        let currentQuestionText = "";
        if (level === 1) {
            currentQuestionText = questionsLevel1[currentQuestion].question;
        } else if (level === 2) {
            currentQuestionText = questionsLevel2[currentQuestion].question;
        } else if (level === 3) {
            currentQuestionText = questionsLevel3[currentQuestion].question;
        }

        addLog({
            page: window.location.pathname,
            element: "select",
            event: "change",
            name: currentQuestionText,
            value: answer,
            timestamp: new Date
        })
    };

    const checkAnswers = () => {
        const questions = level === 1 ? questionsLevel1 : level === 2 ? questionsLevel2 : questionsLevel3;
        const question = questions[currentQuestion];
        const isCorrect = answers[question.id] === question.answer;
        setCorrectness(prevCorrectness => ({
            ...prevCorrectness,
            [question.id]: isCorrect
        }));

        if (isCorrect) {
            setShowReason(true);
        }

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: 'check',
            value: null,
            timestamp: new Date
        })
    };

    const nextQuestion = () => {
        setCurrentQuestion(prev => prev + 1);
        setShowReason(false);

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: 'next',
            value: null,
            timestamp: new Date
        })
    };

    const resetQuiz = () => {
        setLevel(null);
        setAnswers({});
        setCorrectness({});
        setCurrentQuestion(0);
        setShowReason(false);
        setShowSummary(true);
    };

    if (showSummary) {
        const questions = level === 1 ? questionsLevel1 : level === 2 ? questionsLevel2 : questionsLevel3;

        return (
            <Layout>
                <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                    <Title>Quiz Summary</Title>
                    {questions.map((question) => {
                        return (
                            <div key={question.id} className="space-y-2">
                                <p className="font-bold">{question.question}</p>
                                <p>Correct Answer: {question.answer}</p>
                                    <p className="text-green-500">Reason: {question.reason}</p>
                                <hr className="my-2"/>
                            </div>
                        );
                    })}
                    <div className="flex justify-end">
                        <PrimaryButton text="Restart Quiz" onClick={() => setShowSummary(false)}/>
                    </div>
                </div>
                <div className="w-3/5 fixed pl-8 top-0 right-0 h-screen">
                    <SplineWrapper sceneUrl="https://prod.spline.design/OOaI4l4Upc-tbdc7/scene.splinecode"/>
                </div>
            </Layout>
        );
    }

    if (level === null) {

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "quiz",
            value: null,
            timestamp: new Date
        })

        return (
            <Layout>
                <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-8 scrollbar-hide">
                    <Title>Select Quiz Level</Title>
                    <div className="grid grid-cols-1 gap-4">
                        <PrimaryButton text="Level 1 - Introduction" onClick={() => {
                            addLog({
                                page: window.location.pathname,
                                element: "button",
                                event: "click",
                                name: "level1",
                                value: null,
                                timestamp: new Date
                            })
                            setLevel(1)
                        }}/>
                        <PrimaryButton text="Level 2 - Technical Terms" onClick={() => {
                            addLog({
                                page: window.location.pathname,
                                element: "button",
                                event: "click",
                                name: "level2",
                                value: null,
                                timestamp: new Date
                            })
                            setLevel(2)
                        }}/>
                        <PrimaryButton text="Level 3 - Misconceptions & PAIR-C" onClick={() => {
                            addLog({
                                page: window.location.pathname,
                                element: "button",
                                event: "click",
                                name: "level3",
                                value: null,
                                timestamp: new Date
                            })
                            setLevel(3)
                        }}/>
                    </div>
                </div>
                <div className="w-3/5 fixed pl-8 top-0 right-0 h-screen">
                    <SplineWrapper sceneUrl="https://prod.spline.design/OOaI4l4Upc-tbdc7/scene.splinecode"/>
                </div>
            </Layout>
        );
    }

    const questions = level === 1 ? questionsLevel1 : level === 2 ? questionsLevel2 : questionsLevel3;
    const questionsTitle =
        level === 1 ? 'Level 1 - Introduction' :
            level === 2 ? 'Level 2 - Technical Terms' :
                level === 3 ? 'Level 3 - Misconceptions & PAIR-C' : '';
    const currentQuestionData = questions[currentQuestion];

    return (
        <Layout>
            <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                <Title>{questionsTitle}</Title>
                <div className="space-y-4 pt-4">
                    <Select
                        key={currentQuestionData.id}
                        question={currentQuestionData.question}
                        options={currentQuestionData.options}
                        onSelect={answer => handleSelect(currentQuestionData.id, answer)}
                        disabled={showReason}
                        correct={correctness[currentQuestionData.id] === undefined ? null : correctness[currentQuestionData.id]}
                        reason={currentQuestionData.reason}
                        hint={currentQuestionData.hint}
                        category={currentQuestionData.category}
                    />
                    <div className="flex justify-end pt-4 space-x-4">
                        {!showReason && (
                            <SecondaryButton text="Check" onClick={checkAnswers}/>
                        )}
                        {showReason && currentQuestion !== questions.length - 1 && (
                            <PrimaryButton text="Next question" onClick={nextQuestion}/>
                        )}
                        {currentQuestion === questions.length - 1 && showReason && (
                            <PrimaryButton text="Finish" onClick={resetQuiz}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-3/5 fixed pl-8 top-0 right-0 h-screen">
                <SplineWrapper sceneUrl="https://prod.spline.design/OOaI4l4Upc-tbdc7/scene.splinecode"/>
            </div>
        </Layout>
    );
};

export default Quiz;