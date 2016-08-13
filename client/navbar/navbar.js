
/*Template.mainNav.helpers({
	'isOwner':function(){
		return this.owner === Meteor.userId();
	},
});*/
Template.mainNav.onCreated(function(){
	var self=this;
	this.autorun(function(){
		self.myval = "BUY";
	});
});

Template.mainNav.events({
	'click .drpdown_rent':function (event,t) {
		//var t.myval = "RENT";
		//Meteor.call("buy_helper_func",name);
		var $this = $(event.target);
		$("#btn_ads_banner").show();
		$("#ads_banner").show();
	},
	'click .drpdown_buy':function(event,t){
		//var t.myval = "BUY";
		//var name = "BUY";
		//console.log(t.myval);
		//Meteor.call("buy_helper_func",name);
		var $this = $(event.target);
		$("#btn_ads_banner").show();
		$("#ads_banner").show();
	},

});