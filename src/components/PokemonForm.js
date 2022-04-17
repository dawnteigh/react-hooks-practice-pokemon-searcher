import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setPokemon, pokemon }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function formChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        hp: parseInt(formData.hp),
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      }),
    })
      .then(r => r.json())
      .then(data => {
        const newPokemonList = [...pokemon, data]
        setPokemon(newPokemonList)
      })
      
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={formChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={formChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={formChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={formChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
