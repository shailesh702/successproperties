
// bannerdb = new Mongo.Collection('bannerdb'); 
// searchuidb = new Mongo.Collection('searchui');

Template.home.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
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
    var buyrent =  e.target.optradio.value;
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
    
    var element = tmpl.find('input:radio[name=optradio]:checked');
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
    
    var test_radio = e.target.optradio.value;
    Session.set("test_radio",test_radio);
    var test_area = $("#area_wise_filter").find(':selected').text();
    Session.set("test_area",test_area);
    //var t = Session.get("test_area");
    //alert(t);
    var test_roomtype = $("#room_type_filter").find(':selected').text();
    Session.set("test_roomtype",test_roomtype);
    var test_pricefrom = $("#price_from_filter").find(':selected').text();
    Session.set("test_pricefrom",test_pricefrom);
    var test_priceto = $("#price_to_filter").find(':selected').text();
    Session.set("test_priceto",test_priceto);
    // if(test == "Vashi")
    // {
    //   alert("Hello");  
    // }
    // else{alert("Else");}
    

    //alert(test_area);
    // var disp_content = Session.get('test_area');

    // Session.set("test_area",test_area);  

  },
  /*'change #area_wise_filter':function(e,tmpl){
    var areafilter = $(e.currentTarget).val();
    //alert(areafilter);
  },
  'change "room_type_filter':function(e,tmpl){
    var roomfilter = $(e.currentTarget).val();
  }*/
  'click #optradio_rent':function(e){
    
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
  },
  'change #area_wise_filter': function(e){
      //var test_area = e.target.value;
      //alert(test_area);
      //bannerdb.find({area:test_area});
      //Session.set("test_area",test_area);  
  },

});

Template.home.helpers({
  
    'bannercontent':function(){
      var disp_radio = Session.get('test_radio');
      var disp_testarea = Session.get('test_area'); 
      var disp_roomtype = Session.get('test_roomtype');
      var disp_pricefrom = Session.get('test_pricefrom');
      var disp_priceto = Session.get('test_priceto');
      //alert(disp_content);

      if(disp_testarea == "Area" && disp_roomtype == "Type" && disp_pricefrom == "Price From" && disp_priceto == "Price To"){
        return bannerdb.find({},{sort:{uploadedAt:-1}});
      }
      else if(disp_testarea != "Area" && disp_roomtype != "Type"){
        return bannerdb.find({location:disp_testarea,rooms:disp_roomtype},{sort:{uploadedAt:-1}});
      }
      else if(disp_testarea != "Area")
      {
        var res = bannerdb.find({location:disp_testarea},{sort:{uploadedAt:-1}});
        if(!res){
          alert("No data found");
          }
        else{
          return res;
        }
      }
      else if(disp_roomtype != "Type")
      {
        return bannerdb.find({rooms:disp_roomtype},{sort:{uploadedAt:-1}});
      }
      else if(disp_pricefrom != "Price From")
      {
        return bannerdb.find({price:{$gt:disp_pricefrom}},{sort:{uploadedAt:-1}});
      }      
      else if(disp_priceto != "Price To")
      {
        return bannerdb.find({price:{$lt:disp_priceto}},{sort:{uploadedAt:-1}});
      }
      else{
        alert("No result found");
      }
    },
    'areas' :function(){
      //return ["Khopoli","Vashi"];
      var arearesult =  searchuidb.findOne({},{_id:0,area:1});
      return arearesult.area;
       // for (var i = 0; i < arearesult.area.length; i++) {
       //     return arearesult.area[i];
       // }
    },
    /*'area1':function(e){
      // var $this = $(e.target);
      // var id = $(this.id);
      var a = searchuidb.findOne({});
      // for (var i = 0; i < a.area.length; i++) {
      //   return a.area[i];
      // }
      //return a.area[1];
      //return ["Khopoli","Vashi"];
      var r =  searchuidb.find({},{_id:0,area:1}).map(function (i){return i.area});
      /*var split_r = r.split(",");
      console.log(split_r);*/
      /*for (var i = 0; i < r.length; i++) {
        return r[i];
      }*/
      //return r;
    //},
    'room_type' :function(){
      var roomtype = searchuidb.findOne({},{_id:0,roomType:1});
      return roomtype.roomType;
    },
    'rentbuy' :function(e){
      var buyrent =  e.target.optradio.value;
      // var $this = $(e.target);
      // var id = this._id;
      // var test = searchuidb.find({_id:id});
      //var buy="buy";
      if(buyrent == "rent")
        return true;
      else
        return false;
      //return searchuidb.find({},{_id:0,roomType:1});
    },
    'rpriceFrom':function(){
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
    },
    'rpriceTo':function(){
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
    },
    /*'area_filter':function(){

    }*/
});


