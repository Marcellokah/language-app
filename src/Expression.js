import React, { useState } from 'react';
import expressions from './data';
import { BiLike, BiDislike } from 'react-icons/bi';

const Expression = () => {
    const randomExpression = Math.floor(Math.random() * expressions.length);

    // --- States ---

    const [index, setIndex] = useState(randomExpression);
    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(0);
    const [inCorrect, setIncorrect] = useState(0);
    const [isEnglish, setIsEnglish] = useState(true);

    // --- Destructure data ---

    const { serbian, english, image } = expressions[index];

    // --- Generate new expression ---

    const handleSubmit = (e) => {
        e.preventDefault();

        setIndex(randomExpression);

        if (randomExpression === index && index > 10) {
            setIndex(randomExpression - 1);
        }
        if (randomExpression === index && index <= 10) {
            setIndex(randomExpression + 1);
        }

        if (correct > 11) {
            handleReset();
        }

        handleAnswer();
    }

    // --- Input ---

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // --- Manage score ---

    const handleAnswer = () => {
        const randomNumber = Math.floor(Math.random() * 2);

        if (randomNumber === 1) {
            setIsEnglish(true);
            if (english.trim() === input.trim()) {
                console.log('correct serbian');
                console.log(index);
                setCorrect(correct + 1);
                setInput('');
            } else if (input.trim() !== english.trim()) {
                console.log('incorrect serbian');
                console.log(index);
                setIncorrect(inCorrect + 1);
                setInput('');
            }
        } else {
            setIsEnglish(false);
            if (serbian.trim() === input.trim()) {
                console.log('correct english');
                console.log(index);
                setCorrect(correct + 1);
                setInput('');
            } else if (input.trim() !== serbian.trim()) {
                console.log('incorrect english');
                console.log(index);
                setIncorrect(inCorrect + 1);
                setInput('');
            }
        }
    }

    // --- Reset ---

    const handleReset = () => {
        setInput('');
        setIncorrect(0);
        setCorrect(0);
    }

    // --- DOM ---

    return (
        <article className='expression'>
            <img className='expression-img' src={image} alt={english} />
            <p className='expression-word'>{isEnglish ? english : serbian}</p>
            <form onSubmit={handleSubmit}>
                <input type='text' id='word' onChange={handleChange} value={input}></input>
                <button type='submit'>Let's see</button>
            </form>
            <div className='counter'>
                <div className='correct-counter'>
                    <BiLike></BiLike>
                    <span>:{correct}/{correct + inCorrect}</span>
                </div>
                <div className='incorrect-counter'>
                    <BiDislike></BiDislike>
                    <span>:{inCorrect}/{correct + inCorrect}</span>
                </div>
            </div>
        </article>
    );
}

export default Expression;