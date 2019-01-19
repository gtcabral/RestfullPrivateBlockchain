const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
const BlockChain = require('./BlockChain.js');


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
        this.app.get("/api/block/:index", (req, res) => {
            this.myBlockChain.getBlock(req.params["index"]).then((bloco) => {
                res.send(bloco);
             }).catch((err) => { res.send(err);});
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        //this.app.post("/api/block/:data", (req, res) => {
        this.app.post("/api/block/:data", (req, res) => {
            let data = req.params["data"];            
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