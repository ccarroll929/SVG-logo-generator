const Square = require('../Square');

describe('Square', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const square = new Square('crimson','SVG','black');
        expect(square.render()).toEqual(`
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="crimson"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="black">SVG</text>
    </svg>
        `
        );
    });
});