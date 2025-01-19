import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.loadQuestion();
    this.remainingTime = this.questionService.getSelectedTime();
    this.startTimer();
  }

  resetTimer() {
    this.remainingTime = this.questionService.getSelectedTime();
  }

  loadQuestion() {
    // Implementation of loadQuestion method
  }

  startTimer() {
    // Implementation of startTimer method
  }

  remainingTime: number;

  // Add any other necessary properties here
} 