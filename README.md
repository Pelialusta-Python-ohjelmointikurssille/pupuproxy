# pupuproxy

instructions:
- enter pupuproxy folder
- run "npm install"
- run "node proxy.js"
- proxy is located at "http://localhost:3000/"
- to make request to the original api url, just replace original api url with proxy url (tie.koodariksi.fi/api/login -> localhost:3000/api/login)

Why this is necessary:
This is necessary because the tie koodariksi api doesn't send "Access-Control-Allow-Origin: *" header (which it probably shouldn't anyway). CORS doesn't matter and no proxy is needed when the pupupeli is running on the tie koodariksi site, as the origin of the API and the game is the same. It's only relevant for development, when our Origin is localhost and the target or host is the API site (tie.koodariksi.fi).
