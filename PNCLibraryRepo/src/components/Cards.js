import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import SearchBar from './Search';
import cardsData from './cardsData';

function Cards() {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filter cards based on search term
  const filteredCards = cardsData.filter((card) =>
    card.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered cards into chunks of three for display
  const chunkedCards = [];
  for (let i = 0; i < filteredCards.length; i += 3) {
    chunkedCards.push(filteredCards.slice(i, i + 3));
  }

  return (
    <div className='cards'>
      <div className='search-bar-container'>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <h1>Resources</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {chunkedCards.map((chunk, index) => (
            <ul className='cards__items' key={index}>
              {chunk.map((card) => (
                <CardItem
                  key={card.id}
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
