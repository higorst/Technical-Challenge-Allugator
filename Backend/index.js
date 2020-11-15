const config = require('config');
const PORT = config.get('server.port');
const app = require('./app');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});
