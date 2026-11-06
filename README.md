# Pocket — Personal Money Tracker (Web + Android APK)

Pocket is a mobile-first expense tracker built with HTML, CSS and JavaScript. This repository now includes a Capacitor Android wrapper and a GitHub Actions workflow that builds an installable Android APK automatically.

## What is included

- `index.html` — Pocket V4 web application.
- `assets/icons/` — your supplied wallet icon and its browser/PWA sizes.
- `assets/icon-only.png`, `assets/icon-foreground.png`, `assets/icon-background.png` — Android launcher icon source layers made from your supplied artwork.
- `assets/splash.png` and `assets/splash-dark.png` — matching splash artwork.
- `manifest.webmanifest`, `sw.js`, `favicon.ico` — PWA support for the hosted website.
- `package.json`, `capacitor.config.ts` — Capacitor app configuration.
- `src/native-back.js` — Android hardware-back-button integration.
- `scripts/prepare-web.cjs` — prepares the HTML assets for the Android WebView.
- `.github/workflows/build-android.yml` — builds an APK on GitHub Actions.
- `.github/workflows/deploy.yml` — GitHub Pages website deployment.

Android app ID: `com.pocket.moneytracker`  
Android app name: `Pocket`

## Build an APK on GitHub (recommended)

1. Upload the **contents** of this folder to the root of your existing `expense-track` GitHub repository. Keep the `.github` folder and both workflow files. If using GitHub's website, create `.github/workflows/build-android.yml` with the supplied workflow contents if the hidden folder is not uploaded.
2. Commit the changes to the `main` branch.
3. Open the repository's **Actions** tab.
4. Select **Build Pocket Android APK** from the workflow list.
5. Open the newest successful workflow run.
6. At the bottom, under **Artifacts**, download `Pocket-Android-APK`.
7. Extract the downloaded artifact ZIP. It contains `app-debug.apk`.
8. Transfer `app-debug.apk` to your Android phone and install it. Android may ask you to allow installation from that source.

The workflow also runs automatically when the Pocket app source/configuration files change on `main`. You can start it manually with **Actions → Build Pocket Android APK → Run workflow**.

## Important: APK type

The workflow creates a **debug-signed APK**. It is installable on an Android phone for personal use and testing. It is not a Play Store release APK. Publishing on Google Play requires a release build and secure signing configuration (keystore and secrets), which is a separate step.

## Local development (optional)

Requirements: Node.js 22+, Android Studio and Android SDK. Capacitor's current Android setup instructions are available at https://capacitorjs.com/docs/getting-started/environment-setup.

```bash
npm install
npm run build:web
npm run build:native
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
npx cap open android
```

To build a debug APK locally after Android Studio/SDK setup:

```bash
cd android
./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`.

## Data and privacy

Pocket stores transaction records locally on the device using browser storage inside the app WebView. It does not connect to a bank account. Export a backup from Settings before clearing app data or uninstalling. Uninstalling the Android app may remove its local data.

## Website and Android app are separate outputs

GitHub Pages continues to host the website. The Android APK is produced separately by the **Build Pocket Android APK** GitHub Actions workflow. GitHub Pages does not itself create APK files.
