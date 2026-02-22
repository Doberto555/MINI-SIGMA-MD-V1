require('dotenv').config();

const config = {
    BOT_NAME: process.env.BOT_NAME || 'Mini Sigma V1',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '5544988138425',
    DEV_MODE: process.env.DEV_MODE === 'true',
    MONGODB_URI: process.env.MONGODB_URI,
    PREFIX: '.',
    BOT_FOOTER: '> © Mᴀᴅᴇ ʙʏ Sigma Tech',
    IMAGE_PATH: 'https://files.catbox.moe/7ktevn.jpg',
    WORK_TYPE: "public",
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'true',
    AUTO_RECORDING: 'true',
    AUTO_READ_MESSAGE: 'off',
    ANTI_CALL: "off",

    AUTO_LIKE_EMOJI: ['🖤','🍬','💫','🎈','💚','🎶','❤️','🧫','⚽'],

    GROUP_INVITE_LINK: 'https://chat.whatsapp.com/EhFU7g19rYR6vW30BCKoak?mode=gi_t',

    NEWSLETTER_JID: [
        '120363403408693274@newsletter',
        '120363401051937059@newsletter',
        '120363419474272514@newsletter',
        '120363425413527865@newsletter'
    ],

    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbBulmY0LKZLRooVdU0i',

    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,

    ADMIN_LIST_PATH: './admin.json',

    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
};

module.exports = config;
