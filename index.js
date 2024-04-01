const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'minordb'
});

const port = 3000;

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Db connection successful');
  } else {
    console.error('Db connection failed\n ' + JSON.stringify(err, undefined, 2));
  }
});

app.post('/signup', async (req, res) => {
  const { fn, ln, email, pwd } = req.body;


    mysqlConnection.query(
      'INSERT INTO users (names, email, password) VALUES (?, ?, ?)',
      [fn, email, hashedPassword],
      (err, result) => {
        if (!err) {
          console.log('User inserted successfully');
          res.json({ success: true });
        } else {
          let errorMessage = 'Signup failed.';
          if (err.code === 'ER_DUP_ENTRY') {
            errorMessage = 'Email already exists.';
          } else {
            console.error('Error inserting user:', err);
          }
          res.json({ success: false, error: errorMessage });
        }
      }
    );
  }
);

app.listen(port, () => console.log('Express server is running at port: ' + port));
