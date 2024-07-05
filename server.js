const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();

// TODO: remove google fonts and unsafe-inline css
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "http://localhost:8080"],
      scriptSrcAttr: ["'self'", "'unsafe-inline'"], // Allow inline script attributes
      imgSrc: ["'self'", "data:", "http://localhost:8080", "https://academy-u202309-030-16e3810602c5.herokuapp.com"],
      styleSrc: ["'self'", "http://localhost:8080", "https://fonts.googleapis.com", "'unsafe-inline'"],
      connectSrc: ["'self'", "http://localhost:8080", "https://academy-u202309-030-16e3810602c5.herokuapp.com", "https://login.microsoftonline.com"],
      fontSrc: ["'self'", "http://localhost:8080", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
}));

app.use(express.static(path.join(__dirname, 'dist/modules-frontend/browser')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/modules-frontend/browser', 'index.html'));
});

app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
