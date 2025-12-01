# Manual Workspace Configuration

If the automated registry is not working for you, you can configure the workspaces manually in your Kasm instance.

## Prerequisites

You must build the Docker images and push them to a registry (like Docker Hub) that your Kasm instance can access.

### 1. Build and Push Images

**Antigravity:**
```bash
cd workspaces/Antigravity
docker build -t your-docker-user/antigravity:latest .
docker push your-docker-user/antigravity:latest
```

**Winbox 4:**
```bash
cd workspaces/Winbox4
docker build -t your-docker-user/winbox4:latest .
docker push your-docker-user/winbox4:latest
```

*(Replace `your-docker-user` with your actual Docker Hub username)*

---

## Configuration Steps in Kasm

1. Log in to Kasm as an Admin.
2. Go to **Workspaces**.
3. Click **Add Workspace**.

### 1. Antigravity Configuration

Fill in the following fields:

- **Workspace Type**: `Container`
- **Friendly Name**: `Antigravity`
- **Description**: `Antigravity application container.`
- **Docker Image**: `your-docker-user/antigravity:latest`
  > **IMPORTANT**: This must match exactly what you used in the `docker build` command.
  > - If your Docker Hub username is `borja`, this would be `borja/antigravity:latest`.
  > - You **MUST** have successfully run `docker push` for this to work.
- **Enabled**: `Yes`
- **Category**: `Development`
- **Icon URL**: `https://borborborja.github.io/kasm-bor/icons/antigravity.svg` (Or upload your own)

**Advanced Settings:**
- **Cores**: `2`
- **Memory**: `2768` (Adjust as needed)
- **GPU Count**: `0`
- **CPU Allocation Method**: `Inherit`

Click **Submit**.

### 2. Winbox 4 Configuration

Fill in the following fields:

- **Workspace Type**: `Container`
- **Friendly Name**: `Winbox 4`
- **Description**: `MikroTik Winbox 4 (Native Linux Beta).`
- **Docker Image**: `your-docker-user/winbox4:latest`
  > **IMPORTANT**: Replace `your-docker-user` with your actual Docker Hub username (e.g., `borja/winbox4:latest`).
- **Enabled**: `Yes`
- **Category**: `Development`
- **Icon URL**: `https://borborborja.github.io/kasm-bor/icons/winbox.svg` (Or upload your own)

**Advanced Settings:**
- **Cores**: `2`
- **Memory**: `2768` (Adjust as needed)
- **GPU Count**: `0`
- **CPU Allocation Method**: `Inherit`

Click **Submit**.

---

## Troubleshooting

- **Image Pull Error**: Ensure your Kasm server has internet access and can pull from Docker Hub. If the repo is private, you'll need to configure Registry Credentials in Kasm.
- **App Not Launching**: Check the "Docker Exec Config" if you need to override the startup command, but the default `LAUNCH_COMMAND` in the Dockerfile should handle it.
