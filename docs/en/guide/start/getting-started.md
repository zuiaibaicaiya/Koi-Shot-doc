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

1. Download the disk image `koiShot-<version>.dmg` and double-click to open it;
2. **Drag koiShot into the Applications folder** as guided by the install screen:

![macOS install screen: drag koiShot to the Applications folder on the right](/images/install/macos-dmg-install.png)

3. Launch koiShot from Launchpad or the Applications folder.

### "Unidentified Developer" on First Open

macOS blocks apps that are not notarized — this is expected. Pick either way to allow it:

- Click **Done** on the dialog, then open **System Settings → Privacy & Security**, find the notice about koiShot near the bottom and click **Open Anyway**;
- Or **right-click koiShot → Open** in the Applications folder, then click **Open** in the dialog. This is needed only once.

### No koiShot in the Dock — That's Normal

koiShot is a **pure tray app**: it does not appear in the Dock or in the `⌘ + Tab` switcher. It lives only as a tray icon in the **top-right menu bar**. If you see that icon, the app is running.

### System Permissions

macOS capture relies on two independent permissions that must be granted manually:

| Permission | Where | If missing |
| --- | --- | --- |
| Screen Recording | System Settings → Privacy & Security → Screen Recording | Captures are all black, with no error |
| Accessibility | System Settings → Privacy & Security → Accessibility | Element highlight on hover doesn't appear; silently falls back to plain selection |

Find koiShot in the list and turn on its switch:

![Enable koiShot in the Screen Recording permission list](/images/install/macos-permission-screen-recording.png)

![Enable koiShot in the Accessibility permission list](/images/install/macos-permission-accessibility.png)

After ticking them, **quit and restart koiShot** (tray icon → Quit). See the [FAQ](/en/guide/faq) for details.

### Start at Login

To start koiShot automatically at login: open **System Settings → General → Login Items**, click "+" and add koiShot. It stays in the menu bar tray without popping up any window.

### Upgrade & Uninstall

- **Upgrade**: download the new DMG and **drag koiShot into Applications** to overwrite it — your settings are kept. If a permission stops working after the upgrade, re-tick it in the two panes above;
- **Uninstall**: quit koiShot from the tray icon menu first, then drag it from Applications to the Trash.

## Linux

Download the program package, unzip and run the `koiShot` executable (an X11 session is recommended).

## First Launch

The app starts **minimized to the system tray**:

1. Click the tray icon to start a capture;
2. Open Settings to review save path, language and hotkeys;
3. Optionally run "Self-check" under Settings → OCR to confirm the recognition environment (usually nothing to do).
