export class QuestionAnswer {
    question: string;
    answer: string;
    showing: boolean = $state(false);

    constructor(question: string, answer: string, showing: boolean) {
        this.question = question;
        this.answer = answer;
        this.showing = showing;
    }
}