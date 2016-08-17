
var msg;
$(document).on('click','.drpdown_rent',function(){
	msg = "RENT";
});

$(document).on('click','.drpdown_buy',function(){
	msg = "BUY";
});


Template.search_ui.helpers({
	'buy_helper': function buy_helper_func() {
		//var msg = Session.get('msg');
		return msg;
		//return "BUY" ;
	}

});
Template.buy.helpers({
  bannercontent:[
  { title:'Kalptaru Residencies',
    location:'Mumbai',
    price:'25lac',
    rooms:'1BHK',
    sq_ft:'350',
  },
  { title:'Raheja Residencies',
    location:'Vashi',
    price:'35lac',
    rooms:'2BHK',
    sq_ft:'450',
  },
  ],
})