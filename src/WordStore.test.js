import WordStore from "./WordStore";


function expectedWords(...wordList) {
    return wordList
        .map(word => ( (typeof word === 'object') ? word : {word} ));
}


test('new data model has no words', () => {
    const wd = new WordStore();
    expect(wd.words).toEqual([]);
});

test('add a word', () => {
    const wd = new WordStore();
    wd.addWords('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('add multiple words', () => {
    const wd = new WordStore();
    wd.addWords('ABC', 'DEF');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF'));
})

test('add a duplicate word', () => {
    const wd = new WordStore();
    wd.addWords('ABC');
    wd.addWords('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('words are sorted', () => {
    const wd = new WordStore();
    wd.addWords('QWERTY', 'ABC', 'UIOP', 'XYZ', 'DEF', 'FURBY');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF', 'XYZ', 'UIOP', 'FURBY', 'QWERTY'));
});

test('remove a word', () => {
    const wd = new WordStore();
    wd.addWords('ABC', 'DEF');
    wd.removeWords('ABC');
    expect(wd.words).toEqual(expectedWords('DEF'));
});

test('remove multiple words', () => {
    const wd = new WordStore();
    wd.addWords('ABC', 'DEF', 'XYZ');
    wd.removeWords('ABC', 'XYZ');
    expect(wd.words).toEqual(expectedWords('DEF'));
});

test('tag a word', () => {
    const wd = new WordStore();
    wd.addWords('ABC');
    wd.tagWord('ABC', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
});

test('tag a new word', () => {
    const wd = new WordStore();
    wd.tagWord('ABC', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
});

test('untag a word', () => {
    const wd = new WordStore();
    wd.tagWord('ABC', 1);
    wd.untagWord('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('untag a new word', () => {
    const wd = new WordStore();
    wd.untagWord('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('words are capitalized in all operations', () => {
    const wd = new WordStore();
    wd.addWords('abc', 'def');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF'));
    wd.removeWords('def');
    expect(wd.words).toEqual(expectedWords('ABC'));
    wd.tagWord('abc', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
    wd.untagWord('abc');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('trim spaces from words in all operations', () => {
    const wd = new WordStore();
    wd.addWords(' ABC ', ' DEF ');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF'));
    wd.removeWords(' DEF ');
    expect(wd.words).toEqual(expectedWords('ABC'));
    wd.tagWord(' ABC ', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
    wd.untagWord(' ABC ');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('compiled word data does not refer to internal data structures', () => {
    const wd = new WordStore();
    wd.addWords('ABC');
    wd.words[0].tag = 'bad!';
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('changing data dispatches dataChanged event', () => {
    const wd = new WordStore();

    const listener = jest.fn();
    wd.addEventListener('dataChanged', listener);

    // EventTarget does not support subclassing as of jsdom 16.2.0
    // (used by @testing-libary/jest-dom), but we can fake it out by
    // setting the target's _document to a non-null object.
    wd._document = {};

    try {
        listener.mockReset();
        wd.addWords('ABC', 'DEF');
        expect(listener).toHaveBeenCalled();

        listener.mockReset();
        wd.removeWords('DEF');
        expect(listener).toHaveBeenCalled();

        listener.mockReset();
        wd.tagWord('ABC', 1);
        expect(listener).toHaveBeenCalled();

        listener.mockReset();
        wd.untagWord('ABC');
        expect(listener).toHaveBeenCalled();
    } finally {
        wd.removeEventListener('dataChanged', listener);
    }
});
