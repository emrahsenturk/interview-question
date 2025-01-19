import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Difficulty = 'Kolay' | 'Orta' | 'Zor';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private currentQuestionIndex = new BehaviorSubject<number>(0);
  private selectedLanguage = new BehaviorSubject<string>('');
  private selectedDifficulty = new BehaviorSubject<string>('');
  private selectedTime = new BehaviorSubject<number>(60); // Varsayılan 1 dakika (60 saniye)

  readonly availableLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript'];
  readonly availableDifficulties: Difficulty[] = ['Kolay', 'Orta', 'Zor'];
  readonly availableTimes = [60, 120, 180, 300]; // 1, 2, 3, 5 dakika (saniye cinsinden)

  getAvailableTimes(): number[] {
    return this.availableTimes;
  }

  getSelectedTime(): number {
    return this.selectedTime.getValue();
  }

  setTime(seconds: number) {
    this.selectedTime.next(seconds);
  }
} 