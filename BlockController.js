const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
const BlockChain = require('./BlockChain.js');
const bodyParser = require('body-parser');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        this.myBlockChain = new BlockChain.Blockchain();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/block/:index", (req, res) => {
            this.myBlockChain.getBlock(req.params["index"]).then((bloco) => {
                res.send(bloco);
             }).catch((err) => { res.send("Block " + req.params["index"] + " not found!");});
        });

        this.app.get("/block/", (req, res) => {
            res.send("You must ask for a valid block!");
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block/", (req, res) => {
            let data = req.body.body;            
            let blockAux = new BlockClass.Block(data);
            this.myBlockChain.addBlock(blockAux).then((result) => {
                res.send(result);
            });
        });
    }
}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}