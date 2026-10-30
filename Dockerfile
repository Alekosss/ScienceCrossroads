ARG NODE_VERSION=24.18.0

FROM node:${NODE_VERSION}-alpine3.23

RUN addgroup -g 1001 -S webgroup && adduser -u 1001 -S -D webuser -G webgroup 
RUN mkdir /home/webuser/website && chown -R webuser:webgroup /home/webuser/website
WORKDIR /home/webuser/website

USER webuser
COPY --chown=webuser:webgroup . .
RUN npm install
RUN npm approve-scripts -all

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]