import { readFileSync } from 'fs';
import { join } from 'path';
import { logger } from './logger.js';

export class PromptLoader {
  private static cache: Map<string, string> = new Map();
  private static promptsDir = 'prompts';

  /**
   * Carica un prompt da file
   */
  static loadPrompt(promptName: string): string {
    // Controlla cache prima
    if (this.cache.has(promptName)) {
      const cachedPrompt = this.cache.get(promptName);
      return cachedPrompt || this.getFallbackPrompt(promptName);
    }

    try {
      const promptPath = join(this.promptsDir, `${promptName}.md`);
      const promptContent = readFileSync(promptPath, 'utf-8');
      
      // Salva in cache per riutilizzo
      this.cache.set(promptName, promptContent);
      
      logger.debug(`📋 Loaded prompt: ${promptName}`);
      return promptContent;
      
    } catch (error) {
      logger.error(`❌ Failed to load prompt: ${promptName}`, error);
      return this.getFallbackPrompt(promptName);
    }
  }

  /**
   * Carica e processa un prompt con variabili
   */
  static loadPromptWithVariables(
    promptName: string, 
    variables: Record<string, string>
  ): string {
    let prompt = this.loadPrompt(promptName);
    
    // Sostituisci variabili nel formato {{variable}}
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      prompt = prompt.replace(regex, value);
    }
    
    return prompt;
  }

  /**
   * Combina più prompt
   */
  static combinePrompts(promptNames: string[], separator: string = '\n\n'): string {
    const prompts = promptNames.map(name => this.loadPrompt(name));
    return prompts.join(separator);
  }

  /**
   * Estrae sezione specifica da un prompt
   */
  static extractSection(promptName: string, sectionName: string): string {
    const prompt = this.loadPrompt(promptName);
    
    // Cerca sezione con formato ## SectionName
    const sectionRegex = new RegExp(`## ${sectionName}([\\s\\S]*?)(?=## |$)`, 'i');
    const match = prompt.match(sectionRegex);
    
    return match ? match[1].trim() : '';
  }

  /**
   * Invalida cache per ricaricamento prompt
   */
  static clearCache(): void {
    this.cache.clear();
    logger.debug('🔄 Prompt cache cleared');
  }

  /**
   * Prompt di fallback se file non trovato
   */
  private static getFallbackPrompt(promptName: string): string {
    const fallbacks: Record<string, string> = {
      'article-analysis': `
        Analizza questo articolo tecnologico e valutalo da 1 a 10.
        Considera: impatto, rilevanza, novità, qualità.
        Restituisci JSON con: score, reasoning, impact, relevance, keyTopics, sentiment.
      `,
      'content-generation': `
        Sei un tech writer per eDojo. Crea contenuti coinvolgenti e informativi 
        per sviluppatori. Usa un tono professionale ma accessibile.
        Formato: TITLE, EXCERPT, CONTENT, CATEGORIES, TAGS, FEATURED.
      `,
      'image-generation': `
        Crea un'illustrazione digitale moderna e professionale per un articolo tech.
        Stile: minimalista, palette tech, formato landscape.
        Evita: testo, loghi, elementi complessi.
      `
    };

    return fallbacks[promptName] || 'Prompt not found and no fallback available.';
  }

  /**
   * Lista prompt disponibili
   */
  static getAvailablePrompts(): string[] {
    try {
      const fs = require('fs');
      const files = fs.readdirSync(this.promptsDir);
      return files
        .filter((file: string) => file.endsWith('.md'))
        .map((file: string) => file.replace('.md', ''));
    } catch {
      return ['article-analysis', 'content-generation', 'image-generation'];
    }
  }

  /**
   * Valida un prompt caricato
   */
  static validatePrompt(promptName: string): boolean {
    const prompt = this.loadPrompt(promptName);
    return prompt.length > 50 && !prompt.includes('Prompt not found');
  }
} 