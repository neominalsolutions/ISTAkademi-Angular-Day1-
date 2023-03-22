import { Component } from '@angular/core';

export type PersonType = {
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  yearlySallary: number;
  numberOfVote: number;
};

@Component({
  selector: 'app-root', // component htmlden çağırmak için kullanılan element ismi
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // ilk doma basılan sayfa yani App.tsx App.js sayfamız.
  title = 'App1';
  age = 18;
  generationText: string = '';
  person: PersonType = {
    firstname: 'ali', // Ali
    lastname: 'can', // CAN
    dateOfBirth: new Date(), // 10 10 2023 10:30
    yearlySallary: 100345,
    numberOfVote: 15000,
  };

  // yukarıdaki değerleri Built-in Pipes ile Angular tarafından önceden tanımlanmış pipe ile kontrol edebiliyoruz.

  // property

  constructor() {
    if (this.age > 13 && this.age < 22) {
      this.generationText = 'z kuşağı';
    }
  }

  // method
  onClick() {
    // angularda function kavramı yok o yüzden arrow fuction kullanmak yerine method kullanıyoruz aynı c#,java daki gibi

    this.age = 32;
  }

  // const [age,setAge] = useState<number>(18);

  onAgeChange(event: Event) {
    // setAge(event.target.value);
    // useState diye template render eden bir yapı yok
    // property değeri değişince angular property değerinde değişimi algılayıp arayüze direkt olarak yansıtır.
    this.age = Number((event.target as any).value);
  }
}
