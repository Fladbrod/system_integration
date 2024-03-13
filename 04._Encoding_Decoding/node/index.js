const base64EncodedString = btoa('Hello, World!');

console.log(base64EncodedString);

const base64DecodedString = atob(base64EncodedString);

console.log(base64DecodedString);