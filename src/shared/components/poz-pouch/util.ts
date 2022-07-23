import { Users } from '$api';

export enum TRX_TYPES {
  DEBIT = 'debit',
  CREDIT = 'credit',
}

export enum ACTION_TYPES {
  PLEDGE = 'Pledge',
  TRANSFER_FROM = 'Transfer From Pouch',
  TRANSFER_TO = 'Transfer To Pouch',
  POZZLE_ADDED = 'Pozzle Added',
}

export const getTransactions = () => {
  return new Promise((resolve, reject) => {
    Users.getUserTransactions()
      .then(response => {
        if (response.status === 200) resolve(response.data);
        else reject('Error getting transactions');
      })
      .catch(err => {
        console.log(err, 'getUserTransactions Error');
        reject('Error getting transactions');
      });
  });
};
