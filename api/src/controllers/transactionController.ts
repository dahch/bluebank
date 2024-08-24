// api/src/controllers/transactionController.ts
import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import Account from '../models/Account';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { type, date, amount, location, accountId } = req.body;
    const account = await Account.findByPk(accountId);
    if (!account) return res.status(404).json({ error: 'Account not found' });

    const transaction = await Transaction.create({ type, date, amount, location, accountId });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Error creating transaction' });
  }
};

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving transaction' });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, date, amount, location, accountId } = req.body;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    await transaction.update({ type, date, amount, location, accountId });
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Error updating transaction' });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    await transaction.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting transaction' });
  }
};