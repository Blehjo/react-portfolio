const fs = require('fs')

fs.writeFileSync('./.env', 
`
REACT_APP_SERVICE_ID=${process.env.REACT_APP_SERVICE_ID}\n
REACT_APP_TEMPLATE_ID=${process.env.REACT_APP_TEMPLATE_ID}\n
REACT_APP_USER_ID=${process.env.REACT_APP_USER_ID}\n
`)