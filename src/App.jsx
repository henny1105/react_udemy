import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { Component, useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(setSelectedTopic);
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
		// 불필요한 div 태그 없애기
		<>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
						{/* 목록에 있는 각 자식요소들이 고유의 key porp을 가져야함 
								conceptItem.title이 item을 구별하는데 사용할 수 있는 값
							*/}
					</ul>
				</section>
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
			</main>
		</>
	);
}

export default App;
