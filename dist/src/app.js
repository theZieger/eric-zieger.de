(function() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var response = JSON.parse(this.responseText);
      response.forEach(function(repo) {
        if (~['utilitiesjs', 'cookiejs.js', 'eventemitterjs'].indexOf(repo.name)) {
          var repoId = '#' + repo.name.replace('.', '');
          document.querySelector(repoId + ' .js-stars')
            .textContent = repo.stargazers_count;
          document.querySelector(repoId + ' .js-forks')
            .textContent = repo.forks_count;
        }
      });
    }
  };

  xhr.open('GET', 'https://api.github.com/users/theZieger/repos', true);
  xhr.send();

}());
