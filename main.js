document.addEventListener("DOMContentLoaded", function () {
  const profileName = document.getElementById("name");
  const profileUserName = document.getElementById("username");
  const profileAvatar = document.getElementById("avatar");
  const repository = document.getElementById("repository");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const profileLink = document.getElementById("link");

  fetch("https://api.github.com/users/Lbonan")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      profileName.innerHTML = json.name;
      profileUserName.innerHTML = json.login;
      profileAvatar.src = json.avatar_url;
      followers.innerHTML = json.followers;
      following.innerHTML = json.following;
      repository.innerHTML = json.public_repos;
      profileLink.href = json.html_url;
    });
});
