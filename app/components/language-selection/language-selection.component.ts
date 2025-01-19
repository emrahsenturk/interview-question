import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LanguageSelectionComponent {
  languages: string[] = [];
  difficulties: string[] = [];
  times: number[] = [];
  
  selectedLanguage: string | null = null;
  selectedDifficulty: string | null = null;
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

  selectDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
    this.questionService.setDifficulty(difficulty);
  }

  selectTime(time: number) {
    this.selectedTime = time;
    this.questionService.setTime(time);
  }

  startInterview() {
    if (this.selectedLanguage && this.selectedDifficulty && this.selectedTime) {
      this.router.navigate(['/questions']);
    }
  }

  formatTime(seconds: number): string {
    return `${seconds / 60} Dakika`;
  }
} 