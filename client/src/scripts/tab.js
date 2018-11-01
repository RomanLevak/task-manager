import '../styles/tab.less'

export default class Tab
{
	constructor(id, header_text, body_text)
	{
		this.parent_node = document.getElementById(id)
		this.drawToDom(id, header_text, body_text)

		this.header = document.getElementById('tab-header-text')
		this.body = document.getElementById('tab-text-area')
		this.save_btn = document.getElementById('tab-save-btn')
	}

	setHeaderText(text)
	{
		this.header.innerHTML = text
	}

	setBodyText(text)
	{
		this.body.value = text
	}

	getBodyText()
	{
		return this.body.value
	}

	drawToDom(id, header_text = '', body_text = '1')
	{
		let body = `
		<div id="tab">
			<header class="tab-header">
				<span id='tab-header-text'>${header_text}</span>
			</header>
			<textarea value=${body_text} id='tab-text-area'></textarea>
		</div>
		<button class='tab-btn' id='tab-save-btn'>Save</button>`

		this.parent_node.innerHTML = body
	}
}