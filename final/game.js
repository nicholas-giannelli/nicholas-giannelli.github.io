// JavaScript Document
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
	state = {}
	showTextNode(1)
}

function showTextNode(textNodeIndex) {
	const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
	textElement.innerText = textNode.text
	while (optionButtonsElement.firstChild) {
		optionButtonsElement.removeChild(optionButtonsElement.firstChild)
	}
	textNode.options.forEach(option => {
		if (showOption(option)) {
		const button = document.createElement('button')
		button.innerText = option.text
		button.classList.add('btn')
		button.addEventListener('click', () => selectOption(option))
		optionButtonsElement.appendChild(button)
		}
	})
}

function showOption(option) {
	return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
	const nextTextNodeId = option.nextText
	if (nextTextNodeId <= 0) {
		return startGame()
	}
	state = Object.assign(state, option.setState)
	showTextNode(nextTextNodeId)
}

const textNodes = [
	{
		id: 1,
		text: 'You wake up in a foreign land with no recolection of how you got there. You look to your left and see an old rusted sword laying on the ground.',
	options: [
		{
		text: 'Take the sword',
		setState: { rustedSword: true},
		nextText: 2
	},
	{
		text: 'Leave the sword',
		nextText: 2
	}
		]
	},
	{
		id: 2,
		text: 'As you journey in search of answers, a mysterious old man approaches you who claims to be a merchant.',
		options: [
			{
				text: 'Trade sword for 5 gold pieces',
				requiredState: (currentState) => currentState.rustedSword,
				setState: { rustedSword: false, gold: true },
				nextText: 3
			},
			{
				text: 'Trade sword for ancient scroll',
				requiredState: (currentState) => currentState.rustedSword,
				setState: { rustedSword: false, scroll: true },
				nextText: 3
			},
			{
				text: 'This man gives you a bad feeling, ignore him',
				nextText: 3
			}
		]
	},
	{
		id: 3,
		text: 'After the strange encounter with the old man you start to feel tired. You look around and see a village with a castle off to the distance.',
		options: [
			{
				text: 'The castle captures your eye, explore it',
				nextText: 4
			},
			{
				text: 'Find a home you can break into for shelter for the night',
				nextText: 5
			},
			{
				text: 'Sleep in the woods for tonight',
				nextText: 6
			
			}
		]
	},
	{
		id: 4,
		text: 'You find a way into the castle but soon collapse due to your exhaustion and are slained in your sleep.',
		options: [
			{
				text: 'You Lose - Restart',
				nextText: -1
			}
		]
	},
	{
		id: 5,
		text: 'You try breaking into a home but the homeowner catches you',
		options: [
			{
				text: 'Attack with sword',
				requiredState: (currentState) => currentState.rustedSword,
				nextText: 7
			},
			{
				text: 'Offer your gold coins to stay the night',
				requiredState: (currentState) => currentState.gold,
				nextText: 8
			},
			{
				text: 'Run away',
				nextText: 9
			}
		]
	},
	{
		id: 7,
		text: 'You swing your swing but they counter greatly, defeating you.',
		options: [
			{
				text: 'You Lose - Restart',
				nextText: -1
			}
		]
		
	},
	{
		id: 8,
		text: 'They agree and allowed you to spend the night. You wake up feeling refreshed and ready to explore the castle.',
		options: [
			{
				text: 'Explore the castle',
				nextText: 10
			}
		]
	},
	{
		id: 9,
		text: 'As you turn your back and attempt to run away you are shot with a bow and arrow, ending your journey.',
		options: [
			{
				text: 'You Lose - Restart',
				nextText: -1
			}
		]
	},
	{
		id: 6,
		text: 'By the luck of the gods you wake up completely fine and are ready to explore the castle',
		options: [
			{
				text: 'Explore the castle',
				nextText: 10
			}
		]
	},
	{
		id: 10,
		text: 'You find a way into the castle and start exploring. You open a large door and are now face to face with a vampire lord who is not happy you broke into his home',
		options: [
			{
				text: 'Try to run away',
				nextText: 11
			},
			{
				text: 'Offer the vampire gold to spare your life',
				requiredState: (currentState) => currentState.gold,
				nextText: 12
			},
			{
				text: 'You start to say the words written on the scroll as smoke forms under your feet',
				requiredState: (currentState) => currentState.scroll,
				nextText: 13
			},
			{
				text: 'Attack with your rusted sword',
				requiredState: (currentState) => currentState.rustedSword,
				nextText: 14
			}
		]
		
	},
	{
		id: 11,
		text: 'Your attempt to flee was futile, the vampire catches you and turns you into his thrall.',
		options: [
			{
				text: 'You Lose - Restart',
				nextText: -1
			}
		]
	},
	{
		id: 12,
		text: 'Your attempts of bribery are laughable to this ancient being. He eats you right on the spot.',
		options: [
			{
				text: 'You Lose - Restart',
				nextText: -1
			}
		]
	},
	{
		id: 13,
		text: 'Unbeknown to you, this scroll held an ancient spell capable of summoning rays of fire. Using this power you burn the vampire to ashes, congratulations!',
		options: [
			{
				text: 'You Win - Restart',
				nextText: -1
			}
		]
	},
	{
		id: 14,
		text: 'As you strike the vampire with this old sword it suddenly bursts into a shining sword of flames. You slained this monster with this ancient power',
		options: [
			{
				text: 'You Win - Restart',
				nextText: -1
			}
		]
	}
]

startGame()