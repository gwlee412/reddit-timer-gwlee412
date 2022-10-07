## About the Project
Based off a course online (learn more here https://profy.dev/employers), the goal of this project was to simulate a professional work environment
This was accomplished through
* Pixel Perfect implementation based on figma designs
![Screenshot (8)](https://user-images.githubusercontent.com/110861093/194644041-ec3401ed-0307-4d67-88ec-64dcab390377.png)

* Working through tasks on a Kanban borad
![Screenshot (9)](https://user-images.githubusercontent.com/110861093/194644059-a36e32b0-d2ca-47b4-b0ab-180a8f745fab.png)

* Using feature branches and pull requests to merge to the main branch
![Screenshot (10)](https://user-images.githubusercontent.com/110861093/194644075-b2e4cc96-02a3-4826-ba2e-a6d6431590ad.png)

* CI/CD integration through pull requests
![Screenshot (12)](https://user-images.githubusercontent.com/110861093/194646687-aa7e3ede-c607-4df7-b7d0-a6977e7f583c.png)

## How to navigate this project 
Unfortunately, this repository is only able to show off the homepage pixel perfect implementation due to an error in the course where I am not allowed to send pull requests through a branch name that is not on the kanban board. Unfortunately, this was one of the older projects and the board was never updated so I am currently in the process of requesting a transfer in ownership of the repository so that I can push further changes and showcase that the app is fully functional. 

Here are just a few screenshots of API data manipulation code that is unable to be pushed into this repository.
![Screenshot (11)](https://user-images.githubusercontent.com/110861093/194644083-447bfa87-f475-4fce-9732-51c660693c2b.png)

## Challenges
Working in a simulated professional git workflow was a whole other challenge in itself. For example,
* The figma design dimensions did not always match up with the pixel perfect extension and I had to tweak the code a in many places just to get it to work
* The CI integration was a difficult hurdle as I had to check $ yarn lint, $ yarn test, as well as the cypress tests just to ensure that my code would pass the checks and be able to be reviewed. 
* There were many errors due to CI in places that I never even thought about before, such as the package.json folder to change up some dependencies or add a new ESlint rule. 
