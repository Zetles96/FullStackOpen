const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
);

const DeleteButton = ({ handleClick }) => (
  <Button handleClick={handleClick} name={"delete"}></Button>
);

const Persons = ({ persons, handleDeleteButtonClick }) => (
  <ul>
    {persons.map((person) => (
      <li key={person.name}>
        {person.name} {person.number}{" "}
        <DeleteButton
          handleClick={() => handleDeleteButtonClick(person.id)}
        ></DeleteButton>
      </li>
    ))}
  </ul>
);

export default Persons;
