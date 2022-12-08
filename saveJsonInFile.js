
const fs = require('fs');

//write results to the json file
function SaveJson(fileName,data)
{
    
    // Convert the string object to a JSON string
    let jsonString = JSON.stringify(data);

    // Write the JSON string to a file
    fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    //console.log('Data written to file');
    });
    
}

module.exports = { SaveJson };