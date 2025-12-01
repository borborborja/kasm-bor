<h1 align="center">
  <br>
  <img width="150" src="https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png">
  <br>
  Kasm Workspaces Registry
  <br>
</h1>

<p align="center">This repository is a custom registry for Kasm Workspaces. A front end website is automatically generated and hosted on GitHub Pages.</p>

<p align="center">
  <a href="https://borborborja.github.io/kasm-bor/"><strong>Visit the Registry Site</strong></a>
</p>

![image](https://user-images.githubusercontent.com/5698566/230064289-9e8967a1-4ff9-43f3-8495-f4170c23a80f.png)

## Contents

1. [Workspaces Included](#workspaces-included)
2. [Installation](#installation)
3. [Building Images](#building-images)
4. [Development](#development)

&nbsp;

## Workspaces Included

### 1. Antigravity
A custom workspace containing the Antigravity application.
- **Base Image**: Ubuntu Jammy 1.16.0
- **Features**: Pre-installed Antigravity package.

### 2. Winbox 4
Native Linux version of MikroTik Winbox 4 (Beta).
- **Base Image**: Ubuntu Jammy 1.16.0
- **Features**: Native Winbox 4 client.

&nbsp;

## Installation

### Add Registry to Kasm
1. Go to your Kasm Workspaces Admin panel.
2. Navigate to **Workspaces** -> **Registry**.
3. Click **Add Registry**.
4. URL: `https://borborborja.github.io/kasm-bor/`

### Install Workspaces
1. Once the registry is added, you will see the new workspaces listed.
2. Click **Install** on the desired workspace.

&nbsp;

## Building Images

To use these workspaces, you must build the Docker images and push them to a registry accessible by your Kasm instance.

### Antigravity
```bash
cd workspaces/Antigravity
docker build -t your-docker-user/antigravity:latest .
docker push your-docker-user/antigravity:latest
```

### Winbox 4
```bash
cd workspaces/Winbox4
docker build -t your-docker-user/winbox4:latest .
docker push your-docker-user/winbox4:latest
```

> **Note**
> Update the `workspace.json` files in this repository if you use different image names.

&nbsp;

## Development

To rebuild the registry list and site locally:

```bash
./build_all_branches.sh
```
