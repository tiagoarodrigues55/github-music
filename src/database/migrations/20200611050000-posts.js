module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('posts', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        video: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        audio: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: true,
        },
       
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('posts');

  }
};
