# Interesting-bot

Interesting Times guild - Discord bot

## Coding Rules

- use OOP and ES6
- camelCase all the way
- Only Object and Class names start with upper case letter
- private and local variable and functions start with underscore `_myVar`
- use 2 spaces for tabs

If your IDE supports is an .eslint and .editconfig file are included in the project

## Git flow

Development is done using git flow. Any new feature you build should be created on a feature branch so it can be merged into develop for testing. Production is deployed from master.

- start a new feature branch for each feature
- after you are done create a pull request to develop
- close your branch after it's merged

## Development environment requirements
| Framework      | Version     |
| -------------- |:-----------:|
| Node.js        |  **6.11.5** |
| NPM            | **3.10.10** |
| Firebase-tools |             |

## Development environment setup
*Required:*
1. `npm install -g firebase-tools`
2. `git clone https://github.com/mufty/interesting-bot.git`
3. `git checkout develop`
4. go into the functions directory and run `npm install`

*Optional:*
- If your IDE supports lint make it use `.eslintrc` to ensure code formatting
- If your IDE supports editor config use `.editorconfig` to keep the source code unified
