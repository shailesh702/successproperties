
//export const contact = new Mongo.Collection('contact');

Template.contact_us_page.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('contact');        
    });
});
Template.contact_us_page.events({
	"submit .contact":function (event) {
		event.preventDefault();
		//event.defaultPrevented;
		//alert("hello");
		var name = event.target.name.value;
		var email = event.target.email.value;
		var company_name = event.target.company_name.value;
		var contact_number = event.target.contact_number.value;
		var comment = event.target.comments.value;
		//alert(comment);
		Meteor.call("contact",name,email,company_name,contact_number,comment);
		Meteor.call("sendemail",'shh_702@yahoo.co.in','jaiswal.shailesh7@gmail.com','Welcome message','This is test of email sending process.');
		//Toast.info("Mail sent successfully");
		alert("Mail sent successfully");
		event.target.name.value='';
		event.target.email.value='';
		event.target.company_name.value='';
		event.target.contact_number.value='';
		event.target.comments.value='';
	}
});