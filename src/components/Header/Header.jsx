import './Header.css';
import UnLogoWhite from '../../icons/un-logo-white.svg';
import SearchIcon from '../../icons/search.svg';
import CalendarIcon from '../../icons/calendar.svg';
import HelpIcon from '../../icons/help.svg';
import LanguageIcon from '../../icons/language.svg';

const Header = ({ showSearch = false, showUtilities = false }) => {
  return (
    <header className="header">
      {/* Left: Logo + Branding */}
      <div className="header__brand">
        <img
          src={UnLogoWhite}
          className="header__logo"
          alt="United Nations logo"
        />
        <div className="header__text">
          <span className="header__title">United Nations</span>
          <span className="header__tagline">
            Peace, dignity, and equality on a healthy planet
          </span>
        </div>
      </div>

      {/* Center: Search (only in full variant) */}
      {showSearch && (
        <div className="header__search">
          <img
            src={SearchIcon}
            className="header__search-icon"
            alt=""
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search United Nations"
            className="header__search-input"
          />
        </div>
      )}

      {/* Right: Utility icons (only in full variant) */}
      {showUtilities && (
        <div className="header__utilities">
          <button className="header__util-btn" type="button">
            <img
              src={CalendarIcon}
              className="header__util-icon"
              alt=""
              aria-hidden="true"
            />
            <span className="header__util-label">Calendar</span>
          </button>
          <button className="header__util-btn" type="button">
            <img
              src={HelpIcon}
              className="header__util-icon"
              alt=""
              aria-hidden="true"
            />
            <span className="header__util-label">Help</span>
          </button>
          <button className="header__util-btn" type="button">
            <img
              src={LanguageIcon}
              className="header__util-icon"
              alt=""
              aria-hidden="true"
            />
            <span className="header__util-label">Language</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;