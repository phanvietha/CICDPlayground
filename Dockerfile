# Jenkin with blue ocean already install
FROM jenkinsci/blueocean:1.23.2

USER root
# Install npm
# Ref https://github.com/nodesource/distributions/blob/master/README.md#debinstall
RUN apk add --update nodejs npm
# Install vim for inpsecting file
RUN apk update && apk add vim
# Prerequire for cypress
RUN apk add xvfb
