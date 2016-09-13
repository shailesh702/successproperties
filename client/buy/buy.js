
var msg;
$(document).on('click','.drpdown_rent',function(){
	msg = "RENT";
});

$(document).on('click','.drpdown_buy',function(){
	msg = "BUY";
});

Template.buy.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
        //return msg = "true";
    });
});

Template.searchuibuy.helpers({
	'buy_helper': function buy_helper_func() {
		//var msg = Session.get('msg');
		return msg;
		//return "BUY" ;
	}

});

Template.buy.events({
  'click #search_btnbuy': function (e,tmpl) {
    e.preventDefault();
    
    Session.set("test_area",undefined);
    Session.set("test_roomtype",undefined);
    Session.set("test_pricefrom",undefined);
    Session.set("test_priceto",undefined);
    Session.set("test_resi_comm",undefined);
    // var test_radio = e.target.optradio.value;
    // Session.set("test_radio",test_radio);
    var test_area = $("#area_wise_filter").find(':selected').text();
    Session.set("test_area",test_area);
    // console.log(test_area);
    
    var test_roomtype = $("#room_type_filter").find(':selected').text();
    Session.set("test_roomtype",test_roomtype);
    var arr_roomtype = test_roomtype.split(" ");
    var roomtype_number = arr_roomtype[0];
    var roomtype_char = arr_roomtype[1];
    Session.set("roomtype_number",roomtype_number);
    Session.set("roomtype_char",roomtype_char);

    var test_pricefrom = $("#price_from_filter").find(':selected').text();
    Session.set("test_pricefrom",test_pricefrom);
    var arr_price_from = test_pricefrom.split(" ");
    var price_from_number = arr_price_from[0];
    var price_from_char = arr_price_from[1];
    Session.set("price_from_number",price_from_number);
    Session.set("price_from_char",price_from_char);
    
    var test_priceto = $("#price_to_filter").find(':selected').text();
    Session.set("test_priceto",test_priceto);
    var arr_price_to = test_priceto.split(" ");
    var price_to_number = arr_price_to[0];
    var price_to_char = arr_price_to[1];
    Session.set("price_to_number",price_to_number);
    Session.set("price_to_char",price_to_char);
    //alert(arr_price[0]+arr_price[1]);
    var test_resi_comm = $("#resi_commercial").find(':selected').text();
    Session.set("test_resi_comm",test_resi_comm);    
    
  },  
  'click #btn_rent_buy' : function(e){
    Session.keys={};
    Session.set("buy_btn",undefined);
    var buy_btn = "buy";
    Session.set("buy_btn",buy_btn);
    console.log(buy_btn);
  },

});


Template.buy.helpers({
 
   'bannercontent':function(e){
    	//return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});    	

    var disp_testarea = Session.get('test_area'); 
    var disp_roomtype = Session.get('test_roomtype');
	var disp_roomtype_number = Session.get('roomtype_number');
	var disp_roomtype_char = Session.get('roomtype_char');
	  
	var disp_pricefrom = Session.get('test_pricefrom');
	var disp_pricefrom_num = Session.get('price_from_number');
	var disp_pricefrom_char = Session.get('price_from_char');

	var disp_priceto = Session.get('test_priceto');
	var disp_priceto_num = Session.get('price_to_number');
	var disp_priceto_char = Session.get('price_to_char');

	var disp_resi_comm = Session.get('test_resi_comm');
	//var disp_btn_rent = Session.get('rent_btn');
	var disp_btn_buy = Session.get('buy_btn');
  
	if(!disp_btn_buy || disp_btn_buy=="buy")
  	{
    console.log("disp_btn_buy:"+disp_btn_buy);
    
    
    if(!disp_testarea && !disp_roomtype){
    	console.log("1. if");
    	console.log(disp_testarea);
        return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});
        //console.log("1. if");
    }
    else if(disp_testarea == "Area" && disp_roomtype == "Type" && disp_pricefrom == "Price From" && disp_priceto == "Price To" && disp_resi_comm == "All"){
      return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});
    }

    // code for area & roomtype & price from & price to & category
    else if (disp_testarea != "Area" && disp_roomtype != "Type" && disp_pricefrom != "Price From" && disp_priceto != "Price To" && disp_resi_comm != "All") {
          if (disp_roomtype_char == "BHK") {
            console.log("BHK :");
            console.log("Price from and price to :");
            
            if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("Lac and crore :");
              return bannerdb.find(
              {
                $and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              //console.log(" l and cr");
              return bannerdb.find({
                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]                  
              },
              {sort:{uploadedAt:-1}}
              );
            }
            else{// if crore and lac selected
              console.log("crore and lac");
              return false;
            }
          }
            ////////////////////////////////////////////
          else{ //if room == 1RK 
              console.log("RK and Price From :");              
              if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("Lac and crore :");
              return bannerdb.find(
              {$or:[
                {$and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    }]
                },
                {
                  sort:{"price.price_value":1}
                }
              );
            }
            else if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              console.log(" l and cr");
              return bannerdb.find({
                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]                  
              },
              {sort:{uploadedAt:-1}}
              );
            }
            else{// if crore and lac selected
              console.log("crore and lac");
              return false;
            }
          }
              

        } // End of if else of area,type,price from,price to and all

        // code for area & roomtype & price from & price to
        else if (disp_testarea != "Area" && disp_roomtype != "Type" && disp_pricefrom != "Price From" && disp_priceto != "Price To") {
          if (disp_roomtype_char == "BHK") {
            console.log("BHK :");
            console.log("Price from and price to :");
            
            if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("Lac and crore :");
              return bannerdb.find(
              {
                $and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,                      
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              //console.log(" l and cr");
              return bannerdb.find({
                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]                  
              },
              {sort:{"rooms.roomtype_value":1}}
              );
            }
            else{// if crore and lac selected
              console.log("crore and lac");
              return false;
            }
          }
            ////////////////////////////////////////////
          else{ //if room == 1RK 
              console.log("RK and Price From :");              
              if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("Lac and crore :");
              return bannerdb.find(
              {$or:[
                {$and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      location : disp_testarea,
                      category : "BUY"
                    }]
                },
                {
                  sort:{"price.price_value":1}
                }
              );
            }
            else if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              console.log(" l and cr");
              return bannerdb.find({
                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category : "BUY"
                    }
                    ]                  
              },
              {sort:{uploadedAt:-1}}
              );
            }
            else{// if crore and lac selected
              console.log("crore and lac");
              return false;
            }
          }              

        } // End of if else of area,type,price from,price to 

        else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_pricefrom != "Price From") {
          if (disp_roomtype_char == "BHK" && disp_pricefrom != "Price From") {
            console.log("BHK :");
            console.log("Price from :");
                if (disp_pricefrom_char == "Lac") {
                  console.log("Lac :");
                  return bannerdb.find(
                    { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char,
                              category : "BUY"
                            },
                            {"price.select_price":"Cr"}
                        ]},
                        {
                          location:disp_testarea,
                          "rooms.roomtype_value":{$gte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,
                          category : "BUY"
                         }  
                    ]},                    
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else{ // selecting crore 
                  console.log("Crore :");
                  return bannerdb.find(
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      location:disp_testarea,
                      "rooms.roomtype_value":{$gte:disp_roomtype_number},
                      "rooms.select_roomtype":disp_roomtype_char,
                      category : "BUY"
                    },
                    {
                      sort:{uploadedAt:-1}
                    });
                  }            
                //}
            } ////////////////////////////////////////////
          else{ //if room == 1RK 
            
              console.log("RK and Price From :");              
              if (disp_pricefrom_char == "Lac") {
                  console.log("Lac :");
                return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char,                              
                              "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              "rooms.select_roomtype":disp_roomtype_char,
                              category : "BUY"
                            },
                            {"price.select_price":"Cr",category : "BUY"},
                            {"rooms.select_roomtype":"BHK",category : "BUY"}
                        ]},
                        {location:disp_testarea}
                      ]},
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else{ // selecting crore 
                  console.log("Crore :");
                  return bannerdb.find(
                    {
                      $and:[
                        {$or:[
                          {"price.price_value":{$gte:disp_pricefrom_num},
                          "price.select_price":"disp_pricefrom_char",                          
                          "rooms.roomtype_value":{$gte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,
                          category : "BUY"
                          },
                          {"rooms.select_roomtype":"BHK",category : "BUY"}
                        ]},
                        {location:disp_testarea,category : "BUY"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }

        }/////////////// End of ELSE IF PRICE FROM

        else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_priceto != "Price To") {
          if (disp_roomtype_char == "BHK" && disp_priceto != "Price To") {
            console.log("BHK :");
            console.log("Price To :");
            if (disp_priceto_char == "Lac") {
                console.log("Lac :");
                return bannerdb.find(
                    { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$lte:disp_priceto_num},
                              "price.select_price":disp_priceto_char,
                              "rooms.roomtype_value":{$lte:disp_roomtype_number},
                              "rooms.select_roomtype":disp_roomtype_char,
                            },
                            {"price.select_price":"K"}

                        ]},
                        {
                          location:disp_testarea,
                          category : "BUY"
                        }  
                    ]},                    
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else{ // selecting crore 
                  console.log("Crore :");
                  return bannerdb.find(
                    {
                      $or:[
                        {"price.price_value":{$lte:disp_priceto_num},
                        "price.select_price":disp_priceto_char,
                        location:disp_testarea,
                        "rooms.roomtype_value":{$lte:disp_roomtype_number},
                        "rooms.select_roomtype":disp_roomtype_char,
                        category : "BUY"
                        },
                        {"price.select_price":"Lac",location:disp_testarea,category : "BUY"},
                        {"price.select_price":"K",location:disp_testarea,category : "BUY"}
                      ]
                    },
                    {
                      sort:{uploadedAt:-1}
                    });
                  }            
                //}
            } ////////////////////////////////////////////
          else{ //if room == 1RK 
                        
              console.log("RK and Price To :");              
              if (disp_priceto_char == "Lac") {
                  console.log("Lac :");
                return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$lte:disp_priceto_num},
                              "price.select_price":disp_priceto_char,                              
                              "rooms.roomtype_value":{$lte:disp_roomtype_number},
                              "rooms.select_roomtype":disp_roomtype_char,
                              category : "BUY"
                            },
                            {"price.select_price":"K"},                            
                        ]},
                        {location:disp_testarea,category : "BUY"}
                      ]},
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else{ // selecting crore 
                  console.log("Crore :");
                  return bannerdb.find(
                    {
                      $and:[
                        {$or:[
                          {"price.price_value":{$lte:disp_to_num},
                          "price.select_price":disp_priceto_char,                          
                          "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,
                          category : "BUY"
                          },                          
                        ]},
                        {location:disp_testarea,category : "BUY"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }

        }/////////////// End of ELSE IF PRICE TO

        else if(disp_testarea != "Area" && disp_roomtype != "Type" && disp_resi_comm != "All"){
          if (disp_roomtype_char == "BHK") {
          return bannerdb.find({location:disp_testarea,"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char,category_res_comm:disp_resi_comm},{sort:{uploadedAt:-1}});
          }
          else{
            return bannerdb.find({
              $and : [
                      {$or : [{"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                              {"rooms.select_roomtype":"BHK"}
                              ]},                      
                      {category_res_comm:disp_resi_comm,category : "BUY"},
                      {location:disp_testarea,category : "BUY"}
              ]},
              {sort:{uploadedAt:-1}});
          }
        }
        else if(disp_testarea != "Area" && disp_roomtype != "Type"){
          if (disp_roomtype_char == "BHK") {
            return bannerdb.find(
            	{
            		location:disp_testarea,
            		"rooms.select_roomtype":disp_roomtype_char,
            		"rooms.roomtype_value":{$gte:disp_roomtype_number},
            		category : "BUY"
            	},
            		{sort:{uploadedAt:-1}
            	});
          }
          else
            return bannerdb.find({
              $and:[
                {$or:[
                      {"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char,category : "BUY"},
                      {"rooms.select_roomtype":"BHK",category : "BUY"}
                    ]},
                    {location:disp_testarea,category : "BUY"}
              ]},
              {sort:{uploadedAt:-1}}
            );
        }
        else if (disp_testarea != "Area" && disp_pricefrom != "Price From") {
          if (disp_pricefrom_char == "Lac") {
            //console.log("Area and price from:")
            return bannerdb.find(
                {$or:[
                    {
                      location:disp_testarea,
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      category : "BUY"
                    },
                    {location:disp_testarea,"price.select_price":"Cr",category : "BUY"}
                ]},
                {sort:{uploadedAt:-1}
              });
          }
          else{
            return bannerdb.find(
                {
                  location:disp_testarea,
                  "price.price_value":{$gte:disp_pricefrom_num},
                  "price.select_price":disp_pricefrom_char,
                  category : "BUY"
                },
                {sort:{uploadedAt:-1}
              });
          }
        }
        else if (disp_testarea != "Area" && disp_priceto != "Price To") {
          if (disp_priceto_char == "Lac") {
            //console.log("Area and price from:")
            return bannerdb.find(
                {$or:[
                    {
                      location:disp_testarea,
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char
                    },
                    {location:disp_testarea,"price.select_price":"K",category : "BUY"}
                ]},
                {sort:{uploadedAt:-1}
              });
          }
          else{ // if selected = Crore
            return bannerdb.find(
                {$or:[
                  {
                    location:disp_testarea,
                    "price.price_value":{$lte:disp_priceto_num},
                    "price.select_price":disp_priceto_char
                  },
                  {location:disp_testarea,"price.select_price":"Lac",category : "BUY"},
                  {location:disp_testarea,"price.select_price":"K",category : "BUY"}
                ]},
                {sort:{uploadedAt:-1}
              });
          }
        }
        else if(disp_testarea != "Area" && disp_resi_comm != "All"){
            return bannerdb.find({location:disp_testarea,category_res_comm:disp_resi_comm,category:"BUY"},{sort:{uploadedAt:-1}});
        }
        else if (disp_pricefrom != "Price From" && disp_priceto != "Price To")
        {
          if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
            return bannerdb.find(
                {
                  $and : [
                    {"price.price_value":{$gte:disp_pricefrom_num}},{"price.select_price":disp_pricefrom_char},
                    {"price.price_value":{$lte:disp_priceto_num}},{"price.select_price":disp_priceto_char}
                    ]
                  },
                {sort:{uploadedAt:-1}}
              );
            }            
            else if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr")
            {
              console.log("lac and crore");
              var abc = bannerdb.find(
              {
                $and : [
                     {$or:[{"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},{"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char}]}
                  ]
                },
              {sort:{uploadedAt:-1}}
              ); 
              if(abc)
              {
                console.log("abc");
                return abc;
              }
              else{return false;}
            }
            else{
              return false;
            }
        }
        else if(disp_testarea != "Area")
        {
            var res = bannerdb.find({location:disp_testarea,category:"BUY"},{sort:{uploadedAt:-1}});
            if(res){
              //alert("No data found");
              return res;
            }
            else{
              return false;
            }
        }
        else if(disp_roomtype != "Type"){            
            if (disp_roomtype_char == "RK") {
            return bannerdb.find(
              { $or:[
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category : "BUY"
                },
                {
                	"rooms.select_roomtype":"BHK",
            		category : "BUY"
            	}
              ]},
              {sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find(
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category : "BUY"
                },                
              {sort:{uploadedAt:-1}});
            }
        }
        else if(disp_pricefrom != "Price From")
        {
            if (disp_pricefrom_char == "Lac") {
              
              return bannerdb.find(
                {                  
                  $or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char,category : "BUY"},
                        {"price.select_price":"Cr",category : "BUY"}
                      ]                  
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else{
              return bannerdb.find(
                {
                  "price.price_value":{$gte:disp_pricefrom_num},
                  "price.select_price":disp_pricefrom_char,
                  category : "BUY"
                },
                {
                  sort:{uploadedAt:-1}
                }
                );
            }            
        }      
        else if(disp_priceto != "Price To")
        {
          if(disp_priceto_char == "K"){
            return bannerdb.find(
            	{
            		$or:[
                  		{"price.price_value":{$lte:disp_priceto_num}},
                  		{"price.select_price":disp_priceto_char},
                  		{category:"BUY"}
                	]            		
            	},
            	{sort:{uploadedAt:-1}
            });
          }
          else if(disp_priceto_char == "Lac"){
            // console.log("Lac or less than");            
            return bannerdb.find(
                {
                    $and:[
                    	{$or : [
                        	{"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},
                        	{"price.select_price":"K"}
                      	]},
                      	{category:"BUY"} 
                    ]
                },
                {
                  sort:{uploadedAt:-1}
                }
                );
          }
          else{
            //console.log("price Cr or less than"); 
            return bannerdb.find(
               {               	
              	$and:[
                      {$or : [
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},
                        {"price.select_price":"Lac"},
                        {"price.select_price":"K"}
                      ]},
                      {category:"BUY"} 
                    ]
              },
              { 
                sort:{uploadedAt:-1}
              });               
          }
        }
        else if(disp_resi_comm != "All")
        {
            return bannerdb.find({category_res_comm:disp_resi_comm,category : "BUY"},{sort:{uploadedAt:-1}}); 
        }
        else{
          alert("No result found");
        }
      }
      ///////////////////////////////////////////////////////////////////////////////
/////////////////// 	END of IF 	////////////////////////////////////////////////

    else{
      	console.log("No data found");
      	return false;
    }

    },
    
});
Template.searchuibuy.helpers({
  'areas' :function(){
    //return ["Khopoli","Vashi"];
    var arearesult =  searchuidb.findOne({},{_id:0,area:1});
    return arearesult.area;
    
    },    
    'room_type' :function(){
      var roomtype = searchuidb.findOne({},{_id:0,roomType:1});
      return roomtype.roomType;
    },
    'pricefrom' :function(e){
      
    var rent = Session.get('rent_btn');
    var buy = Session.get('buy_btn');

    //console.log("btn_rent = "+rent);      
    if(msg == "RENT")
    {
    	// console.log("MSG : "+msg);
    	if(rent == "rent"){
	        //console.log("price from "+rent);
	        var test =  searchuidb.findOne({},{_id:0,rentpriceFrom:1});
	        // return test.buypriceFrom;
        	return test.rentpriceFrom;
    	}
      	else{
            // console.log("price from else "+rent);
        	var btest = searchuidb.findOne({},{_id:0});
	        // return btest.buypriceTo;
	        return btest.rentpriceFrom;
      	}
  	}
  	else{
    	if (buy=="buy") {
	        // console.log("price from "+buy);        
	        var test =  searchuidb.findOne({},{_id:0,buypriceFrom:1});
	        return test.buypriceFrom; 
    	}
    	else{
	        console.log("price from else "+buy);
	        var btest = searchuidb.findOne({},{_id:0,buypriceFrom:1});
	        return btest.buypriceFrom;
    	}
    }
      
    },
    'priceto': function(){
    	var rent = Session.get('rent_btn');
    	var buy = Session.get('buy_btn');
        //console.log("price to = "+rent);
    	if (msg == "RENT") 
    	{
      		if(rent == "rent"){
              	// console.log("1.if price from "+buy);
		        var rpto = searchuidb.findOne({},{_id:0,rentpriceTo:1});
		        return rpto.rentpriceTo;
		    }
	      	else{
	        	//console.log("1.price from else "+buy);
	        	var buypriceto = searchuidb.findOne({},{_id:0,buypriceTo:1});
	        	//return buypriceto.buypriceTo;
	        	return buypriceto.rentpriceTo;
	      	}
    	}
    	else
    	{
      		if (buy=="buy") {
        	//console.log("2.if price from "+buy);
        
        	var test =  searchuidb.findOne({},{_id:0,buypriceTo:1});
        	return test.buypriceTo; 
      	}
      	else{
            //console.log("2.price from else "+buy);
        	var btest = searchuidb.findOne({},{_id:0,buypriceTo:1});
        	return btest.buypriceTo;
      	}
    }
      //Session.keys={};
    },
    'rescomm':function(){
      var residential_commercial = searchuidb.findOne({},{_id:0,residential_commercial:1});
      return residential_commercial.residential_commercial;
    },
    'isTrue':function(){
      return true;
    }
});

