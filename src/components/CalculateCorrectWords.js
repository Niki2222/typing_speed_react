export default function CalculateCorrectWords({paragraph, text, getCorrectWords}) {
    const words = text.split(' ');
    const paragraphWords = paragraph.split(' ');
    let correctCount = 0;

    words.forEach((word, index) => {
      if (word === paragraphWords[index]) {
        ++correctCount;
      }
    });
    console.log(correctCount);
    getCorrectWords(correctCount);
  }