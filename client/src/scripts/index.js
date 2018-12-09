import Calendar from './calendar'
import Tab from './tab'
import '../styles/index.less'
import {
	createDateString,
	getDayValue,
	setDayText
} from './utils'

const calendar = new Calendar('calendar-wrap')

const tab = new Tab(
		'tab-wrap',
		createDateString(calendar.selected_date),
		getDayValue(calendar.selected_date)
	)

const save_icon = document.getElementById('save-icon')

//creates calender
calendar.body_node.addEventListener('click', calendarClickHandler)

//creates tab
tab.save_btn.addEventListener('click', saveHandler)

//sets the value for tab from server
getDayValue(calendar.selected_date).then(text => {
	let obj = JSON.parse(text)
	tab.setBodyText(obj.text)
})

//changes the tab header name when picked date is changed
function calendarClickHandler() {
	let { selected_date } = calendar

	let tab_header_text = createDateString(selected_date)
	tab.setHeaderText(tab_header_text)

	getDayValue(selected_date).then(text => {
		let obj = JSON.parse(text)
		tab.setBodyText(obj.text)
	})
}

//save-icon animation
function animateSave () {
	save_icon.classList.remove('hidden')
	const clone = save_icon.cloneNode(true)
	save_icon.remove()
	document.body.appendChild(clone)
}

//saving text into db
function saveHandler() {
	setDayText(calendar.selected_date, tab.getBodyText())
	.then(animateSave)
}

//handling 'ctrl + q' to save
document.body.addEventListener('keypress', e => {
	if (!e.ctrlKey) return

	if (e.charCode == 17) {
		saveHandler()
	}
})
