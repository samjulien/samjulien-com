import React from 'react'
import devRelImg from '../images/devrel-crop.jpg'
import upgradeImg from '../images/upgrade.png'
import angularImg from '../images/angular_solidBlack.png'

const TeachingCards = () => {
  return (
    <div className="grid grid-cols-3 space-x-4 space-y-4">
      <Card
        imgSrc={devRelImg}
        text="Getting Started in Developer Relations"
        link="http://www.gettingstartedindevrel.com"
        linkText="Get the book"
      />
      <Card
        imgSrc={upgradeImg}
        text="Upgrading AngularJS"
        link="https://www.upgradingangularjs.com/"
        linkText="Get the course"
      />
      <Card
        imgSrc={angularImg}
        text="Angular Basics"
        link="https://egghead.io/playlists/angular-basics-888f?af=6zxcwn"
        linkText="Watch on egghead"
      />
    </div>
  )
}

const Card = ({ imgSrc, text, link, linkText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src={imgSrc}
        className="rounded-t-lg"
        style={{ margin: 0 }}
        alt="test"
      />
      <div className="p-4 text-center">
        <div className="font-bold">{text}</div>
        <a href={link} target="_blank" rel="noreferrer">
          {linkText}&rarr;
        </a>
      </div>
    </div>
  )
}

export default TeachingCards
