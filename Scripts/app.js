// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function

"use strict";
(function()
{
    //Created function for add a human resources link
    function AddHrLink()
    {
        let hrListItem = document.createElement("li");
        hrListItem.setAttribute("class","nav-item");
        hrListItem.innerHTML = `<a class="nav-link" href="humanResources.html"><i class="fas fa-user-circle"></i> Human Resources</a>`;

        let list = document.getElementsByTagName("ul")[0];    // Get the <ul> element to insert a new node
        list.insertBefore(hrListItem, list.children[4]);
    }

    //function for Products link found in the Navbar above to Projects 
    function ProjectNavLink()
    {
        //console.log('document.getElementsByClassName("nav-link")[2] = ', document.getElementsByClassName("nav-link")[2].textContent);
        document.getElementsByClassName("nav-link")[2].innerHTML = '<i class="fas fa-project-diagram"></i> Projects';
    }

    //Created a function for Footer navbar
    //src: https://getbootstrap.com/docs/5.1/components/navbar/
    function NavbarFooter()
    {
       
        let footerNavItem = document.createElement("nav");
        footerNavItem.setAttribute("class","navbar fixed-bottom navbar-light bg-light");
        footerNavItem.innerHTML = `<div class="container-fluid"><a class="navbar-brand" href="#">©CopyRight 2022</a>
        </div>`
        document.body.appendChild(footerNavItem);
    }

    function DisplayHome()
    {
        console.log("Home Page");

        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        
        //Added Human Resources Link
        AddHrLink();

        ProjectNavLink();

        NavbarFooter();

    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
        AddHrLink();
        ProjectNavLink();
        NavbarFooter();
    }

    function DisplayProductsPage()
    {
        console.log("Our Projects Page");
        AddHrLink();
        ProjectNavLink();
        NavbarFooter();
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
        AddHrLink();
        ProjectNavLink();
        NavbarFooter();
    }


    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
       
        //Added timer
        sendButton.addEventListener("click", function (event)
        {
            event.preventDefault(); 

            if (sendButton.click) {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.toString());
                setTimeout(RedirectHome, 3000);
            }
        });
        AddHrLink();
        ProjectNavLink();
        NavbarFooter();

    }
    //This function will redirect home after 3 seconds
    function RedirectHome()
    { 

        location.href = "index.html";
    }
    


    // named function
    function Start()
    {
        console.log("App Started!!");

        switch (document.title) {
          case "Home":
            DisplayHome();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
        }
    }
    

    window.addEventListener("load", Start);


})();