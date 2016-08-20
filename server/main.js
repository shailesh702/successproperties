import { Email } from 'meteor/email';
//import './emailText.html';

Meteor.startup(function(){
	
	//process.env.MAIL_URL = 'smtp://email:password@smtp.gmail.com:465';
	//process.env.MAIL_URL = 'smtp://shailesh%40sandbox8be928b4287040cdbc290e6a81af49c4.mailgun.org:123456@smtp.mailgun.org:465';
	//console.log(process.env);
});
/*
Meteor.methods({
	sendemail : function(to,from,subject,text,name,email,company_name,contact_number,comment,event){
		
		//check([to,from,subject,text],[String]);
		//this.inblock();
		SSR.compileTemplate('htmlEmail', Assets.getText('emailText/emailText.html'));
		
		
		var emailData = {
  		name: name,
  		email: email,
		company_name: company_name,
		contact_number:contact_number,
		comment:comment,
		};
		Email.send({
			to:to,
			from:from,
			subject:subject,
			//text:text
			html: SSR.render('htmlEmail', emailData)
			//html:'<strong>Look at that stack of cakes!</strong>'
		});	
		console.log("Mail sent");
	}
});
*/


Meteor.publish('images', function(){
	return Images.find();
});
Meteor.publish('bannerdb', function(){
	return bannerdb.find();
});