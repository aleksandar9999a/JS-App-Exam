import { loadHome } from './controllers/homeController.js';
import { loadRegisterForm, createUser } from './controllers/registerController.js';

const partials = {
    nav: 'components/common/nav.hbs',
    footer: 'components/common/footer.hbs'
};

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', loadHome)
    this.get('/register', loadRegisterForm)

    this.post('/register', createUser)
})

app.run();