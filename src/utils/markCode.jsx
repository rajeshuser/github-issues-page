export default function markCode(string) {
	const items = string.split("`");
	for (let i = 1; i < items.length; i += 2) {
		items[i] = <code>{items[i]}</code>;
	}
	return items;
}
