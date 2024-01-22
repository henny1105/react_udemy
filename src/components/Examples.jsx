import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

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
		<Section title='Examples' id='examples'>
			<Tabs
				ButtonsContainer='menu'
				buttons={
					<>
						<TabButton isSelected={selectedTopic === 'components'} label='Components' onClick={() => handleSelect('components')} />
						<TabButton isSelected={selectedTopic === 'jsx'} label='JSX' onClick={() => handleSelect('jsx')} />
						<TabButton isSelected={selectedTopic === 'props'} label='Props' onClick={() => handleSelect('props')} />
						<TabButton isSelected={selectedTopic === 'state'} label='State' onClick={() => handleSelect('state')} />
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}
