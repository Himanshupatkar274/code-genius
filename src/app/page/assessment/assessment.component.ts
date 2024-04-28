import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-store/app.selector';
import { angularAssessment, cssAssessment, htmlAssessment, jsAssessment, nodeAssessment } from '../assessment_state/assessment.action';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit{
today:any;
testDeclaration:any = '';
constructor(private router:Router,private store:Store<AppState>) {}
ngOnInit(){
this.today = (new Date()).toISOString().split('T')[0];
}

@HostListener('document:beforeunload', ['$event'])
onBeforeUnload(event: Event) {
  // Check if the navigation is due to a back button click
  alert('Browser back button clicked');
}
htmlTest = false;
cssTest = false;
angular= false;
nodeTest = false;
jsTest = false;
showDeclaration = false;
showCertificate = true;
initialProceed(tag:string){
if(tag === 'html'){
  this.testDeclaration = 'HTML '
  this.htmlTest = true;
  this.cssTest = false;
  this.angular = false;
  this.nodeTest = false;
  this.jsTest = false;
  
}
else if(tag === 'css'){
  this.testDeclaration = 'CSS '
  this.htmlTest = false;
  this.cssTest = true;
  this.angular = false;
  this.nodeTest = false;
  this.jsTest = false;
}
else if(tag === 'angular'){
  this.testDeclaration = 'Angular '
  this.htmlTest = false;
  this.cssTest = false;
  this.angular = true;
  this.nodeTest = false;
  this.jsTest = false;
}
else if(tag === 'node'){
  this.testDeclaration = 'Node.js ';
  this.htmlTest = false;
  this.cssTest = false;
  this.angular = false;
  this.nodeTest = true;
  this.jsTest = false;
}
else if(tag === 'js'){
  this.testDeclaration = 'JavaScript ';
  this.htmlTest = false;
  this.cssTest = false;
  this.angular = false;
  this.nodeTest = false;
  this.jsTest = true;
}
this.showDeclaration = true;
this.showCertificate = false;
}


startTest(testName:any){
alert(testName);
let test = testName.toLowerCase()
this.showDeclaration = false;
if(test.trim() == 'html'){
  this.store.dispatch(htmlAssessment());
}
else if(test.trim()  == 'css'){
  this.store.dispatch(cssAssessment());
}
else if(test.trim()  == 'javascript'){
  this.store.dispatch(jsAssessment());
}
else if(test.trim()  == 'angular'){
  this.store.dispatch(angularAssessment());
}
else if(test.trim()  == 'node.js'){
  this.store.dispatch(nodeAssessment());
}
}

}
