import React from 'react';
import LogoHeader from './LogoHeader';
import Info from './Info';
import Lyrics from './Lyrics';
import ThemeMode from './ThemeMode';

export default function Home() {
  return (
    <>
      <ThemeMode />
      <div className="home">
        <LogoHeader textColor="#000000" symbolColor="#1d8cc2" />
        <p className="divtext">
          Find out how your favorite song feels
        </p>

        <Info />
        <p className="divtext">Start</p>
        <Lyrics />
      </div>
      <footer />
    </>
  );
}
