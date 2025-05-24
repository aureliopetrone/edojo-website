"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectDescription: "",
    expectedTimeline: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simula l'invio del form
    console.log("Dati inviati:", formData);

    // Qui dovresti implementare la logica di invio effettiva, 
    // ad esempio una chiamata API a /api/submit-project
    // Per ora, simuliamo un successo dopo 2 secondi
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      // Esempio di chiamata API (da implementare)
      // const response = await fetch("/api/submit-project", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      setSubmitStatus({
        type: "success",
        message: "Proposta inviata con successo! Ti contatteremo presto.",
      });
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        projectDescription: "",
        expectedTimeline: "",
        additionalInfo: "",
      });
      // } else {
      //   const errorData = await response.json();
      //   setSubmitStatus({
      //     type: "error",
      //     message: errorData.message || "Errore nell'invio della proposta. Riprova più tardi.",
      //   });
      // }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Errore di connessione. Controlla la tua connessione e riprova.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus.type === "success") {
    return (
      <div className="text-center py-8">
        <div className="mb-6">
          <svg 
            className="mx-auto h-16 w-16 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-neutral-50 mb-4">
          Proposta Inviata!
        </h3>
        <p className="text-neutral-100 mb-6 text-lg">
          Grazie per aver proposto il tuo progetto. Ti risponderemo il prima possibile.
        </p>
        <button
          onClick={() => setSubmitStatus({ type: null, message: "" })}
          className="bg-neutral-50 hover:bg-neutral-100 text-neutral-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Invia un&apos;altra proposta
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-50 mb-6">
        Compila il Form per Proporre il Tuo Progetto
      </h3>

      {submitStatus.type === "error" && (
        <div className="mb-6 p-4 rounded-lg border bg-red-100 border-red-300 text-red-800">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome Azienda e Persona di Contatto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Nome Azienda *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="La tua azienda S.r.l."
            />
          </div>
          <div>
            <label
              htmlFor="contactName"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Nome Referente *
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              required
              value={formData.contactName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Mario Rossi"
            />
          </div>
        </div>

        {/* Email e Telefono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Email Aziendale *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="email@azienda.it"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Telefono (Opzionale)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="012 3456789"
            />
          </div>
        </div>
        
        {/* Descrizione Progetto */}
        <div>
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium text-neutral-100 mb-2"
          >
            Descrizione del Progetto *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={6}
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
            placeholder="Descrivi la tua idea, gli obiettivi, il target di utenti, le funzionalità principali..."
          />
        </div>

        {/* Tempistiche Attese */}
        <div>
          <label
            htmlFor="expectedTimeline"
            className="block text-sm font-medium text-neutral-100 mb-2"
          >
            Tempistiche Attese *
          </label>
          <input
            type="text"
            id="expectedTimeline"
            name="expectedTimeline"
            required
            value={formData.expectedTimeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Es. 1 settimana, 2 settimane, Urgente"
          />
        </div>

        {/* Informazioni Aggiuntive */}
        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-neutral-100 mb-2"
          >
            Informazioni Aggiuntive (Opzionale)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
            placeholder="Budget indicativo (se applicabile), tecnologie esistenti, link a documentazione o mockup, qualsiasi altra informazione utile."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Invio in corso...
            </span>
          ) : (
            "Invia Proposta Progetto"
          )}
        </button>
      </form>
    </div>
  );
} 