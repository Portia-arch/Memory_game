describe('memory game', function(){
    const html = require('../spec/interface')
    const jsdom = require('jsdom')
    const {JSDOM} = jsdom;

    //JSDOM virtual console method, telling it to use the default nodejs console
    const virtualConsole = new jsdom.VirtualConsole();

    virtualConsole.sendTo(console);

    //
    const  clickSimumlator = (args)=> {
        let event = new dom.window.MouseEvent('click', {
            view: dom.window,
            bubbles: true,
            cancelable: false
        })
        let elements = document.getElementsByClassName('card')[args];
        elements.dispatchEvent(event);
    };

    beforeEach(function(){

        dom = new JSDOM(html, {
            runScripts:"dangerously",
            resources: "usable"
        });
        document = dom.window.document;
        game = require("../src/game");
    });

    it("should be able to return 12 cards", function() {
        expect(document.getElementsByClassName('card').length).toEqual(12)
    });
    // it("should listen be able add addEventListner to all cards and make them clickable", function(){
    //     expect().toBe()
    // })
    
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
//  });

