export default function CalculateCorrectWords(props) {
    const {paragraph, inputText, setInputText, setIsTimerStarted, 
        setCorrectWords, isTimerStarted, timer} = props;

    function handleInputChange(e) {
        if (!isTimerStarted) {
            setIsTimerStarted(true);
        }
        setInputText(e.target.value);
        calculateCorrectWords(e.target.value);
    }

    function calculateCorrectWords(text) {
        const words = text.split(' ');
        const paragraphWords = paragraph.split(' ');
        let correctCount = 0;

        words.forEach((word, index) => {
            if (word === paragraphWords[index]) {
            ++correctCount;
            }
        });
        setCorrectWords(correctCount);
    }

    return (
        <textarea 
            cols="60" 
            rows="10" 
            value={inputText}
            onChange={handleInputChange}
            disabled={timer === 0}
            autoFocus
        ></textarea>
    );
}