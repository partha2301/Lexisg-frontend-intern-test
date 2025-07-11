✅YOUTUBE LINK FOR DEMO:  https://youtu.be/FvTpLLTDFO0

✅For citation linking, I used dangerouslySetInnerHTML in React so I could directly format the HTML. Also made the animations easy to implement with CSS
  The PDF file is kept inside the public/assets/ folder so they can be accessed directly from the browser. I used window.location.origin in the link to avoid issues with React Router.
  I could't highlight the paragraph that the citation is from using the #:~:text as it doesn't work with PDFs
  To make the link open directly on a specific page (like page 2), I added #page=2 to the end of the URL. The link also opens in a new tab using target="_blank" so users don’t lose their place in the app.

✅Running it locally
Make sure the following are installed:
1. Node.js (LTS) – includes npm
2. Visual Studio Code

How to run the app locally:
1. Extract the ZIP
2. Right-click the zip file → Extract All...
3. Choose where to extract (e.g., Desktop).
You’ll get a folder named like Lexisg-frontend-intern-test/
4. Launch VS Code
      Click File → Open Folder...
      Select the extracted folder:
      Lexisg-frontend-intern-test/
5. In VS Code:
      Go to the menu: Terminal → New Terminal
      A terminal will open in the project root
6. In the terminal, run:
      npm install
      (This reads package.json and installs all the required packages (like React, etc.))
7. (Still in the terminal, run:)
      npm start
      This will: Start the React development server,   Automatically open the browser to: http://localhost:3000/


