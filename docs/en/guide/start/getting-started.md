---
description: 'Get koiShot: Windows installer, macOS DMG and Linux .deb. No build required, OCR and the recording backend included, automatic updates at startup.'
---

# Get Started

Download the package for your platform from the release page. Nothing to build or configure — runtime libraries, the OCR engine and the video encoding backend are bundled, so it works right after installation.

Once installed, **you never need to check for updates manually**: koiShot queries the latest stable GitHub release at startup, downloads and verifies the full installer in the background; on Windows it installs silently while the system is idle and relaunches automatically, while macOS / Linux open the downloaded package for you to finish in the system wizard. There is no update switch in settings — Settings → About shows progress and a manual retry, see the [FAQ](/en/guide/faq).

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

- **Upgrade (default)**: koiShot checks for new releases, downloads and verifies the installer in the background, then — after 2 continuous minutes of system idle time — quits, installs silently and relaunches the new version automatically. No wizard to run, settings are kept;
- **Manual upgrade (fallback)**: you can also run a newer installer over the old one — no need to uninstall first; settings are kept;
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

- **Upgrade (default)**: koiShot downloads the new DMG and opens it automatically — drag koiShot into Applications to overwrite; settings are kept. Re-check the permissions above if capture stops working;
- **Manual upgrade (fallback)**: download the new DMG from the release page yourself and follow the same steps;
- **Uninstall**: quit from the tray menu, then move koiShot from Applications to the Trash.

## Linux

A Debian/Ubuntu `.deb` package is provided (`koishot_<version>-1_amd64.deb`):

```bash
sudo apt install ./koishot_<version>-1_amd64.deb
```

If the system libraries are already present, `sudo dpkg -i koishot_<version>-1_amd64.deb` also works (run `sudo apt -f install` if dependencies are missing).

- Launch koiShot from the application menu, or run `koiShot`; a shortcut icon is also placed on each user's desktop;
- Qt runtime libraries, OCR models and the **Qt Multimedia / FFmpeg backend needed for video recording** are bundled — no system Qt6 or system ffmpeg required, MP4 recording works out of the box. An "Encoder start timed out" error or a 0-byte file right after Start usually means an older package without that backend — reinstall the current release;
- A systemd user service **restarts the app 2 seconds after a crash** (a normal quit from the tray is not restarted; after more than 5 crashes within 5 minutes the auto-restart pauses to prevent loops);
- Uninstall with `sudo dpkg -r koishot` to keep configuration files, or `sudo dpkg -P koishot` (or `apt purge`) to remove configuration and the service as well.

### Upgrade

Automatic updates download the new `.deb` and hand it to the system's default handler — finish the install in the package manager / administrator prompt while the app keeps running. You can also upgrade manually with `sudo apt install ./koishot_<new-version>-1_amd64.deb`: the running instance is stopped first and configuration files are kept.

## First launch

koiShot **only lives in the system tray** after launch and shows no window (there is no persistent main window):

1. Left-click the tray icon to start a capture;
2. Check save path, UI language, theme and hotkeys in Settings (all 5 global actions can be rebound);
3. Optionally run Settings → OCR self-check → "Run self-check" to confirm the recognition environment (usually unnecessary);
4. For recordings with audio, verify the microphone switch under Settings → General → Recording (MP4) and grant the microphone permission;
5. To use screenshot translation, enter your Alibaba Cloud machine translation AccessKey under Settings → General → Translation settings ("Test translation" verifies it instantly — see [Screenshot translation](/en/guide/features/translate)).
