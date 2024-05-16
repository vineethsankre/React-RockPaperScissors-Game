In this project, let's build a **Rock Paper Scissors** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif" alt="rock paper scissors output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Rules View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-rules-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When you click on the **Rules** button, it should trigger a popup, and rules image should be displayed
- Initially, the score displayed should be `0`
- The App is provided with `choicesList`. It consists of a list of choice objects with the following properties in each choice object

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  String   |
  | imageUrl |  String   |

- When any of the three buttons (i.e Rock, Paper, Scissors) is clicked, then the [Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png) should be displayed
- In the Game Results View, the opponent choice should be generated randomly among these three buttons (i.e Rock, Paper, Scissors)
- When the **Rock** button is clicked, then the rock image should be displayed as your choice in the Game Results View
- When the **Paper** button is clicked, then the paper image should be displayed as your choice in the Game Results View
- When the **Scissors** button is clicked, then the scissors image should be displayed as your choice in the Game Results View


- When the result is `YOU WON`, then the score should be incremented by one
- When the result is `IT IS DRAW`, then there shouldn't be any change in the score
- When the result is `YOU LOSE`, then the score should be decremented by one
- When the **PLAY AGAIN** button is clicked, then the [Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png) should be displayed

</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use `Math.random()` function to get a random number (float value) in range 0 to less than 1 (`0 <= randomNumber < 1`)

  ```
  Math.random()
  ```

- You can use `Math.floor()` function that returns the **largest integer less than or equal to a given number**

  ```js
  console.log(Math.floor(5.95)); // output: 5
  ```

</details>


### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png](https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png) alt should be **rules**

</details>

