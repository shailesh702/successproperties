Template.ads.events({

	'click #btn_ads_banner':function (event) {
		var $this = $(event.target);
		$($this).hide();
		$($this).find("#ads_banner").hide();
	}
})