FROM kasmweb/core-ubuntu-jammy:1.16.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########

RUN apt-get update && apt-get install -y curl gpg sudo \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | gpg --dearmor -o /etc/apt/keyrings/antigravity-repo-key.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | tee /etc/apt/sources.list.d/antigravity.list > /dev/null \
    && apt-get update \
    && apt-get install -y antigravity \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Setup the custom startup command to launch the app
# This overrides the default desktop environment launch
# We assume 'antigravity' is the command to run the app
ENV LAUNCH_COMMAND="/usr/bin/antigravity"

# Or if we want to run it within the Kasm VNC session but as a single app:
# Usually we modify the window manager or startup script.
# For simplicity in this template, we just install it. 
# The user can configure the 'Exec Config' in Kasm to run this command.

######### End Customizations ###########

USER 1000
