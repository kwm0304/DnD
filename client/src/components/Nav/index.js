import React, { useState } from 'react';

function Nav(props) {
    const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "DiceRoller" ? "mx-2 navActive" : "mx-2"}><a
				href='#DiceRoller'
					 onClick={() => setCurrentTab("DiceRoller")}>Dice Roller</a>
				</li>
				<li className={currentTab === "CharacterSheet" ? "mx-2 navActive" : "mx-2"}><a
				href='#CharacterSheet'
					 onClick={() => setCurrentTab("DiceRoller")}>Create</a>
				</li>
				<li className={currentTab === "FantasyNameGenerator" ? "mx-2 navActive" : "mx-2"}><a
				href='#FantasyNameGenerator'
					 onClick={() => setCurrentTab("FantasyNameGenerator")}>Name Generator</a>
				</li>
				<li className={currentTab === "Profile" ? "mx-2 navActive" : "mx-2"}><a
				href='#Profile'
					  onClick={() => setCurrentTab("Profile")}>Profile</a> 
				</li>
			</ul>
		</nav>
	);
}

export default Nav