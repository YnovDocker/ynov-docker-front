/**
 * Created by Antoine on 07/04/2017.
 */
export class ChangePasswordObject {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;

  constructor(){
    this.oldPassword = "";
    this.newPassword = "";
    this.confirmNewPassword = "";
  }
}