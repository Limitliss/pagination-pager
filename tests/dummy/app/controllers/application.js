import Ember from 'ember';

export default Ember.Controller.extend({
  count:10,
  current:1,
  actions: {
    pageChanged: function (direction, page, last) {
      console.log(direction, page, last);
    }
  },
  onCount:function(){
    this.set('current',0);
  }.observes('current')
});
