const data = ['Line 1', 'Line 2', 'Line 3'];
const email = 'ishoshot@gmail.com';

fetch('/.netlify/functions/sendEmail', {
    method: 'POST',
    body: JSON.stringify({ data, email }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
