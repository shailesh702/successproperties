// events = new Meteor.Collection('events');
// /*Files = new Meteor.Collection(null);

// Template.fileUpload1.events({
// 	'change	input[type=file]': function (e,tmpl) {
// 		var input = tmpl.find('input[type=file]');
// 		var files = input.files;
// 		var file;
// 		var mfile;
// 		for (var i = 0; i <files.length; i++) {
// 			mfile = new MeteorFile(files[i],{collection:Files});
// 			Files.insert(mfile,function(err,res){
// 				mfile.uppload(files[i],"uploadFile");
// 			});
// 		}
// 	}
// });

// Template.fileUpload1.helpers({

// 	files:function(){
// 		return Files.find();
// 	}
// });
// Template.fileUploadRow.helpers({
// 	uploadCompleteClass:function(){
// 		return this.uploadProgress == 100 ? 'progress-success':'';
// 	}
// });*/

// /* Code below is referred from :- https://github.com/CollectionFS/Meteor-CollectionFS*/
// Template.fileUpload1.events({
//   'change .myFileInput': function(event, template) {
//     FS.Utility.eachFile(event, function(file) {

//       Images.insert(file, function (err, fileObj) {
//         // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
//         if(err){
//         		//
//         }
//         else{
//         	var imagesURL={
//         		'fileUpload1.image0': '/cfs/files/images/' + fileObj._id
//         	};
//         Meteor.users.insert(userId, {$set: imagesURL});
//         }
//       });
//     });
//   },
  
//   /*Below code is taken from :-  https://github.com/Sanjo/collectionFS_test/blob/ejson-file-reference/collectionFS_test.js*/
//   /*'click input[type="submit"]': function () {
//       var file = $('#file').get(0).files[0];
//       var fileObj = eventPhotos.insert(file);
//       console.log('Upload result: ', fileObj);
//       events.insert({
//         name: 'event',
//         file: fileObj
//       });
//     }*/
   
// });
// // Template.fileUpload1.helpers({
// //     files: function () {
// //       return Images.find();
// //     }
// //   });
// imagesURL.fileUpload1.onCreated(function(){
//   var self= this;
//   this.autorun( function() {
//     self.subscribe('images0');
//   });
// });

// Template.fileUpload1.helpers({
//   images: function () {
//     return Images.find(); 
//   }
// });
Template.fileUpload.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('bannerdb');
        self.subscribe('searchui');
    });
});

Template.fileUpload.events({
  'submit':function(event){
    //var $this = $(event.target);
    var title = event.target.title.value;
    var loc = event.target.location.value;
    var price = event.target.price.value;
    //alert(price);
    var roomtype = event.target.rooms.value;
    var sqft = event.target.sq_ft.value;
    var category = event.target.rentbuy.value;
    var txtdesc = event.target.description.value;
    //var count = 0; 
    //count++;
    //alert(title,loc,price,roomtype,sqft,category,txtdesc);
    //Meteor.call("insert",title,loc,price,roomtype,sqft,category,txtdesc);
    
    bannerdb.insert({
        title: title,
        location : loc,
        price : price,
        rooms : roomtype,
        sq_ft : sqft,
        category : category,
        description : txtdesc,
        uploadedAt: new Date().toLocaleString()
      
    });

    Toast.info("Data insert successfully");
  }
});
Template.fileUpload.helpers({
  'bannercontent':function(){
    var banner_content =  bannerdb.find({},{sort:{uploadedAt:-1},limit:1});
    return banner_content;
    //return bannerdb.find();
  }
});

  /*'rent_category':function(e){
      
      return bannerdb.find({category:"Buy"},{_id:0,category:1});     
      //for (var i = buyhelp.length - 1; i >= 0; i--) {
      //  return buyhelp[i];
      //}
      if(buyhelp=="Buy"){
        //$("#container_desc_root_ul").css({"color":"red"});        
        $("#container_desc_root_ul").prepend("<div>Hello</div>");
      }else{
        //$("#container_desc_root_ul").css({"color":"blue"});
        $("#container_desc_root_ul").prepend("<div>Else part</div>");
      }*/
      //return buyhelp;
    //},
    /*'rcategory':function(){
        return  bannerdb.find({},{_id:0,category:1});
        //return category;        
    }*/







Template.fileUpload1.events({
 'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
        
      Images.insert(file, function (err, fileObj) {     
        if (err){
          // handle error
        } else {
          //var userId = Meteor.userId();
          //var loc = event.target.location.value;
          var imagesURL = {
            'fileUpload1.image': '/cfs/files/images0/' + fileObj._id
          };
          Meteor.users.insert(file, {$set: Template});
        }
      });
    });
  }
});

imagesURL.fileUpload1.onCreated(function(){
  var self= this;
  this.autorun( function() {
    self.subscribe('images0');
  });
});

Template.fileUpload1.helpers({
  images: function () {
    return Images.find(); 
  }
});

