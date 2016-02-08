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

describe('Address',function () {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St.", "Anytown", "Anystate");
    expect(testAddress.street).to.equal("123 Main St.");
    expect(testAddress.city).to.equal("Anytown");
    expect(testAddress.state).to.equal("Anystate");
  });
});
