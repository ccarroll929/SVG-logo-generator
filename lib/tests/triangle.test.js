const Triangle = require('../Triangle');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const triangle = new Triangle('forestgreen','SVG','antiquewhite');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="forestgreen"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="antiquewhite">SVG</text>
        </svg>
        `
        );
    });
});