---
description: 'Get koiShot: Windows setup wizard and macOS DMG drag-to-install — no build required, OCR included.'
---

# Get Started

Download the installer for your platform from the project releases page. No build or extra setup needed — all runtime libraries and the OCR engine ship inside the installer.

## Windows

1. Download the setup wizard `koiShot-<version>-setup.exe` and run it;
2. Follow the **setup wizard** (Simplified Chinese) to finish installation — no admin rights required;
3. Keep "Run koiShot" checked on the final page and click **Finish**. koiShot starts and lives in the system tray.

### Wizard Steps

**Install location**: by default koiShot installs to the current user's local programs folder (`%LOCALAPPDATA%\Programs\koiShot`). On first install the wizard asks for the install scope — "install for the current user" is the default and needs no admin rights.

**Additional tasks**:

![Select additional tasks](/images/install/windows-wizard-tasks.png)

- **Create a desktop shortcut**: unchecked by default;
- **Start koiShot with Windows**: checked by default. koiShot then starts with the system and stays in the tray; the setting is removed automatically on uninstall.

**Ready to install**: review the summary and click **Install**:

![Ready to install](/images/install/windows-wizard-ready.png)

If koiShot is already running (e.g. an upgrade), the wizard offers to close it automatically before continuing:

![Close running koiShot](/images/install/windows-wizard-close-apps.png)

**Finished**:

![Installation finished](/images/install/windows-wizard-finish.png)

### Upgrade & Uninstall

- **Upgrade**: run the new setup package directly — no need to uninstall first; the wizard keeps your existing configuration;
- **Uninstall**: use Windows "Settings → Apps → Installed apps", or the uninstall entry in the koiShot Start-menu group. The autostart entry and related files are removed automatically.

## macOS

1. Download the disk image `koiShot-<version>.dmg`;
2. Open it and **drag koiShot into the Applications folder** as guided by the install screen;
3. On first launch, grant "Screen Recording" when prompted (see [FAQ](/en/guide/faq)).

## Linux

Download the program package, unzip and run the `koiShot` executable (an X11 session is recommended).

## First Launch

The app starts **minimized to the system tray**:

1. Click the tray icon to start a capture;
2. Open Settings to review save path, language and hotkeys;
3. Optionally run "Self-check" under Settings → OCR to confirm the recognition environment (usually nothing to do).
