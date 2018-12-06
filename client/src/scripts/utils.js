export function createDateString(date) {
	return `${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`
}

export function createUrlFromDate(date) {
	return `./${date.getFullYear()}/${getMonthName(date)}/${date.getDate()}`
}

export function getMonthName(date) {
	const month_names = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	return month_names[date.getMonth()]
}

export function getDayValue(date) {
	const url = createUrlFromDate(date)

	return fetch(url, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	}).then(res => res.text())
}

export function setDayText(date, text) {
	const url = createUrlFromDate(date)

	return fetch(url, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json'
		},

		body: JSON.stringify({
			text
		})
	}).then(res => res.text())
}
