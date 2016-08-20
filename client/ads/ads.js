Template.ads.events({

	'click #btn_ads_banner':function (event) {
		var $this = $(event.target);
		//$($this).hide();
		$($this).parents("#ads_banner").hide();
	}
})