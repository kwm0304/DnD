import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHARACTERS, QUERY_ONE_CHARACTER } from "../utils/queries";

const Home = ({ value }) => {
    // PULL CHARACTER LIST
    const { loading, data } = useQuery(QUERY_CHARACTERS);
    const { loading: loadL, data: dataD } = useQuery(QUERY_ONE_CHARACTER, {
        variables: { characterId: value }
    });

    //CHECK CHARACTERS 
    const characters = data?.getAllCharacters || [];
    const character = dataD?.character || [];
    console.log(character.name);
    return (
        <main>
            <div id="backgroundColor">
                <h2 id="homeTitle">
                    Welcome to DnD Slayers! We are here to meet all your Dungeon and Dragons needs. Let's get you started on your DnD journey! Please log in or register for access to start creating your characters and utilize our dice roller. {" "}
                </h2>
            </div>
            <div>
            </div>
            <div>
                {loadL ? (
                    <div></div>
                ) : (
                    <div>
                        <Character character={character} />
                    </div>
                )}
                {/* <Character character={character} /> */}
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Characters characters={characters} />
                )}
            </div>
        </main>
    );
};

export default home;
