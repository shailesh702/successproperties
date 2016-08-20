
bannerdb = new Mongo.Collection('bannerdb'); 

Template.home.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        
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
    
    //var search_area = $("#area_wise_filter:selected").text();
    //var area = $(document).getElementById("#area_wise_filter");
    //var search_area = area.options[area.selectedIndex].value;
    //alert(search_area);
    //return bannerdb.find({location:search_area});
  },
  'change #area_wise_filter':function(e,tmpl){
    var areafilter = $(e.currentTarget).val();
    //alert(areafilter);
  },
  'change "room_type_filter':function(e,tmpl){
    var roomfilter = $(e.currentTarget).val();
  }

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
      return bannerdb.find({});  
    },
    'areas' :function(){
      //return ["Khopoli","Vashi"];
      return searchui.find({},{_id:0,area:1});
    },
    'roomType' :function(){
      return searchui.find({},{_id:0,roomType:1});
    }
    
});

