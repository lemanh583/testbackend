module.exports = {
  attributes: {
    name: {
      type: 'string',
    },

    phoneNumber: {
      type: 'string',
    },

    address: {
      type: 'string',
    },

    sex: {
      type: 'number',
    },

    dob: {
      type: 'number',
    },

    bloodType: {
      type: 'string',
      isIn: ['A', 'B', 'AB', 'O'],
    },

    bloodGroup: {
      type: 'string',
      isIn: ['+', '-'],
    },
  },
};
