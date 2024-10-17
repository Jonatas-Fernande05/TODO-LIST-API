const express = require('express');
const sequelize = require('./config/config');
const taskRoutes = require('./routes/taskRoutes');
const metrics = require('./metrics/metrics');

const app = express();
app.use(express.json());
app.use('/metrics', metrics);

app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
