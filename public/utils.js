// Obtener los elementos de menú y tablero por su ID
const iconeOne = document.getElementById("iconOne");
const iconOne2 = document.getElementById("iconOne2");
const dashboardLink = document.getElementById("dashboard-link");
const dashboardLink2 = document.getElementById("dashboard-link2");
const menuLink = document.getElementById("menu-link");
const iconOneContainer = document.getElementById("iconOne-container");
const iconTwoConatiner = document.getElementById("iconTwo-container");
const dashboardIcon2 = document.getElementById("dashboard.icon2");
const menuIcon2 = document.getElementById("menu-icon2");
const menuIcon = document.getElementById("menu-icon");
const iconTwo = document.getElementById("iconTwo");
const iconThreeContainer = document.getElementById("iconThree-container");
const iconThree = document.getElementById("iconThree");
const bannerIcon2 = document.getElementById("banner-icon2");
const bannerIcon = document.getElementById("banner-icon");
const bannerLink = document.getElementById("banner-link");
const iconFourContainer = document.getElementById("iconFour-container");
const mainIcon2 = document.getElementById("main-icon2");
const mainIcon = document.getElementById("main-icon");
const mainLink = document.getElementById("main-link");
const iconFour = document.getElementById("iconFour");
const iconFiveContainer = document.getElementById("iconFive-container");
const footerIcon2 = document.getElementById("footer-icon2");
const footerIcon = document.getElementById("footer-icon");
const footerLink = document.getElementById("footer-link");
const iconFive = document.getElementById("iconFive");
const sectionBanner = document.getElementById("section-banner");
const sectionMenu = document.getElementById("section-menu");

iconOne2.style.display = "none";
menuIcon2.style.display = "none";
menuIcon.style.marginLeft = "-.8rem";
mainIcon.style.marginLeft = "-.6rem";
bannerIcon.style.marginLeft = "-2rem";
bannerIcon2.style.display = "none";
mainIcon2.style.display = "none";
footerIcon2.style.display = "none";
footerIcon.style.marginLeft = "-1.9rem";
sectionBanner.style.display = "none";
sectionMenu.style.display = "none";


function resetStyles() {
    // Restablecer todos los estilos a su estado predeterminado
    const elementsToReset = [
      iconeOne, iconOne2, dashboardLink, dashboardLink2, menuLink,
      iconOneContainer, iconTwoConatiner, iconThreeContainer,
      bannerIcon, bannerIcon2
    ];
  
    for (const element of elementsToReset) {
      element.style = "";
    }
  }

// Agregar controlador de eventos clic a los elementos
iconOneContainer.addEventListener("click", () => {

    menuLink.style.color = "white";
    iconeOne.style.display = "none";
    iconOne2.style.display = "";
    iconOne2.style.backgroundColor = "white";
    iconOne2.style.width = "9.5rem";
    iconOne2.style.marginLeft = ".5rem";
    dashboardIcon2.style.width = "1.8rem";
    dashboardIcon2.style.height = "1.8rem";
    dashboardIcon2.style.marginLeft = "-.5rem";
    iconOne2.style.borderRadius = "1.5rem 0 0 1.5rem";
    iconOne2.style.paddingTop = ".5rem";
    iconOne2.style.marginBottom = ".4rem";
    iconOne2.style.height = "2.2rem";
    iconOne2.style.marginTop = "-.7rem";
    dashboardLink2.style.color = "#d51920";
    dashboardLink2.style.fontWeight = "700";
    dashboardLink2.style.marginTop = ".2rem";
    iconTwo.style.display = "";
    menuIcon2.style.display = "none";
    menuIcon.style.display = "";
    iconTwo.style.backgroundColor = "#d51920";
    iconTwo.style.flexDirection = "row";
    menuLink.style.fontWeight = "100";
    bannerLink.style.color = "white";
    bannerLink.style.fontWeight = "100";
    bannerIcon2.style.display = "none";
    bannerIcon.style.display = "";
    iconThree.style.flexDirection = "row";
    bannerIcon.style.marginLeft = "-2.1rem";
    iconThree.style.backgroundColor = "#d51920";

    iconFour.style.backgroundColor = "#d51920";
    iconFour.style.flexDirection = "row";
    mainIcon2.style.display = "none";
    mainIcon.style.display = "";
    mainIcon.style.marginLeft = "-1srem";
    mainLink.style.color = "white";
    mainLink.style.fontWeight = "100";

    iconFive.style.backgroundColor = "#d51920";
    iconFive.style.flexDirection = "row";
    iconFive.style.marginLeft = "-0rem";
    footerIcon2.style.display = "none";
    footerIcon.style.display = "";
    footerIcon.style.marginLeft = "-1.7rem";
    footerLink.style.color = "white";
    footerLink.style.fontWeight = "100";

    sectionBanner.style.display = "none";
    sectionMenu.style.display = "none";
});

iconTwoConatiner.addEventListener("click", () => {

    menuLink.style.color = "#d51920";
    menuLink.style.fontWeight = "700";
    menuIcon.style.display = "none";
    menuIcon.style.marginLeft = "-3rem";
    menuIcon2.style.display = "";
    menuIcon2.style.marginLeft = "-2.8rem";
    iconTwo.style.width = "9.5rem";
    iconTwo.style.marginLeft = ".5rem";
    iconTwo.style.backgroundColor = "white";
    iconTwo.style.height = "1.9rem";
    iconTwo.style.paddingTop = ".8rem";
    iconTwo.style.display = "flex";
    iconTwo.style.borderRadius = "1.5rem 0 0 1.5rem";
    iconTwo.style.marginTop = "20px";
    iconTwo.style.flexDirection = "row-reverse";
    iconTwo.style.marginBottom = "7px";
    iconOne2.style.display = "none";
    iconeOne.style.display = "";
    iconThree.style.backgroundColor = "#d51920";
    bannerLink.style.color = "white";
    bannerLink.style.fontWeight = "100";
    bannerIcon2.style.display = "none";
    bannerIcon.style.display = "";
    iconThree.style.flexDirection = "row";
    bannerIcon.style.marginLeft = "-2.1rem";

    iconFour.style.backgroundColor = "#d51920";
    iconFour.style.flexDirection = "row";
    mainIcon2.style.display = "none";
    mainIcon.style.display = "";
    mainIcon.style.marginLeft = "-1srem";
    mainLink.style.color = "white";
    mainLink.style.fontWeight = "100";

    iconFive.style.backgroundColor = "#d51920";
    iconFive.style.flexDirection = "row";
    iconFive.style.marginLeft = "-0rem";
    footerIcon2.style.display = "none";
    footerIcon.style.display = "";
    footerIcon.style.marginLeft = "-1.7rem";
    footerLink.style.color = "white";
    footerLink.style.fontWeight = "100";

    sectionBanner.style.display = "none";
    sectionMenu.style.display = "";
});

iconThreeContainer.addEventListener("click", () => {
   iconThree.style.backgroundColor = "white";
   iconThree.style.marginLeft = ".5rem";
   iconThree.style.borderRadius = "1.5rem 0 0 1.5rem";
   iconThree.style.width = "9.5rem";
   iconThree.style.height = "1.9rem";
   iconThree.style.paddingTop = ".8rem";
   iconThree.style.flexDirection = "row-reverse";
   iconThree.style.marginTop = "22px";
   iconThree.style.marginBottom = "5px";
   bannerLink.style.color = "#d51920";
   bannerLink.style.fontWeight = "700";
   bannerIcon.style.display = "none";
   bannerIcon.style.marginLeft = "-.4rem"
   bannerIcon2.style.display = "";
   bannerIcon2.style.marginLeft = "-2.6rem";
   iconOne2.style.display = "none";
   iconeOne.style.display = "";
   menuLink.style.color = "white";
   menuLink.style.fontWeight = "100";
   iconTwo.style.display = "";
   menuIcon2.style.display = "none";
   menuIcon.style.display = "";
   iconTwo.style.backgroundColor = "#d51920";
   iconTwo.style.flexDirection = "row";

   iconFour.style.backgroundColor = "#d51920";
    iconFour.style.flexDirection = "row";
    mainIcon2.style.display = "none";
    mainIcon.style.display = "";
    mainIcon.style.marginLeft = "-1srem";
    mainLink.style.color = "white";
    mainLink.style.fontWeight = "100";

    iconFive.style.backgroundColor = "#d51920";
    iconFive.style.flexDirection = "row";
    iconFive.style.marginLeft = "-0rem";
    footerIcon2.style.display = "none";
    footerIcon.style.display = "";
    footerIcon.style.marginLeft = "-1.7rem";
    footerLink.style.color = "white";
    footerLink.style.fontWeight = "100";

    sectionBanner.style.display = "";
    sectionMenu.style.display = "none";
});

iconFourContainer.addEventListener("click", () => {
    iconFour.style.backgroundColor = "white";
    iconFour.style.flexDirection = "row-reverse";
    iconFour.style.borderRadius = "1.5rem 0 0 1.5rem";
    iconFour.style.height = "1.9rem";
    iconFour.style.paddingTop = ".8rem";
    iconFour.style.width = "9.5rem";
    iconFour.style.marginBottom = "5px";
    iconFour.style.marginTop = "22px";
    iconFour.style.marginLeft = ".5rem";
    mainLink.style.color = "#d51920";
    mainLink.style.fontWeight = "700";
    mainIcon.style.display = "none";
    mainIcon2.style.display = "";
    mainIcon2.style.marginLeft = "-1rem";

    iconOne2.style.display = "none";
    iconeOne.style.display = "";

    menuLink.style.color = "white";
    menuLink.style.fontWeight = "100";
    iconTwo.style.display = "";
    menuIcon2.style.display = "none";
    menuIcon.style.display = "";
    iconTwo.style.backgroundColor = "#d51920";
    iconTwo.style.flexDirection = "row";

    iconThree.style.backgroundColor = "#d51920";
    bannerLink.style.color = "white";
    bannerLink.style.fontWeight = "100";
    bannerIcon2.style.display = "none";
    bannerIcon.style.display = "";
    iconThree.style.flexDirection = "row";
    bannerIcon.style.marginLeft = "-2.1rem";

    iconFive.style.backgroundColor = "#d51920";
    iconFive.style.flexDirection = "row";
    iconFive.style.marginLeft = "-0rem";
    footerIcon2.style.display = "none";
    footerIcon.style.display = "";
    footerIcon.style.marginLeft = "-1.7rem";
    footerLink.style.color = "white";
    footerLink.style.fontWeight = "100";

    sectionBanner.style.display = "none";
    sectionMenu.style.display = "none";
});

iconFiveContainer.addEventListener("click", () => {
    iconFive.style.backgroundColor = "white";
    iconFive.style.flexDirection = "row-reverse";
    iconFive.style.borderRadius = "1.5rem 0 0 1.5rem";
    iconFive.style.height = "1.9rem";
    iconFive.style.paddingTop = ".8rem";
    iconFive.style.width = "9.5rem";
    iconFive.style.marginBottom = "5px";
    iconFive.style.marginTop = "22px";
    iconFive.style.marginLeft = "-1.8rem";
    iconFive.style.marginLeft = ".5rem";
    footerLink.style.color = "#d51920";
    footerLink.style.fontWeight = "700";
    footerIcon.style.display = "none";
    footerIcon.style.marginLeft = "-2rem";
    footerIcon2.style.display = "";
    footerIcon2.style.marginLeft = "-2.6rem";
    footerIcon2.style.marginTop = "-.4rem";

    iconOne2.style.display = "none";
    iconeOne.style.display = "";

    menuLink.style.color = "white";
    menuLink.style.fontWeight = "100";
    iconTwo.style.display = "";
    menuIcon2.style.display = "none";
    menuIcon.style.display = "";
    iconTwo.style.backgroundColor = "#d51920";
    iconTwo.style.flexDirection = "row";

    iconThree.style.backgroundColor = "#d51920";
    bannerLink.style.color = "white";
    bannerLink.style.fontWeight = "100";
    bannerIcon2.style.display = "none";
    bannerIcon.style.display = "";
    iconThree.style.flexDirection = "row";
    bannerIcon.style.marginLeft = "-2.1rem";

    iconFour.style.backgroundColor = "#d51920";
    iconFour.style.flexDirection = "row";
    mainIcon2.style.display = "none";
    mainIcon.style.display = "";
    mainIcon.style.marginLeft = "-1rem";
    mainLink.style.color = "white";
    mainLink.style.fontWeight = "100";

    sectionBanner.style.display = "none";
    sectionMenu.style.display = "none";

});

/* JS para mostrar miniatura en logo menu */

function updateThumbnail(input) {
    const thumbnail = document.getElementById('logoThumbnail');
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function(e) {
        thumbnail.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  // Escucha el evento de cambio en el input de archivo
  const logoInput = document.getElementById('logoInput');
  logoInput.addEventListener('change', function() {
    updateThumbnail(this);
  });


  // Obtén referencias a los elementos HTML
  const backgroundImageInput = document.getElementById('backgroundImageInput');
  const currentBackground = document.getElementById('currentBackground');
  const newBackgroundPreview = document.getElementById('newBackgroundPreview');

  // Agrega un evento change al input de tipo archivo
  backgroundImageInput.addEventListener('change', (event) => {
      const file = event.target.files[0];

      if (file) {
          // Carga y muestra la vista previa de la nueva imagen seleccionada
          const reader = new FileReader();
          reader.onload = (e) => {
              newBackgroundPreview.src = e.target.result;
              newBackgroundPreview.style.display = 'block';
          };
          reader.readAsDataURL(file);
      } else {
          // Oculta la vista previa si no se selecciona un archivo
          newBackgroundPreview.style.display = 'none';
      }
  });