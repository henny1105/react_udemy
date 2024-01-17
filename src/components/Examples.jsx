import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id='tab-content'>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}
	return (
		<section id='examples'>
			<h2>Example</h2>
			<menu>
				<TabButton isSelected={selectedTopic === 'components'} label='Components' onSelect={() => handleSelect('components')} />
				<TabButton isSelected={selectedTopic === 'jsx'} label='JSX' onSelect={() => handleSelect('jsx')} />
				<TabButton isSelected={selectedTopic === 'props'} label='Props' onSelect={() => handleSelect('props')} />
				<TabButton isSelected={selectedTopic === 'state'} label='State' onSelect={() => handleSelect('state')} />
			</menu>
			{tabContent}
		</section>
	);
}
