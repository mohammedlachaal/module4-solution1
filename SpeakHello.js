(function(window){
var speakWord = "Hello";
var helloSpeaker={};
helloSpeaker.sayHello= function speak(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;
})(window);
