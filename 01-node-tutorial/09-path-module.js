// Built-in Module ( Módulo integrado )

// PATH - O módulo PATH fornece utilitários para trabalhar com caminhos de arquivo e diretório

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
