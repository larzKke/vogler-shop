
Template.Header.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('open-ats');
  });
});

Template.Header.helpers({
  openAts() {
    return OpenAts.find({});
  }
})
