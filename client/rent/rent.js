
Template.rent.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
    });
});

Template.rent.events({
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
    //Session.set("buy_btn",undefined);
    var rent_btn = "rent";
    console.log(rent_btn);
    Session.set("rent_btn",rent_btn);
  },
  
});

Template.rent.helpers({
  
  'bannercontent':function(){
      // return bannerdb.find({category:"RENT"},{sort:{uploadedAt:-1}});  
    
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
      
      if(disp_btn_rent == 'rent' || !disp_btn_rent){
          // console.log("else : "+disp_btn_rent);
          // console.log("disp_testarea:"+disp_testarea);
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
                    {                      
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
                  },
                  {sort:{"price.price_value":1}}
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
              },
              {sort:{"price.price_value":1}}
              );
            }
            else{
              return bannerdb.find({
                "price.price_value":{$gte:disp_pricefrom_num},
                "price.select_price":disp_pricefrom_char,
                category:"RENT"
              },
              {
                sort:{"price.price_value":1}
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
              },
              {
                sort:{"price.price_value":1}
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
                sort:{"price.price_value":1}
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
                      {category:"RENT"} 
                    ]                  
              },
              {
                sort:{"price.price_value":1}
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
    /////////////////////////////////////////////////////////////////    
    else{
      console.log("No data found");
      return false;
    }
  },
    
});
