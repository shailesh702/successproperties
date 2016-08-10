var imageStore = new FS.Store.GridFS("images");
Images = new FS.Collection("images",{
		stores:[imageStore]
	});

 var eventPhotosStore = new FS.Store.FileSystem('eventPhotos', {
  path: '~/uploads/full'
});

eventPhotos = new FS.Collection('eventPhotos', {
  stores: [eventPhotosStore]
}); 



Meteor.methods({
	/*uploadFile : function(file){
		file.save('/images/uploads/');
	}*/
});