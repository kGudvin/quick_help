"use strict";
// const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          
          name: "Татьяна",
          secondname: "Васильева",
          patronymic: "Анатольевна",
          email: "tatiana@tatiana.ru",
          age: 40,
          about: "Женщина средних летъ",
          account: 0,
          image: "/uploads/face.jpeg",
          rating: 0,
          phone: "+7 911 - 11-11-11",
          role_id: 1,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          name: "Кевин",
          secondname: "Зелененький",
          patronymic: "Викторович",
          email: "frogg@frogg.ru",
          age: 20,
          about: "мужчина средних летъ",
          account: 0,
          image: "/uploads/frogg.jpeg",
          rating: 0,
          phone: "+7 911-12-11-12",
          role_id: 1,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
         
          name: "Антон",
          secondname: "Алексеевич",
          patronymic: "Эльбрус",
          email: "caty@tianat.ru",
          age: 40,
          about: "Посмотрите на котика",
          account: 50000,
          image: "/uploads/caty.png",
          rating: 5,
          phone: "+7 911-11-11-11",
          role_id: 1,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          
          name: "Иван",
          secondname: "Ивнаов",
          patronymic: "Иванович",
          email: "tatiana@tatiana.ru",
          age: 40,
          about: "Люблю красить стены",
          account: 3000,
          image: "/uploads/face.jpeg",
          rating: 0,
          phone: "+7 911-11-11-11",
          role_id: 1,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          name: "Татьяна",
          secondname: "Васильева",
          patronymic: "Анатольевна",
          email: "1",
          age: 40,
          about: "Женщина средних летъ",
          account: 0,
          image: "",
          rating: 0,
          phone: "+7 911 - 11-11-11",
          role_id: 1,
          password: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        }

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
// for (let index = 0; index < 5; index++) {
//   arr.push({
//     name: faker.name.firstName(),
//     secondname: faker.name.lastName(),
//     patronymic: faker.name.lastName(),
//     email: faker.internet.email(),
//     age: (Math.random() * (80 - 18) + 18),
//     about: faker.lorem.sentence(),
//     account: (Math.random() * (10000 - 2000) + 2000),
//     image: faker.image.avatar(),
//     rating: 5,
//     phone: faker.phone.phoneFormats().toString(),
//     role_id: 1,
//     password:'1',
//     createdAt:new Date(),
//     updatedAt:new Date()
