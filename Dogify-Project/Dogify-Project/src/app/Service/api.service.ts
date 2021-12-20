import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(public http: HttpClient) { }

  private _apiUrl: string = 'http://localhost/Dogify-Project/API';
  
  tryRegister(data){
    return this.http.post(this._apiUrl + '/Register_user.php',data);
  }
  loginRequest(data){
      return this.http.post(this._apiUrl + '/login.php',data);
  }
  getDetails(user_id){
      return this.http.get(this._apiUrl + '/getPet.php?id='+user_id);
  }
  creatPet(data){
     return this.http.post(this._apiUrl + '/Register_pet.php',data);
  }
  uploadPetimage(formData){
     return this.http.post(this._apiUrl + '/uploads.php',formData);
  }
  displaypet(){
     return this.http.get(this._apiUrl + '/displaypet.php');
  }
  profPet(data){
     return this.http.get(this._apiUrl + '/pet_profile.php?id='+data);
  }
  getUser(data){
        return this.http.get(this._apiUrl + '/getUser.php?id='+data);
  }
  updatePet(data){
    return this.http.post(this._apiUrl + '/update_pet.php', data);
  }
  updateUser(data){
       return this.http.post(this._apiUrl + '/Update_user.php', data);
  }
  getSinglePet(data){
    return this.http.get(this._apiUrl + '/getSinglePet.php?id='+data);
  }

  //message
  getUsermes(data){
    return this.http.get(this._apiUrl + '/user_message.php?id=' + data);
  }
  getReceiver(data){
    return this.http.post(this._apiUrl + '/getReceiver.php',data);
  }
  getSender(data){
    return this.http.get(this._apiUrl + '/getSender.php?id=' + data);
  }
  sendMessage(data){
    return this.http.post(this._apiUrl + '/sendMessage.php',data);
  }
  getUsermessage(data){
    return this.http.get(this._apiUrl + '/user_message_read.php?id=' + data);
  }
  readMessage(data){
  return this.http.post(this._apiUrl + '/read_message.php', data);
  }
  
}
