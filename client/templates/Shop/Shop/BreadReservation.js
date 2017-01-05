AutoForm.addHooks('insertBreadReservation',{
  onSuccess: function(){
    $('.bread-modal').modal('hide');
    $('.bread-modal-confirm').modal('show');
  }
})

Template.BreadReservation.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('open-ats');
  });
});

Template.BreadReservation.events({
  'click .bread-modal-open': function(event) {
      event.preventDefault();
      // let id = event.currentTarget.id;
      $('.bread-modal')
      // .modal('setting', 'closable', false)
      .modal('show');
    }
});
