import React from 'react'
import Profile from './profile'

const Home: React.FC<unknown> = () => {
  return (
    <div className="home">
      <Profile />

      <style jsx>{`
        .home {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Home
