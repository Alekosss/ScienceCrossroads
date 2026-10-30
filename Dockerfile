ARG NODE_VERSION=24.18.0

FROM node:${NODE_VERSION}-alpine3.23

COPY . /website
WORKDIR /website
RUN npm install
RUN npm approve-scripts -all

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]