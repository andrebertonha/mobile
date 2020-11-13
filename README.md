#goStack react native module

    + React Native from gostack bootcamp 
    
    + Instruções

    + Instructions to run backend:
        - yarn dev on root folder
        - open insomnia or postman use route http://localhost:3333/projects to post delete, update and create projects
        
        - create route

             - create route http://localhost:3333/projects
            
            +json: ```
            {
                "title": "node js for example",
                "owner: "andre martins",
            }
            ```

            - update route:
            http://localhost:3333/projects/:id

            
            +json: ```
            {
                "title": "node js for example",
                "owner: "andre martins",
            }
            ```


            - udpate : /projects/:id            

            +json: ```
            {
                "title": "node js for example",
                "owner: "andre martins",
            }
            ```


            - delete : /projects/:id
            - ```response must be 204 OK```

    + Mobile:
        - yarn ( root folder ) to install dependencies
        - open your emulator
        - react-native run-android inside root folder (mobile)