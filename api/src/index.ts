import express from 'express';
import cors from 'cors';
import sequelize from './config/database';
import routes from './routes/index';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bluesoft Bank API');
});

app.use('/api', routes);

// Sincroniza modelos y levanta el servidor
sequelize.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Server running on http://localhost:3001');
    });
  })
  .catch(err => console.error('Unable to connect to the database:', err));

export default app;
