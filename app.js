const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

let pageTitles = {
  newTitle: "HOMBRE",
  newTitle2: "MUJER",
  newTitle3: "NIÑOS",
  newTitle4: "BASICOS",
  newTitle5: "SKATE",
  newTitle6: "REBAJAS"
};

let pageTitles2 = {
  categoriasHombre: "PRODUCTOS DESTACADOS",
  categoriasHombre2: "CALZADO",
  categoriasHombre3:"ROPA",
  categoriasHombre4:"ACCESORIOS"
}

let backgroundImagePath = '/resources/images/fondo_vans.jpeg';
// Define una variable global para almacenar la ruta del logo
let logoPath = '/resources/images/Vanslogo.jpg'; 
app.use(express.urlencoded({ extended: true }));
// 4.- Configurar el directorio public (en public se ponen los archivos css, js e imágenes)
app.use('/resources', express.static('public'));

// Configurar Multer para manejar la carga de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Simulamos una lista de productos con URLs de imagen
const products = [
  { name: 'Producto 1', image: '/resources/images/tenis1.png' },
  { name: 'Producto 2', image: '/resources/images/tenis2.png' },
  { name: 'Producto 3', image: '/resources/images/tenis3.png' },
  { name: 'Producto 4', image: '/resources/images/tenis4.png' },
  { name: 'Producto 5', image: '/resources/images/tenis5.png' },
];

app.get('/', (req, res) => {
  res.render('index', { products, logoPath, backgroundImagePath, ...pageTitles, ...pageTitles2 });
});

app.get('/admin', (req, res) => {
  res.render('admin', { logoPath, backgroundImagePath, ...pageTitles, ...pageTitles2 });
});

app.post('/admin/changeTitle', (req, res) => {
  for (let title in pageTitles) {
    if (req.body[title]) {
      pageTitles[title] = req.body[title];
    }
  }
  res.redirect('/admin');
});

app.post('/admin/changeCategoryMan', (req, res) => {
  for (let title2 in pageTitles2) {
    if (req.body[title2]) {
      pageTitles2[title2] = req.body[title2];
    }
  }
  res.redirect('/admin');
});

app.post('/admin/upload', upload.fields([
  { name: 'product1Image', maxCount: 1 },
  { name: 'product2Image', maxCount: 1 },
  { name: 'product3Image', maxCount: 1 },
  { name: 'product4Image', maxCount: 1 },
  { name: 'product5Image', maxCount: 1 },
]), (req, res) => {
  // Lógica para guardar las imágenes y actualizar la información de los productos
  // Puedes utilizar req.files para acceder a las imágenes cargadas

  // Ejemplo: Actualizar la información de los productos con las nuevas rutas de las imágenes
  products[0].image = '/resources/images/' + req.files['product1Image'][0].filename;
  products[1].image = '/resources/images/' + req.files['product2Image'][0].filename;
  products[2].image = '/resources/images/' + req.files['product3Image'][0].filename;
  products[3].image = '/resources/images/' + req.files['product4Image'][0].filename;
  products[4].image = '/resources/images/' + req.files['product5Image'][0].filename;

  // Redirige de vuelta al panel de administrador después de la carga
  res.redirect('/admin');
});

app.post('/admin/uploadLogo', upload.single('logoImage'), (req, res) => {
  if (req.file) {
    // Guarda la nueva imagen del logo en una ubicación adecuada
    const newLogoPath = '/resources/images/' + req.file.filename;

    // Actualiza la ruta del logo en tu aplicación
    logoPath = newLogoPath;

    // Redirige de vuelta al panel de administrador después de la carga
    res.redirect('/admin');
  } else {
    res.status(400).send('Error al cargar el logo.');
  }
});

 // logica para cambiar imagen de fondo

 app.post('/admin/uploadBackground', upload.single('backgroundImage'), (req, res) => {
  if (req.file) {
      // Guarda la nueva imagen de fondo en una ubicación adecuada
      const newBackgroundImagePath = '/resources/images/' + req.file.filename;

      // Actualiza la ruta de la imagen de fondo en tu aplicación
      backgroundImagePath = newBackgroundImagePath;

      // Redirige de vuelta al panel de administrador después de la carga
      res.redirect('/admin');
  } else {
      res.status(400).send('Error al cargar la imagen de fondo.');
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});