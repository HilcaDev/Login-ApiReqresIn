import { SweetAlertOptions } from "sweetalert2";

export const userWarning: SweetAlertOptions = {
  title: 'Advertencia',
  text: "¿Deseas eliminar el usuario?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
};

export const userCreateSuccess: SweetAlertOptions = {
  title: 'Usuario Registrado',
  text: "Usuario creado exitosamente",
  icon: 'success',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
};

