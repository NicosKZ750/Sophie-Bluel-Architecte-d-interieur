const elements = document.getElementsByClassName("form-login")[0].elements;
const form = document.getElementsByClassName("form-login")[0];
const messageError = document.getElementById("msg-error");
const loginURL = "http://localhost:5678/api/users/login";
// Se connecter lorque l'on clic sur le bouton
form.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(loginURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: elements.email.value,
      password: elements.password.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // traitement de l'erreur
        throw Error("erreur d'authentification");
      }
    })
    .then((data) => {
      localStorage.setItem("auth", JSON.stringify(data));
      window.location = "index.html";
    })
    .catch((error) => {
      const errorElt = document.querySelector(".error");
      errorElt.innerHTML = "erreur d'authentification";
    });
});
// AJOUTER LA PHRASE D4ERREUR EN HTML
//FAIRE DU RESPONSIVE POUR LES IMAGE DANS LE MODAL
//ET FAIRE EN SORTE QUE LE SITE SE REFRESH PAS CONSTAMENT A CHAQUE MODIF MASI FAIRE EN SORTE QUE CA FONCTIONNE
