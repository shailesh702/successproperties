bannerdb = new Mongo.Collection('bannerdb'); 
searchuidb = new Mongo.Collection('searchui');

var imageStore = new FS.Store.GridFS('images0');

Images = new FS.Collection('images0', {
 stores: [imageStore]
});

Images.deny({
	 insert: function(){
	 	return false;
	 },
	 update: function(){
	 	return false;
	 },
	 remove: function(){
	 	return false;
	 },
	 download: function(){
	 	return false;
	 }
});

Images.allow({
	 insert: function(){
	 return true;
	 },
	 update: function(){
	 return true;
	 },
	 remove: function(){
	 return true;
	 },
	 download: function(){
	 return true;
	 }
});

//Meteor.publish('images0', function(){ return Images.find(); });

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