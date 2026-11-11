---
description: 'Download the installer for your system and double-click to start; install, permissions, autostart, upgrade and uninstall on Windows, macOS and Linux.'
---

# Get Started

Download the package for your platform from the release page and install it — that is all. The runtime, text recognition and video recording components are bundled, so **there is nothing else to install or configure**.

Updates take care of themselves: koiShot downloads and installs new versions in the background. Windows finishes automatically; on macOS / Linux the downloaded package opens and you complete it in the system dialog. There is no update switch — progress is visible under Settings → About.

## Windows

1. Download `koiShot-<version>-windows-x64-setup.exe` and run it;
2. Follow the **Simplified Chinese installer** — no administrator rights needed;
3. Keep "Run koiShot" checked and click Finish: it starts and stays in the system tray.

### What the installer asks

**Where to install**: defaults to your personal programs folder and can be changed. On a first install it also asks for the scope — "current user only" by default (no admin rights), or "all users" (admin confirmation required).

**Additional tasks**:

![Additional tasks](/images/install/windows-wizard-tasks.png)

- **Create a desktop shortcut**: off by default — tick it if you want one;
- **Start koiShot at login**: on by default; it then starts with Windows and stays in the tray, and is removed on uninstall.

**Ready to install**:

![Ready to install](/images/install/windows-wizard-ready.png)

If koiShot is running (for example during an upgrade), the installer offers to close it automatically:

![Closing a running koiShot](/images/install/windows-wizard-close-apps.png)

![Finish](/images/install/windows-wizard-finish.png)

### Upgrade & uninstall

| What you want | What to do |
| --- | --- |
| Upgrade | Nothing — koiShot installs the new version while you are away from the keyboard and reopens, keeping your settings |
| Manual upgrade (fallback) | Run a newer installer over the old one; no need to uninstall first |
| Uninstall | Settings → Apps on Windows, or the uninstall entry in the koiShot start-menu folder |

## macOS

1. Download and open the image for your chip: `-macos-arm64.dmg` for Apple Silicon, `-macos-x86_64.dmg` for Intel (a `-macos-universal.dmg` works on both);
2. Drag **koiShot into Applications** as the window shows:

![macOS installer: drag koiShot into Applications](/images/install/macos-dmg-install.png)

3. Launch it from Launchpad or Applications.

### "Cannot verify the developer" on first launch

macOS blocks un-notarized apps; either of these works, once:

- Click "Done", open **System Settings → Privacy & Security**, then click **Open Anyway** next to the koiShot notice;
- Or right-click koiShot in Applications → **Open**, then confirm.

### No Dock icon is normal

koiShot is tray-only: no Dock icon, no `⌘ + Tab` entry — just the icon in the **menu bar**. If you see it, the app is running.

### Two permissions to grant

On first use, enable these under System Settings → Privacy & Security, then **quit and relaunch koiShot** (tray icon → Quit):

| Permission | Without it |
| --- | --- |
| Screen Recording | Screenshots are completely black, with no error |
| Accessibility | Hovering does not highlight UI elements; you can only drag a selection manually |

![Enable koiShot under Screen Recording](/images/install/macos-permission-screen-recording.png)

![Enable koiShot under Accessibility](/images/install/macos-permission-accessibility.png)

For recordings with audio, **macOS asks for the microphone the first time you start recording** — allow it. If you deny it, recording still works, just without sound.

### Start at login

Dragging the app from a downloaded DMG into Applications does **not** start it at login. To enable it:

- Open **System Settings → General → Login Items** and add koiShot with "+";
- To turn autostart off, remove or switch off koiShot in that same pane;
- Machines installed with the official packaging script already have a login agent, which is managed in the same pane.

### Upgrade & uninstall

- **Upgrade**: koiShot downloads the new DMG and opens it — drag koiShot into Applications to overwrite; settings are kept. If capture or UI highlighting stops working afterwards, re-check the two permissions above;
- **Manual upgrade (fallback)**: download the new DMG yourself and repeat the same steps;
- **Uninstall**: quit from the tray menu, then move koiShot from Applications to the Trash.

## Linux

Download the Debian/Ubuntu `.deb` package, then run in your downloads folder:

```bash
sudo apt install ./koishot_<version>-1_amd64.deb
```

If the system libraries are already present, `sudo dpkg -i koishot_<version>-1_amd64.deb` also works (run `sudo apt -f install` if dependencies are missing).

You can launch koiShot from the application menu afterwards, and a shortcut appears on the desktop. Everything needed for video recording ships with the package — no extra system software. An "Encoder start timed out" message or a 0-byte file usually means an older package: reinstall the current release. After a crash koiShot reopens automatically; a normal quit from the tray does not.

### Start at login

The `.deb` **starts koiShot at login right after installation**, for all users — there is no switch in settings.

| What you want | What to do |
| --- | --- |
| Turn autostart off for everyone | Delete the startup entry with admin rights: `sudo rm /etc/xdg/autostart/koishot.desktop` |
| It did not start after install / re-login | Check that koiShot launches from the application menu, then that the file above exists |

### Upgrade & uninstall

Automatic updates download the new `.deb` and hand it to the system — finish the install in the package manager / admin prompt while the app keeps running. You can also upgrade manually with `sudo apt install ./koishot_<new-version>-1_amd64.deb`; settings are kept.

Uninstall with `sudo dpkg -r koishot` to keep configuration, or `sudo dpkg -P koishot` (or `apt purge`) to remove it as well.

## First launch

koiShot **only lives in the system tray** and shows no window:

1. Left-click the tray icon to start a capture;
2. In Settings, check the save folder, UI language, theme and hotkeys (all 5 global actions can be rebound);
3. If you are unsure whether recognition is ready, click "Run self-check" under Settings → OCR self-check (usually unnecessary);
4. For recordings with audio, check the microphone switch under Settings → General → Recording (MP4);
5. For screenshot translation, enter your Alibaba Cloud machine translation AccessKey under Settings → General → Translation settings and verify with "Test translation" (see [Screenshot translation](/en/guide/features/translate)).
