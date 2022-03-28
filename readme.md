# Workshop - Typescript

## Introduktion

Övningen går ut på att implementera typning med hjälp av typescript i detta REST-api mot Akila-databasen.

## Komma igång

Detta repo är byggt som en devcontainer. Det innebär att man med hjälp av Docker snabbt kan skapa upp en komplett utvecklingsmiljö som innehåller såväl kod som databas inklusive data.

### Steg-för-steg

1. Installera VSCode-tillägget "Remote - Containers", https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

2. Innan du startar upp din container - stäng av eventuellt andra instanser av postgres som lyssnar på port 5432 (via Docker Desktop)

3. Tryck Command-Shift-P på Mac eller Ctrl-Shift-P på PC

4. Sök och välj: Remote-Containers: Rebuild and Reopen in Container

5. Nu initieras din utvecklingscontainer, det kan ta en liten stund. När den är klar kan du köra appen via 'npm start'

## API-endpoints

GET /actor
GET /actor/:actorId
POST /actor
PUT /actor/:actorId
DELETE /actor/:actorId

## Uppgift

Uppgiften är att lägga till typescript och typa hela lösningen

## Tips / Övrigt

- Skapa en fork av repot för att kunna commita egna ändringar
- För validering används express-validator. För dokumentation se: https://express-validator.github.io/docs/
- För att komma åt databasen finns tillägget SQLTools tillgängligt i utvecklingscontainern (istället för PGAdmin)