const assert = require('assert');
const Rectangle = require('../Rectangle');

describe ('Rectangle', () => {

    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof Rectangle, 'function');
        assert.strictEqual(Rectangle.length, 2);
    });
    it ('is returning a square', () => {
        assert.strictEqual(new Rectangle(2, 2).isSquare(), true);
        assert.strictEqual(new Rectangle(1, 2).isSquare(), false);
    });
    it ('is returning the rectangle surface', () => {
        assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
    });
    it ('is returning the rectangle perimeter', () => {
        assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
    });
})