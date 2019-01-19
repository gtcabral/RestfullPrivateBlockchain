# RestfullPrivateBlockchain
With this system, you can interact with a Private Blockchain to submit and retrieve blockchain data

## Setup project for Review

To set up the project for review do the following:
1. Download the project or clone the repository --> git clone https://github.com/gtcabral/RestfullPrivateBlockchain
2. Install __node.js__ (https://nodejs.org/en/download/)
3. Run command __npm install__ to install the project dependencies.
4. Run command __node app.js__ in the root directory.

## Testing the project

To test this project, I recommend you to use the software Postman (https://www.getpostman.com)
1. Open Postman
2. Create a GET request to __localhost:8000/api/block/0__ --> the request returns the JSON of the Genesis Block
3. Create a POST request to __localhost:8000/api/block/inserting test block number 1__ --> the request will return __Success to insert the new block 1__
4. Create a GET request to __localhost:8000/api/block/1__ --> the request will return the JSON of the Block #1
