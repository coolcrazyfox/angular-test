export interface IData {
  "type": 'income' | 'outcome' | 'loan' | 'investment';
  "_id": string;
  "amount": string;
  "name": {
    "first": string;
    "last": string;
  },
  "company": string;
  "email": string;
  "phone": string;
  "address": string;
}
