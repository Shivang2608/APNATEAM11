🏏 Fantasy Cricket App (React + Vite)

A fully responsive Fantasy Cricket Web App built using React + Vite, featuring team selection, player roles, captain/vice-captain selection, match listings, sidebar navigation, and localStorage persistence.

This project replicates the core logic of fantasy platforms like Dream11 — pick players, assign C/VC, and save your teams.

🚀 Features
✅ Match Listing

Shows all upcoming matches

Click any match to start team creation

Fully responsive UI

✅ Player Selection

Select 11 players

Shows player role counts (WK, BAT, AR, BOWL)

Auto-updates selection count

Displays credit usage

Prevents overselecting

✅ Captain & Vice-Captain Selection

Clean, mobile-friendly screen

Highlights selected C & VC

Prevents assigning both roles to same player

Save Team button visible on all screens

✅ My Teams

Stores all created teams in localStorage

Shows teams by match

Lets you edit existing teams

✅ Sidebar Navigation

Desktop = always visible left sidebar

Mobile = hamburger opens a sliding drawer

Pages:

Home

My Matches

My Teams

Refer & Earn

Gemz Coins

Games

✅ Tech Stack

React

Vite

Tailwind CSS

LocalStorage API

Lucide Icons

📂 Project Structure
src/
│── components/
│   ├── Sidebar.jsx
│── pages/
│   ├── Home.jsx
│   ├── UpcomingMatches.jsx
│   ├── PickPlayersPage.jsx
│   ├── PickCaptainPage.jsx
│   ├── MyTeamsPage.jsx
│── App.jsx
│── main.jsx
│── data/
│   ├── matches.json (optional)

🛠️ Installation & Setup
1️⃣ Clone the Repo
git clone https://github.com/yourusername/fantasy-app
cd fantasy-app

2️⃣ Install Dependencies
npm install

3️⃣ Start Dev Server
npm run dev


App runs on:(http://localhost:5173/)