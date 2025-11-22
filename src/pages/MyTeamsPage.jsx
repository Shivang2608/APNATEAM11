// src/pages/MyTeamsPage.jsx
import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

export default function MyTeamsPage({ match, setPage, setSelectedForEdit }) {
  const [activeTab, setActiveTab] = useState("MY_TEAMS");
  const [myTeams, setMyTeams] = useState([]);

  /* --------------------------------------------------------
      LOAD TEAMS FROM LOCAL STORAGE ON PAGE LOAD / REFRESH
  --------------------------------------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem("myTeams");
    if (saved) {
      setMyTeams(JSON.parse(saved));
    }
  }, []);

  const contests = [
    { prize: 1000, entry: 10, spots: 100, winners: 10 },
    { prize: 2000, entry: 10, spots: 200, winners: 20 },
    { prize: 3000, entry: 10, spots: 300, winners: 30 },
    { prize: 4000, entry: 10, spots: 400, winners: 40 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab("CONTESTS")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "CONTESTS"
              ? "border-b-2 border-red-600 text-red-600"
              : "text-gray-500"
          }`}
        >
          Contests
        </button>

        <button
          onClick={() => setActiveTab("MY_TEAMS")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "MY_TEAMS"
              ? "border-b-2 border-red-600 text-red-600"
              : "text-gray-500"
          }`}
        >
          My Teams
        </button>
      </div>

      {/* MY TEAMS */}
      {activeTab === "MY_TEAMS" && (
        <div className="space-y-6">
          <button
            onClick={() =>
              setPage({ page: "PICK_PLAYERS", data: { selectedMatch: match } })
            }
            className="mb-4 px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition"
          >
            + Create Team
          </button>

          {myTeams.length === 0 ? (
            <p className="text-gray-500 text-center">
              You have not created any teams yet.
            </p>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
              {myTeams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  onEdit={() => {
                    setSelectedForEdit(team);
                    setPage({
                      page: "PICK_PLAYERS",
                      data: { selectedMatch: match, editTeam: team },
                    });
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* CONTESTS */}
      {activeTab === "CONTESTS" && (
        // outer scroll wrapper for mobile so contests area can scroll without breaking page
        <div
          className="
            max-h-[75vh]
            overflow-y-auto
            pr-1
            -mr-1
            md:overflow-visible
            md:max-h-none
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* grid: bigger cards on desktop (3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {contests.map((c, idx) => {
              // compute a nice percentage for visual (currently always 0)
              const filledPercent = 0; // change as you integrate live data

              return (
                <div
                  key={idx}
                  className="relative bg-gradient-to-b from-red-50 to-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1"
                >
                  {/* Top: prize and entry */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-red-600">
                        ₹{c.prize}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Entry ₹{c.entry} • {c.spots} spots
                      </p>
                    </div>

                    {/* small badge */}
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 rounded-full bg-white text-sm font-semibold text-red-600 shadow">
                        {c.winners} Winners
                      </div>
                    </div>
                  </div>

                  {/* Progress and details */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>{c.spots} spots</span>
                      <span>{Math.max(0, c.spots - Math.floor((filledPercent / 100) * c.spots))} left</span>
                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-red-600 h-3 rounded-full"
                        style={{ width: `${filledPercent}%` }}
                      />
                    </div>

                    <p className="text-xs text-gray-500 mt-2">{filledPercent}% filled</p>
                  </div>

                  {/* Extra description area (premium feel) */}
                  <div className="mb-4 text-sm text-gray-600">
                    <p className="mb-2">Guaranteed pool • Fast payouts</p>
                    <p className="text-xs text-gray-400">
                      Join now — limited spots. Compete with others and win big!
                    </p>
                  </div>

                  {/* Footer: winners + join */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col text-xs">
                        <span className="text-gray-700 font-semibold">Top Prize</span>
                        <span className="text-gray-500 text-sm">₹{Math.floor(c.prize * 0.5)}</span>
                      </div>

                      <div className="flex flex-col text-xs">
                        <span className="text-gray-700 font-semibold">Entry</span>
                        <span className="text-gray-500 text-sm">₹{c.entry}</span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setPage({
                          page: "PICK_PLAYERS",
                          data: { selectedMatch: match, contest: c },
                        })
                      }
                      className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition-shadow shadow-md"
                    >
                      Join Contest
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------
   TEAM CARD COMPONENT
--------------------------------------------------------- */
function TeamCard({ team, onEdit }) {
  const captain = team.captain;
  const viceCaptain = team.viceCaptain;

  const roleCount = { WK: 0, BAT: 0, AR: 0, BOWL: 0 };

  const detectRole = (role) => {
    const r = (role || "").toLowerCase();

    if (r.includes("wk") || r.includes("wicket")) return "WK";
    if (r.includes("bat")) return "BAT";
    if (r.includes("ar") || r.includes("all")) return "AR";
    if (r.includes("bowl")) return "BOWL";

    return null;
  };

  team.players.forEach((p) => {
    const detected = detectRole(p.role);
    if (detected) roleCount[detected]++;
  });

  const getImage = (p) =>
    p.player_image ||
    p.image ||
    p.logo ||
    p.team_logo ||
    p.team_image ||
    "https://placehold.co/80x80?text=IMG";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      {/* Header */}
      <div className="flex justify-between items-center bg-green-100 p-3">
        <h3 className="font-bold text-lg">Team ({team.id.split("_")[1]})</h3>
        <button onClick={onEdit} className="text-gray-500 hover:text-red-600">
          <Pencil size={18} />
        </button>
      </div>

      {/* Captain + VC */}
      <div className="bg-red-600 text-white py-6 px-4 flex justify-center gap-8">
        {[captain, viceCaptain].map(
          (p, idx) =>
            p && (
              <div key={idx} className="relative flex flex-col items-center">
                <img
                  src={getImage(p)}
                  onError={(e) =>
                    (e.target.src = "https://placehold.co/80x80?text=IMG")
                  }
                  alt={p.player_name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />

                <div
                  className={`absolute -top-1 -right-2 text-white text-xs font-bold px-1 rounded ${
                    idx === 0 ? "bg-green-600" : "bg-orange-600"
                  }`}
                >
                  {idx === 0 ? "C" : "VC"}
                </div>

                <span className="mt-2 text-xs bg-white text-black px-2 py-1 rounded">
                  {p.player_name}
                </span>
              </div>
            )
        )}
      </div>

      {/* ROLE COUNT */}
      <div className="flex justify-around text-sm font-semibold text-gray-700 bg-gray-50 py-3">
        <span>
          WK <strong>{roleCount.WK}</strong>
        </span>
        <span>
          BAT <strong>{roleCount.BAT}</strong>
        </span>
        <span>
          AR <strong>{roleCount.AR}</strong>
        </span>
        <span>
          BOWL <strong>{roleCount.BOWL}</strong>
        </span>
      </div>
    </div>
  );
}
