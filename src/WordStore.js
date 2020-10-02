/**
 * The data model for the Word Cookies Worksheet.
 */
class WordStore {
    #wordsData = [];

    _findWord(word) {
        return this.#wordsData.find((W) => (W.word === word));
    }

    /**
     * @typedef {Object} WordData a structure containing all the information about a word
     * @property {string} word
     * @property {string|number} [tag]
     */

    /**
     * Gets the compiled list of word data.
     *
     * The words are sorted first by length and then alphabetically.
     *
     * @returns {WordData[]} sorted list of word structures
     */
    get words() {
        return this.#wordsData.sort(
            (a, b) =>
                (a.word.length - b.word.length)
                || (a.word.localeCompare(b.word))
        );
    }

    /**
     * Adds words to the list.
     * @param {string} words
     */
    addWords(...words) {
        for (let word of words) {
            word = word.toLocaleUpperCase();
            let data = this._findWord(word);
            if (data === undefined) {
                this.#wordsData.push({word});
            }
        }
    }

    /**
     * Removes words from the list.
     * @param {string} words
     */
    removeWords(...words) {
        for (let word of words) {
            word = word.toLocaleUpperCase();
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
        word = word.toLocaleUpperCase();
        let data = this._findWord(word);
        if (data === undefined) {
            this.#wordsData.push({word, tag});
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
        word = word.toLocaleUpperCase();
        let data = this._findWord(word);
        if (data === undefined) {
            this.addWords(word);
        } else {
            delete data.tag;
        }
    }
}

export default WordStore;
