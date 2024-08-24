import { Request, Response } from 'express';
import Client from '../models/Client';

export const getAllClients = (req: Request, res: Response) => {
    const clients = Client.findAll();
    res.status(200).json({ clients });
};

export const getClientById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
        res.status(404).json({ message: 'Client no found' });
    } else {
        res.status(200).json({ client });
    }
};

export const createClient = (req: Request, res: Response) => {
    const { name, address, clientType } = req.body;
    if (!name || !address || !clientType) return res.status(400).json({ message: 'Missing required fields' });
    if (clientType !== 'individual' && clientType !== 'business') return res.status(400).json({ message: 'Invalid client type' });
    const newClient = Client.create({ name, address, clientType });
    res.status(201).json({ client: newClient });
};

export const updateClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, address, clientType } = req.body;
    const client = await Client.findByPk(id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    if (!name && !address && !clientType) return res.status(400).json({ message: 'Missing required fields' });
    if (clientType && clientType !== 'individual' && clientType !== 'business') return res.status(400).json({ message: 'Invalid client type' });
    const updatedClient = await Client.update({
        name: client.name,
        address: client.address,
        clientType: client.clientType
    }, {
        where: { id: client.id }
    });
    res.status(200).json({ client: updatedClient })
};

export const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deletedClient = await Client.destroy({
        where: {
            id
        },
        truncate: true
    });

    if (deletedClient >= 1) {
        res.status(200).json({ message: `Client with ID ${id} was deleted` });
    } else {
        res.status(400).json({ message: 'Client not found' });
    }
};