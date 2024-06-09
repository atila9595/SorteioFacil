import vendasService from '../services/servicesVendas.js'


export const getVendas = async (req, res) => {
    try {
        const vendas = await vendasService.getRows();
        res.json(vendas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter vendas' });
    }
};

export const setVendas = async (req, res) => {
    try {
        await vendasService.setRows();
        res.json({ message: 'Row updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar venda' });
    }
};
