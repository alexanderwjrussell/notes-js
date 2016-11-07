var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error('Assertion failed: ' + assertionToCheck + ' is not truthy')
    }
  }
  isEqual: function (assertionToCheck, assertionToCheckTwo) {
    if (assertionToCheck != assertionToCheckTwo) {
      throw new Error('Assertion failed: ' + assertionToCheck + ' does not equal' + assertionToCheckTwo)
    }
  }
}
