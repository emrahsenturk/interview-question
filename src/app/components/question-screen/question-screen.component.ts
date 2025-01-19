import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class QuestionScreenComponent implements OnInit, OnDestroy {
  private questionService = inject(QuestionService);
  private router = inject(Router);

  currentQuestion: any;
  currentQuestionIndex: number = 0;
  totalQuestions: number = 5; // Toplam 5 soru
  remainingTime: number = 60; // 1 dakika
  timerInterval: any;
  questions: any[] = [];

  ngOnInit() {
    this.questions = this.questionService.getFilteredQuestions();
    this.remainingTime = this.questionService.getSelectedTime();
    this.loadQuestion();
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  loadQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.finishInterview();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.resetTimer();
      this.loadQuestion();
    } else {
      this.finishInterview();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.resetTimer();
      this.loadQuestion();
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.nextQuestion();
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.remainingTime = this.questionService.getSelectedTime();
    this.startTimer();
  }

  finishInterview() {
    clearInterval(this.timerInterval);
    this.router.navigate(['/']);
  }

  goHome() {
    if (confirm('Mülakatı sonlandırmak istediğinize emin misiniz?')) {
      clearInterval(this.timerInterval);
      this.router.navigate(['/']);
    }
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
} 