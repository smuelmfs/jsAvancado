function PhoneNumber(PhoneNumberString) {
  const fixedString = PhoneNumberString.replace(/[\sa-zA-z]/g, "");
  this.constryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/);
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (31) 9 9652-0755"));
console.log(new PhoneNumber("+1 (519) aaa sasa652-0755"));
