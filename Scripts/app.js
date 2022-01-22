// IIFE -- Immediately Invoked Function Expression
// AKA -- Annonymous Self-Excuting Function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page")
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1 - get a reference to an entry point(s) (insertion / deletion)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;        

        // Step 2 - Create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagragh = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`


        // Step 3 - Congiure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        //MainParagraph.textContent = "This is the Main Paragragh!";
        let FirstString = "This is"
        let SecondString = `${FirstString} the main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class","container");


        // Step 4 - perform insertion / deletion

        // example of insert after (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagragh;
        DocumentBody.appendChild(Article);
        // DocumentBody.innerHTML =`
        //     <div class="container">
        //     <h1 class="display-1">Hello, World!</h1>
        //     <p class="mt-5">and ... I think this is an awesome class</p>
        //     </div>
        // `;

        // example of insert before
        //MainContent.before(MainParagraph);

        // example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();

        // ES6 and HTML5 => Template Strings => "Super Strings"
        
    }

    function DisplayProductsPage()
    {
        console.log("Products Page")
    }

    function DisplayServicesPage()
    {
        console.log("Services Page")
    }

    function DisplayAboutPage()
    {
        console.log("About Page")
    }

    function DisplayContactPage()
    {
        console.log("Contact Page")
    }
    // named function option
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;

        }

        

    }
    window.addEventListener("load", Start);
})();