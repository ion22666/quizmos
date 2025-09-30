type Question =
	| {
			/**
			 * Întrebare cu o singură opțiune corectă sau mai multe (tip test clasic)
			 * - "one-option" → un singur răspuns corect
			 * - "multi-option" → mai multe răspunsuri corecte
			 * - "true-false" → răspuns adevărat/fals
			 */
			type: "one-option" | "multi-option" | "true-false";
			/** Textul întrebării */
			text: string;
			/** Lista de opțiuni disponibile */
			options: string[];
			/** Răspunsul corect (sau răspunsurile) */
			answer: string | string[];
	  }
	| {
			/**
			 * Întrebare de tip completare spații
			 * Exemplu: "Capitala Franței este _"
			 */
			type: "fill-blank";
			/** Textul întrebării, poate conține "_" pentru spațiu de completat */
			text: string;
			/** Răspunsul corect sau variante acceptate */
			answer: string | string[];
	  }
	| {
			/**
			 * Întrebare de tip potrivire (matching)
			 * Exemplu: asociezi termeni din coloana stângă cu definiții din coloana dreaptă
			 */
			type: "matching";
			/** Textul întrebării */
			text: string;
			/** Lista de perechi de potrivit */
			pairs: { left: string; right: string }[];
	  }
	| {
			/**
			 * Întrebare de tip ordonare (ordering)
			 * Exemplu: aranjezi pașii unui proces în ordinea corectă
			 */
			type: "ordering";
			/** Textul întrebării */
			text: string;
			/** Elementele de ordonat */
			items: string[];
			/** Ordinea corectă */
			answer: string[];
	  }
	| {
			/**
			 * Întrebare bazată pe media (imagine, video, audio)
			 * Exemplu: identifică obiectul din imagine sau răspunde după clip audio
			 */
			type: "media";
			/** Textul întrebării */
			text: string;
			/** URL-ul media asociat întrebării */
			mediaUrl: string;
			/** Opțiuni disponibile */
			options: string[];
			/** Răspuns corect sau corecte */
			answer: string | string[];
	  };
