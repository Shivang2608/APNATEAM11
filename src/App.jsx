import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import UpcomingMatchesPage from './pages/UpcomingMatchesPage'

export default function App() {
  const [page, setPage] = useState('MATCHES')
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [allUserTeams, setAllUserTeams] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) 

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const renderPage = () => {
    switch (page) {
      case 'MATCHES':
        return (
          <UpcomingMatchesPage
            onSelectMatch={(match) => {
              setSelectedMatch(match)
              setPage('MY_TEAMS')
            }}
          />
        )
      case 'MY_TEAMS':
        return <div className="p-4 text-gray-700">My Teams Page for: {selectedMatch?.match_name} (Coming soon)</div>
      case 'COINS':
        return <div className="p-4 text-gray-700">GamizoCoins Page (Placeholder)</div>
      case 'REFER':
        return <div className="p-4 text-gray-700">Refer & Win Page (Placeholder)</div>
      case 'GAMES':
        return <div className="p-4 text-gray-700">Games Page (Placeholder)</div>

      default:
        return (
          <UpcomingMatchesPage
            onSelectMatch={(match) => {
              setSelectedMatch(match)
              setPage('MY_TEAMS')
            }}
          />
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar 
        currentPage={page} 
        setPage={setPage} 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      {/* 2. Main Content Area */}
      {/* ml-64 (16rem margin) applied ONLY on desktop (md:) */}
      <div className="flex-1 flex flex-col "> 
        
        {/* Top Bar */}
        <TopBar toggleSidebar={toggleSidebar} /> 
        
        {/* Main Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {renderPage()}
        </main>
      </div>
      
      {/* 3. Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
        ></div>
      )}
    </div>
  )
}