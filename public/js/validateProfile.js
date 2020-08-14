let profileInput = document.getElementById("profile");
profileInput.addEventListener("change", (e) => {
  setThumbnail(e);
});

function setThumbnail(event) {
  let reader = new FileReader();

  reader.onload = function (event) {
    var label = document.getElementById("profile-label");
    console.log(event.target.result);
    label.style.backgroundImage = event.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
