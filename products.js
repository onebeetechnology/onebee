function changeImage(thumbnail) {
  var mainImage = thumbnail.closest(".card").querySelector(".main-image img");
  var thumbnailImage = thumbnail.querySelector("img");
  mainImage.src = thumbnailImage.src;
}
