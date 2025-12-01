# Kasm Workspaces Registry

This is a custom Kasm Workspaces Registry containing specialized workspaces.

## Workspaces Included

### 1. Antigravity
A custom workspace containing the Antigravity application.
- **Base Image**: Ubuntu Jammy 1.16.0
- **Features**: Pre-installed Antigravity package.

### 2. Winbox 4
Native Linux version of MikroTik Winbox 4 (Beta).
- **Base Image**: Ubuntu Jammy 1.16.0
- **Features**: Native Winbox 4 client.

## Usage

1. **Add Registry to Kasm**:
   - Go to your Kasm Workspaces Admin panel.
   - Navigate to **Workspaces** -> **Registry**.
   - Click **Add Registry**.
   - URL: `https://borborborja.github.io/kasm-bor/`

2. **Install Workspaces**:
   - Once the registry is added, you will see the new workspaces listed.
   - Click **Install** on the desired workspace.

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

**Note**: Update the `workspace.json` files in this repository if you use different image names.

## Development

To rebuild the registry list and site locally:

```bash
./build_all_branches.sh
```
