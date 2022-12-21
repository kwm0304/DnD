import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function CharacterSheet() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="charactername">
        <Form.Label>Character Name</Form.Label>
        <Form.Control 
        type="text" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="characterrace">
        <Form.Label>Character Race</Form.Label>
        <Form.Control 
        type="text" placeholder="Wood Elf" name='race' value={formState.race} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="characterclass">
        <Form.Label>Character Class</Form.Label>
        <Form.Control 
        type="text" placeholder="" name='class' value={formState.class} onChange={handleChange}/>
      </Form.Group>
//Need to fill out rest of stats in character model
      <Form.Group className="mb-3" controlId="characterstats">
        <Form.Label>Character Stats</Form.Label>
        <Form.Control 
        type="number"  name='strength' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="number" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="n
        " placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
        <Form.Control 
        type="text" placeholder="Hingle McCringleberry" name='name' value={formState.name} onChange={handleChange}/>
      </Form.Group>

      
    </Form>
  );
}

export default CharacterSheet;