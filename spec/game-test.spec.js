
describe('memory game tests', function () {
    const html = require('./interface.js')
    const jsdom = require('jsdom')
    const { JSDOM } = jsdom;

    // using jsDom's VirtualConsole method
    const virtualConsole = new jsdom.VirtualConsole();

    // and telling it to use the default nodejs console. 
    virtualConsole.sendTo(console);

    // this function simulates a click on one of the game tiles.
    const clickSimulator = (args) => {
        let event = new dom.window.MouseEvent('click', {
            view: dom.window,
            bubbles: true,
            cancelable: false
        })

        let element = document.getElementsByClassName('card')[args];
        element.dispatchEvent(event);
    };

    beforeEach(() => {

        dom = new JSDOM(html, {
            
            runScripts: "dangerously",
            resources: "usable"
        });
        document = dom.window.document;
        game = require("../src/game");

    })

    afterEach(() => {
        delete require.cache[require.resolve('../src/game')]
    })

    it("should be able to add addEventListener to all game tiles and make them clickable", () => {
        clickSimulator(0) // specify which card index to click
        expect(document.getElementsByClassName('memory-cards').length).toEqual(1)
    });
     it('game must have 12 cards', function () {
            expect(game.card).toEqual(12)
        });
});
    // it("should listen be able add addEventListner to all cards and make them clickable", function(){
    //     expect().toBe()
    // })







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
//  });

