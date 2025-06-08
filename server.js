const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const fs = require("fs");
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);
const app = express();

app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
  try {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error processing update:", error);
    res.sendStatus(500);
  }
});

// Webhook URL
bot.setWebHook(`https://bot.bonuslar.uz/bot${token}`);

// Serverni ishga tushirish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot server ishga tushdi: ${PORT}`);
});

// Xizmatlar va rasm yo‘llari
const services = {
  "🌭 Yandex Eats": {
    image: "./yandex_eats.JPG",
    link1: {
      uz: "https://go-yandex.prfl.me/promokod.chegirmalar/h3wm8m",
      ru: "https://go-yandex.prfl.me/promokod.chegirmalar/h3wm8m",
      en: "https://go-yandex.prfl.me/promokod.chegirmalar/h3wm8m",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/351",
      ru: "https://t.me/yandeks_telegram/351",
      en: "https://t.me/yandeks_telegram/351",
    },
    promo: {
      uz: `💛 Yandex Eats \n\n🎁  UKMKH- promokodi 80 000 so’mdan oshgan birinchi 3 ta buyurtma uchun 30 000 so’m chegirma\n\n‼️ Promokod barcha kafe,restorant va do'konlar ishlaydi \n\n@yandeks_telegram`,
      ru: `💛 Яндекс Еда \n\n🎁 UKMKH- промокод 30 000 сумов скидка на первые 3 заказа от 80 000 сумов\n\n‼️ Промокод действует во всех кафе, ресторанах и магазинах \n\n@yandex_telegram`,
      en: `💛 Yandex Eats \n\n🎁 UKMKH- promo code 30,000 soums discount for the first 3 orders over 80,000 soums\n\n‼️ Promo code works in all cafes, restaurants and shops \n\n@yandex_telegram`,
    },
  },
  "🍔 Uzum Tezkor": {
    image: "./uzum_tezkor.JPG",
    link1: {
      uz: "https://uzum1.prfl.me/promokod.chegirmalar/tqdxrw",
      ru: "https://uzum1.prfl.me/promokod.chegirmalar/tqdxrw",
      en: "https://uzum1.prfl.me/promokod.chegirmalar/tqdxrw",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/346?single",
      ru: "https://t.me/yandeks_telegram/346?single",
      en: "https://t.me/yandeks_telegram/346?single",
    },
    promo: {
      uz: `💜 Uzum Tezkor\n\n🎁 YXLTD - promokodi 65 000 so’mdan oshgan birinchi 3 ta buyurtma uchun 21 000 so’m chegirma\n\n@yandeks_telegram`,
      ru: `💜 Uzum Tezkor\n\n🎁 YXLTD - промокод скидка 21 000 сум на первые 3 заказа свыше 65 000 сум\n\n@yandex_telegram`,
      en: `💜 Uzum Tezkor\n\n🎁 YXLTD - promo code 21,000 soums discount for the first 3 orders over 65,000 soums\n\n@yandex_telegram`,
    },
  },
  "🍕 Bellissimo Pizza": {
    image: "./bellissimo.JPG",
    link1: {
      uz: "https://bp.uz/app",
      ru: "https://bp.uz/app",
      en: "https://bp.uz/app",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/354",
      ru: "https://t.me/yandeks_telegram/354",
      en: "https://t.me/yandeks_telegram/354",
    },
    promo: {
      uz: `❤️ Belissimo Pizza\n\n🎁 Chegirma30  - promokodi 70 000 so’mdan oshgan birinchi buyurtma uchun 30 000 so’m chegirma\n\n@yandeks_telegram`,
      ru: `❤️ Belissimo Pizza\n\n🎁 Chegirma30 - промокод 30 000 сумов скидка на первый заказ от 70 000 сумов\n\n@yandex_telegram`,
      en: `❤️ Belissimo Pizza\n\n🎁 Chegirma30 - promo code 30,000 soums discount for the first order over 70,000 soums\n\n@yandex_telegram`,
    },
  },
  "🛸 Exprees24": {
    image: "./express.JPG",
    link1: {
      uz: "https://express24.prfl.me/pramakod.chegirma/pbela0",
      ru: "https://express24.prfl.me/pramakod.chegirma/pbela0",
      en: "https://express24.prfl.me/pramakod.chegirma/pbela0",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/350",
      ru: "https://t.me/yandeks_telegram/350",
      en: "https://t.me/yandeks_telegram/350",
    },
    promo: {
      uz: `💛 Express24\n\n 🎁  STPL4- promokodi 80 000 so’mdan oshgan birinchi buyurtma uchun 35 000 so’m chegirma\n\n‼️ Promokod barcha kafe,restorant va do'konlar ishlaydi\n\n@yandeks_telegram`,
      ru: `💛 Express24\n\n 🎁 STPL4- промокод скидка 35 000 сумов на первый заказ от 80 000 сумов\n\n‼️ Промокод действует во всех кафе, ресторанах и магазинах\n\n@yandex_telegram`,
      en: `💛 Express24\n\n 🎁 STPL4- promo code 35,000 soums discount for the first order over 80,000 soums\n\n‼️ Promo code works in all cafes, restaurants and shops\n\n@yandex_telegram`,
    },
  },
  "🥦 Yandex Lavka": {
    image: "./yandex_lavka.jpg",
    link1: {
      uz: "https://lavka.prfl.me/yandeks_telegram/pqfc4q",
      ru: "https://lavka.prfl.me/yandeks_telegram/pqfc4q",
      en: "https://lavka.prfl.me/yandeks_telegram/pqfc4q",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/353",
      ru: "https://t.me/yandeks_telegram/353",
      en: "https://t.me/yandeks_telegram/353",
    },
    promo: {
      uz: `💛 Yandex Lavka\n\nTOSHKENT51 - 51% lik chegirma, birinchi buyurtma uchun.\n\nPromokod faqat havola orqali mavjud.`,
      ru: `💛 Yandex Lavka\n\nTASHKENT51 - скидка 51% на первый заказ.\n\nПромокод доступен только по ссылке.`,
      en: `💛 Yandex Lavka\n\nTASHKENT51 - 51% discount for your first order.\n\nPromo code is available only through the link.`,
    },
  },
  "🚀 Oqtepa Lavash Bot": {
    image: "./oqtepa_lavash_bot.JPG",
    link1: {
      uz: "https://t.me/oqtepalavash_bot_qollanma",
      ru: "https://t.me/oqtepalavash_bot_qollanma",
      en: "https://t.me/oqtepalavash_bot_qollanma",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/355",
      ru: "https://t.me/yandeks_telegram/355",
      en: "https://t.me/yandeks_telegram/355",
    },
    promo: {
      uz: `🌯 Oqtepa Lavash Bot\n\n🎁 Chegirma30 - promokodi  100 000 so’mdan oshgan istalgan 3 ta buyurtma uchun -30 000 so’mdan chegirma\n\n🛵 Bot havolasi: @Oqtepalavash_bot\n\n@yandeks_telegram`,
      ru: `🌯 Oqtepa Lavash Bot\n\n🎁 Chegirma30 - промокод - скидка 30 000 сум на любые 3 заказа от 100 000 сум\n\n🛵 Ссылка на бот: @Oqtepalavash_bot\n\n@yandex_telegram`,
      en: `🌯 Oqtepa Lavash Bot\n\n🎁 Chegirma30 - promo code -30,000 soums discount for any 3 orders over 100,000 soums\n\n🛵 Bot link: @Oqtepalavash_bot\n\n@yandex_telegram`,
    },
  },
  "🎧 Yandex Plus": {
    image: "./yandex_plus.JPG",
    link1: {
      uz: "https://ypls-eats.prfl.me/promokod.chegirmalar/ki8oby",
      ru: "https://ypls-eats.prfl.me/promokod.chegirmalar/ki8oby",
      en: "https://ypls-eats.prfl.me/promokod.chegirmalar/ki8oby",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/356",
      ru: "https://t.me/yandeks_telegram/356",
      en: "https://t.me/yandeks_telegram/356",
    },
    promo: {
      uz: `Promokod - 2UE8DDBES8 \nYandex Plus: 90 kunlik bepul sinov muddati!\n\n🎉 Ajoyib imkoniyat! Yandex Plus obunasini 90 kun davomida bepul sinab ko‘ring va quyidagi xizmatlardan foydalaning:\n✔️ Kinopoisk: Eng so‘nggi filmlar va seriallar!\n✔️ Yandex Music: Sevimli musiqangizni yuqori sifatda tinglang!\n✔️ Cashback va chegirmalar: Yandex bo‘ylab eksklyuziv bonuslardan foydalaning!\n✔️ Oflayn imkoniyatlar: Internet bo‘lmasa ham qulay foydalaning!\n\n🕒 Tezroq shoshiling! Taklif cheklangan vaqt davomida amal qiladi!\n\n📲 Tafsilotlar va ro‘yxatdan o‘tish uchun 👉 Yandex Plus\n\n90 kun davomida bepul xizmatlardan bahramand bo‘ling! 🌟\n\n‼️ Obuna boʻlish uchun quyidagi “ Obuna boʻlish ✅ “ Tugmasiga bosing\n\n@yandeks_telegram`,
      ru: `Промокод - 2UE8DDBES8 \nЯндекс Плюс: 90 дней бесплатного пробного периода!\n\n🎉 Отличная возможность! Попробуйте Яндекс Плюс бесплатно в течение 90 дней и воспользуйтесь следующими сервисами:\n✔️ Кинопоиск: самые свежие фильмы и сериалы!\n✔️ Яндекс Музыка: слушайте любимую музыку в высоком качестве!\n✔️ Кэшбэк и скидки: воспользуйтесь эксклюзивными бонусами на Яндексе!\n✔️ Офлайн-функции: пользуйтесь удобно даже без интернета!\n\n🕒 Поторопитесь! Предложение действует ограниченное время!\n\n📲 Подробности и регистрация 👉 Яндекс Плюс\n\nПользуйтесь бесплатными сервисами в течение 90 дней! 🌟\n\n‼️ Чтобы подписаться, нажмите на кнопку «Подписаться ✅» ниже\n\n@yandex_telegram`,
      en: `Promo code - 2UE8DDBES8 \nYandex Plus: 90-day free trial!\n\n🎉 Great opportunity! Try Yandex Plus subscription for 90 days for free and use the following services:\n✔️ Kinopoisk: The latest movies and TV series!\n✔️ Yandex Music: Listen to your favorite music in high quality!\n✔️ Cashback and discounts: Take advantage of exclusive bonuses across Yandex!\n✔️ Offline features: Use it conveniently even without the Internet!\n\n🕒 Hurry up! The offer is valid for a limited time!\n\n📲 For details and registration 👉 Yandex Plus\n\nEnjoy free services for 90 days! 🌟\n\n‼️ To subscribe, click on the “Subscribe ✅” button below\n\n@yandex_telegram`,
    },
  },
  "🎁 Yandex Market": {
    image: "./yandex_market1.jpg",
    link1: {
      uz: "https://go-yandex.prfl.me/promokod.chegirmalar/dc59xo",
      ru: "https://go-yandex.prfl.me/promokod.chegirmalar/dc59xo",
      en: "https://go-yandex.prfl.me/promokod.chegirmalar/dc59xo",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/352",
      ru: "https://t.me/yandeks_telegram/352",
      en: "https://t.me/yandeks_telegram/352",
    },
    promo: {
      uz: `🩷 Yandex Market\n\nUMURU - 90 000 so'm chegirma 80 000 so'mdan boshlangan birinchi uchta buyurtmaga (har bir buyurtmaga 30 000 so'mdan)\n\n AN8QZGSXGV-AF - 55%lik chegirma birinchi buyurtmaga, 80 000 so'mdan ortiq emas. Toshkent shahrida amal qiladi.`,
      ru: `🩷 Yandex Market\n\nUMURU - скидка 90 000 сум на первые три заказа от 80 000 сум (30 000 сум за заказ)\n\n AN8QZGSXGV-AF - скидка 55% на первый заказ, не превышающий 80 000 сум. Действует в Ташкенте.`,
      en: `🩷 Yandex Market\n\nUMURU - 90,000 soums discount for the first three orders starting from 80,000 soums (30,000 soums per order)\n\n AN8QZGSXGV-AF - 55% discount for the first order, not exceeding 80,000 soums. Valid in Tashkent.`,
    },
  },
  "🛍️ Yandex Market": {
    image: "./yandex_market.JPG",
    link1: {
      uz: "https://go.yandex",
      ru: "https://go.yandex",
      en: "https://go.yandex",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/345",
      ru: "https://t.me/yandeks_telegram/345",
      en: "https://t.me/yandeks_telegram/345",
    },
    promo: {
      uz: `✅ Promokod: - AYCZG5MLN-AF -50% Chegirma istalgan xaridlar uchun (Maximal 80,000 soʻm)\n\n@yandeks_telegram`,
      ru: `✅ Промокод: - AYCZG5MLN-AF -50% Скидка на любые покупки (Максимум 80 000 сумов)\n\n@yandex_telegram`,
      en: `✅ Promo code: - AYCZG5MLN-AF -50% Discount for any purchases (Maximum 80,000 soums)\n\n@yandex_telegram`,
    },
  },
  "🍕 Apex Pizza": {
    image: "./apexpizza.png",
    link1: {
      uz: "https://t.me/yandeks_telegram/325",
      ru: "https://t.me/yandeks_telegram/325",
      en: "https://t.me/yandeks_telegram/325",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    promo: {
      uz: `✅ APEX PIZZA PROMOKODLAR\n\n🔰Promokod:chegirma30\n\nPromokod ilovadan - dostavka xizmatida - savatdagi istalgan pizza uchun -30% chegirma qilib beradi. Faqat pizza uchun!\n\nDostavka: Bepul\n\nPromokod: Aktivatsiyasi 2 marta`,
      ru: `✅ ПРОМОКОДЫ ПИЦЦЫ APEX\n\n🔰Промокод:chegirma30\n\nПромокод дает вам скидку -30% на любую пиццу в корзине - в службе доставки - из приложения. Только для пиццы!\n\nДоставка: Бесплатно\n\nПромокод: Активировать 2 раза`,
      en: `✅ APEX PIZZA PROMO CODES\n\n🔰Promo code:chegirma30\n\nThe promo code gives you a -30% discount on any pizza in the cart from the app - in the delivery service. Only for pizza!\n\nDelivery: Free\n\nPromo code: Activation 2 times`,
    },
  },
  "🛴 Jet": {
    image: "./jet.png",
    link1: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram/309",
      ru: "https://t.me/yandeks_telegram/309",
      en: "https://t.me/yandeks_telegram/309",
    },
    promo: {
      uz: `💙 Jet Promokod: MZLKUT \n\n- 2 TA Somakat safarlari uchun -50% chegirma`,
      ru: `💙 Промокод Jet: MZLKUT \n\n- скидка 50% на 2 поездки в Сомакат`,
      en: `💙 Jet Promo Code: MZLKUT \n\n- 50% discount for 2 Somakat trips`,
    },
  },
  "🚴‍♂️ Wolt": {
    image: "./wolt.png",
    link1: {
      uz: "https://t.me/yandeks_telegram/308",
      ru: "https://t.me/yandeks_telegram/308",
      en: "https://t.me/yandeks_telegram/308",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    promo: {
      uz: `✅ Promokod: FSZ39KA ✅\n\nWolt ilovasi uchun -45,000 so'm chegirma\n\nUshbu imkoniyat ayni Yandex Eatsdan foydalanboʻganlar uchun🤩`,
      ru: `✅ Промокод: FSZ39KA ✅\n\n-45 000 сумов скидка на приложение Wolt\n\nЭта возможность для тех, кто пользуется Яндекс Едит🤩`,
      en: `✅ Promo code: FSZ39KA ✅\n\n-45,000 soums discount for the Wolt app\n\nThis opportunity is for those who use Yandex Eats🤩`,
    },
  },
  "📭 Umumiy ma'lumotlar": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
    link2: {
      uz: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      ru: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      en: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
    },
    promo: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
  },
  "📭 Общая информация": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
    link2: {
      uz: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      ru: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      en: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
    },
    promo: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
  },
  "📭 General info": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
    link2: {
      uz: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      ru: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
      en: "https://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr",
    },
    promo: {
      uz: "https://bonuslar.uz",
      ru: "https://bonuslar.uz",
      en: "https://bonuslar.uz",
    },
  },
  "☎️ Yordam": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    promo: {
      uz: `😊 Assalomu alaykum, Hurmatli mijoz!\n\n‼️ Faqat Promkod bo'yicha muammolaringiz va Ilovani ishlatishda yordam olish bo'yicha bog'laning.\n\n📞 +998-90-783-83-00`,
      ru: `😊 Assalomu alaykum, Hurmatli mijoz!\n\n‼️ Faqat Promkod bo'yicha muammolaringiz va Ilovani ishlatishda yordam olish bo'yicha bog'laning.\n\n📞 +998-90-783-83-00`,
      en: `😊 Assalomu alaykum, Hurmatli mijoz!\n\n‼️ Faqat Promkod bo'yicha muammolaringiz va Ilovani ishlatishda yordam olish bo'yicha bog'laning.\n\n📞 +998-90-783-83-00`,
    },
  },
  "☎️ Помощь": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    promo: {
      uz: `😊 Здравствуйте, уважаемый клиент!\n\n‼️ Пожалуйста, обращайтесь к нам только по вопросам, связанным с Promkod, и за помощью в использовании приложения.\n\n📞 +998-90-783-83-00`,
      ru: `😊 Здравствуйте, уважаемый клиент!\n\n‼️ Пожалуйста, обращайтесь к нам только по вопросам, связанным с Promkod, и за помощью в использовании приложения.\n\n📞 +998-90-783-83-00`,
      en: `😊 Здравствуйте, уважаемый клиент!\n\n‼️ Пожалуйста, обращайтесь к нам только по вопросам, связанным с Promkod, и за помощью в использовании приложения.\n\n📞 +998-90-783-83-00`,
    },
  },
  "☎️ Help": {
    image: "./umumiy_malumotlar.JPG",
    link1: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    link2: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    promo: {
      uz: `😊 Hello, Dear Customer!\n\n‼️ Please contact us only for your Promkod issues and assistance in using the App.\n\n📞 +998-90-783-83-00`,
      ru: `😊 Hello, Dear Customer!\n\n‼️ Please contact us only for your Promkod issues and assistance in using the App.\n\n📞 +998-90-783-83-00`,
      en: `😊 Hello, Dear Customer!\n\n‼️ Please contact us only for your Promkod issues and assistance in using the App.\n\n📞 +998-90-783-83-00`,
    },
  },
  "💬 Chat {Muhokama}": {
    image: "./chat_muhokama.jpg",
    link1: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    link2: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    promo: {
      uz: `💬 Uzum Market va boshqa ilovalar uchun sizga qanday mahsulotlar uchun chegirmalar qiziqitiradi shu haqida muhokama guruhimiz!`,
      ru: `💬 Uzum Market va boshqa ilovalar uchun sizga qanday mahsulotlar uchun chegirmalar qiziqitiradi shu haqida muhokama guruhimiz!`,
      en: `💬 Uzum Market va boshqa ilovalar uchun sizga qanday mahsulotlar uchun chegirmalar qiziqitiradi shu haqida muhokama guruhimiz!`,
    },
  },
  "💬 Чат {Обсуждение}": {
    image: "./chat_muhokama.jpg",
    link1: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    link2: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    promo: {
      uz: `💬 Наша группа для обсуждения Uzum Market и других приложений расскажет, какие скидки вас интересуют!`,
      ru: `💬 Наша группа для обсуждения Uzum Market и других приложений расскажет, какие скидки вас интересуют!`,
      en: `💬 Наша группа для обсуждения Uzum Market и других приложений расскажет, какие скидки вас интересуют!`,
    },
  },
  "💬 Chat {Discussion}": {
    image: "./chat_muhokama.jpg",
    link1: {
      uz: "https://t.me/yandeks_telegram",
      ru: "https://t.me/yandeks_telegram",
      en: "https://t.me/yandeks_telegram",
    },
    link2: {
      uz: "https://t.me/tuit_01",
      ru: "https://t.me/tuit_01",
      en: "https://t.me/tuit_01",
    },
    promo: {
      uz: `💬 Our discussion group for Uzum Market and other applications tells you what discounts you are interested in!`,
      ru: `💬 Our discussion group for Uzum Market and other applications tells you what discounts you are interested in!`,
      en: `💬 Our discussion group for Uzum Market and other applications tells you what discounts you are interested in!`,
    },
  },
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Tilni tanlang / Выберите язык / Choose a language", {
    reply_markup: {
      keyboard: [["O'zbekcha", "Русский", "English"]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// Har bir userning tanlagan tilini saqlash
const userLanguages = {};
bot.onText(/\/options/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Tilni tanlang / Выберите язык / Choose a language", {
    reply_markup: {
      keyboard: [["O'zbekcha", "Русский", "English"]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// help komandasi
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Botdan foydalanish bo'yicha yordam:\n1. /start - Botni ishga tushirish.\n2. /options - Tilni tanlash.\n3. /help - Yordam xabarini olish.\n\nAgar savollaringiz bo‘lsa, administrator bilan bog‘laning. 😊\n@tuit_01\n\nBarcha akkauntlarim:\nhttps://promokodlar.netlify.app\n\nInstagram:\nhttps://www.instagram.com/yandexgo.promokod?igsh=MWE1MjB3aThpaGI1dA%3D%3D&utm_source=qr\n\nYordam va muhokamalar uchun kanalimiz:\n@yandeks_telegram`
  );
});

// Xabar qabul qilish
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Tilni tanlash
  if (["O'zbekcha", "Русский", "English"].includes(text)) {
    let lang = "uz";
    if (text === "Русский") lang = "ru";
    else if (text === "English") lang = "en";
    userLanguages[chatId] = lang;
    const translations = {
      uz: {
        info: "📭 Umumiy ma'lumotlar",
        help: "☎️ Yordam",
        chat: "💬 Chat {Muhokama}",
      },
      ru: {
        info: "📭 Общая информация",
        help: "☎️ Помощь",
        chat: "💬 Чат {Обсуждение}",
      },
      en: {
        info: "📭 General info",
        help: "☎️ Help",
        chat: "💬 Chat {Discussion}",
      },
    };

    const t = translations[lang];

    const serviceButtons = [
      ["🌭 Yandex Eats", "🍔 Uzum Tezkor"],
      ["🍕 Bellissimo Pizza", "🛸 Exprees24"],
      ["🥦 Yandex Lavka", "🚀 Oqtepa Lavash Bot"],
      ["🎧 Yandex Plus", "🎁 Yandex Market"],
      ["🛍️ Yandex Market", "🍕 Apex Pizza"],
      ["🛴 Jet", "🚴‍♂️ Wolt"],
      [t.info, t.help],
      [t.chat],
    ];

    const prompt = {
      uz: "Xizmatni tanlang:",
      ru: "Выберите сервис:",
      en: "Choose a service:",
    };

    bot.sendMessage(chatId, prompt[lang], {
      reply_markup: {
        keyboard: serviceButtons,
        resize_keyboard: true,
      },
    });
    return;
  }

  // Xizmat tanlandi
  if (services[text]) {
    const lang = userLanguages[chatId] || "uz";
    const service = services[text];

    const captionTemplates = {
      uz: `${service.promo.uz}`,
      ru: `${service.promo.ru}`,
      en: `${service.promo.en}`,
    };

    const caption = captionTemplates[lang];
    const link1 = service.link1[lang];
    const link2 = service.link2[lang];
    const photoPath = service.image;

    if (fs.existsSync(photoPath)) {
      bot.sendPhoto(chatId, fs.createReadStream(photoPath), {
        caption,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text:
                  lang === "uz"
                    ? "🛍️ Ilovaga o'tish"
                    : lang === "ru"
                    ? "🛍️ Перейти к приложению"
                    : "🛍️ Go to the app",
                url: link1,
              },
              {
                text:
                  lang === "uz"
                    ? "🎞 Qo'llanma"
                    : lang === "ru"
                    ? "🎞 Руководство"
                    : "🎞 Manual",
                url: link2,
              },
            ],
          ],
        },
      });
    } else {
      bot.sendMessage(chatId, "Rasm topilmadi.");
    }
  }
});
