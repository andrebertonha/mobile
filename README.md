#goStack react native module

    + About project: react native Add projects using backend api: 
    + (you can clone from the following repository): https://github.com/andrebertonha/backend
    + React Native from gostack bootcamp     
    + Instruções
    + Instructions to run backend:
        - yarn dev on root folder
        - open insomnia or postman use route http://localhost:3333/projects to post delete,
        update and create projects.
        
        ## Routes

             - create route http://localhost:3333/projects            
            {
                "title": "node js for example",
                "owner: "andre martins",
            }
            

            - update route: http://localhost:3333/projects/:id            
            {
                "title": "node js for example",
                "owner: "andre martins",
            }

            
            - udpate : /projects/:id
             
            {
                "title": "node js for example",
                "owner: "andre martins",
            }


            - delete : /projects/:id


            - response: 204 OK

    + Mobile:
        - yarn ( root folder ) to install dependencies
        - open your emulator
        - react-native run-android inside root folder (mobile)