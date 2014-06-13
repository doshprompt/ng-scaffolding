describe('ngScaffolding.docs', function () {
    'use strict';

    browser.get('index.html');

    it('should automatically redirect to /home when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('/home');
    });
});
