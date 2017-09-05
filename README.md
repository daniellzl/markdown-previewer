# Markdown Previewer

Type in markdown into a text field and preview the output immediately.

[Live Application](http://markdown-previewer-dlzl.surge.sh)

### Project Goals

Application was completed as a freeCodeCamp [challenge](https://www.freecodecamp.org/challenges/build-a-markdown-previewer).

1. Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.

2. Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

3. User Story: I can type GitHub-flavored Markdown into a text area.

4. User Story: I can see a preview of the output of my markdown that is updated as I type.
Hint: You don't need to interpret Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked

### Application Structure

MarkdownInput -> Application -> MarkdownOutput

* MarkdownInput - text field that takes in user input

* Application - main application that converts user input into markdown text

* MarkdownOutput - area where user input is displayed as markdown text

### Lessons Learned

* [Using Marked with React](https://stackoverflow.com/questions/34686523/using-marked-in-react)

### Technologies

* React
* Babel
* Marked
