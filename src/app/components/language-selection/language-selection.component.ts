import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { CommonModule } from '@angular/common';
import { Difficulty } from '../../services/question.service';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LanguageSelectionComponent {
  languages: string[] = [];
  difficulties: Difficulty[] = [];
  times: number[] = [];
  
  selectedLanguage: string | null = null;
  selectedDifficulty: Difficulty | null = null;
  selectedTime: number | null = null;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {
    this.languages = this.questionService.getAvailableLanguages();
    this.difficulties = this.questionService.getAvailableDifficulties();
    this.times = this.questionService.getAvailableTimes();
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.questionService.setLanguage(language);
  }

  selectDifficulty(difficulty: Difficulty) {
    this.selectedDifficulty = difficulty;
    this.questionService.setDifficulty(difficulty);
  }

  selectTime(time: number) {
    this.selectedTime = time;
    this.questionService.setTime(time);
  }

  canStartInterview(): boolean {
    return this.selectedLanguage !== null && 
           this.selectedDifficulty !== null && 
           this.selectedTime !== null;
  }

  startInterview() {
    if (this.canStartInterview()) {
      this.router.navigate(['/questions']);
    }
  }

  formatTime(seconds: number): string {
    return `${seconds / 60} Dakika`;
  }
} 