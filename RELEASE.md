# NeuroLab Release Notes

## Overview

NeuroLab is a full-stack neuroscience SaaS for EEG studies, interactive signal exploration, and asynchronous analyses with organisation-scoped access control.

## Platform Downloads

### Linux

- **AppImage**: `neurolab.AppImage` — Run anywhere (no install)
- **Debian/Ubuntu**: `neurolab.deb` — `sudo apt install ./neurolab.deb`
- **RPM (Fedora/RHEL)**: `neurolab.rpm` — `sudo dnf install ./neurolab.rpm`
- **Tarball**: `neurolab.tar.xz` — Extract and run `./neurolab`

### macOS

- **DMG**: `neurolab.dmg` — Standard macOS installer
- **ZIP (App Bundle)**: `neurolab.zip` — Extract and drag to Applications

### Windows

- **MSI Installer**: `neurolab.msi` — Standard Windows installer
- **EXE**: `neurolab.exe` — Portable executable

## Verification

All artifacts include SHA256 checksums in `SHA256SUMS.txt`:

```bash
# Verify all downloads
sha256sum --check SHA256SUMS.txt
```

## Installation Requirements

| Platform | Requirements                                       |
| -------- | -------------------------------------------------- |
| Linux    | WebKitGTK 4.1+ (Ubuntu 22.04+, Fedora 38+, Arch)   |
| macOS    | macOS 12+ (Monterey) — uses system WebKit          |
| Windows  | Windows 10 1903+ (WebView2 runtime auto-installed) |

## Support

- [Documentation](https://github.com/hieudoanm/neurolab/docs)
- [Issues](https://github.com/hieudoanm/neurolab/issues)
- [Security](https://github.com/hieudoanm/neurolab/SECURITY.md)
