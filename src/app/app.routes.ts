import { Routes } from '@angular/router';
import { LanguageSelectionComponent } from './components/language-selection/language-selection.component';
import { QuestionScreenComponent } from './components/question-screen/question-screen.component';

export const routes: Routes = [
  { path: '', component: LanguageSelectionComponent },
  { path: 'questions', component: QuestionScreenComponent },
  { path: '**', redirectTo: '' }
]; 