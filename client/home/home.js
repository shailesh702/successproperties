
// bannerdb = new Mongo.Collection('bannerdb'); 
// searchuidb = new Mongo.Collection('searchui');

Template.home.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
        return msg = "true";
    });
});

Template.ads.onCreated(function(){
  var self = this;
  this.autorun(function(){
    self.subscribe('bannerdb');
  });
});

Template.home.events({
  'submit form': function (e,tmpl) {
    e.preventDefault();
    //var buyrent =  e.target.optradio.value;
    //alert(buyrent);
    // var buy="buy";
    // if (buyrent=="rent"){
    //   alert(buyrent);
    // }
    // else
    //    alert(buyrent);
    // var test = searchuidb.find({},{_id:0,category:1});
    //   //var buy="buy";
    // alert(test.category);
    // if(test.category == "Rent")
    //   alert("Hello");
    // var $this = $(e.target);
    // var id = this._id;
    //var test = searchuidb.find({_id:id});//,{_id:0,rentpriceFrom:1});
      // for (var i = 0; i < test.length; i++) {
      //   alert(test[i]);
      // }
    //alert(test._id);
    
    // alert(id);
    // var dis = searchuidb.findOne({},{_id:0,area:1});
    // for (var i = 0; i < dis.area.length; i++) {
    //    alert(dis.area[i]);
    // };
    //alert(dis.area[0]);
    /*var test =[];
    for (var i = 0; i < dis.rentpriceFrom.length; i++) {
      test[i]=dis.rentpriceFrom[i];
    }
    //alert(test[1]);
    for (var i = 0; i < test.length; i++) {
      alert(test[i]);
    }*/
    //var a = searchuidb.findOne({},{_id:0,area:1}).forEach(function (i){console.log("hello");return (i.area)});
    /* var a = searchuidb.find().map(function (i){
        alert (i.area);
      });
    */
    // alert(a);
    //var a = searchuidb.find({},{_id:0,area:1});
    //var split_r = a.split(",");
    //alert(split_r);
    //alert(area);
    
    //var element = tmpl.find('input:radio[name=optradio]:checked');
    // var t = $(element).val();
    // if(t == "rent")
    // {
    //   alert("Hello");
    // }
    // else{alert("Else");}
    

    // var test_area = e.target.optradio.value;
    // alert(test_area);
    // var str = "Rent";
    // if (test_area  == str)
    // {
    //   alert("Hello");
    // }
    // else
    //   alert(typeof(test_area));
    //Session.keys = {};
    Session.set("test_area",undefined);
    Session.set("test_roomtype",undefined);
    Session.set("test_pricefrom",undefined);
    Session.set("test_priceto",undefined);
    Session.set("test_resi_comm",undefined);
    // var test_radio = e.target.optradio.value;
    // Session.set("test_radio",test_radio);
    var test_area = $("#area_wise_filter").find(':selected').text();
    Session.set("test_area",test_area);
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
    //alert(test_resi_comm);
    // if(test == "Vashi")
    // {
    //   alert("Hello");  
    // }
    // else{alert("Else");}
    //alert(test_resi_comm);
    // $("#area_wise_filter").val("Area");
    // $("#room_type_filter").val("Type");
    // $("#price_from_filter").val("Price From");
    // $("#price_to_filter").val("Price To");
    // $("#resi_commercial").val("All");
    
  },
  'click #btn_rent' : function(e){
    Session.keys={};
    //Session.set("buy_btn",undefined);
    var rent_btn = "rent";
    //var t = $()
    //alert(rent_btn);
    Session.set("rent_btn",rent_btn);
  },
  'click #btn_buy' : function(e){
    Session.keys={};
    //var abc = "buy"
    Session.set("buy_btn",undefined);
    //alert(Session.get("buy_btn"));
    var buy_btn = "buy";
    //alert(buy_btn);
    Session.set("buy_btn",buy_btn);
  },
  /*'change #area_wise_filter':function(e,tmpl){
    var areafilter = $(e.currentTarget).val();
    //alert(areafilter);
  },
  'change "room_type_filter':function(e,tmpl){
    var roomfilter = $(e.currentTarget).val();
  }*/
  /*'click #optradio_rent':function(e){
    
      // var abc = ["car","van","train"];
      // $("#")
      // var $this = $(e.target);
      // var id = this._id;
      //var test = searchuidb.find({_id:id},{_id:1});
      //var buy="buy";
      // alert(id);
      /*alert(test.category);
      if(test.category == "Rent")
        alert("Hello Rent");
      */
  //},
  //'change #area_wise_filter': function(e){
      //var test_area = e.target.value;
      //alert(test_area);
      //bannerdb.find({area:test_area});
      //Session.set("test_area",test_area);  
  //},

});

Template.home.helpers({
  
    'bannercontent':function(){
      //var disp_radio = Session.get('test_radio');
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
      var disp_btn_rent = Session.get('rent_btn');
      var disp_btn_buy = Session.get('buy_btn');
      //alert(disp_content);
      //return bannerdb.find({},{sort:{uploadedAt:-1}});
      //console.log(disp_testarea);
      //if(disp_btn_buy == "buy")
      //{
      if(!disp_btn_buy && !disp_btn_rent)
      {
        console.log("disp_btn_buy:"+disp_btn_buy);
        console.log("disp_btn_rent:"+disp_btn_rent);
        
        if(!disp_testarea && !disp_roomtype){
            return bannerdb.find({},{sort:{uploadedAt:-1}});  
        }
        else if(disp_testarea == "Area" && disp_roomtype == "Type" && disp_pricefrom == "Price From" && disp_priceto == "Price To" && disp_resi_comm == "All"){
          return bannerdb.find({},{sort:{uploadedAt:-1}});
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea
                    }
                    ]
                // $and:[
                // {$or : [
                //       {
                //         "price.price_value":{$gte:disp_pricefrom_num},
                //         "price.select_price":disp_pricefrom_char
                //       },
                //       {"price.select_price":"Cr"}
                //   ]},
                //   {
                //     location:disp_testarea,
                //     "rooms.roomtype_value":{$gte:disp_roomtype_number},
                //     "rooms.select_roomtype":disp_roomtype_char,
                //     category_res_comm:disp_resi_comm;
                //    }
                //   ]},
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      location : disp_testarea
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
                      location : disp_testarea
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea
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
            //return bannerdb.find({location:disp_testarea,"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char,category_res_comm:disp_resi_comm},{sort:{uploadedAt:-1}});
              // if(disp_pricefrom != "Price From")
              // {
                console.log("Price from :");
                if (disp_pricefrom_char == "Lac") {
                  console.log("Lac :");
                  return bannerdb.find(
                    { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char
                              // location:disp_testarea,
                              // "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              // "rooms.select_roomtype":disp_roomtype_char,                              
                            },
                            {"price.select_price":"Cr"}
                        ]},
                        {
                          location:disp_testarea,
                          "rooms.roomtype_value":{$gte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,                          
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
                      "rooms.select_roomtype":disp_roomtype_char                      
                    },
                    {
                      sort:{uploadedAt:-1}
                    });
                  }            
                //}
            } ////////////////////////////////////////////
          else{ //if room == 1RK 
            // return bannerdb.find({
            //   $and : [
            //           {$or : [{
            //                   "rooms.roomtype_value":{$gte:disp_roomtype_number},
            //                   "rooms.select_roomtype":disp_roomtype_char
            //                   },
            //                   {"rooms.select_roomtype":"BHK"}
            //                   ]},                                            
            //           {location:disp_testarea}
            //   ]},
            //   {sort:{uploadedAt:-1}});
            
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
                            },
                            {"price.select_price":"Cr"},
                            {"rooms.select_roomtype":"BHK"}
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
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea}
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
                          // "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          // "rooms.select_roomtype":disp_roomtype_char,                          
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
                        "rooms.select_roomtype":disp_roomtype_char                      
                        },
                        {"price.select_price":"Lac",location:disp_testarea},
                        {"price.select_price":"K",location:disp_testarea}
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
                            },
                            {"price.select_price":"K"},
                            //{"rooms.select_roomtype":"BHK"}
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
                          {"price.price_value":{$lte:disp_to_num},
                          "price.select_price":disp_priceto_char,                          
                          "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          //{"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea}
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
                      {category_res_comm:disp_resi_comm},
                      {location:disp_testarea}
              ]},
              {sort:{uploadedAt:-1}});
          }
        }
        else if(disp_testarea != "Area" && disp_roomtype != "Type"){
          if (disp_roomtype_char == "BHK") {
            return bannerdb.find({location:disp_testarea,"rooms.select_roomtype":disp_roomtype_char,"rooms.roomtype_value":{$gte:disp_roomtype_number}},{sort:{uploadedAt:-1}});
          }
          else
            return bannerdb.find({
              $and:[
                {$or:[
                      {"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                      {"rooms.select_roomtype":"BHK"}
                    ]},
                    {location:disp_testarea}
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
                      "price.select_price":disp_pricefrom_char
                    },
                    {location:disp_testarea,"price.select_price":"Cr"}
                ]},
                {sort:{uploadedAt:-1}
              });
          }
          else{
            return bannerdb.find(
                {
                  location:disp_testarea,
                  "price.price_value":{$gte:disp_pricefrom_num},
                  "price.select_price":disp_pricefrom_char
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
                    {location:disp_testarea,"price.select_price":"K"}
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
                  {location:disp_testarea,"price.select_price":"Lac"},
                  {location:disp_testarea,"price.select_price":"K"}
                ]},
                {sort:{uploadedAt:-1}
              });
          }
        }
        else if(disp_testarea != "Area" && disp_resi_comm != "All"){
            return bannerdb.find({location:disp_testarea,category_res_comm:disp_resi_comm},{sort:{uploadedAt:-1}});
        }
        else if (disp_pricefrom != "Price From" && disp_priceto != "Price To")
        {
          if(disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
            return bannerdb.find(
                {
                  // $and : [
                  //   {$or: [{"price.price_value":{$gte:disp_pricefrom_num}},{"price.select_price":disp_pricefrom_char}]},
                  //   {$or: [{"price.price_value":{$lte:disp_priceto_num}},{"price.select_price":disp_priceto_char}]}
                  // ]
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
            var res = bannerdb.find({location:disp_testarea},{sort:{uploadedAt:-1}});
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
                },
                {"rooms.select_roomtype":"BHK"}                
              ]},
              {sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find(
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                },                
              {sort:{uploadedAt:-1}});
            }
        }
        else if(disp_pricefrom != "Price From")
        {
            if (disp_pricefrom_char == "Lac") {
              var counter=0;
              return bannerdb.find(
                {                  
                  $or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.select_price":"Cr"}
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
                  "price.select_price":disp_pricefrom_char
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
            return bannerdb.find({"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},{sort:{uploadedAt:-1}});
          }
          else if(disp_priceto_char == "Lac"){
            //return bannerdb.find({"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},{sort:{uploadedAt:-1}});    
            console.log("Lac or less than");            
            return bannerdb.find(
                {
                  $or : [
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},
                        {"price.select_price":"K"}
                      ] 
                  //$and:[
                  //{$or:[{"price.price_value":{$exists:true}},{"price.select_price":"Cr"}]},
                  /*$and:[
                      {$or : [{"price.price_value":{$lte:disp_priceto_num}}]},
                      {$or:[{"price.select_price":disp_priceto_char},{"price.price_value":{$lte:1}},{"price.select_price":"K"}]}*/
                      //{$or: [{"price.price_value":{$lte:1}},{"price.select_price":"K"}]}
                      //{"price.select_price":"Cr"}
                  
                  //$and:[{disp_priceto_char:"K"}]
                  //]
                  //"price.select_price":"K",
                },
                {
                  sort:{uploadedAt:-1}
                }
                );
          }
          else{
            //console.log("price Cr or less than"); 
            return bannerdb.find(
              { $and:[
                  {$or : [{"price.price_value":{$lte:disp_priceto_num}}]},
                  {$or : [{"price.select_price":disp_priceto_char},{"price.select_price":"Lac"},{"price.select_price":"K"}]},
                  //{"price.select_price":"Cr"}
                ]
              },
              { 
                sort:{uploadedAt:-1}
              });               
          }
        }
        else if(disp_resi_comm != "All")
        {
            return bannerdb.find({category_res_comm:disp_resi_comm},{sort:{uploadedAt:-1}}); 
        }
        else{
          alert("No result found");
        }
      }
      /////////////////////////////////////////////////////////////////////////////////
      else{   // code for RENT
        if(disp_btn_rent == 'rent'){
          //console.log("else : "+disp_btn_rent);
          //console.log("disp_testarea:"+disp_testarea);
          if(!disp_testarea && !disp_roomtype){
            return bannerdb.find({category:"RENT"},{sort:{uploadedAt:-1}});  
          }
          else if(disp_testarea == "Area" && disp_roomtype == "Type" && disp_pricefrom == "Price From" && disp_priceto == "Price To" && disp_resi_comm == "All"){
            return bannerdb.find({category:"RENT"},{sort:{uploadedAt:-1}});
          }

          // code for area & roomtype & price from & price to & category
          else if (disp_testarea != "Area" && disp_roomtype != "Type" && disp_pricefrom != "Price From" && disp_priceto != "Price To" && disp_resi_comm != "All") {
            if (disp_roomtype_char == "BHK") {
            console.log("BHK :");
            console.log("Price from and price to :");
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("K and Lac and crore :");
                return bannerdb.find(
                {
                  $and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
                    }
                    ]                
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else if (disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr") {
              return bannerdb.find({
                $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category :"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
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
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
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
                      category:"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
                    }]
                },
                {
                  sort:{"price.price_value":1}
                }
              );
            }            
            else if(disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              console.log(" l and cr");
              return bannerdb.find({                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"RENT"
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

        } // End of else if of area,type,price from,price to and all

        // Start of if area & room & pricefrom & priceto
         else if (disp_testarea != "Area" && disp_roomtype != "Type" && disp_pricefrom != "Price From" && disp_priceto != "Price To" ) {
            if (disp_roomtype_char == "BHK") {
            console.log("BHK :");
            console.log("Price from and price to :");
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("K and Lac and crore :");
                return bannerdb.find(
                {
                  $and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
                    }
                    ]                
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else if (disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr") {
              return bannerdb.find({
                $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category :"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
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
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("Lac and crore :");
              return bannerdb.find(
              {$or:[
                {$and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      location : disp_testarea,
                      category:"RENT"
                    }]
                },
                {
                  sort:{"price.price_value":1}
                }
              );
            }            
            else if(disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              console.log(" l and cr");
              return bannerdb.find({                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      location : disp_testarea,
                      category:"RENT"
                    },
                    // {
                    //   "price.price_value":{$lte:disp_priceto_num},
                    //   "price.select_price":disp_priceto_char,
                    //   //"rooms.select_roomtype":disp_roomtype_char,
                    //   location : disp_testarea,
                    //   category:"RENT"
                    // },
                    {
                      //"price.price_value":{$lte:disp_priceto_num},
                      //"price.select_price":"BHK",
                      "rooms.select_roomtype":"BHK",
                      location : disp_testarea,
                      category:"RENT"
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

        }

        // Start of if area,room,priceFrom
        else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_pricefrom != "Price From") {
            if (disp_roomtype_char == "BHK" && disp_pricefrom != "Price From") {
              console.log("RENT BHK :");
              console.log("RENT Price from :");
              if (disp_pricefrom_char == "Lac") {
                console.log("Lac :");
                return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char
                              // location:disp_testarea,
                              // "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              // "rooms.select_roomtype":disp_roomtype_char,                              
                            },
                            {"price.select_price":"Cr"}
                        ]},
                        {
                          location:disp_testarea,
                          "rooms.roomtype_value":{$gte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,
                          category:"RENT"
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
                      category:"RENT"
                    },
                    {
                      sort:{uploadedAt:-1}
                    });
                  }            
            } ////////////////////////////////////////////
          else{ //if room == 1RK 
            
              console.log("RENT RK and Price From :");              
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
                            },
                            {"price.select_price":"Cr"},
                            {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"RENT"}
                      ]},
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else if (disp_pricefrom_char == "K") 
                {
                  console.log("K :");
                  return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char,                              
                              "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              "rooms.select_roomtype":disp_roomtype_char,                              
                            },
                            {"price.select_price":"Lac"},
                            {"price.select_price":"Cr"},
                            {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"RENT"}
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
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"RENT"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }

          }/////////////// End of ELSE IF PRICE FROM

          //////////////// Start of ELSE IF PRICE TO
          else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_priceto != "Price To") {
          if (disp_roomtype_char == "BHK" && disp_priceto != "Price To") {
            //console.log("BHK :");
            //console.log("Price To :");
            if (disp_priceto_char == "Lac") {
                //console.log("Lac :");
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
                          "category":"RENT"
                          // "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          // "rooms.select_roomtype":disp_roomtype_char,                          
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
                        category : "RENT"
                        },
                        {"price.select_price":"Lac",location:disp_testarea,category:"RENT"},
                        {"price.select_price":"K",location:disp_testarea,category:"RENT"}
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
                            },
                            {"price.select_price":"K"}                            
                        ]},
                        {
                          location:disp_testarea,
                          category:"RENT"
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
                      $and:[
                        {$or:[
                          {"price.price_value":{$lte:disp_to_num},
                          "price.select_price":disp_priceto_char,                          
                          "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          //{"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"RENT"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }
          } /////////// End of ELSE IF PRICE TO

          else if(disp_testarea != "Area" && disp_roomtype != "Type" && disp_resi_comm != "All"){
            //return bannerdb.find({location:disp_testarea,"rooms.select_roomtype":disp_roomtype_char ,category_res_comm:disp_resi_comm,category:"RENT"},{sort:{uploadedAt:-1}});
            if (disp_roomtype_char == "BHK") {
              return bannerdb.find({location:disp_testarea,"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char,category_res_comm:disp_resi_comm,category:"RENT"},{sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find({
                  $and : [
                      {$or : [{"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                              {"rooms.select_roomtype":"BHK"}
                              ]},                      
                      {category_res_comm:disp_resi_comm},
                      {location:disp_testarea},
                      {category:"RENT"}
                  ]},
              {sort:{uploadedAt:-1}});
            }
          }
          else if(disp_testarea != "Area" && disp_roomtype != "Type"){
            // return bannerdb.find({location:disp_testarea,"rooms.select_roomtype":disp_roomtype_char,category:"RENT"},{sort:{uploadedAt:-1}});
            if (disp_roomtype_char == "BHK") {
              return bannerdb.find({location:disp_testarea,"rooms.select_roomtype":disp_roomtype_char,"rooms.roomtype_value":{$gte:disp_roomtype_number},category:"RENT"},{sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find({              
                $and:[
                  {$or:[
                      {"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                      {"rooms.select_roomtype":"BHK"}
                    ]},
                    {location:disp_testarea},
                    {category:"RENT"}
                  ]},
                {sort:{uploadedAt:-1}}
              );
            }
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
                      category:"RENT"
                    },
                    {location:disp_testarea,"price.select_price":"Cr",category:"RENT"}
                ]},
                {sort:{uploadedAt:-1}
              });
            }
            else if (disp_pricefrom_char == "K") {
            //console.log("Area and price from:")
              return bannerdb.find(
                {$or:[
                    {
                      location:disp_testarea,
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      category:"RENT"
                    },
                    {location:disp_testarea,"price.select_price":"Cr",category:"RENT"},
                    {location:disp_testarea,"price.select_price":"Lac",category:"RENT"}
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
                  category:"RENT"
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
                      "price.select_price":disp_priceto_char,
                      category:"RENT"
                    },
                    {location:disp_testarea,"price.select_price":"K",category:"RENT"}
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
                    "price.select_price":disp_priceto_char,
                    category:"RENT"
                  },
                  {location:disp_testarea,"price.select_price":"Lac",category:"RENT"},
                  {location:disp_testarea,"price.select_price":"K",category:"RENT"}
                ]},
                {sort:{uploadedAt:-1}
              });
            }
          }
          else if(disp_testarea != "Area" && disp_resi_comm != "All"){
            return bannerdb.find({location:disp_testarea,category_res_comm:disp_resi_comm,category:"RENT"},{sort:{uploadedAt:-1}});
          }
          else if (disp_pricefrom != "Price From" && disp_priceto != "Price To") {
            if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac"){
            return bannerdb.find(
                {
                  // $and : [
                  //   {$or: [{"price.price_value":{$gte:disp_pricefrom_num}},{"price.select_price":disp_pricefrom_char}]},
                  //   {$or: [{"price.price_value":{$lte:disp_priceto_num}},{"price.select_price":disp_priceto_char}]}
                  // ]
                  $and : [
                    {"price.price_value":{$gte:disp_pricefrom_num}},{"price.select_price":disp_pricefrom_char},
                    {"price.price_value":{$lte:disp_priceto_num}},{"price.select_price":disp_priceto_char}
                    ]
                  },
                {sort:{uploadedAt:-1}}
              );
            }
            else if(disp_pricefrom_char == "K" && disp_priceto_char == "Lac")
            {
              //console.log("RENT option : lac and crore");
              return bannerdb.find({
                $and : [
                     {$or:[
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char}
                        
                        ]},
                      {category:"RENT"}
                  ]},
              {sort:{uploadedAt:-1}}
              ); 
              
            }
            else{
              return false;
            }
          }
          else if(disp_testarea != "Area")
          {
            var res = bannerdb.find({location:disp_testarea,category:"RENT"},{sort:{uploadedAt:-1}});
            if(!res){
              alert("No data found");
              }
            else{
              return res;
            }
          }
          else if(disp_roomtype != "Type"){            
            if (disp_roomtype_char == "RK") {
            return bannerdb.find(
              { $or:[
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category:"BUY"
                },
                {"rooms.select_roomtype":"BHK",category:"RENT"},                
              ]},
              {sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find(
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category:"RENT"
                },                
              {sort:{uploadedAt:-1}});
            }
          }
          else if(disp_pricefrom != "Price From")
          {
            if(disp_pricefrom_char == "K"){
              return bannerdb.find({
                  $and:[
                      {$or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.select_price":"Lac"},
                        {"price.select_price":"Cr"}
                      ]},
                      {category:"RENT"} 
                    ]
                  /*$and:[
                        {$or :[{"price.price_value":{$gte:disp_pricefrom_num}}]},
                        {$or: [{"price.select_price":disp_pricefrom_char}]},
                        {$and: [{"price.price_value":{$gte:1}},{"price.select_price":"Lac"}]},
                        {$and: [{"price.price_value":{$gte:1}},{"price.select_price":"Cr"}]},
                        {category:"RENT"}
                      ]*/
                  },
                  {sort:{uploadedAt:-1}}
                  );
            }
            else if(disp_priceto_char == "Lac"){
              return bannerdb.find(
              {
                $and:[
                      {$or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.select_price":"Cr"}
                      ]},
                      {category:"RENT"} 
                    ]
                /*$or:[
                  {category:"RENT"},
                  {"price.price_value":{$gte:disp_pricefrom_num}},
                  {"price.select_price":disp_pricefrom_char},
                  {"price.select_price":"Cr"}
                  ]*/
              },
              {sort:{uploadedAt:-1}}
              );
            }
            else{
              return bannerdb.find({
                "price.price_value":{$gte:disp_pricefrom_num},
                "price.select_price":disp_pricefrom_char,
                category:"RENT"
              },
              {
                sort:{uploadedAt:-1}
              });
            }
          }      
          else if(disp_priceto != "Price To")
          {
            if (disp_priceto_char == "K") {
              return bannerdb.find({
                $and:[
                      {$or : [
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char}
                        
                      ]},
                      {category:"RENT"} 
                    ]
                /*$or:[
                {"price.price_value":{$lte:disp_priceto_num}},
                {"price.select_price":disp_priceto_char},
                {category:"RENT"}
                ]*/
              },
              {
                sort:{uploadedAt:-1}
              });
            }
            else if(disp_priceto_char == "Lac")
            {
              return bannerdb.find({
                $and:[
                      {$or : [
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},
                        {"price.select_price":"K"}
                      ]},
                      {category:"RENT"} 
                    ]                
              },
              {
                sort:{uploadedAt:-1}
              });
            }
            else{
              return bannerdb.find({
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
            return bannerdb.find({category_res_comm:disp_resi_comm,category:"RENT"},{sort:{uploadedAt:-1}}); 
          }
          else{
            alert("No result found");
          }
            
        }
        // End of IF of RENT PART
        // Start of ELSE of BUY PART
        else{
          //Session.set('btn_buy',undefined);
          console.log("else part BUY btn");
          if(!disp_testarea && !disp_roomtype){
            return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});  
          }
          else if(disp_testarea == "Area" && disp_roomtype == "Type" && disp_pricefrom == "Price From" && disp_priceto == "Price To" && disp_resi_comm == "All"){
            return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});
          }
          //Start if area,roomtype,pricefrom,priceto,category
          else if (disp_testarea != "Area" && disp_roomtype != "Type" && disp_pricefrom != "Price From" && disp_priceto != "Price To" && disp_resi_comm != "All") {
            if (disp_roomtype_char == "BHK") {
            console.log("BHK :");
            console.log("Price from and price to :");
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
              console.log("K and Lac and crore :");
                return bannerdb.find(
                {
                  $and : [
                    {
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
                    }
                    ]                
                },
                {
                  sort:{uploadedAt:-1}
                }
              );
            }
            else if (disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr") {
              console.log("l and cr");
              return bannerdb.find({
                $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category :"BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
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
              if(disp_pricefrom_char == "K" && disp_priceto_char == "K" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Cr" && disp_priceto_char == "Cr"){
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
                      category:"BUY"
                    },
                    {
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
                    }
                    ]},
                    { 
                      "price.price_value":{$lte:disp_priceto_num},
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":"BHK",
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
                    }]
                },
                {
                  sort:{"price.price_value":1}
                }
              );
            }            
            else if(disp_pricefrom_char == "K" && disp_priceto_char == "Lac" || disp_pricefrom_char == "Lac" && disp_priceto_char == "Cr"){
              console.log(" l and cr");
              return bannerdb.find({                
                  $or:[{
                      "price.price_value":{$gte:disp_pricefrom_num},
                      "price.select_price":disp_pricefrom_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
                    },
                    {
                      "price.select_price":disp_priceto_char,
                      "rooms.select_roomtype":disp_roomtype_char,
                      category_res_comm:disp_resi_comm,
                      location : disp_testarea,
                      category:"BUY"
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
          //START of if area,type,resi_comm
          else if(disp_testarea != "Area" && disp_roomtype != "Type" && disp_resi_comm != "All"){
            if (disp_roomtype_char == "BHK") {
              return bannerdb.find({location:disp_testarea,"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char,category_res_comm:disp_resi_comm,category:"BUY"},{sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find({
              $and : [
                      {$or : [{"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                              {"rooms.select_roomtype":"BHK"}
                              ]},                      
                      {category_res_comm:disp_resi_comm},
                      {location:disp_testarea},
                      {category:"BUY"}
              ]},
              {sort:{uploadedAt:-1}});
            }
          }
          //////// Start of ELSE IF of PRICE FROM - BUY
          else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_pricefrom != "Price From") {
            if (disp_roomtype_char == "BHK" && disp_pricefrom != "Price From") {
              console.log("RENT BHK :");
              console.log("RENT Price from :");
              if (disp_pricefrom_char == "Lac") {
                console.log("Lac :");
                return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char
                              // location:disp_testarea,
                              // "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              // "rooms.select_roomtype":disp_roomtype_char,                              
                            },
                            {"price.select_price":"Cr"}
                        ]},
                        {
                          location:disp_testarea,
                          "rooms.roomtype_value":{$gte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char,
                          category:"BUY"
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
                      category:"BUY"
                    },
                    {
                      sort:{uploadedAt:-1}
                    });
                  }            
            } ////////////////////////////////////////////
            else{ //if room == 1RK 
            
              console.log("RENT RK and Price From :");              
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
                            },
                            {"price.select_price":"Cr"},
                            {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"BUY"}
                      ]},
                    {
                      sort:{uploadedAt:-1}
                    }
                  );
                }
                else if (disp_pricefrom_char == "K") 
                {
                  console.log("K :");
                  return bannerdb.find(
                  { 
                      $and:[                 
                      {$or : [
                            {
                              "price.price_value":{$gte:disp_pricefrom_num},
                              "price.select_price":disp_pricefrom_char,                              
                              "rooms.roomtype_value":{$gte:disp_roomtype_number},
                              "rooms.select_roomtype":disp_roomtype_char,                              
                            },
                            {"price.select_price":"Lac"},
                            {"price.select_price":"Cr"},
                            {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"BUY"}
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
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          {"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"BUY"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }

          }/////////////// End of ELSE IF PRICE FROM

          //////////////// Start of ELSE IF PRICE TO
          else if (disp_testarea != "Area" && disp_roomtype !="Type" && disp_priceto != "Price To") {
            if (disp_roomtype_char == "BHK" && disp_priceto != "Price To") {
            //console.log("BHK :");
            //console.log("Price To :");
              if (disp_priceto_char == "Lac") {
                //console.log("Lac :");
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
                          "category":"BUY"
                          // "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          // "rooms.select_roomtype":disp_roomtype_char,                          
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
                        {"price.select_price":"Lac",location:disp_testarea,category:"BUY"},
                        {"price.select_price":"K",location:disp_testarea,category:"BUY"}
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
                            },
                            {"price.select_price":"K"}                            
                        ]},
                        {
                          location:disp_testarea,
                          category:"BUY"
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
                      $and:[
                        {$or:[
                          {"price.price_value":{$lte:disp_to_num},
                          "price.select_price":disp_priceto_char,                          
                          "rooms.roomtype_value":{$lte:disp_roomtype_number},
                          "rooms.select_roomtype":disp_roomtype_char
                          },
                          //{"rooms.select_roomtype":"BHK"}
                        ]},
                        {location:disp_testarea,category:"BUY"}
                    ]},
                    {
                      sort:{uploadedAt:-1}
                    });
                  }
            }
          } /////////// End of ELSE IF PRICE TO

          else if(disp_testarea != "Area" && disp_roomtype != "Type"){
            //return bannerdb.find({location:disp_testarea,rooms:disp_roomtype,category:"BUY"},{sort:{uploadedAt:-1}});
            if (disp_roomtype_char == "BHK") {
              return bannerdb.find({location:disp_testarea,"rooms.select_roomtype":disp_roomtype_char,"rooms.roomtype_value":{$gte:disp_roomtype_number},category:"BUY"},{sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find({              
                $and:[
                  {$or:[
                      {"rooms.roomtype_value":{$gte:disp_roomtype_number},"rooms.select_roomtype":disp_roomtype_char},
                      {"rooms.select_roomtype":"BHK"}
                    ]},
                    {location:disp_testarea},
                    {category:"BUY"}
                  ]},
                {sort:{uploadedAt:-1}}
              );
            }
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
                      category:"BUY"
                    },
                    {location:disp_testarea,"price.select_price":"Cr",category:"BUY"}
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
                  category:"BUY"
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
                      "price.select_price":disp_priceto_char,
                      category:"BUY"
                    },
                    {location:disp_testarea,"price.select_price":"K",category:"BUY"}
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
                    "price.select_price":disp_priceto_char,
                    category:"BUY"
                  },
                  {location:disp_testarea,"price.select_price":"Lac",category:"BUY"},
                  {location:disp_testarea,"price.select_price":"K",category:"BUY"}
                ]},
                {sort:{uploadedAt:-1}
              });
            }
          }
          else if(disp_testarea != "Area" && disp_resi_comm != "All"){
            var result = bannerdb.find({location:disp_testarea,category_res_comm:disp_resi_comm,category:"BUY"},{sort:{uploadedAt:-1}});
            //console.log(result);
            
            if(result == null)
            {console.log("No data found");}
            return result;
          }
          else if (disp_pricefrom != "Price From" && disp_priceto != "Price To") {
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
              //console.log("BUY option : lac and crore");
              var abc = bannerdb.find(
              {
                $and : [
                  {$or:[
                    {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                    {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char}
                  ]},
                  {category:"BUY"}
                ]},
              {sort:{uploadedAt:-1}}
              ); 
              if(abc)
              {
                //console.log("abc");
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
              //if(res.location==null){
              //console.log(res.location);
              //}
              return res;
              //}  
              //else{
              //alert("No data found");
              //console.log("No data found");
              //}
            }
            else{
              console.log("No data");
            }
          }
          else if(disp_roomtype != "Type")
          {
            if (disp_roomtype_char == "RK") {
            return bannerdb.find(
              { $or:[
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category:"BUY"
                },
                {"rooms.select_roomtype":"BHK",category:"BUY"},
                //{"rooms.select_roomtype":"Cr",category:"BUY"}
              ]},
              {sort:{uploadedAt:-1}});
            }
            else{
              return bannerdb.find(
                {
                  "rooms.roomtype_value":{$gte:disp_roomtype_number},
                  "rooms.select_roomtype":disp_roomtype_char,
                  category:"BUY"
                },                
              {sort:{uploadedAt:-1}});
            }            
          }
          else if(disp_pricefrom != "Price From")
          {
            if (disp_pricefrom_char == "K") {
              return bannerdb.find(
              {
                /*$or:[
                {"price.price_value":{$gte:disp_pricefrom_num}},
                {"price.select_price":disp_pricefrom_char},
                {"price.select_price":"Lac"},
                {"price.select_price":"Cr"},
                {category:"BUY"}
                ]*/
                $and:[
                      {$or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.select_price":"Lac"},
                        {"price.select_price":"Cr"}
                      ]},
                      {category:"BUY"} 
                    ]
              },
              {
                sort:{uploadedAt:-1}
              }
              );
            }
            else if(disp_pricefrom_char == "Lac"){
              console.log("buy gt than Lac");
              return bannerdb.find(
                {
                  /*$and:[

                    //{$or: [{"price.price_value":{$gte:disp_pricefrom_num}},{"price.select_price":disp_pricefrom_char}]},
                    //{$or: [{"price.select_price":disp_pricefrom_char}]},
                    //{$or: [{"price.price_value":{$gte:1}},{"price.select_price":"Cr"}]},
                    {category:"BUY"}
                  ]*/
                  $and:[
                      {$or : [
                        {"price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},
                        {"price.select_price":"Cr"}
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
              return bannerdb.find(
                {
                  "price.price_value":{$gte:disp_pricefrom_num},
                  "price.select_price":disp_pricefrom_char,
                  category:"BUY"
                },
                {
                  sort:{uploadedAt:-1}
                }
                );
            }
            //return bannerdb.find({category:"BUY","price.price_value":{$gte:disp_pricefrom_num},"price.select_price":disp_pricefrom_char},{sort:{uploadedAt:-1}});
          }      
          else if(disp_priceto != "Price To")
          {
            if (disp_priceto_char == "K") 
            {
              return bannerdb.find(
              {
                $or:[
                  {"price.price_value":{$lte:disp_priceto_num}},
                  {"price.select_price":disp_priceto_char},
                  {category:"BUY"}
                ]
              },
              {
                sort:{uploadedAt:-1}
              }
              );
            }
            else if (disp_priceto_char == "Lac") {
              return bannerdb.find(
                  {
                    $and:[
                      {$or : [
                        {"price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},
                        {"price.select_price":"K"}
                      ]},
                      {category:"BUY"} 
                    ]
                    /*$or:[
                      {"price.price_value":{$lte:disp_priceto_num}},
                      {"price.select_price":disp_priceto_char},
                      {"price.select_price":"Cr"},
                      {category : "BUY"}
                    ]*/
                  },
                  {
                    sort : {uploadedAt:-1}
                  }
                );
            }
            else{
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
                    sort : {uploadedAt:-1}
                  }
                ); 
            }
            //return bannerdb.find({category:"BUY","price.price_value":{$lte:disp_priceto_num},"price.select_price":disp_priceto_char},{sort:{uploadedAt:-1}});
          }
          else if(disp_resi_comm != "All")
          {
            return bannerdb.find({category_res_comm:disp_resi_comm,category:"BUY"},{sort:{uploadedAt:-1}}); 
          }
          else{
            alert("No result found");
          }
        }
      }
    // }
      // else{
      //   console.log("Else part : rent button");
      // }
    
    //disp_testarea = "";
         
    },
    'areas' :function(){
      //return ["Khopoli","Vashi"];
      var arearesult =  searchuidb.findOne({},{_id:0,area:1});
      return arearesult.area;
       // for (var i = 0; i < arearesult.area.length; i++) {
       //     return arearesult.area[i];
       // }
    },    
    'room_type' :function(){
      var roomtype = searchuidb.findOne({},{_id:0,roomType:1});
      return roomtype.roomType;
    },
    'pricefrom' :function(e){
      //var buyrent =  e.target.optradio.value;
      //var buy="buy";
      // if(buyrent == "rent")
      //   return true;
      // else
      //   return false;
      //return searchuidb.find({},{_id:0,roomType:1});
      var rent = Session.get('rent_btn');
      var buy = Session.get('buy_btn');

      console.log("btn_rent = "+rent);      
      if(rent == "rent"){
        //console.log("price from "+rent);
        //return true;
        var test =  searchuidb.findOne({},{_id:0,rentpriceFrom:1});
        return test.rentpriceFrom;
      }
      else{
        //return false;
        //console.log("price from else "+rent);
        var btest = searchuidb.findOne({},{_id:0,buypriceFrom:1});
        return btest.buypriceFrom;
      }

      if (buy=="buy") {
        //console.log("price from "+buy);
        //return true;
        var test =  searchuidb.findOne({},{_id:0,buypriceFrom:1});
        return test.buypriceFrom; 
      }
      else{
        //return false;
        //console.log("price from else "+buy);
        var btest = searchuidb.findOne({},{_id:0,buypriceFrom:1});
        return btest.buypriceFrom;
      }

      //Session.keys={};
    },
    /*'rpriceFrom':function(){
      var test =  searchuidb.findOne({},{_id:0,rentpriceFrom:1});
      return test.rentpriceFrom;

    },
    'bpriceFrom':function(){
      //var id = this._id;
      var btest = searchuidb.findOne({},{_id:0,buypriceFrom:1});
      return btest.buypriceFrom;

      //for (var i = btest.length - 1; i >= 0; i--) {
        //return btest[i].buypriceFrom;
      //};
    },*/
    'priceto': function(){
      var rent = Session.get('rent_btn');
      var buy = Session.get('buy_btn');
      //console.log("price to = "+rent);
      if(rent == "rent"){
        //return true;
        //console.log("1.if price from "+buy);
        var rpto = searchuidb.findOne({},{_id:0,rentpriceTo:1});
        return rpto.rentpriceTo;
      }
      else{
        //console.log("1.price from else "+buy);
        var buypriceto = searchuidb.findOne({},{_id:0,buypriceTo:1});
        return buypriceto.buypriceTo;

      }
      if (buy=="buy") {
        //console.log("2.if price from "+buy);
        //return true;
        var test =  searchuidb.findOne({},{_id:0,buypriceTo:1});
        return test.buypriceTo; 
      }
      else{
        //return false;
        //console.log("2.price from else "+buy);
        var btest = searchuidb.findOne({},{_id:0,buypriceTo:1});
        return btest.buypriceTo;
      }
      //Session.keys={};
    },
    /*'rpriceTo':function(){
      var rpto = searchuidb.findOne({},{_id:0,rentpriceTo:1});
      return rpto.rentpriceTo;
      // for (var i = 0; i < rpto.rentpriceTo.length; i++) {
      //   return rpto.rentpriceTo[i];
      // }
      //return rpto;
      // for (var i = rpto.length - 1; i >= 0; i--) {
      //   return rpto[i];
      // }
      //return searchuidb.find({},{_id:0,rentpriceTo:1}).forEach(function (i){return i.rentpriceTo});

    },
    'bpriceTo':function(){
      var buypriceto = searchuidb.findOne({},{_id:0,buypriceTo:1});
      return buypriceto.buypriceTo;
    },*/
    'rescomm':function(){
      var residential_commercial = searchuidb.findOne({},{_id:0,residential_commercial:1});
      return residential_commercial.residential_commercial;
    },
    'isTrue':function(){
      return true;
    }
});


