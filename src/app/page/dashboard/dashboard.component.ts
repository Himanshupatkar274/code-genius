import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { decrement, increment, reset } from 'src/app/app-store/app.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  count$: Observable<number> | undefined
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    
  }
 ngOnInit(){
  // setInterval(()=>{
    const typewriters = document.querySelectorAll('.typewriter');

    typewriters.forEach((typewriter, index) => {
        const text = String(typewriter.textContent);
        typewriter.innerHTML = '';
  
        let charIndex = 0;
  
        function type() {
            if (charIndex < text.length) {
                typewriter.innerHTML += text.charAt(charIndex);
                charIndex++;
                setInterval(type, 100); // Adjust the typing speed (milliseconds)
            }
        }
      //   function type2() {
      //     if (charIndex > text.length) {
      //         typewriter.innerHTML += text.charAt(charIndex);
      //         charIndex--;
      //         setInterval(type2, 100); // Adjust the typing speed (milliseconds)
      //     }
      // }
        // Start typing after a delay based on the index
        setInterval(type, index * 2000);
 // Adjust the delay between texts (milliseconds)
    });
  // }, 5000)

 }
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  redirect(id:string){
     if(id === 'youtube'){
      window.open('https://www.youtube.com/@hpcodegenius')
    }
    else if(id === 'insta'){
      
      window.open('https://instagram.com/hpcodegenius?igshid=OGQ5ZDc2ODk2ZA==')
    }
    else if(id === 'telegram'){
      window.open('https://www.linkedin.com/')
    }
    }

    UserCardData = [
      { "card_title": "Golden Retriever", "sub_title": "Dog Breed", "image": "../assets/Golden_Retriever_Hund_Dog.jfif", "paraText": "The Golden Retriever is a friendly and intelligent dog breed known for its loyalty and enthusiasm." },
      { "card_title": "Bengal Tiger", "sub_title": "Wild Animal", "image": "../assets/Bengal Tiger.webp", "paraText": "The Bengal Tiger is the most numerous tiger subspecies in Asia and is known for its distinctive coat pattern." },
      { "card_title": "Himalayan Cat", "sub_title": "Cat Breed", "image": "../assets/Himalayan Cat.webp", "paraText": "The Himalayan cat is a breed of long-haired cat similar in appearance to the Persian, but with blue eyes and color points like those of a Siamese." },
      { "card_title": "African Elephant", "sub_title": "Wild Animal", "image": "../assets/African Elephant.webp", "paraText": "The African Elephant is the largest land animal on Earth, known for its massive size and long trunk." },
      { "card_title": "Siamese Cat", "sub_title": "Cat Breed", "image": "../assets/Siamese Cat.webp", "paraText": "The Siamese cat is one of the oldest and most recognizable cat breeds, known for its striking blue almond-shaped eyes and short coat with color points." },
      { "card_title": "Panda Bear", "sub_title": "Wild Animal", "image": "../assets/Panda Bear.webp", "paraText": "The Panda Bear is a bear native to south central China and is easily recognizable by its distinctive black and white coat." },
      { "card_title": "Labrador Retriever", "sub_title": "Dog Breed", "image": "../assets/Labrador Retriever.webp", "paraText": "The Labrador Retriever is one of the most popular dog breeds in the United States, known for its friendly and outgoing nature." },
      { "card_title": "Persian Cat", "sub_title": "Cat Breed", "image": "../assets/Persian Cat.webp", "paraText": "The Persian cat is one of the oldest and most popular cat breeds, known for its long, luxurious fur and sweet temperament." },
      { "card_title": "Lion", "sub_title": "Wild Animal", "image": "../assets/Lion.webp", "paraText": "The lion is a large cat species and a member of the Felidae family, known for its majestic mane and powerful roar." }
  ]

}
