
// constants.ts - Catálogo limpo para nova configuração
import { Product, Category, FooterConfig } from './types';

export const CATEGORIES: Category[] = ['Todos', 'Correntes', 'Pulseiras', 'Pingentes'];

// O catálogo foi limpo conforme solicitação do usuário.
export const PRODUCTS: Product[] = [];

export const INITIAL_FOOTER_CONFIG: FooterConfig = {
  logoUrl: 'https://i.postimg.cc/pTqrGnBr/f12aebec-2f44-4274-b18b-0011508b0785.png',
  copyrightText: '© 2024 Gold Boss - Handcrafted for Leaders.',
  evaluationLinks: [
    { id: '1', label: 'Avaliar no Google', url: '#' },
    { id: '2', label: 'Avaliar atendimento', url: '#' }
  ],
  serviceLinks: [
    { id: '3', label: 'Instagram', url: '#' },
    { id: '4', label: 'WhatsApp Vendas', url: '#' },
    { id: '5', label: 'Suporte e Garantia', url: '#' }
  ],
  showShareButton: true
};
