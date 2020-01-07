const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

describe('function flip cards', function() {
    it('should check if cards flip', () => {
        const jsdom = new JSDOM()
        const htmlElement = jsdom.window.document.createElement('div')
        expect(flipTrigger(htmlElement, function () { return true; })).to.equal(true)
    });
});

describe('adds all cards', function(){
    let triggers = 0;
    beforeEach(function(){
        triggers ++;
        let card = flipTrigger();


    });
    it('should increase the counter for the flips', function(){
        expect(card).toHaveBeencalled();
    });
});