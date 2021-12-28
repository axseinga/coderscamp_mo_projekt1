import { toggleButtonText } from './toggleButtonText';

export const toggleGameRulesVisibility = () => {
  const modeRulesContainer = document.querySelector('.mode-rules-container');
  modeRulesContainer.classList.toggle('cover');
  toggleButtonText(modeRulesContainer.classList);
}