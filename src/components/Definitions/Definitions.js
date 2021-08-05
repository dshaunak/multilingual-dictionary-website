import React from 'react';
import './Definitions.css';

const Definitions = ({ word, meanings, category, lightMode }) => {
  return (
    <div className='meanings'>
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            width: 400,
          }}
          controls
        >
          Your Browser does not suppost audio elements
        </audio>
      )}

      {word === '' ? (
        <span className='subTitle'>Start by typing a word in the Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className='singleMeaning'
                style={{
                  backgroundColor: lightMode ? '#3b5360' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
              >
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                <b>{def.definition}</b>
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
