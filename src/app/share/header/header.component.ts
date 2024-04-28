import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/onboarding/auth.service';
import { CommonModule } from '@angular/common';
import { io } from 'socket.io-client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
constructor(private authService:AuthService, private router:Router,public dialog: MatDialog,
  ){}
isAuthenticated:boolean = false;
ngOnInit(){
   this.isAuthenticated = this.authService.isAuthenticated;
   this.authService.authStatusListner.subscribe(userstatus =>{
    this.isAuthenticated = userstatus
   })
}

logout(){
  this.authService.logout();
}
assessment(){
  this.router.navigate(['/pages/assessment'])
}
contactUs(){
this.openDialog();
}

openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog,
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });

}
}


@Component({
   selector: 'dialog-content-example-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, FormsModule],
})
export class DialogContentExampleDialog implements OnInit{
constructor(){
  console.log("hit")
}
users:any = [];
socket:any;
username: any = '';
message: any = '';
messages: any[] = [];
submit(){
  // alert("hii")
}
ngOnInit(): void {
  this.users = ['Aman Kumar','Jyoti Singh', 'Rohan Kumar', 'kshama Singh','Kartik Singh', 'Ankita Rana', 'Aanshi sachan'];
  this.socket = io('http://localhost:3100');

  // Prompt the user for a username
  this.username = prompt('Enter your username');

  // Register the username with the server
  this.socket.emit('register', this.username);

  this.socket.on('chat message', (msg:any) => {
      // Handle incoming messages
      this.messages.push(msg);
  });
}
sendMessage(message:any) {
  this.socket.emit('chat message', message);
  this.message = '';
  
}
}