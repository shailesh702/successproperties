
Template.home.events({
  'submit form': function (e,tmpl) {
    e.preventDefault();
    
    //$('#imgdesc').prepend();
  }
});

Template.home.helpers({
  bannercontent:[
    { 
      title:'Kalptaru Residencies Kalptaru Residencies',
      location:'Mumbai',
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
    ],
})