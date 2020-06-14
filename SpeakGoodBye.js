(function (window){
var speakWord="Good Bye";
var byeSpeaker = {};
byeSpeaker.sayGoodbye= function speak(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker=byeSpeaker;
})(window);
