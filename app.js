{
  "name": "Gojo-Satoru",
  "description": "whatsapp md bot build with nodejs",
  "repository": "https://github.com/dominator454/Gojo-Satoru",
  "logo": "https://telegra.ph/file/4c2c0174e86ac3bac2ba8.jpg",
  "keywords": ["nodejs", "bot", "whatsapp bot", "whatsapp automation", "multi device"],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"
    },
    {
            "url": "https://github.com/yespark/heroku-imagemagick-buildpack"
        },
    {
      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"
    }
  ],
   "formation": {
        "worker": {
            "quantity": 1,
            "size": "free"
        }
    }
}
