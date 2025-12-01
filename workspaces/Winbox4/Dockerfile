FROM kasmweb/core-ubuntu-jammy:1.16.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########

RUN apt-get update && apt-get install -y curl unzip libqt5gui5 libqt5widgets5 libqt5network5 libqt5svg5 \
    && curl -L -o /tmp/WinBox_Linux.zip https://download.mikrotik.com/routeros/winbox/4.0beta4/WinBox_Linux.zip \
    && unzip /tmp/WinBox_Linux.zip -d /usr/bin/ \
    && chmod +x /usr/bin/WinBox \
    && rm /tmp/WinBox_Linux.zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Setup the custom startup command to launch the app
ENV LAUNCH_COMMAND="/usr/bin/WinBox"

######### End Customizations ###########

USER 1000
