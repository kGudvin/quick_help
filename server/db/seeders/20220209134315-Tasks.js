'use strict';


module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
        title:"Доставка бумаг" ,
        address:"Москва, Оболенский переулок, 9к18",
        time: "2 часа",
        date:"13.02.2022",
        price:2000,
        description:"Довезти важные бумаги до моей бабушки",
        image:null,
        categorie:"Курьерские услуги",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Отремонтировать телефон" ,
        address:"Москва,Котляковская улица, 6с5",
        time: "По готовности",
        date:"15.02.2022",
        price:3000,
        userId:2,
        description:"Починить телефон, не работают динамики, айфон 8",
        image:null,
        categorie:"Компьютерная помощь",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Покрасить стены" ,
        address:"Москва,Сумской проезд, 31к2",
        time: "2 дня",
        date:"14.02.2022",
        price:15000,
        userId:3,
        description:"Покрасить стены в трехкомнатной квартире 83м",
        image:null,
        categorie:"Ремонт и строительство",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Сломался ноут" ,
        address:"Москва,Никольская улица, 2к1",
        time: "побыстрее",
        date:"13.02.2022",
        price:5000,
        userId:4,
        description:"не заряжается",
        image:null,
        categorie:"Компьютерная помощь",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Убрать офис вечером" ,
        address:"Москва,Осенняя улица, 4к1",
        time: "3 часа",
        date:"13.02.2022",
        price:1500,
        userId:5,
        description:"Помыть полы и пропылесосить в офисе, площадь 300м",
        image:null,
        categorie:"Уборка помещения",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Перевезти диван" ,
        address:"Москва,Оболенский переулок, 9к18",
        time: "2 часа",
        date:"13.02.2022",
        price:4000,
        userId:1,
        description:"Довезти диван до моей бабушки",
        image:null,
        categorie:"Грузоперевозки",
        createdAt:new Date(),
        updatedAt:new Date()
      }

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tasks", null, {});
  },

};
   
        // title: faker.name.jobArea(),
        // address: adressArr[index],
        // time: (time+index).toString(),
        // date: `${date.getDate()} . ${date.getMonth()}. ${date.getFullYear()}`,
        // price: (Math.random() * (10000 - 2000) + 2000),
        // description: faker.name.jobDescriptor(),
        // image: faker.image.business(),
        // categorie: faker.name.jobType(),
        // createdAt:new Date(),
        // updatedAt:new Date()
        // });
      