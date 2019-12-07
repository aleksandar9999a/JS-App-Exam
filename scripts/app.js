import { loadHome } from './controllers/homeController.js';

const partials = {
    nav: 'components/common/nav.hbs',
    footer: 'components/common/footer.hbs'
};

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', loadHome)
})

app.run();