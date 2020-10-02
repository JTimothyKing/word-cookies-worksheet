# Word Cookies Worksheet

This is a small in-browser app that displays a worksheet for completing
the Daily Puzzle and "butterfly" levels in the game Word Cookies!® by
[BitMango](https://www.bitmango.com/). There may be other word games
that could similarly be helped by this worksheet.

This app doesn't solve the puzzle; that is, it won't give you words or
help you cheat. It only helps you organize your own guesses as you play
through the level.

## How the Worksheet Helps

Word Cookies!® presents a collection of letters and an empty list of
words of various lengths. It's your job to assemble the available
letters into dictionary words that fill in the blanks. The words are
ordered by length and then alphabetically, with one exception: the
biggest word (usually that uses all the available letters) is displayed
at top of the screen.

The Daily Puzzle and "butterfly" levels add an additional challenge: You
need to guess a particular word, in a particular slot in the list, in
order to get points. To solve these puzzles, it's not enough just to
guess _any_ word in the puzzle. You need to guess the _exact_ word the
game has randomly chosen on each move.

We've developed a method to maximize our success with these puzzles: We
start by writing down as many words as we can, sorted by number of
letters and alphabetically, as in the game. We usually do this on a
piece of paper or in a notes app. Then as we guess each word in the
level, we write down next to it the number of the slot in which it
appeared in order on the screen.

This app helps facilitate that process by displaying a structured
worksheet that organizes and sorts the words you add and displays your
notations next to them.


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and supports its scripts and features. The following come from the
Create React App template documentation.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

