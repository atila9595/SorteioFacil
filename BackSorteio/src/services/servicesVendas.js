import doc from '../config/index.js';

const sheet = doc.sheetsById[0];

const getRows = async () => {
    const rows = await sheet.getRows();
    rows.forEach(element => {
        console.log(element.get('NOME'));
    }); 
    // Mapeia as linhas para um array de objetos JSON
    return rows.map(row => {
        
        if (row.get('VENDIDO') === '1') {
            var rowRes = row._rawData
            return rowRes;
        } else {
            return null;
        }
    }).filter(row => row !== null);
};

const setRows = async () => {
    const rows = await sheet.getRows();
    rows[0].set('NOME', 'atila silva');
    await rows[0].save();
    console.log(rows[0].get('NOME'));
};

export default { getRows, setRows };

/*
rows.forEach(element => {
    console.log(element.get('NOME'));
});*/