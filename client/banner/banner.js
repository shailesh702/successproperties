/*Template.banner.helpers({
	'buyrent_category':function () {
		var cat = bannerdb.find({},{_id:0,category:1});
		if(cat){
			//$("#container_desc_root_ul").css('color':'red');
			return cat;
		}
	}
});*/
Template.banner.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        //self.subscribe('searchui');
    });
});

Template.banner.events({
	'click #update_delete_option>.glyphicon-remove': function(e){
		var $this = $(e.target);
		//$($this).
		// prompt("Are you sure you want to delete this Post");
		// if(true)
		// {
		// 	alert("ok");
		// }

		
		var id = this._id;
		//alert(id);
		var dis = bannerdb.findOne({_id:id},{_id:1,title:1});
		//alert(dis.category);
		var dis = bannerdb.remove({_id:id});
		Toast.info("Post deleted successfully");
	},
	'click #update_delete_option>.glyphicon-pencil': function(e){
		//alert("Are you sure you want to edit");
		var title = $("#banner_title").text();
		if ($("#banner_location").text().charAt(0) == " ") {  // this is done to remove white space in the begning of text in textbox
			var loc = $("#banner_location").text().slice(1);
			console.log(loc);
		}
		else{
			var loc = $("#banner_location").text();
		}
		
		if($("#banner_price").text().charAt(0) == " "){
			var price = $("#banner_price").text().slice(1);	
		}
		else{
			var price = $("#banner_price").text();
		}
		if ($("#banner_price_char").text().charAt(0) == " ") {
			var price_char = $("#banner_price_char").text().slice(1);
		}
		else{
			var price_char = $("#banner_price_char").text();
		}
		if ($("#banner_rooms").text().charAt(0) == " ") {
			var rooms = $("#banner_rooms").text().slice(1);
		}
		else{
			var rooms = $("#banner_rooms").text();
		}		
		if ($("#banner_rooms_type").text().charAt(0) == " ") {
			var rooms_type = $("#banner_rooms_type").text().slice(1);
		}
		else{
			var rooms_type = $("#banner_rooms_type").text();
		}
		if ($("#banner_sq_ft").text().charAt(0) == " ") {
			var sqFts = $("#banner_sq_ft").text().slice(1);
		}
		else{
			var sqFts = $("#banner_sq_ft").text();
		}
		if ($("#banner_res_comm").text().charAt(0) == " ") {
			var rescomm = $("#banner_res_comm").text().slice(1);
		}
		else{
			var rescomm = $("#banner_res_comm").text();
		}
		if ($("#banner_description").text().charAt(0) == " ") {
			var descriptions = $("#banner_description").text().slice(1);
		}
		else{
			var descriptions = $("#banner_description").text();
		}
		

		var txtTitle = $('<input id="txtTitle" type="text" value="' +title+ '" /> ' );
		$("#banner_title").replaceWith(txtTitle);
		var txtLoc = $('<input id="txtLocation" type="text" value="'+loc+'" style="width:80px;position:absolute;left:30px;top:-3px;"/>');
		$("#banner_location").replaceWith(txtLoc);
		var txtPrice = $('<input id="txtPrice" type="text" pattern="\d+" value="'+price+'" style="width:30px;position:absolute;left:175px;top:-3px"/>');
		
		$("#banner_price").replaceWith(txtPrice);
		if($("#txtPrice").val().charAt(0) == " ")
		console.log($("#txtPrice").val().charAt(0));
		var txtPriceChar = $('<input id="txtPriceChar" type="text" value="'+price_char+'" style="width:20px;position:absolute;left:210px;top:-3px;" />');
		
		var txtPriceType1 = $("#txtPriceChar").val();//.slice(1);
		
		//var txtPriceType = $("#txtPriceChar").val();
		
		$("#banner_price_char").replaceWith(txtPriceChar)
		console.log(txtPriceType1);
		console.log($("#txtPriceChar").val().charAt(0));
		//console.log($("#banner_price_char").val());
		var txtRooms = $('<input id="txtRooms" type="text" pattern="\d+" value="' + rooms + '" style="width:20px"/>');
		$("#banner_rooms").replaceWith(txtRooms);
		var txtRoomsType = $('<input id="txtRoomsType" type="text" value="'+rooms_type+'" style="width:50px"/>')
		$("#banner_rooms_type").replaceWith(txtRoomsType);
		//console.log(txtRoomsType);
		var txtSqFts = $('<input id="txtSq_ft" type="text" value="' + sqFts + '" style="width:70px"/>');
		$("#banner_sq_ft").replaceWith(txtSqFts);
		//console.log($("#banner_sq_ft").val());
		var txtResComm = $('<input id="txtResComm" type="text" value="' + rescomm + '" style="width:100px"/> ');
		$("#banner_res_comm").replaceWith(txtResComm);

		var txtDescription = $('<input id="txtDescription" type="text" value="' + descriptions + '" style="width:250px"/>');
		//var txtDescription = $('<textarea id="txtDescription" value="' + descriptions + '"></textarea>');
		$("#banner_description").replaceWith(txtDescription);

		$("#update_delete_option>.glyphicon-pencil").prop('value', 'Save');
		$("#update_delete_option>.glyphicon-pencil").prop('class', 'pull-right glyphicon glyphicon-file');
		$("#update_delete_option>.glyphicon-pencil").prop('id', 'save');
	},
	'click #update_delete_option>.glyphicon-file': function(e){
		var txtTitle = $("#txtTitle").val();
		var txtLoc = $("#txtLocation").val();
		var txtPrices = $("#txtPrice").val();
		var txtPriceChars = $("#txtPriceChar").val();

		var txtRooms = $("#txtRooms").val();
		var txtRoomsType = $("#txtRoomsType").val();
		var txtSqFts = $("#txtSq_ft").val();
		var txtResComm = $("#txtResComm").val();
		var txtDescriptions = $("#txtDescription").val();
		
		$("#update_delete_option>.glyphicon-file").prop('value', 'file');
		$("#update_delete_option>.glyphicon-file").prop('class', 'pull-right glyphicon glyphicon-pencil');
		$("#update_delete_option>.glyphicon-file").prop('id', 'edit');	

		var h1Title= document.createElement('span');
		var lblTitle= $(h1Title).attr({
			'id': "banner_title",
			'style': "font-weight: bold; color:#104E8B; font-size: 20px;"
		});
		$('#txtTitle').replaceWith(lblTitle);
		$("#banner_title").text(txtTitle);

		var h1Loc = document.createElement('span');
		var lblLoc= $(h1Loc).attr({
			'id': "banner_location",
			'style':"width:80px;position:absolute;left:30px;top:-3px;"

		});
		$('#txtLocation').replaceWith(lblLoc);
		// if(txtLoc.slice(1) == " "){
		// 	$("#banner_location").text(txtLoc.slice(1));
		// 	console.log(txtLoc.slice(1));
		// }
		// 	else
			$("#banner_location").text(txtLoc);

		var h1Price= document.createElement('span');
		var lblPrice= $(h1Price).attr({
			'id': "banner_price",
			'style':"width:80px;position:absolute;left:175px;top:-3px;"	
		});
		$('#txtPrice').replaceWith(lblPrice);
		// if (txtPrices.slice(1) == " ") {
		// 	$("#banner_price").text(txtPrices.slice(1));
		// }
		// else
			$("#banner_price").text(txtPrices);
		//console.log(txtPrices.slice(1)+txtPriceChars);

		var h1PriceChar = document.createElement('span');
		var lblPriceChar = $(h1PriceChar).attr({
			'id':"banner_price_char",
			'style':"width:80px;position:absolute;left:190px;top:-3px;"
		});
		$('#txtPriceChar').replaceWith(lblPriceChar);
		$("#banner_price_char").text(txtPriceChars);

		var h1Rooms= document.createElement('span');
		var lblRooms= $(h1Rooms).attr({
			'id': "banner_rooms"
		});
		$('#txtRooms').replaceWith(lblRooms);
		// if (txtRooms.slice(1) == " ") {
		// 	$("#banner_rooms").text(txtRooms.slice(1));
		// }
		// else
			$("#banner_rooms").text(txtRooms);

		var h1RoomsType = document.createElement('span');
		var lblRoomsType = $(h1RoomsType).attr({
			'id' : "banner_rooms_type"
		});
		$('#txtRoomsType').replaceWith(lblRoomsType);
		// if (txtRoomsType.slice(1) == " ") {
		// 	$("#banner_rooms_type").text(txtRoomsType.slice(1));
		// }
		// else
			$("#banner_rooms_type").text(txtRoomsType);

		var h1SqFts= document.createElement('span');
		var lblSqfts= $(h1SqFts).attr({
			'id': "banner_sq_ft"
		});
		$('#txtSq_ft').replaceWith(lblSqfts);
		// if (txtSqFts.slice(1) == " ") {
		// 	$("#banner_sq_ft").text(txtSqFts.slice(1));
		// }
		// else
			$("#banner_sq_ft").text(txtSqFts);

		var h1ResComm= document.createElement('span');
		var lblResComm= $(h1ResComm).attr({
			'id': "banner_res_comm"
		});
		$('#txtResComm').replaceWith(lblResComm);
		// if(txtResComm.slice(1) == " ")
		// 	$("#banner_res_comm").text(txtResComm.slice(1));
		// else
			$("#banner_res_comm").text(txtResComm);

		var h1Desc= document.createElement('span');
		var lblDesc= $(h1Desc).attr({
			'id': "banner_description"
		});
		$('#txtDescription').replaceWith(lblDesc);
		$("#banner_description").text(txtDescriptions);

		bannerdb.update(this._id, {$set:{
			title: txtTitle,
        	location : txtLoc,
        	price : {
        				price_value: txtPrices,
        				select_price: txtPriceChars
        			},
        	rooms : {
        				roomtype_value: txtRooms,
        				select_roomtype : txtRoomsType
        			},
        	sq_ft : txtSqFts,
        	category_res_comm : txtResComm, 
        	category : this.category,
        	description : txtDescriptions,
        	uploadedAt: new Date().toLocaleString()}
		});
		Toast.info("Data updated successfully");
	}
});
/*Template.banner.helpers({
	'buyrent_category':function () {
		var cat = bannerdb.find({},{_id:0,category:1});
		//cat = "rent";
		if(cat.category == "Rent" || cat.category == "RENT"){
			//$("#container_desc_root_ul").css('color':'red');

			return true;
		}
	}
});*/