/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 var awesomeThoughts = "I am zui and I am AWESOME!";
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 //console.log(awesomeThoughts);
  $("#main").append(funThoughts);
*/


/*
var array = [1, 2, 4, 5];
console.log(array.length);
*/

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "weather forecast",
      "dates" : "2015-2016",
      "description" : "course project",
      "images" : [
        "images/197x148.gif", "images/197x148.gif"
      ]
    }
  ]
};

var bio = {
  "name" : "Jimmy Shen",
  "role" : "Web Developer",
  "welcomeMessage" : "welcome",
  "biopic" : "images/fry.jpg",
  "contact" : {
    "mobile" : "213-234-8082",
    "email" : "zuishen@usc.edu",
    "github" : "zuishen",
    "twitter" : "@Jimmy",
    "location" : "Los Angeles"
  },
  "skills" : [
    "skill1", "skill2", "skill3"
  ]
};

var education = {
  "schools" : [
    {
      "name" : "USC",
      "location" : "Los Angeles, CA",
      "degree" : "Masters",
      "dates" : "2015-2016",
      "url" : "www.usc.edu",
      "majors" : [
        "CS"
      ]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Web Design",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "www.udacity.com"
    }
  ]
};

work.display = function() {
  for (var variable in work.jobs) {
    if (work.jobs.hasOwnProperty(variable)) {
      $("#workExperience").append(HTMLworkStart);
      // var HTMLworkEmployer = '<a href="#">%data%';
      // var HTMLworkTitle = ' - %data%</a>';
      var concat = HTMLworkEmployer.replace("%data%", work.jobs[variable].employer) + HTMLworkTitle.replace("%data%", work.jobs[variable].title);
      $(".work-entry:last").append(concat);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[variable].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[variable].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[variable].description));
    }
  }

  //$("#main").append(internationalizeButton);
}

function inName(string) {
  var names = string.toUpperCase().split(" ");
  names[0] = names[0][0] + names[0].slice(1).toLowerCase();
  var name = names.join(" ");

  return name;
}


// $(document).click(function(loc) {
//   var x = loc.clientX;
//   var y = loc.clientY;
//   logClicks(x, y);
//   console.log(loc.pageX, loc.pageY);
// });

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  projects.projects.forEach(function(curt, index, array) {
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", curt.title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", curt.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", curt.description));
    curt.images.forEach(function(current) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", current));
    });
  });
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
  $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
  $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(curt) {
      $("#skills").append(HTMLskills.replace("%data%", curt));
    });
  }
};

education.display = function() {
  $("#education").append(HTMLschoolStart);
  education.schools.forEach(function(curt, index, array) {
    $(".education-entry").append(HTMLschoolName.replace("%data%", curt.name) + HTMLschoolDegree.replace("%data%", curt.degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", curt.dates));
    $(".education-entry").append(HTMLschoolMajor.replace("%data%", curt.majors.join(" ")));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%", curt.location));
  });

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  education.onlineCourses.forEach(function(curt, index, array) {
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", curt.title) + HTMLonlineSchool.replace("%data%", curt.school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", curt.dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", curt.url));
  });
};



  bio.display();
  work.display();
  projects.display();
  education.display();
  $("#mapDiv").append(googleMap);
