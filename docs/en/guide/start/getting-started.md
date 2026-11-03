---
description: 'Get koiShot: Windows installer, macOS DMG and Linux .deb. No build required, OCR included.'
---

# Get Started

Download the package for your platform from the release page. Nothing to build or configure — runtime libraries and the OCR engine are bundled, so it works right after installation.

## Windows

1. Download `koiShot-<version>-windows-x64-setup.exe` and run it;
2. Follow the **Simplified Chinese installer**; no administrator rights required;
3. Keep "Run koiShot" checked on the last page and click Finish — koiShot starts and stays in the system tray.

### Installer steps

**Install location**: defaults to the per-user program directory (`%LOCALAPPDATA%\Programs\koiShot`) and can be changed. The installer asks for the install scope first and defaults to "install for the current user only" (no admin rights); you can switch to "install for all users" (requires admin confirmation).

**Additional tasks**:

![Additional tasks](/images/install/windows-wizard-tasks.png)

- **Create a desktop shortcut**: off by default;
- **Start koiShot at login**: on by default. koiShot starts with Windows and stays in the tray; the setting is removed on uninstall.

**Ready to install**:

![Ready to install](/images/install/windows-wizard-ready.png)

If koiShot is running (for example during an upgrade), the installer offers to close it automatically:

![Closing a running koiShot](/images/install/windows-wizard-close-apps.png)

**Finish**:

![Finish](/images/install/windows-wizard-finish.png)

### Upgrade & uninstall

- **Upgrade**: run the new installer over the old one — no need to uninstall first; existing settings are kept;
- **Uninstall**: use Settings → Apps on Windows, or the uninstall entry in the koiShot start-menu folder. Autostart entries and files are removed automatically.

## macOS

1. Download the image matching your chip and open it: `koiShot-<version>-macos-arm64.dmg` for Apple Silicon, `koiShot-<version>-macos-x86_64.dmg` for Intel (a release may instead ship a single `-macos-universal.dmg`, which runs on both);
2. Drag **koiShot into the Applications folder** as the window shows:

![macOS installer: drag koiShot into Applications](/images/install/macos-dmg-install.png)

3. Launch koiShot from Launchpad or Applications.

### "Cannot verify the developer" on first launch

macOS blocks un-notarized apps; this is expected. Pick either:

- Click "Done" in the dialog, open **System Settings → Privacy & Security**, and click **Open Anyway** next to the koiShot notice;
- Or right-click koiShot in Applications → **Open**, then confirm. One time only.

### No Dock icon is normal

koiShot is **tray-only**: no Dock icon, no `⌘ + Tab` entry — just the tray icon in the **menu bar**. If you see the menu-bar icon, the app is running.

### System permissions

Three independent permissions are involved:

| Permission | Where | Symptom when missing |
| --- | --- | --- |
| Screen Recording | System Settings → Privacy & Security → Screen Recording | Screenshots are completely black, with no error |
| Accessibility | System Settings → Privacy & Security → Accessibility | Hover highlight (UI-element selection) never appears; silently falls back to plain selection |
| Microphone | System Settings → Privacy & Security → Microphone | MP4 recordings have no audio; video is fine |

Enable the switches for koiShot:

![Enable koiShot under Screen Recording](/images/install/macos-permission-screen-recording.png)

![Enable koiShot under Accessibility](/images/install/macos-permission-accessibility.png)

Then **quit and relaunch koiShot** (tray icon → Quit). The microphone is only requested when "Record microphone audio" is enabled and you actually record; if denied, koiShot records silently. See [FAQ](/en/guide/faq).

### Start at login

- Installs made with the official packaging script register a **launch agent**, so koiShot starts silently at login; the same script can remove it.
- Manual drag-and-drop installs: open **System Settings → General → Login Items** and add koiShot.

### Upgrade & uninstall

- **Upgrade**: drag the new koiShot into Applications to overwrite; settings are kept. Re-check the permissions above if capture stops working;
- **Uninstall**: quit from the tray menu, then move koiShot from Applications to the Trash.

## Linux

A Debian/Ubuntu `.deb` package is provided (`koishot_<version>-1_amd64.deb`):

```bash
sudo dpkg -i koishot_<version>-1_amd64.deb
```

- Launch koiShot from the application menu, or run `koiShot`; a shortcut icon is also placed on each user's desktop;
- Qt runtime libraries and OCR models are bundled — no system Qt6 required;
- A systemd user service **restarts the app 2 seconds after a crash** (a normal quit from the tray is not restarted; after more than 5 crashes within 5 minutes the auto-restart pauses to prevent loops);
- Uninstall with `sudo dpkg -r koishot` to keep configuration files, or `sudo dpkg -P koishot` (or `apt purge`) to remove configuration and the service as well.

## First launch

koiShot **only lives in the system tray** after launch and shows no window (there is no persistent main window):

1. Left-click the tray icon to start a capture;
2. Check save path, UI language, theme and hotkeys in Settings (all 5 global actions can be rebound);
3. Optionally run Settings → OCR self-check → "Run self-check" to confirm the recognition environment (usually unnecessary);
4. For recordings with audio, verify the microphone switch under Settings → General → Recording (MP4) and grant the microphone permission.
