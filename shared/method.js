
bannerdb = new Mongo.Collection('bannerdb'); 
searchuidb = new Mongo.Collection('searchui');
/*Reference taken from :- https://forums.meteor.com/t/looking-for-very-simple-file-upload-example/3728*/
/*var imageStore = new FS.Store.GridFS("images");
Images = new FS.Collection("images",{
				stores:[imageStore]
			});
/*var eventPhotosStore = new FS.Store.FileSystem('eventPhotos', {
  						path: '~/uploads/full'
						});

eventPhotos = new FS.Collection('eventPhotos', {
  stores: [eventPhotosStore]
}); 
*/
/*Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function(){
  	return true;
  },
  'remove': function(){
  	return true;
  }
});*/

bannerdb.allow({
  'insert':function(){
    return true;
  },
  'update':function(){
    return true;
  },
  'remove':function(){
    return true;
  }
})

//Meteor.methods({
	/*uploadFile : function(file){
		file.save('/images/uploads/');
	}*/
/*});
*/