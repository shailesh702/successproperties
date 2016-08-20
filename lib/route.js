Router.configure({
	layoutTemplate:'mainPage'
	/*yieldTemplates: {
		'Footer': { to: 'footer'}
	}*/
});
Router.route('/',function(){
	this.render('home');
	this.layout('mainNav');
});
Router.route('/new_construction',function(){
	this.render('new_construction');
	this.layout('mainNav');
});
Router.route('/about_us',function(){
	//name: 'about_us';
	//template : 'about_us';
	this.render('about_us');
	this.layout('mainNav');
});
Router.route('/contact',function(){
	this.render('contact_us_page');
	this.layout('mainNav');
});
Router.route('/services',function(){
	this.render('services');
	this.layout('mainNav');
});
Router.route('/buy',function(){
	this.render('buy');
	this.layout('mainNav');
});
Router.route('/rent',function(){
	this.render('rent');
	this.layout('mainNav');
});
Router.route('/builder_gallery',function(){
	this.render('builder_gallery');
	this.layout('mainNav');
});
Router.route('/fileUpload',function(){
	this.render('fileUpload');
	this.layout('mainNav');
});