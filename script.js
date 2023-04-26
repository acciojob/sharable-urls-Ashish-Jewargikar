// your code here
const form = document.getElementById('myForm');
    const button = document.getElementById('button');
    const url = document.getElementById('url');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nameValue = document.getElementById('name').value;
      const yearValue = document.getElementById('year').value;
      const queryString = `?name=${nameValue}&year=${yearValue}`;
      url.textContent = `https://localhost:8080/${queryString}`;
    });