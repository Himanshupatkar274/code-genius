import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
export interface HtmlInterview {
  question: string;
  isSelected: boolean;
  firstOption: string;
  secondOption: string;
  thirdOption: string;
  fourthOption: string;
  correctAnswer:string
}
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
  quizForm: FormGroup;
  questions: HtmlInterview[] = [];
  optionArray: any[] = [];
  currentCounter = 0;
  myInterval:any;
  timeCounter = 90 * 60;
  constructor(private fb: FormBuilder, private question: QuestionService) {
    this.quizForm = this.fb.group({
      answer: this.fb.array([]),
    });
    this.myInterval = setInterval(() => {
      this.getCounter();
    }, 1000);
    setTimeout(() => {
      clearInterval(this.myInterval); // Cancel the interval
      alert("Time's up!");
    }, this.timeCounter*1000);
  }
  formatTime:any= '01:30:00';
getCounter(){
  this.timeCounter = this.timeCounter - 1;
  const hours = Math.floor(this.timeCounter / 3600);
  const minutes = Math.floor((this.timeCounter % 3600) / 60);
  const seconds = this.timeCounter % 60;

  // Format the time and update the display
  const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  this.formatTime = formattedTime
}
padZero(value: number): string {
  // Pad single-digit values with a leading zero
  return value < 10 ? `0${value}` : `${value}`;
}

  ngOnInit() {
  
    this.question.invokeAngularQuestion.subscribe((res:any) =>{
      this.questions = res;
      this.optionArray = res.map((element: any) => [element.firstOption, element.secondOption, element.thirdOption, element.fourthOption]);

      // Clear existing controls
      const formArray = this.quizForm.get('answer') as FormArray;
      formArray.clear();

      // Add controls for each question
      res.forEach((question: HtmlInterview) => {
        formArray.push(this.createQuestionControl(question));
      });
    })
  }

  get answers(): FormArray {
    return this.quizForm.get('answer') as FormArray;
  }

  createQuestionControl(question: HtmlInterview): FormGroup {
    return this.fb.group({
      correctOption: question.correctAnswer,
      selectedOption: ['', Validators.required],
      isSelected: false,
      selectedQuestion: question.question
    });
  }
correctAnswerCounter = 0;
wrongAnswerCounter = 0;
  nextQuestion() {
    const selectedAnswer = this.answers.at(this.currentCounter);
    if (selectedAnswer.valid) {
      selectedAnswer.patchValue({ isSelected: true });
      this.currentCounter = Math.min(this.currentCounter + 1, this.questions.length);
    }
    console.log(selectedAnswer.value)
    let updatedSelectedOption = this.getOptionvalues(selectedAnswer.value.selectedOption)
    if(updatedSelectedOption === selectedAnswer.value.correctOption){
      this.correctAnswerCounter++;
      
    }else{
      this.wrongAnswerCounter++;
    }
  }
getOptionvalues(val:any):any{
  if(val === 0){
    return 'A'
  }else if(val === 1){
    return 'B'
  }else if(val ===2){
    return 'C'
  }else if(val === 3){
    return 'D'
  }
}
  previousQuestion() {
    this.currentCounter = Math.max(this.currentCounter - 1, 0);
  }
  showSubmit = false;
  correctAnswerPercentage = 0
  submitForm() {
    // Your form submission logic here
    let totalQuestions = this.questions.length;
    this.correctAnswerPercentage = Math.round((this.correctAnswerCounter / totalQuestions) * 100);
    console.log(this.correctAnswerPercentage);
    this.showSubmit = true;
  }
  value:any
  getOption(event: any, optionIndex: number) {
    const selectedAnswer = this.answers.at(this.currentCounter);
    selectedAnswer.patchValue({ selectedOption: optionIndex });
    this.value = event.value;
  }

  isChecked(optionIndex: number): boolean {
    const selectedAnswer = this.answers.at(this.currentCounter);
    return selectedAnswer ? selectedAnswer.value.selectedOption === optionIndex : false;
  }
}
