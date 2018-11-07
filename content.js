const quizJson = $("[data-react-class='challenge/Challenge']");
const hasQuiz = (quizJson.attr('data-react-props')) ? true : false;
const questions = (hasQuiz) ? JSON.parse(quizJson.attr('data-react-props'))["challenge"]["questions"] : undefined;
chrome.runtime.sendMessage({
    hasQuiz : hasQuiz,
    questions : questions
});

