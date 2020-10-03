import React, {useState} from 'react';
import './Worksheet.css';

function WorkSheetEdit({submitWord}) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            let word = event.target.querySelector('input[name=word]').value;
            let tag = event.target.querySelector('input[name=tag]').value;
            submitWord(word, tag);
        }}>
            <input
                type="text"
                name = "word"
                className="word-word"
            />
            <input
                type="text"
                name = "tag"
                className="word-tag"
            />
            <input type="submit"/>
        </form>
    );
}

function WorksheetWords({children}) {
    return (
        <div className="wordlist">
            {children.map((W, i) =>
                <p className="word" key={i}>
                    <span className="word-word">{W.word}</span>
                    <span className="word-tag">{W.tag}</span>
                </p>
            )}
        </div>
    )
}

function Worksheet({model}) {
    const [words, setWords] = useState(model.words);

    return (
        <div className="worksheet">
            <header className="worksheet-header">
                <WorkSheetEdit
                    submitWord={(word, tag) => {
                        if (word) {
                            if (tag.toLowerCase() === 'x') {
                                model.removeWords(word);
                            } else if (tag !== '') {
                                model.tagWord(word, tag); // also adds the word if needed
                            } else {
                                model.untagWord(word);
                            }
                            setWords(model.words);
                        }
                    }}
                />
            </header>
            <div className="worksheet-content">
                <WorksheetWords>{words}</WorksheetWords>
            </div>
        </div>
    );
}

export default Worksheet;
