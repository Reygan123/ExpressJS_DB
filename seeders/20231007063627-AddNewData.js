"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("actor", [
      {
        first_name: "Reygan",
        last_name: "Fadhilah",
        last_update: new Date(),
      },
      {
        first_name: "Farkhana",
        last_name: "Salsabila",
        last_update: new Date(),
      },
      {
        first_name: "Agira",
        last_name: "Fitra",
        last_update: new Date(),
      },
      {
        first_name: "Alexander",
        last_name: "Simatupang",
        last_update: new Date(),
      },
      {
        first_name: "Cristiano",
        last_name: "Ronaldo",
        last_update: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
