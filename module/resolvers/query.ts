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


const solvers = {
    findAll: async () => {
        var dat: Array<Document>;
        await DatosPersonales.find((err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findAllNot: async () => {
        var dat: Array<Document>;
        await Notificaciones.find((err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOnePersonData: async (_, { ci, number }) => {
        var dat: Document;
        await DatosPersonales.findOne({identificacion: {ci: ci, number: number}}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneDireccionContacto: async (_, { personID }) => {
        var dat: Document;
        await DireccionContacto.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneContactoEmergencia: async (_, { personID }) => {
        var dat: Document;
        await ContactoEmergencia.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneConyuge: async (_, { personID }) => {
        var dat: Document;
        await Conyuge.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneBienes: async (_, { personID }) => {
        var dat: Document;
        await Bienes.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneInfoFamiliar: async (_, { personID }) => {
        var dat: Document;
        await InfoFamiliar.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneInfoBancaria: async (_, { personID }) => {
        var dat: Document;
        await InfoBancaria.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneFormacion: async (_, { personID }) => {
        var dat: Document;
        await Formacion.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneCapacitacion: async (_, { personID }) => {
        var dat: Document;
        await Capasitacion.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOnePublicaciones: async(_, { personID }) => {
        var dat: Document;
        await Publicaciones.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneExperiencia: async (_, { personID }) => {
        var dat: Document;
        await Experiencia.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findOneTrabajo: async (_, { personID }) => {
        var dat: Document;
        await Trabajo.findOne({datos_personales_id: personID}, (err: any, res: Document) =>{
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findSomeInfoFamiliar: async (_, { personID }) => {
        var dat: Array<Document>;
        await InfoFamiliar.find({datos_personales_id: personID}, (err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findSomeFormacion: async (_, { personID }) => {
        var dat: Array<Document>;
        await Formacion.find({datos_personales_id: personID}, (err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findSomeCapacitacion: async (_, { personID }) => {
        var dat: Array<Document>;
        await Capasitacion.find({datos_personales_id: personID}, (err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findSomePublicaciones: async (_, { personID }) => {
        var dat: Array<Document>;
        await Publicaciones.find({datos_personales_id: personID}, (err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    },
    findSomeExperiencia: async (_, { personID }) => {
        var dat: Array<Document>;
        await Experiencia.find({datos_personales_id: personID}, (err: any, res: Array<Document>) => {
            if ( err ) console.error(err);
            dat = res;
        });
        return dat;
    }
};
export default solvers;