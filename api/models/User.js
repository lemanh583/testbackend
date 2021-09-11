module.exports = {
  attributes: {
    email: {
      type: 'string',
    },

    password: {
      type: 'string',
    },

    name: {
      type: 'string',
    },

    imgUrl: {
      type: 'string',
    },

    rank: {
      type: 'number',
    },

    status: {
      type: 'number',
    },

    urgentNotification: {
      type: 'boolean',
    },

    eventNotification: {
      type: 'boolean',
    },

    role: {
      model: 'role',
    },

    bloodDonationRegister: {
      model: 'blooddonationregister',
    },
  },
};
