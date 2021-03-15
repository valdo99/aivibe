import { LogoHeader } from './LogoHeader';
import { Info } from './Info';
import { Lyrics } from './Lyrics';
import { ThemeMode } from './ThemeMode';
export const Home = () => {
  return (
    <>
      <ThemeMode></ThemeMode>
      <div className="home">
        <LogoHeader
          textColor="#000000"
          symbolColor="#1d8cc2"
        ></LogoHeader>
        <p className="divtext">
          Find out how your favorite song feels
        </p>

        <Info></Info>
        <p className="divtext">Start</p>
        <Lyrics></Lyrics>
      </div>
      <footer></footer>
    </>
  );
};
