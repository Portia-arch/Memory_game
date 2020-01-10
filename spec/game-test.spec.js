
describe('memory game tests', function(){
    const html = require('./interface.js')
    const jsdom = require('jsdom')
    const { JSDOM } = jsdom;

// using jsDom's VirtualConsole method
const virtualConsole = new jsdom.VirtualConsole();

// and telling it to use the default nodejs console. 
virtualConsole.sendTo(console);

// this function will simulate a click on one of the game cards.
const clickSimulator = (args) => {
    let event =  new dom.window.mouseEvent('click', {
        view: dom.window,
        bubbles: true,
        cancelable: false
    });

};

    beforeEach(function () {
        dom = new JSDOM(html, {
            //enables JSDOM to run scripts and use external resources via <links>, <scripts>, <img>
            runScripts: "dengerously",
            resources: "usable"
        });
        document.window.document;
        games = require('./src/game.js');

    });

    afterEach(function(){
        delete require.cache[require.resolve('./src/game.js')]
    });

    it("should be able to add addEventListner to all game tiles and make them clikable", function(){
        clickSimulator(0)
        expect(document.getElementsByClassName('card').length).toEqual(1)
    })

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

// describe('function flip cards', function() {
//     it('should check if cards flip', () => {
//         const jsdom = new JSDOM()
//         const htmlElement = jsdom.window.document.createElement('div')
//         expect(flipTrigger(htmlElement, function () { return true; })).to.equal(true)
//     });
// });

// describe('adds all cards', function(){
//     let triggers = 0;
   
//     it('should increase the counter for the flips', function(){
//         expect(card).toHaveBeencalled();
//     });
 });