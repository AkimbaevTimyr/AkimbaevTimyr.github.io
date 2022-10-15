export function convertNumbers(price: string | undefined) {
	return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}