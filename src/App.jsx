import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();
	// useState()는 두 개의 요소를 가진 배열을 반환
	// 첫번째 요소는 상태 변수, 두번째 요소는 그 상태변수를 업데이트하는 함수
	let tabContent = 'Please click a button';

	function handleSelect(selectedButton) {
		// console.log(selectedButton);
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
					{selectedTopic}
				</section>
			</main>
		</div>
	);
}

// hook 사용 규칙
// 1. 컴포넌트 함수 내부에만 훅을 호출할 것
// 2. 훅은 코드의 최상위 레벨에서만 호출할 것

export default App;
