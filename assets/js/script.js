const jsonFileUrl = "/assets/photos.json";

fetch(jsonFileUrl)
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");

    data.forEach((item) => {
      const imgBox = document.createElement("div");
      imgBox.className = "img-box";

      const img = document.createElement("img");
      img.src = item.href;
      img.alt = item.title;

      const transparentBox = document.createElement("div");
      transparentBox.className = "transparent-box";

      const caption = document.createElement("div");
      caption.className = "caption";

      const title = document.createElement("p");
      title.textContent = item.title;

      caption.appendChild(title);
      transparentBox.appendChild(caption);
      imgBox.appendChild(img);
      imgBox.appendChild(transparentBox);
      gallery.appendChild(imgBox);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
