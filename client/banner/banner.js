
Template.banner.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
    });
});
Template.banner.events({
	'click #update_delete_option>.glyphicon-remove': function(e){
		var $this = $(e.target);
		//$($this).
		alert("Are you sure you want to delete this Post");
		var id = this._id;
		alert(id);
		//var dis = bannerdb.findOne({_id:id},{_id:1,title:1});
		//alert(dis.category);
		var dis = bannerdb.remove({_id:id});
		Toast.info("Post deleted successfully");
	},
	'click #update_delete_option>.glyphicon-pencil': function(e){
		alert("Are you sure you want to edit");
	},
});
