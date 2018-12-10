FROM electronuserland/builder:wine

RUN apt-get update && apt-get install -y libxss1 xvfb && apt-get clean && rm -rf /var/lib/apt/lists/*
ENV DISPLAY=:99
COPY ./run-build.sh .