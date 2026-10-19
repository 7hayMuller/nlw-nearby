# 📍 Nearby

Mobile app to find partner businesses nearby and redeem discount coupons by scanning a QR Code on site.

Built during Rocketseat's **NLW (Next Level Week)** with React Native, Expo and TypeScript.

---

## Features

### Welcome
- Welcome screen with the logo, a short intro and a step-by-step guide to how the app works:
  1. Find partner businesses nearby
  2. Activate the coupon with a QR Code
  3. Get perks at different types of businesses

### Map and places list
- **Category filter** in a horizontal list, with an icon for each category (food, shopping, lodging, movies and coffee). The first category is selected by default.
- **Google Maps** with a marker for the user's position and pins for the businesses in the selected category.
- Tapping a pin shows a callout with the place's name and address. Tapping the callout opens its details.
- **Draggable bottom sheet** ("Explore places near you") listing the places with photo, name, description and number of available coupons.

### Place details
- Cover photo, name and description.
- **Information:** available coupons, address and phone number.
- **Terms:** rules for using the coupons.

### Redeeming a coupon with a QR Code
- The **Scan QR Code** button opens the camera, asking for permission if needed.
- After the code is scanned, the app asks for confirmation, since a redeemed coupon can't be reused.
- Once redeemed, the coupon code is shown on screen and the number of available coupons is updated.

---

## Tech stack

| Area | Technologies |
| --- | --- |
| Core | Expo 52, React Native 0.76, React 18, TypeScript |
| Navigation | Expo Router (file-based routing, typed routes) |
| Map and location | react-native-maps (Google Maps), expo-location |
| Camera | expo-camera (QR Code scanning) |
| UI | @gorhom/bottom-sheet, Tabler Icons, Rubik font |
| HTTP | Axios |

---

## Project structure

```
src/
  app/
    _layout.tsx        Loads fonts and sets up the Stack
    index.tsx          Welcome screen
    home.tsx           Map, categories and places list
    market/[id].tsx    Place details and coupon redemption
  components/          button, categories, category, loading, place, places,
                       step, steps, welcome, market/{cover, details, info, coupon}
  servers/api.ts       Axios client
  styles/              Colors, fonts and theme
  utils/               Category icon mapping
```

---

## API

The app consumes a separate API (the Nearby backend built during NLW), which needs to be running:

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/categories` | Lists the categories |
| `GET` | `/markets/category/:categoryId` | Places in a category |
| `GET` | `/markets/:id` | Place details |
| `PATCH` | `/coupons/:id` | Redeems a coupon and returns its code |

---

## Getting started

### Prerequisites
- Node.js 18+
- Nearby backend running (port `3333`)
- Expo Go or an Android/iOS emulator
- Google Maps API key (Android)

### Steps

```bash
git clone https://github.com/7hayMuller/nlw-nearby.git
cd nlw-nearby
npm install
```

1. In `src/servers/api.ts`, set `baseURL` to your machine's local network IP (e.g. `http://192.168.0.10:3333`).
2. In `app.json`, add your Google Maps key to `android.config.googleMaps.apiKey`.
3. Start the app:

```bash
npm start          # or: npm run android / npm run ios
```

---

## Notes

- The user's position on the map is fixed to a coordinate in São Paulo. There is a function to request permission and get the real location (`getCurrentLocation`), but it isn't called yet.
- Built for Android and iOS. The map and camera don't work on the web version.
