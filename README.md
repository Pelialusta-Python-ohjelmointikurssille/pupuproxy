# pupuproxy

instructions:
- git clone https://github.com/Pelialusta-Python-ohjelmointikurssille/pupuproxy
- enter pupuproxy folder
- run "npm install"
- run "node proxy.js"
- proxy is located at "http://localhost:3000/"
- to make request to the original api url, just replace original api url with proxy url (tie.koodariksi.fi/api/login -> localhost:3000/api/login)

What does it do:

It forwards requests to the tie koodariksi api and returns the responses from the api with some headers added. 

Why this is necessary:

This is necessary because the tie koodariksi api doesn't send "Access-Control-Allow-Origin: *" header (which it probably shouldn't anyway). CORS doesn't matter and no proxy is needed when the pupupeli is running on the tie koodariksi site, as the origin of the api and the game is the same. It's only relevant for development, when our Origin is localhost and api's Origin is tie.koodariksi.fi.
