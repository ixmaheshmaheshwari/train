const duaLipaInfo = {
  "artist": "Dua Lipa",
  "birthDate": "August 22, 1995",
  "birthPlace": "London, England",
  "nationality": "British",
  "genres": ["Pop", "Dance", "R&B"],
  "albums": [
    {
      "title": "Dua Lipa",
      "releaseYear": 2017,
      "singles": ["New Rules", "Be the One", "IDGAF"]
    },
    {
      "title": "Future Nostalgia",
      "releaseYear": 2020,
      "singles": ["Don't Start Now", "Physical", "Levitating"]
    }
  ],
  "awards": {
    "grammys": 2,
    "britAwards": 3,
    "mtvAwards": 1
  },
  "socialMedia": {
    "instagram": "@dualipa",
    "twitter": "@DUALIPA"
  }
};


function printinfo() {
  const container = document.getElementById("container");
  console.log(duaLipaInfo)
  const artistName = document.createElement("h2");
  artistName.innerHTML = `<strong> Artist Name:</strong> ${duaLipaInfo.artist}`;
  container.appendChild(artistName);
 artistName.id="header";
  const birthDate = document.createElement("div");
  birthDate.innerHTML = `<strong>Birth Date:</strong> ${duaLipaInfo.birthDate}`;
  container.appendChild(birthDate);

  const birthPlace = document.createElement("div");
  birthPlace.innerHTML = `<strong>Birth Place:</strong> ${duaLipaInfo.birthPlace}`;
  container.appendChild(birthPlace);

  const nationality = document.createElement("div");
  nationality.innerHTML = `<strong>Nationality:</strong> ${duaLipaInfo.nationality}`;
  container.appendChild(nationality);

  const geners = document.createElement("div");
  let genresHTML = `<strong>Generes:</strong> `;
  for (let genre of duaLipaInfo.genres) {
    genresHTML += `${genre}, `;
  }
  geners.innerHTML = genresHTML;
  container.appendChild(geners);

  const albums = document.createElement("div");
  let albumhtml = `<strong> Albums:</strong>`;
  for (let album of duaLipaInfo.albums) {
    albumhtml += `<ul>
                  <li><strong>Title:</strong> ${album.title}</li>
                  <li><strong>Release Year:</strong> ${album.releaseYear}</li>
                  <li><strong>Singles:</strong> ${album.singles.join(', ')}</li>
                </ul>
          `
  }
  albums.innerHTML = albumhtml;
  container.appendChild(albums);

  const awards = document.createElement("div");
  let awardhtml = `<strong> Awards: <strong>`;
  for (let award in duaLipaInfo.awards) {
    awardhtml += `<ul>
                    <li><strong>${award}:</strong> ${duaLipaInfo.awards[award]}</li>
                 </ul>`;
  }
  awards.innerHTML=awardhtml;
  container.appendChild(awards);
  
  const socialMedias = document.createElement("div");
  let socialHtml = `<strong> Awards: <strong>`;
  for (let socialMedia in duaLipaInfo.socialMedia) {
    socialHtml += `<ul>
                    <li><strong>${socialMedia}:</strong> ${duaLipaInfo.socialMedia[socialMedia]}</li>
                  </ul>`;
  }
  socialMedias.innerHTML=socialHtml;
  container.appendChild(socialMedias);
}
printinfo();