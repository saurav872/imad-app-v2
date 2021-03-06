var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    
    title : 'Article One|Saurav Sharan',
    heading : 'Article One',
    date : 'Sep 5,2017',
    content: `
      <p>
               my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
                my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
                 my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
            </p>
            
             <p>
               my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
                my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
                 my name is saurav sharan.i am a computer science student.i study in bankura unnayani institute of engineering.
            </p>
    
    
    `};
    function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.headig;
        var content = data.content;
        var htmlTemplate = `<html>
        <head>
        
        <title>
        ${title}
        </title>
        <meta name ="viewport" content = "width=device-width, initial scale =i"/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
        <div class = "container">
        <div>
        <a href ="/" >Home</a>
        </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        <div>
        ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>    
        
        </body>
        
        </html>
        
        `;
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
