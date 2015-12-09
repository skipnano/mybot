Project: Sprintbot
Developed by Dean Gilroy
Javascript Alpha Class

This bot will return sprint metrics when a user asks the bot "sprint progress for [developer name]" or "stories in progress for [developer name]".Currently there are two queries that a user can ask the bot. In the future this bot can be hooked up to Trello's API to get the kanban data, or other proprietary devOps API.

The data referenced by the bot is created using an object constructor called Developers.

The first query (sprint progress for [developer name]) calculates the sprint progress for a developer in the function progress() by dividing the (#completed/#assigned) / 100.
The result will be a percent. The bot will respond with the developer's name and their progress

The second query (stories in progress for [developer name]) will return the number or stories in progress for the developer queried. The bot takes the user input (developer name) and references the Developer object for that developer name.

Roadmap:
- Add additional capabilities such as sprint velocity, indicator of overall sprint progress (all devs) that throws a thumbs up if sprint is in good shape, or thumbs down if it's in bad shape (those indicators will need user definition)
- Conditionals that will return a message if the developer name queried does not exist
- Hook up to an API