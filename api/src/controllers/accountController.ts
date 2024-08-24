import { Request, Response } from 'express';
import Account from '../models/Account';
import Client from '../models/Client';

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { accountNumber, balance, accountType, clientId } = req.body;
    const client = await Client.findByPk(clientId);
    if (!client) return res.status(404).json({ error: 'Client not found' });

    const account = await Account.create({ accountNumber, balance, accountType, clientId });
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ error: 'Error creating account' });
  }
};

export const getAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const account = await Account.findByPk(id);
    if (!account) return res.status(404).json({ error: 'Account not found' });

    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving account' });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { accountNumber, balance, accountType, clientId } = req.body;
    const account = await Account.findByPk(id);
    if (!account) return res.status(404).json({ error: 'Account not found' });

    await account.update({ accountNumber, balance, accountType, clientId });
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ error: 'Error updating account' });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    const account = await Account.findByPk(accountId);
    if (!account) return res.status(404).json({ error: 'Account not found' });

    await account.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting account' });
  }
};