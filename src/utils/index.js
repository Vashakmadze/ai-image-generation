import { surpriseMePrompts } from "../constants/index";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randonPrompt = surpriseMePrompts[randomIndex];
    if(randonPrompt === prompt) return getRandomPrompt(randonPrompt);
    return randonPrompt;
}