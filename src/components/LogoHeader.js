import React from 'react';
import Logo from '../logo.png';

export default function LogoHeader() {
  return (
    <div className="header">
      <img alt="logo" src={Logo} />
      <span className="AI">AI</span>
      <span className="vibe">Vibe</span>
    </div>
  );
}
