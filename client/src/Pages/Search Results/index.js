// // Search Result componenet
// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';

// const SearchChar = ({ character }) => {
//     console.log(!character.name);

//     return (
//         <div>
//             {(!character.name) ? (
//                 <div></div>
//             ) : (
//                 <div style={{ marginLeft: "50%" }} id="characterCards">
//                     <Row>
//                         (
//                         <Col style={{ marginBottom: "25px" }}>
//                             <div style={{ width: "225px", color: "beige", textAlign: "center" }} id="cardBody">
//                                 <img alt={character.name} variant="top" src={character.image} key={character.id} />)
                                
//                                 <h1>{character.name}</h1>
//                                 <h3>Race: {character.race}</h3>
//                                 <h3>Class: {character.class}</h3>
//                             </div>
//                         </Col>
//                         ))
//                     </Row>
//                 </div>
//             )}
//             )
//         </div>
//     )
// };
// export default SearchChar;