/**
 * Tipurile de quiz-uri disponibile
 */
export enum QuizTypes {
	/** Întrebări de cultură generală / subiect fix */
	Trivia = "trivia",
	/** Rezultat bazat pe răspunsuri (tip MBTI, preferințe etc.) */
	Personality = "personality",
	/** Test clasic cu scor și răspunsuri corecte */
	Assessment = "assessment",
	/** Colectează opinii, fără corect/greșit */
	Survey = "survey",
	/** Include puncte, timp, leaderboard, nivele */
	Gamified = "gamified",
	/** Întrebările se schimbă în funcție de răspunsuri */
	Adaptive = "adaptive"
}

type Quiz = {
	/** tipul quiz-ului */
	type: QuizTypes;
	dificulty: "easy" | "normal" | "hard";
	topic: "history" | "science" | "math" | "geography";
	questions: {
		type: "one-option" | "multi-option";
		text: string;
		options: string[];
		answer: string | string[];
	}[];
};
