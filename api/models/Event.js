module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true,
    },

    time: {
      type: 'number',
    },

    status: {
      type: 'number',
      description: {
        1: 'Pending',
        2: 'Running',
        3: 'Finished',
      },
    },

    content: {
      type: 'string',
    },

    imgUrl: {
      type: 'string',
    },
  },
};
