
bannerdb = new Mongo.Collection('bannerdb'); 
searchuidb = new Mongo.Collection('searchui');

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
      //var buy="buy";
    if (buyrent=="rent") {alert(buyrent);}
    else alert(buyrent);
    
  },
  /*'change #area_wise_filter':function(e,tmpl){
    var areafilter = $(e.currentTarget).val();
    //alert(areafilter);
  },
  'change "room_type_filter':function(e,tmpl){
    var roomfilter = $(e.currentTarget).val();
  }*/

});

Template.home.helpers({
  /*bannercontent:[
    { 
      title:'Kalptaru Residencies Kalptaru Residencies',
      location:'Khopoli',
      price:'25lac',
      rooms:'1BHK',
      sq_ft:'350',
    },
    { 
      title:'Raheja Residencies',
      location:'Vashi',
      price:'35lac',
      rooms:'2BHK',
      sq_ft:'450',
    },
    { 
      title:'Hiranandani Residencies',
      location:'Vashi',

      price:'35lac',
      rooms:'2BHK',
      sq_ft:'450',
    },
    { 
      title:'Akruti heights',
      location:'Khopoli',
      price:'25lac',
      rooms:'1BHK',
      sq_ft:'350',
    },
    ],*/
    'bannercontent':function(){
      return bannerdb.find({},{sort:{uploadedAt:-1}});  
    },
    'areas' :function(){
      //return ["Khopoli","Vashi"];
      var arearesult =  searchuidb.find({},{_id:0,area:1});
      return arearesult;
    },
    'room_type' :function(){
      return searchuidb.find({},{_id:0,roomType:1});
    },
    'rentbuy' :function(e){
      var buyrent =  e.target.optradio.value;
      var buy="buy";
      if(buyrent === "rent")
        return buyrent;
      /*else
        return buy;*/
    },
    'rpriceFrom':function(){
      return searchuidb.find({},{_id:0,rentpriceFrom:1});
    },
    'bpriceFrom':function(){
      return searchuidb.find({},{_id:0,buypriceFrom:1});
    },
    'rpriceTo':function(){
      return searchuidb.find({},{_id:0,rentpriceTo:1});
    },
    'bpriceTo':function(){
      return searchuidb.find({},{_id:0,buypriceTo:1});
    }
});

