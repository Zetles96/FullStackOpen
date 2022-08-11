import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personSearch, setPersonSearch] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1,
    };

    var found = persons.some((p) => p.name === newName);
    if (found) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePersonSearChange = (event) => {
    setPersonSearch(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.includes(personSearch)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with:
          <input value={personSearch} onChange={handlePersonSearChange}></input>
        </div>
      </form>
      <form onSubmit={addPerson}>
        <h2>Add new contact</h2>
        <div>
          name:
          <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}></Persons>
    </div>
  );
};

export default App;
