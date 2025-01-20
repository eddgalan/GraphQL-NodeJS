FROM debian:11.3
# Create 'graphql' User
RUN useradd -m -s /bin/bash graphql
COPY configFiles /home/graphql/app/configFiles
WORKDIR /home/graphql/app
RUN  sh ./configFiles/init.sh
USER graphql

CMD ["npm", "npm run watch:dev"]
