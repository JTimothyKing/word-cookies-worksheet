/**
 * @typedef {Object} WordData a structure containing all the information about a word
 * @property {string} word
 * @property {string|number} [tag]
 */

/**
 * The data model for the Word Cookies Worksheet.
 */
class WordStore {
    // An array of WordData, sorted by word length and then alphabetically.
    #wordsData = [];

    // Validates an array of word strings, returning the validated words.
    _validated(words) {
        return words.map(word => word.trim().toLocaleUpperCase());
    }

    // Finds the WordData for a given word in the database.
    _find(word) {
        return this.#wordsData.find((W) => (W.word === word));
    }

    // Inserts a new WordData in the #wordsData.
    _insert(newWordData) {
        this.#wordsData.push(newWordData);
        this.#wordsData = this.#wordsData.sort(
            (a, b) =>
                (a.word.length - b.word.length)
                || (a.word.localeCompare(b.word))
        );
    }

    /**
     * Gets the compiled list of word data.
     *
     * The words are sorted first by length and then alphabetically.
     *
     * The data returned is cloned from any internal data structures,
     * so unique objects are returned each time this accessor is called.
     *
     * @returns {WordData[]} sorted list of word structures
     */
    get words() {
        return this.#wordsData.map(W => ({...W}));
    }

    /**
     * Adds words to the list.
     * @param {string} words
     */
    addWords(...words) {
        for (const word of this._validated(words)) {
            if (this._find(word) === undefined) {
                this._insert({word});
            }
        }
    }

    /**
     * Removes words from the list.
     * @param {string} words
     */
    removeWords(...words) {
        for (const word of this._validated(words)) {
            this.#wordsData = this.#wordsData.filter((W) => (W.word !== word));
        }
    }

    /**
     * Tags a word.
     *
     * If the word does not yet exist in the database,
     * it is added with the given tag attached.
     *
     * @param {string} word
     * @param {string|number} tag
     */
    tagWord(word, tag) {
        [word] = this._validated([word]);
        const data = this._find(word);
        if (data === undefined) {
            this._insert({word, tag});
        } else {
            data.tag = tag;
        }
    }

    /**
     * Removes any tags from the given word.
     *
     * If the word does not yet exist in the database,
     * it is added with no tag attached.
     *
     * @param {string} word
     */
    untagWord(word) {
        [word] = this._validated([word]);
        const data = this._find(word);
        if (data === undefined) {
            this._insert({word});
        } else {
            delete data.tag;
        }
    }
}

export default WordStore;
