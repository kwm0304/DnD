import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        type="number"  name='dexterity' value={formState.dexterity} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='constitution' value={formState.constitution} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='intelligence' value={formState.intelligence} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='wisdom' value={formState.wisdom} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='charisma' value={formState.charisma} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='proficiencyBonus' value={formState.proficiencyBonus} onChange={handleChange}/>
        <Form.Control 
        type="number"  name='passivePerception' value={formState.passivePerception} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className='mb-3' controlId='spells'>
        <Form.Label>Spells</Form.Label>
        <Form.Control
        type='text' name='spells' value={formState.spells} onChange={handleChange} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='weapons'>
        <Form.Label>Weapon</Form.Label>
        <Form.Control
        type='text' name='weapons' value={formState.weapons} onChange={handleChange} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='background'>
        <Form.Label>Background</Form.Label>
        <Form.Control
        type='text' name='background' value={formState.background} onChange={handleChange} />
      </Form.Group>

    </Form>
  );
}

export default CharacterSheet;