import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Service/api.service';


@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit {
  sender:any;
  r: any;
  reciever: any;
  message: any;
  u_fullname: any;
  user_image: any;
  user_address: any;
  user_email: any;
  user_cn: any;
  password: any;
  senderist: any;
  mes: any;
  image: any;
  rererer: any;
  constructor(private _apiservices:ApiService,private activatedRoute: ActivatedRoute) { 
    this.sender = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.Receiver();
    this.getSender();
  }
  getSender(){
            console.log(this.sender)
            this._apiservices.getSender(this.sender).subscribe((response:any) => {
              console.log("sender",response);
              this.senderist = response;
          },(error) => {
                this._apiservices.getUser(this.sender).subscribe((user:any) => {
                  console.log('error but success',user);
                  this.senderist = user;
              });
        });

  }
  Receiver(){
    this.user();
    let data = {
      sender: this.sender,
      reciever: this.reciever 
    }
        console.log(data);
        this._apiservices.getReceiver(data).subscribe((received:any) => {
      this.r = received;
        console.log('chats',this.r);
      },(error) => {
        console.log("No message yet")
    });

  }
  send(image,receiver){
    this.rererer = receiver;
    this.user();
    if(this.reciever == this.sender){
      let data = {
            content: this.message,
            sender: this.sender,
            reciever: receiver,
            fullname: this.u_fullname,
            image:  image
          }
          console.log(data);
              console.log(receiver);
              this._apiservices.sendMessage(data).subscribe((res:any) => {
                console.log("Message sent",res);
                this.message = '';
            })
    }else{
          let data = {
            content: this.message,
            sender: this.sender,
            reciever: this.reciever,
            fullname: this.u_fullname,
            image:  image
          }
          console.log(data);
              console.log(receiver);
              this._apiservices.sendMessage(data).subscribe((res:any) => {
                console.log("Message sent",res);
                this.message = '';
            })
        }
  }

  ionViewWillEnter(){
    let chatSection = document.getElementById("chat");
    chatSection.scrollTop = chatSection.scrollHeight;
  }

  user(){
    this.reciever = JSON.parse(localStorage.getItem('currentUser')).user_id;
    this.u_fullname	= JSON.parse(localStorage.getItem('currentUser')).user_fullname	;
  }
}
