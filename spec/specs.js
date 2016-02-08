describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Carmen", "Sandiego");
    expect(testContact.firstName).to.equal("Carmen");
    expect(testContact.lastName).to.equal("Sandiego");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Usagi", "Tsukino");
    expect(testContact.fullName()).to.equal("Usagi Tsukino");
  });
});
