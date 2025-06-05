"use client";

import { useState } from "react";
import OrigamiButton from "./origami-button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Messaggio inviato con successo! Ti risponderemo presto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json() as { userMessage?: string; details?: string };
        
        if (response.status === 400 && errorData.userMessage) {
          setSubmitStatus({
            type: "error",
            message: errorData.userMessage,
          });
        } else {
          setSubmitStatus({
            type: "error",
            message: errorData.details ?? "Errore nell'invio del messaggio. Riprova più tardi.",
          });
        }
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Errore di connessione. Controlla la tua connessione internet e riprova.",
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
          Messaggio Inviato!
        </h3>
        
        <p className="text-neutral-100 mb-6 text-lg">
          Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo il prima possibile.
        </p>
        
        <p className="text-neutral-200 text-sm mb-8">
          Controlla la tua email per la conferma di ricezione.
        </p>
        
        <OrigamiButton
          onClick={() => {
            setSubmitStatus({ type: null, message: "" });
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          variant="purple-red"
          size="md"
        >
          Invia un altro messaggio
        </OrigamiButton>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-50 mb-6">
        Invia un Messaggio
      </h3>

      {submitStatus.type === "error" && (
        <div className="mb-6 p-4 rounded-lg border bg-red-100 border-red-300 text-red-800">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Nome *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition-all"
              placeholder="Il tuo nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition-all"
              placeholder="La tua email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition-all"
              placeholder="Il tuo numero di telefono"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-neutral-100 mb-2"
            >
              Soggetto *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition-all"
            >
              <option value="">Seleziona un soggetto</option>
              <option value="sviluppo-software">Sviluppo Software</option>
              <option value="automazione">Automazione Processi</option>
              <option value="consulenza">Consulenza Tecnica</option>
              <option value="analisi-dati">Analisi Dati</option>
              <option value="supporto">Supporto Tecnico</option>
              <option value="altro">Altro</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-100 mb-2"
          >
            Messaggio *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition-all resize-vertical"
            placeholder="Raccontaci il tuo progetto o la tua richiesta..."
          />
        </div>

        <div className="w-full">
          <OrigamiButton
            type="submit"
            disabled={isSubmitting}
            variant="red-purple"
            size="lg"
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
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
              </>
            ) : (
              "Invia Messaggio"
            )}
          </OrigamiButton>
        </div>
      </form>
    </div>
  );
} 