import Calendar from './calendar'
import Tab from './tab'
import '../styles/index.less'
import
{
	createDateString,
	createUrlFromDate,
	getDayValue,
	setDayValue
}
from './utils'

const calendar = new Calendar('calendar-wrap')

const tab = new Tab('tab-wrap',
	createDateString(calendar.selected_date),
	getDayValue(calendar.selected_date))

//creates calender
calendar.body_node.addEventListener('click', calendarClickHandler)

//creates tab
tab.save_btn.addEventListener('click', saveHandler)


//sets the value for tab from server
getDayValue(calendar.selected_date)
	.then(text =>
	{
		let obj = JSON.parse(text)
		tab.setBodyText(obj.text)
	})

function calendarClickHandler()
{
	let
	{
		selected_date
	} = calendar

	let tab_header_text = createDateString(selected_date)
	tab.setHeaderText(tab_header_text)

	getDayValue(selected_date)
		.then(text =>
		{
			let obj = JSON.parse(text)
			tab.setBodyText(obj.text)
		})
}

function saveHandler()
{
	setDayValue(calendar.selected_date, tab.getBodyText())
}

document.body.addEventListener('keypress', (e) =>
{
	console.log(e.charCode)
	if (!e.ctrlKey) return

	if (e.charCode == 17)
	{
		saveHandler()
		console.log('save');
	}

})