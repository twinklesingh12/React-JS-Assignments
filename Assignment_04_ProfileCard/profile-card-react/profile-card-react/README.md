# React Profile Card

This small React app displays a profile card using props.

## Run it in VS Code (PowerShell)

1. Extract the ZIP and open the `profile-card-react` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost address shown in the terminal.

To personalize the card, edit the three props in `src/App.jsx`: `name`, `imageUrl`, and `description`. The `ProfileCard` component in `src/ProfileCard.jsx` receives and displays those values. The local illustration is at `public/profile-avatar.svg`; you can replace `imageUrl` with your own image URL.

You need Node.js and npm installed. Current Vite requires Node.js 20.19+ or 22.12+.
