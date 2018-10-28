import clients from './clients.json';

export default {
  getEmptyClient() {
    return {
      name: '',
      address: ''
    }
  },

  getClients() {
    return clients;
  }
};
