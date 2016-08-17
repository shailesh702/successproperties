
events = new Meteor.Collection('events');
/*Files = new Meteor.Collection(null);

Template.fileUpload1.events({
	'change	input[type=file]': function (e,tmpl) {
		var input = tmpl.find('input[type=file]');
		var files = input.files;
		var file;
		var mfile;
		for (var i = 0; i <files.length; i++) {
			mfile = new MeteorFile(files[i],{collection:Files});
			Files.insert(mfile,function(err,res){
				mfile.uppload(files[i],"uploadFile");
			});
		}
	}
});

Template.fileUpload1.helpers({

	files:function(){
		return Files.find();
	}
});
Template.fileUploadRow.helpers({
	uploadCompleteClass:function(){
		return this.uploadProgress == 100 ? 'progress-success':'';
	}
});*/

/* Code below is referred from :- https://github.com/CollectionFS/Meteor-CollectionFS*/
Template.fileUpload1.events({
  'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        if(err){
        		//
        }
        else{
        	var imagesURL={
        		'profile.image': '/cfs/files/images/' + fileObj._id
        	};
        Meteor.users.update(userId, {$set: imagesURL});
        }
      });
    });
  },
  
  /*Below code is taken from :-  https://github.com/Sanjo/collectionFS_test/blob/ejson-file-reference/collectionFS_test.js*/
  /*'click input[type="submit"]': function () {
      var file = $('#file').get(0).files[0];
      var fileObj = eventPhotos.insert(file);
      console.log('Upload result: ', fileObj);
      events.insert({
        name: 'event',
        file: fileObj
      });
    }*/
   
});
Template.fileUpload1.helpers({
    files: function () {
      return Images.find();
    }
  });