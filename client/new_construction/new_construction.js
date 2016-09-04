Template.new_construction.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
        
    });
});
Template.new_construction.helpers({
	'bannercontent': function () {
		return bannerdb.find({},{sort:{uploadedAt:-1}});
	}
})