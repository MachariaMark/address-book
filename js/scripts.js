// business logic
function Contact(title,first, last) {
    this.title = title;
    this.firstName = first;
    this.lastName = last;
};

Contact.prototype.fullName = function() {
    return this.title + " " + this.firstName + " " + this.lastName;
};
  
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedTitle = $("input#new-title").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
  
    var newContact = new Contact(inputtedTitle, inputtedFirstName, inputtedLastName);
  
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".title").text(newContact.title);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
    });
    $("input#new-title").val("");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    });
}); 