describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Carmen", "Sandiego");
    expect(testContact.firstName).to.equal("Carmen");
    expect(testContact.lastName).to.equal("Sandiego");
    expect(testContact.addresses).to.eql([]);
  });
});
