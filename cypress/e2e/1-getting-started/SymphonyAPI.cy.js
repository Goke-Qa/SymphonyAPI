describe('API Test', () => {
  it('should return objects with Category: Authentication & Authorization', () => {
    cy.request('https://api.publicapis.org/entries')
      .then((response) => {
        const entries = response.body.entries;
        const filteredEntries = entries.filter((entry) => entry.Category === 'Authentication & Authorization');
        const expectedCount = filteredEntries.length;
        expect(expectedCount).to.eq(7);
        console.log(filteredEntries);
      });
  });
});
