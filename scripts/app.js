import { loadHome } from './controllers/homeController.js';
import { loadRegisterForm, createUser } from './controllers/registerController.js';
import { loadLoginForm, login } from './controllers/loginController.js';
import { logout } from './controllers/logoutController.js';

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', loadHome)
    this.get('/register', loadRegisterForm)
    this.get('/login', loadLoginForm)
    this.get('/logout', logout)
    

    this.post('/register', createUser)
    this.post('/login', login)
})

app.run();