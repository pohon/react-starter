# Starter-kit ReactJS Web Project

Fitur:
- ESLint, Babel Stage 3, & Webpack
- Modular Webpack config (ide dari [SurviveJS: Webpack](https://survivejs.com/webpack/))
- SASS & StyleLint
- EditorConfig
- JEST utk unit-test
- Optimasi file gambar: PNG, JPG, SVG, GIF (lewat gulp)
- Express (production server) + minimal SSR
- Heroku-compatible
https://ab-react-starter.herokuapp.com/

## Command

### NPM Scripts

>Kalo pake NPM, ganti "yarn" dgn "npm run"

- Lint JS : `yarn lint:js`
- Lint SCSS : `yarn lint:scss`
- Testing pake Jest: `yarn test`
- Optimasi file gambar: `gulp images:optimise`
- Build client app versi dev (ada sourcemaps) : `yarn build:client:dev`
- Build client app versi production : `yarn build:client:prod`
- Build server app (Express) : `yarn build:server`
- Build semua app (client & server): `yarn build:all:prod` atau `yarn build:all:dev`
- Jalanin webpack dev server: `yarn wd-server`
- Jalanin Express mode auto-start: `yarn server:watch`

### DEPLOY

- bikin dulu app di Heroku: `heroku create <nama-app>`, mis. `heroku create myweb`. 
  Perintah ini otomatis bikin Git repo & nambahin entri `remote` di git config lokal.
- Push ke remote: `git push heroku`
- Untuk deploy ke heroku dari non-master branch: 
    - Bikin branch: `git checkout -b experiment-branch`
    - Bikin app baru, beda dgn yg di master: `heroku create experiment-app` Nama app & branch nggak harus sama.
    - Tambahin entry git remote: `git remote add experiment-app <URL ke Git repo Heroku>`
    - Deploy: `git push experiment-app experiment-branch:master`
    - App bisa diakses di: `https://experiment-app.herokuapp.com`

