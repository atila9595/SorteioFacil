const express = require('express');
const { google } = require('googleapis');


const app = express();

async function getAuthSheets(){

    
    const auth = new google.auth.GoogleAuth({
        keyFile: "credencial.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets  = google.sheets({
        version: "v4",
        auth: client
    })

    const spreadsheetId = "11bPCeJkw45lYAwPCdmLg93Q4PAUPmyN0DZPrpXv060M";

    return{
        auth,
        client,
        googleSheets,
        spreadsheetId
    }
};

app.get('/metadata', async (req, res)=>{
    
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
    
    
    const metadata = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    })
   

    res.send(metadata.data)

})

app.get('/', (req, res)=> {
    res.send('hello');
});

const port = 3000;
app.listen(port, () =>{
    console.log('servidor rodando!')
});