const express = require("express");
const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({ extended: false });

app.post("/download", urlencodedParser, function (request, response) {
    if (!request.body) {
        return console.log("Status(400)");
    }
    console.log(request.body);

    if (typeof request.body.textName != "string") {
        let json = {
            status: "error",
            message: "Неверные данные в форме (textName)"
        };
        console.log(JSON.stringify(json));
        return console.log("Status(400)");  
    }

    if (!request.body.textName) {
        let json = {
            status: "error",
            message: "Не хватает данных"
        };
        console.log(JSON.stringify(json));
        return console.log("Status(400)");
    }

    let json = {
        name: "Exam",
        author: "Pavel Gnatenko"
        textName: request.body.textName,
    };

    console.log(JSON.stringify(json));
    console.log("Status(200)");
});
port = 5500;
app.listen(port, () => console.log("Соединение установлено, порт: ", port));