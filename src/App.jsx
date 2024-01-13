import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState('components');

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(setSelectedTopic);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id='examples'>
					<h2>Example</h2>
					<menu>
						<TabButton label='Components' onSelect={() => handleSelect('components')} />
						<TabButton label='JSX' onSelect={() => handleSelect('jsx')} />
						<TabButton label='Props' onSelect={() => handleSelect('props')} />
						<TabButton label='State' onSelect={() => handleSelect('state')} />
					</menu>
					<div id='tab-content'>
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
