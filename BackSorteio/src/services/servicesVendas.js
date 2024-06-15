import e from 'express';
import doc from '../config/index.js';

const sheet = doc.sheetsById[0];

const getRow = async (id) => {
    const row = await sheet.getRows();
    
    // Mapeia as linhas para um array de objetos JSON
    return row.map(row => {
        
        if (row.get('Id') === id) {
            var rowRes = row._rawData
            return rowRes;
        } else {
            return null;
        }
    }).filter(row => row !== null);
};

const getRows = async () => {
    const rows = await sheet.getRows();
    
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

const alterarComprador = (row, comprador) => {
    
    let nome = comprador.type === 'del' ? '' : comprador.nome;
    let telefone = comprador.type === 'del' ? '' : comprador.telefone;
    let nome_vendedor = comprador.type === 'del' ? '' : comprador.nome_vendedor;
    let data = comprador.type === 'del' ? '' : comprador.data;
    let vendido = comprador.type === 'del' ? '0' : '1';

    row.set('NOME', nome);
    row.set('TELEFONE', telefone);
    row.set('NOME_VENDEDOR', nome_vendedor);
    row.set('DATA', data);
    row.set('VENDIDO', vendido);

    return row;
  
}

const editCompradorTosheet = async ( comprador ) =>{
    const rows = await sheet.getRows();
    
        rows.map(async row => {
            
            if (row.get('Id') === String(comprador.id) ) {
                row = alterarComprador(row, comprador);
                try {
                    await row.save();
                    const messagem = comprador.type === 'del' ? 'Sucesso ao deletar comprador.'
                    : comprador.type === 'alt' ? 'Sucesso ao alterar comprador.'
                    : comprador.type === 'add' ? 'Sucesso ao adicionar comprador.'
                    : 'Tipo de operação desconhecida.';
                    console.log(messagem)
                } catch (error) {
                    const messagem = comprador.type === 'del' ? `Erro ao deletar comprador: ${error}`
                    : comprador.type === 'alt' ? `Erro ao alterar comprador: ${error}`
                    : comprador.type === 'add' ? `Erro ao adicionar comprador: ${error}`
                    : 'Tipo de operação desconhecida.';
                    console.log(messagem)
                }
                

        } else {
            return null;
        }
        }).filter(row => row !== null);
    
}


const addCompradorTosheet = async ( comprador ) =>{
    const rows = await sheet.getRows();
    comprador.sorteios.forEach(element => {
        rows.map(async row => {
        
            if (row.get('Id') === String(element) ) {
                if (row.get('VENDIDO') === '0') {
                    row.set('NOME', comprador.nome);
                    row.set('TELEFONE', comprador.telefone);
                    row.set('NOME_VENDEDOR', comprador.nome_vendedor);
                    row.set('DATA', comprador.data);
                    row.set('VENDIDO', '1');
                    await row.save();
                    //console.log('aparece: ', row.get('VENDIDO'))
                    console.log('numero: ', element, 'comprador: ', comprador)
                } else {
                    console.log('numero', element, 'já vendido')
                }
                
            } else {
                return null;
            }
        }).filter(row => row !== null);
        
    });
}

const setRows = async () => {
    const rows = await sheet.getRows();
    rows[0].set('NOME', 'atila silva');
    await rows[0].save();
    console.log(rows[0].get('NOME'));
};

export default { getRows, getRow, setRows, addCompradorTosheet, editCompradorTosheet };

/*
rows.forEach(element => {
    console.log(element.get('NOME'));
});*/