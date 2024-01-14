export default function TabButton({ label, onSelect, isSelected }) {
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} onClick={onSelect}>
				{label}
			</button>
		</li>
	);
}

// 내부버튼을 클릭하는 것도 되지만 http요청을 완료한 것등이 봘 수 있다.
