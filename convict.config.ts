const convict = require('convict')

export const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['development', 'staging', 'production'],
        default: 'development',
        env: 'PROJECT_ENV',
    },
    port: {
        doc: 'The port to bind.',
        format: Number,
        default: 3000,
        env: 'PORT',
        arg: 'port',
    },
    host: {
        doc: 'Application host.',
        format: String,
        default: 'localhost',
        env: 'HOST',
    },
    db: {
        host: {
            doc: 'Database host name/IP',
            format: '*',
            default: 'mongodb://127.0.0.1:27017',
            env: 'DB_MONGO_HOST',
        },
        name: {
            doc: 'Database name',
            format: String,
            default: '',
            env: 'DB_MONGO_NAME',
        },
        auth: {
            user: {
                doc: 'Database user if any',
                format: String,
                default: '',
                env: 'DB_MONGO_USERNAME'
            },
            password: {
                doc: 'Database password if any',
                format: String,
                default: '',
                env: 'DB_MONGO_PASSWORD'
            }
        },
    },
    baseUrl: {
        doc: 'API base url.',
        format: String,
        default: '',
        env: 'BASE_URL',
        arg: 'base-url',
    },
    basePath: {
        doc: 'API base path.',
        format: String,
        default: '',
    }
});

const env = config.get('env');
config.loadFile('./src/envs/' + env + '.json');

config.validate({ allowed: 'strict' });