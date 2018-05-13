describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`linxljs.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
            assert.notEqual(linxljs.arrayEqual([0, 2, 3, 4], [1, 2, 3]))
        });
        it(`linxljs.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(linxljs.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('linxljs.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(linxljs.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        const arr = [8, 2, 3, 4, 7, 8]
        it(`linxljs.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(linxljs.arrayEqual(arr, arr))
        });
    });
});