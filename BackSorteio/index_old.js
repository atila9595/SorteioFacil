const express = require('express');
const { google } = require('googleapis');


const app = express();
app.use(express.json());

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

app.get('/getrows', async (req, res)=>{

    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'config',
        valueRenderOption: 'UNFORMATTED_VALUE',
        dateTimeRenderOption: 'FORMATTED_STRING',
    });

    res.send(getRows.data);

});

app.post('/addrows', async (req, res)=>{

    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const { values } = req.body


    postRows = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: 'config',
        valueInputOption: 'USER_ENTERED',
            resource: {
                values: values,
            }
    });

    res.send(postRows.data);

});

app.post('/updatevalue', async (req, res)=>{

    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const { values } = req.body


    updateVelues = await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: 'config',
        valueInputOption: 'USER_ENTERED',
            resource: {
                values: values,
            }
    });

    res.send(updateVelues.data);

});


const port = 3000;
app.listen(port, () =>{
    console.log('servidor rodando!')
});