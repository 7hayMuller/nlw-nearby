# 📍 Nearby

App mobile para encontrar estabelecimentos parceiros por perto e resgatar cupons de desconto lendo um QR Code no local.

---

## Funcionalidades

### Boas-vindas
- Tela inicial com logo, mensagem de boas-vindas e um passo a passo de como o app funciona:
  1. Encontrar estabelecimentos parceiros por perto
  2. Ativar o cupom com QR Code
  3. Garantir vantagens em diferentes tipos de estabelecimento

### Mapa e lista de locais
- **Filtro por categoria** em lista horizontal, com ícone para cada categoria (alimentação, compras, hospedagem, cinema e café). A primeira categoria já vem selecionada.
- **Mapa do Google Maps** com um marcador para a posição do usuário e pins para os estabelecimentos da categoria selecionada.
- Ao tocar em um pin, um balão mostra o nome e o endereço do local. Tocar no balão abre os detalhes.
- **Bottom sheet arrastável** ("Explore locais perto de você") com a lista de locais: foto, nome, descrição e quantidade de cupons disponíveis.

### Detalhes do estabelecimento
- Foto de capa, nome e descrição.
- **Informações:** cupons disponíveis, endereço e telefone.
- **Regulamento:** regras de uso dos cupons.

### Resgate de cupom via QR Code
- Botão **Ler QR Code** abre a câmera, pedindo permissão se necessário.
- Ao ler o código, o app pede confirmação, já que um cupom resgatado não pode ser reutilizado.
- Confirmado o resgate, o código do cupom aparece na tela e a quantidade de cupons disponíveis é atualizada.

---

## Stack

| Área | Tecnologias |
| --- | --- |
| Base | Expo 52, React Native 0.76, React 18, TypeScript |
| Navegação | Expo Router (rotas por arquivo, typed routes) |
| Mapa e localização | react-native-maps (Google Maps), expo-location |
| Câmera | expo-camera (leitura de QR Code) |
| UI | @gorhom/bottom-sheet, Tabler Icons, fonte Rubik |
| HTTP | Axios |

---

## Estrutura

```
src/
  app/
    _layout.tsx        Carrega as fontes e define o Stack
    index.tsx          Boas-vindas
    home.tsx           Mapa, categorias e lista de locais
    market/[id].tsx    Detalhes do local e resgate de cupom
  components/          button, categories, category, loading, place, places,
                       step, steps, welcome, market/{cover, details, info, coupon}
  servers/api.ts       Cliente Axios
  styles/              Cores, fontes e tema
  utils/               Mapeamento de ícones por categoria
```

---

## API

O app consome uma API separada (o backend do Nearby feito no NLW), que precisa estar rodando:

| Método | Rota | Uso |
| --- | --- | --- |
| `GET` | `/categories` | Lista as categorias |
| `GET` | `/markets/category/:categoryId` | Locais de uma categoria |
| `GET` | `/markets/:id` | Detalhes de um local |
| `PATCH` | `/coupons/:id` | Resgata um cupom e retorna o código |

---

## Como rodar

### Pré-requisitos
- Node.js 18+
- Backend do Nearby rodando (porta `3333`)
- Expo Go ou um emulador Android/iOS
- Chave da API do Google Maps (Android)

### Passos

```bash
git clone https://github.com/7hayMuller/nlw-nearby.git
cd nlw-nearby
npm install
```

1. Em `src/servers/api.ts`, troque o `baseURL` pelo IP da sua máquina na rede local (ex.: `http://192.168.0.10:3333`).
2. Em `app.json`, coloque sua chave do Google Maps em `android.config.googleMaps.apiKey`.
3. Inicie o app:

```bash
npm start          # ou: npm run android / npm run ios
```

---

## Observações

- A posição do usuário no mapa está fixa em uma coordenada de São Paulo. Existe uma função para pedir permissão e obter a localização real (`getCurrentLocation`), mas ela ainda não é chamada.
- Feito para Android e iOS. O mapa e a câmera não funcionam na versão web.
