# React Counter App

A simple React assignment using the useState hook.

## Run in VS Code

1. Install Node.js if it is not already installed.
2. Extract the ZIP and open the counter-app folder in VS Code.
3. Open Terminal > New Terminal and run:

```powershell
npm install
npm run dev
```

4. Open the Local URL printed in the terminal (usually http://localhost:5173).
5. Press Ctrl+C in the terminal to stop the app.

## How it works

- useState(0) starts the counter at 0.
- Increment adds 1.
- Decrement subtracts 1 (negative values are allowed).
- Reset returns the counter to 0.
- The main code is in src/App.jsx; styling is in src/App.css.

## Use in an existing React + Vite project

Copy src/App.jsx and src/App.css into your existing project's src folder.
Add `import './App.css';` to App.jsx if your main file does not already import it.
This replaces your existing App screen, so keep a copy of your previous files.
