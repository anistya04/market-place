const ancorLink = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < ancorLink.length; index++) {
  const element = ancorLink[index];

  element.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.getElementById(this.getAttribute('href').replace('#', ''))) {
      console.log('a');
      document
        .querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
}
console.log(ancorLink);
