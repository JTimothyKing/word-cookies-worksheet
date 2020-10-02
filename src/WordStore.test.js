import WordStore from "./WordStore";


function expectedWords(...wordList) {
    return wordList
        .map(word => ( (typeof word === 'object') ? word : {word} ));
}


test('new data model has no words', () => {
    let wd = new WordStore();
    expect(wd.words).toEqual([]);
});

test('add a word', () => {
    let wd = new WordStore();
    wd.addWords('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('add multiple words', () => {
    let wd = new WordStore();
    wd.addWords('ABC', 'DEF');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF'));
})

test('add a duplicate word', () => {
    let wd = new WordStore();
    wd.addWords('ABC');
    wd.addWords('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('words are sorted', () => {
    let wd = new WordStore();
    wd.addWords('QWERTY', 'ABC', 'UIOP', 'XYZ', 'DEF', 'FURBY');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF', 'XYZ', 'UIOP', 'FURBY', 'QWERTY'));
});

test('remove a word', () => {
    let wd = new WordStore();
    wd.addWords('ABC', 'DEF');
    wd.removeWords('ABC');
    expect(wd.words).toEqual(expectedWords('DEF'));
});

test('remove multiple words', () => {
    let wd = new WordStore();
    wd.addWords('ABC', 'DEF', 'XYZ');
    wd.removeWords('ABC', 'XYZ');
    expect(wd.words).toEqual(expectedWords('DEF'));
});

test('tag a word', () => {
    let wd = new WordStore();
    wd.addWords('ABC');
    wd.tagWord('ABC', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
});

test('tag a new word', () => {
    let wd = new WordStore();
    wd.tagWord('ABC', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
});

test('untag a word', () => {
    let wd = new WordStore();
    wd.tagWord('ABC', 1);
    wd.untagWord('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('untag a new word', () => {
    let wd = new WordStore();
    wd.untagWord('ABC');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

test('words are capitalized in all operations', () => {
    let wd = new WordStore();
    wd.addWords('abc', 'def');
    expect(wd.words).toEqual(expectedWords('ABC', 'DEF'));
    wd.removeWords('def');
    expect(wd.words).toEqual(expectedWords('ABC'));
    wd.tagWord('abc', 1);
    expect(wd.words).toEqual(expectedWords({word: 'ABC', tag: 1}));
    wd.untagWord('abc');
    expect(wd.words).toEqual(expectedWords('ABC'));
});

