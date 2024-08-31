import {IoMdArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'

import './index.css'

const CardFlipHomePage = () => (
  <div className="cardflip-home-bg">
    <Link to="/">
      <button className="cardflip-back-btn" type="button">
        <IoMdArrowBack color="#ffffff" />
        <p>Back</p>
      </button>
    </Link>
    <img
      src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710303526/animals_1_wncxgk.png"
      alt="cardflip game"
      className="cardflip-image"
    />
    <p className="rules-heading">Rules</p>
    <ul className="cardflip-rules-list">
      <li className="rule-item">
        When the game is started, the users should be able to see the list of
        Cards that are shuffled and turned face down.
      </li>
      <li className="rule-item">
        When a user starts the game, the user should be able to see the Timer
        running.
      </li>
      <li className="rule-item">The Timer starts from 2 Minutes.</li>
      <li className="rule-item">
        If the two cards have the same image, they remain face up. If not, they
        should be flipped face down again after a short 2 seconds.
      </li>
      <li className="rule-item">
        Users should be able to compare only two cards at a time.
      </li>
      <li className="rule-item">
        When the user is not able to find all the cards before the timer ends
        then the game should end and redirect to the Time Up Page.
      </li>
      <li className="rule-item">
        If the user finds all the matching cards before the timer ends, then the
        user should be redirected to the results page.
      </li>
    </ul>
    <Link to="/playCardflipGame">
      <button type="button" className="start-btn">
        Start Playing
      </button>
    </Link>
  </div>
)

export default CardFlipHomePage
