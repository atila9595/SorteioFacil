import vendasService from '../services/servicesVendas.js'

export const getVenda = async (req, res) => {
    try {
        const id = req.params.id;
        const venda = await vendasService.getRow(id);
        res.json(venda);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter vendas' });
    }
};

export const getVendas = async (req, res) => {
    try {
        const vendas = await vendasService.getRows();
        res.json(vendas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter vendas' });
    }
};

export const editCompradorTosheet = async (req, res) => {
    try {
        const comprador = req.body;
        await vendasService.editCompradorTosheet(comprador);
        res.status(200).send('Comprador editado com Sucesso!')
    } catch (error) {
        console.error('Erro ao editar comprador:', error);
        res.status(500).send('Erro ao editar comprador.');
    }
}

export const addComprador = async (req, res) => {
    try {
        const comprador = req.body;
        await vendasService.addCompradorTosheet(comprador);
        res.status(200).send('Comprador adiciona com Sucesso!')
    } catch (error) {
        console.error('Erro ao adicionar comprador:', error);
        res.status(500).send('Erro ao adicionar comprador.');
    }
}

export const setVendas = async (req, res) => {
    try {
        await vendasService.setRows();
        res.json({ message: 'Row updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar venda' });
    }
};
