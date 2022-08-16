import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import peopleService from "./Services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personSearch, setPersonSearch] = useState("");

  const hook = () => {
    peopleService.getAll().then((all) => {
      setPersons(all);
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

    var found = persons.some(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );
    if (found) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, do you want to update the number?`
        )
      ) {
        const pleb = persons.filter(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );

        const updatedpleb = {
          number: newNumber,
          name: pleb[0].name,
        };
        peopleService.update(pleb[0].id, updatedpleb).then((updatedPeople) => {
          const copyPersons = [...persons];
          const index = copyPersons.findIndex(
            (thing) => thing.id === pleb[0].id
          );
          copyPersons[index] = updatedPeople;
          setPersons(copyPersons);
          setNewName("");
          setNewNumber("");
        });
      }
      return;
    }
    peopleService.create(personObject).then((updatedPeople) => {
      setPersons(persons.concat(updatedPeople));
      setNewName("");
      setNewNumber("");
    });
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
    person.name.toLowerCase().includes(personSearch.toLowerCase())
  );

  const handleDeleteButtonClick = (personId) => {
    const person = persons.find((x) => x.id === personId);
    if (
      person &&
      window.confirm(`do you really want do delete ${person.name}`)
    ) {
      peopleService.deleteByid(personId).then(() => {
        setPersons(persons.filter((person) => person.id !== person.id));
      });
    }
  };

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
      <Persons
        persons={personsToShow}
        handleDeleteButtonClick={handleDeleteButtonClick}
      ></Persons>
    </div>
  );
};

export default App;
