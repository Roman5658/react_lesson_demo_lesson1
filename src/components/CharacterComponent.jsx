
import './CharacterComponent.css';

const CharacterComponent = ({ character, children }) => {
  return (
    <div className="character">
      <h3>{character.name} {character.surname}</h3>
      <img src={character.photo} alt={character.name} width={150} />
      <p><strong>Age:</strong> {character.age}</p>
      <p>{children}</p>
    </div>
  );
};

export default CharacterComponent;
