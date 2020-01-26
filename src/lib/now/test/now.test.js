const now = require('../now');

describe('now', () => {
  it('gets the time', () => {
    expect(now()).toMatch(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})Z/);
  });
});
