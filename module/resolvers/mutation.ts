import { 
    DatosPersonales, 
    DireccionContacto, 
    ContactoEmergencia,
    Conyuge,
    Bienes,
    InfoFamiliar,
    InfoBancaria,
    Formacion,
    Capasitacion,
    Publicaciones,
    Experiencia,
    Trabajo,
    Notificaciones
} from './models';
import { Document } from 'mongoose';
import * as webPush from 'web-push';



//set vapid
/**
 * 
 * @constant VAPID_PUBLIC string con clave para enviar notificaciones
 */
const VAPID_PUBLIC = 'BNOJyTgwrEwK9lbetRcougxkRgLpPs1DX0YCfA5ZzXu4z9p_Et5EnvMja7MGfCqyFCY4FnFnJVICM4bMUcnrxWg';

/**
 * 
 * @constant PRIVATE_VAPID string con clave privada para enviar notificaciones
 */
const PRIVATE_VAPID = '_kRzHiscHBIGftfA7IehH9EA3RvBl8SBYhXBAMz6GrI';

/**
 * 
 * Servicio para enviar las notificaciones y establece las claves
 */
webPush.setVapidDetails('mailto:julio@localhost:4000', VAPID_PUBLIC, PRIVATE_VAPID);

/**
 * objeto json con las funciones resolvers para graphql y la administracion a base de datos
 * @constant solvers
 */
const solvers =  {

    /**
     * 
     * guarda los datos de una persona registrada 
     * @function pushOnePersonData
     * @async
     * @param _
     * @param data obtiene la informacion enviada del cliente
     */
    pushOnePersonData: async (_, { data }) => {
        data.nacimiento = new Date(data.nacimiento);
        var Person = new DatosPersonales(data);
        var ret: any;
        await Person.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.log(product._id);
            ret = product._id;
        });
        return ret;
    },

    /**
     * 
     * guarda la direccion de la persona registrada
     * @function pushOneDireccionContacto
     * @async
     * @param _
     * @param data datos de direccion obtenida desde el cliente
     */
    pushOneDireccionContacto: async (_, { data }) => {
        var DirConct = new DireccionContacto(data);
        var ret: String = '';
        await DirConct.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'DireccionContacto saved';
        });
        return ret;
    },

    /**
     * 
     * guarda en contacto de emergencia
     * @function pushOneContactoEmergencia
     * @async
     * @param _
     * @param data dato de contacto de emergencia obtenido desde el cliente
     */
    pushOneContactoEmergencia: async (_, { data }) => {
        var ConctEm = new ContactoEmergencia(data);
        var ret: String = '';
        await ConctEm.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'ContactoEmergencia saved';
        });
        return ret;
    },

    /**
     * 
     * guarda el conyuge en caso de tenerlo
     * @function pushOneConyuge
     * @async 
     * @param _
     * @param data dato de conyuje obtenido del cliente
     */
    pushOneConyuge: async (_, { data }) => {
        data.nacimiento = new Date(data.nacimiento);
        var Conyug = new Conyuge(data);
        var ret: String = '';
        await Conyug.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Conyuge saved';
        });
        return ret;
    },

    /**
     * 
     * guarda los bienes que registra el usuario
     * @function pushOneBienes
     * @async
     * 
     * @param _
     * @param data datos de los bienes obtenidos del cliente
     */
    pushOneBienes: async (_, { data }) => {
        data.fecha = new Date(data.fecha);
        var Biene = new Bienes(data);
        var ret: String = '';
        await Biene.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Bienes saved';
        });
        return ret;
    },

    /**
     * 
     * guarda la informacion de los familiares 
     * @function pushOneInfoFamiliar
     * @async
     * @param _
     * @param data datos de los familiares obtenidos del cliente
     */
    pushOneInfoFamiliar: async (_, { data }) => {
        data.nacimiento = new Date(data.nacimiento);
        var InfoFam = new InfoFamiliar(data);
        var ret: String = '';
        await InfoFam.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'InfoFamiliar saved';
        });
        return ret;
    },

    /**
     * 
     * guarda la informacion bancaria
     * @function pushOneInfoBancaria
     * @async
     * @param _
     * @param data datos de la informacion bancaria enviados desde el cliente
     */
    pushOneInfoBancaria: async (_, { data }) => {
        var Banco = new InfoBancaria(data);
        var ret: String = '';
        await Banco.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'InfoBancaria saved';
        });
        return ret;
    },

    /**
     * 
     * guarda los datos de la formacion de la persona
     * @function pushOneFormacion
     * @async
     * @param _
     * @param data datos de la formacion enviados desde el cliente
     */
    pushOneFormacion: async (_, { data }) => {
        data.registro = new Date(data.registro);
        data.graduacion = new Date(data.graduacion);
        var Form = new Formacion(data);
        var ret: String = '';
        await Form.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Formacion saved';
        });
        return ret;
    },

    /**
     * 
     * guarda los datos de capasitaciones que ha tenido
     * @function pushOneCapacitacion
     * @async
     * @param _
     * @param data datos obtenidos de las capasitaciones desde el cliente
     */
    pushOneCapacitacion: async (_, { data }) => {
        data.fecha_inicio = new Date(data.fecha_inicio);
        data.fecha_fin = new Date(data.fecha_fin);
        var Cap = new Capasitacion(data);
        var ret: String = '';
        await Cap.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Capacitacion saved';
        });
        return ret;
    },

    /**
     * 
     * guarda los datos de las publicaciones
     * @function pushOnePublicaciones
     * @async
     * @param _
     * @param data datos sobre las publicaciones obtenidas desde el cliente
     */
    pushOnePublicaciones: async (_, { data }) => {
        data.fecha = new Date(data.fecha);
        var Publicacion = new Publicaciones(data);
        var ret: String = '';
        await Publicacion.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Publicaciones saved';
        });
        return ret;
    },
    pushOneExperiencia: async (_, { data }) => {
        data.fecha_ingreso = new Date(data.fecha_ingreso);
        data.fecha_salida = new Date(data.fecha_salida);
        var Exp = new Experiencia(data);
        var ret: String = '';
        await Exp.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Experiencia saved';
        });
        return ret;
    },
    pushOneTrabajo: async (_, { data }) => {
        var Trab = new Trabajo(data);
        var ret: String = '';
        await Trab.save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'Trabajo saved';
        });
        return ret;
    },
    pushSomeInfoFamiliar: async (_, { data }) => {
        for (let i = 0; i < data.length; i++) {
            data[i].nacimiento = new Date(data[i].nacimiento);
        }
        var ret: String = '';
        await InfoFamiliar.insertMany(data, (error: any, doc: Document) => {
            if ( error ) console.error(error);
            console.info(doc);
            ret = 'InfoFamiliar[] saved';
        });
        return ret;
    },
    pushSomeFormacion: async (_, { data }) => {
        for (let i = 0; i < data.length; i++) {
            data[i].registro = new Date(data[i].registro);
            data[i].graduacion = new Date(data[i].graduacion);
        }
        var ret: String = '';
        await Formacion.insertMany(data, (error: any, doc: Document) => {
            if ( error ) console.error(error);
            console.info(doc);
            ret = 'Formacion[] saved';
        });
        return ret;
    },
    pushSomeCapacitacion: async (_, { data }) => {
        for (let i = 0; i < data.length; i++) {
            data[i].fecha_inicio = new Date(data[i].fecha_inicio);
            data[i].fecha_fin = new Date(data[i].fecha_fin);
        }
        var ret: String = '';
        await Capasitacion.insertMany(data, (error: any, doc: Document) => {
            if ( error ) console.error(error);
            console.info(doc);
            ret = 'Capacitacion[] saved';
        });
        return ret;
    },
    pushSomePublicaciones: async (_, { data }) => {
        for (let i = 0; i < data.length; i++) {
            data[i].fecha = new Date(data[i].fecha);
        }
        var ret: String = '';
        await Publicaciones.insertMany(data, (error: any, doc: Document) => {
            if ( error ) console.error(error);
            console.info(doc);
            ret = 'Publicaciones[] saved';
        });
        return ret;
    },
    pushSomeExperiencia: async (_, { data }) => {
        for (let i = 0; i < data.length; i++) {
            data[i].fecha_ingreso = new Date(data[i].fecha_ingreso);
            data[i].fecha_salida = new Date(data[i].fecha_salida);
        }
        var ret: String = '';
        await Experiencia.insertMany(data, (error: any, doc: Document) => {
            if ( error ) console.error(error);
            console.info(doc);
            ret = 'Experiencia[] saved';
        });
        return ret;
    },
    deleteOne: async (_, { personID }) => {
        DireccionContacto.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        ContactoEmergencia.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Conyuge.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        InfoFamiliar.deleteMany({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        InfoBancaria.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Trabajo.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Formacion.deleteMany({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Capasitacion.deleteMany({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Publicaciones.deleteMany({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        Experiencia.deleteMany({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
        DatosPersonales.deleteOne({datos_personales_id: personID}, (err: any) => {
            if ( err ) console.error(err);
        });
    },
    setNotificacion: async (_, { data }) => {
        var ret: String = '';
        await new Notificaciones(data).save((err: any, product: Document) => {
            if ( err ) console.error(err);
            console.info(product);
            ret = 'user notification saved';
        });
        return ret;
    },
    sendNotificacion: (_, { title, message, user }) => {
        const notificationPayload = {
            notification: {
                title: title,
                body: message,
                icon: 'assets/icons/icon-128x128.png',
            },
        }
        webPush.sendNotification(user, JSON.stringify(notificationPayload));
        console.log('Notificacion enviada');
        return 'Notificacion enviada';
    },
    updatePersonData: async (_, { data, id }) => {
        var ret = '';
        let res = await DatosPersonales.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateDireccionContacto: async (_, { data, id }) => {
        var ret = '';
        let res = await DireccionContacto.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateContactoEmergencia: async (_, { data, id }) => {
        var ret = '';
        let res = await ContactoEmergencia.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateConyuge: async (_, { data, id }) => {
        var ret = '';
        let res = await Conyuge.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateBienes: async (_, { data, id }) => {
        var ret = '';
        let res = await Bienes.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateInfoFamiliar: async (_, { data, id }) => {
        var ret = '';
        let res = await InfoFamiliar.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateInfoBancaria: async (_, { data, id }) => {
        var ret = '';
        let res = await InfoBancaria.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateFormacion: async (_, { data, id }) => {
        var ret = '';
        let res = await Formacion.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateCapacitacion: async (_, { data, id }) => {
        var ret = '';
        let res = await Capasitacion.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updatePublicaciones: async (_, { data, id }) => {
        var ret = '';
        let res = await Publicaciones.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    },
    updateExperiencia: async (_, { data, id }) => {
        var ret = '';
        let res = await Experiencia.replaceOne({datos_personales_id: id}, data, (err, raw) => {
            if (err) console.error(err);
            ret = 'actualizado';
        });
        console.log(res);
        return ret;
    }
}

export default solvers;