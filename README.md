# 🌙 Tarot Luz - Website Profissional

Site elegante, sofisticado e responsivo para consultoria tarótica e espiritualidade.

## 🎨 Características de Design

### Identidade Visual
- **Cores**: Preto profundo (#0a0a0a) com detalhes em dourado (#d4af37)
- **Atmosfera**: Mística, elegante, acolhedora e sofisticada
- **Tipografia**: 
  - Títulos: Cormorant Garamond (serif elegante)
  - Corpo: Montserrat (limpa e legível)
- **Elementos**: Símbolos místicos, ornamentos discretos, iluminação tipo velas

### Responsividade
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Menu hambúrguer em dispositivos móveis
- ✅ Galeria adaptativa
- ✅ Navegação suave com âncoras

## 📁 Estrutura do Projeto

```
tarot-luz/
├── index.html              # Página principal
├── styles/
│   └── main.css           # Estilos completos
├── js/
│   └── main.js            # Funcionalidades
├── assets/
│   └── images/
│       ├── foto-profissional.jpg  # [SUBSTITUIR]
│       └── galeria/               # [ADICIONAR IMAGENS]
└── README.md              # Este arquivo
```

## 🚀 Como Personalizar

### 1. Informações Pessoais
Edite `index.html` e procure pelos placeholders:
- `[TEXTO BIOGRÁFICO]` - Seção "Minha História"
- `[Descrição da consulta...]` - Cards de consultas
- `[Adicione seu número de WhatsApp]` - Contato
- `[Adicione seu usuário do Instagram]` - Contato
- `[Adicione seu e-mail]` - Contato

### 2. Foto de Perfil
Substitua: `assets/images/foto-profissional.jpg` (recomendado: 400x500px)

### 3. Galeria de Imagens
1. Adicione suas imagens em: `assets/images/galeria/`
2. No `js/main.js`, edite o array `galleryImages`:

```javascript
const galleryImages = [
  'imagem1.jpg',
  'imagem2.jpg',
  'imagem3.jpg'
];
```

### 4. Links de Contato
No `index.html`, atualize os botões:
- WhatsApp: `href="https://wa.me/SEUNUMERO"`
- Instagram: `href="https://instagram.com/SEUUSUARIO"`
- E-mail: `href="mailto:SEU@EMAIL.com"`

## 🌟 Seções do Site

- **Hero**: Impacto visual com título, texto acolhedor e botões CTA
- **Minha História**: Espaço para foto e biografia
- **O Tarot Luz**: Explicação sobre o tarot como ferramenta
- **Consultas**: 6 cards com modalidades de atendimento
- **Um Espaço Para Você**: Mensagem acolhedora
- **Galeria**: Imagens responsivas
- **Agendamento**: Contato via WhatsApp, Instagram e E-mail
- **Footer**: Rodapé elegante

## 🎨 Customização de Cores

Edite `styles/main.css`:

```css
:root {
  --primary-dark: #0a0a0a;      /* Fundo */
  --gold: #d4af37;              /* Destaque principal */
  --gold-light: #e8c547;        /* Destaque claro */
  --text-primary: #e8e8e8;      /* Texto */
  --text-secondary: #b8b8b8;    /* Texto secundário */
}
```

## 📱 Otimizações

✅ Imagens com lazy loading
✅ CSS otimizado
✅ JavaScript vanilla (sem dependências)
✅ Animações suaves
✅ Acessibilidade básica
✅ Performance otimizada

## 🌐 Publicar no GitHub Pages

1. Vá para **Settings** do repositório
2. Role até **Pages**
3. Em **Source**, selecione **main branch**
4. Clique em **Save**
5. Seu site estará em: `https://seu-usuario.github.io/tarot-luz/`

## 📋 Checklist Final

- [ ] Adicionar foto profissional
- [ ] Escrever biografia
- [ ] Descrever modalidades de consulta
- [ ] Adicionar número WhatsApp
- [ ] Adicionar usuário Instagram
- [ ] Adicionar e-mail
- [ ] Adicionar imagens na galeria
- [ ] Revisar ortografia
- [ ] Testar em mobile
- [ ] Publicar no GitHub Pages

## 💡 Dicas Importantes

- Mantenha a identidade visual consistente
- Use imagens de alta qualidade (otimizadas para web)
- Textos devem ser autênticos e acolhedores
- Teste frequentemente em diferentes dispositivos
- Atualize a galeria regularmente

---

✨ **Tarot Luz** - Um espaço sagrado de reflexão e orientação espiritual. ✨