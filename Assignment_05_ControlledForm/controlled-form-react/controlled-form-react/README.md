# Controlled React Form

## Run in VS Code (PowerShell)

1. Extract the ZIP and open the `controlled-form-react` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost link printed in the terminal.

## How it works

In `src/App.jsx`, `useState` stores the values of the name, email, course and about fields. Each input has a `value` from that state and an `onChange` handler. Typing updates the state, and React immediately displays the new values in the preview below or alongside the form.

The Clear button resets the state. This is a frontend demo: the information is not saved or sent anywhere.
