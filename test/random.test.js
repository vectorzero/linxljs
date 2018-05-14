describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(linxljs.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(linxljs.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= linxljs.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = linxljs.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})