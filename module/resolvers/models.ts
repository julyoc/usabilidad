import { model } from 'mongoose';
import * as schemas from './mongoose_schemas';

export const DatosPersonales = model('datos_personales', schemas.datosPersonales);
export const DireccionContacto = model('direccion_Contacto', schemas.direccionContacto);
export const ContactoEmergencia = model('contacto_emergencia', schemas.contactoEmergencia);
export const Conyuge = model('conyuge', schemas.conyuge_);
export const Bienes = model('bienes', schemas.bienes_);
export const InfoFamiliar = model('info_familiar', schemas.infoFamiliar);
export const InfoBancaria = model('info_Bancaria', schemas.infoBancaria);
export const Formacion = model('formacion', schemas.formacion_);
export const Capasitacion = model('capasitacion', schemas.capacitacion_);
export const Publicaciones = model('publicaciones', schemas.publicaciones_);
export const Experiencia = model('experiencia', schemas.experiencia_);
export const Trabajo = model('trabajo', schemas.trabajo_);
export const Notificaciones = model('notificaciones', schemas.notificaciones_);