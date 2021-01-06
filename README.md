# Technolgap
> The official Technolgap Website for the 2020-2021 school year. The website provides information about Technolgap, events, the executive team, and social media. In addition, visitors can ask to join the private Slack and ask questions. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Suggested Knowledge Prerequistes  
* HTML
* CSS 
* JavaScript
* Some idea of NextJS (ideally)
* Some idea of web development (ideally)

## Technolgy Requirements 
* Node (Latest Version)

## Installation (via command line)
Feel free to use Github Desktop (or other GUIs for version control).

0. Go to the Technolgap repistory, click on `Code` and click on the button that's circled below. 

![Cloning](images/README/CloningWithSSH.png)

1. Clone this project your terminal using the command below to the directory (ex/ Desktop, Computer) where you want to save this project.

```
git clone [fill this with what you copied from step 0]
```

2. Install Node (https://nodejs.org/en/download/) and SASS (https://sass-lang.com/install) if you don't have it. 

3. Go to the directory where you saved the code and to the folder `technolgap-website` and run the following command. 

`npm install` 

Note: If you get an error in this step, you may have to delete the `node_modules` folde and run this command again. 

4. You can run the local version of the website locally using `npm`
 
```bash
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Hopefully, you can see the latest version

## Contribution
When contributing to this repository, please check the `Issues` tab before opening new issues. If there's task you want to do that involves fixing a bug or refactoring, then feel free to open an issue. Otherwise, please discuss with the Technolgap executive team before. 

1. Find issue(s) to work on and assign yourself to them. 

2. Create a new branch with the following command (or use Github GUI):

```
git checkout -b `initials/general-idea-of-your-ticket

```

For example, I'm working on the executive gallery so this would be the name of my branch.

```
git checkout -b mv/create-executive-gallery

```

3. Type `git branch` to make sure your in the correct branch. In my case, I see something like this:

```
  master
* mv/create-executive-gallery
```

The * represents the branch that you're on. 

4. You should be ready to go to work. For most cases, majority of the work "should" be editing the folder of your respective component(s) and putting the component(s) in one or more of the page in the `pages` folder to minimize merge conflicts. 

## Tips
* Make sure you're up to date with the master branch by running the following commands:
```
git checkout master
git pull
git checkout your-branch-name
git merge master 
```

* After pulling from master, make sure your npm modules are up to date by running the following command: `npm install`. If there's errors, delete the `node_modules` folder and re-type the command again. 


## Pull Request Process
1. Once you think you've finished your work or have a work in progress, then create a pull request. You will need at least three reviewers who will focus on different areas before you can merge your changes: 
* Director of Development
* Two other member not mentioned above: syntax, general understanding 

Standards for code reviews will be posted soon. For now, you will only need approval from the first and third person. 

2. Once the project is deployed, we will need to increase the version number and maintain a `CHANGELOG.md` (coming soon).

3. Make sure the project still properly works along with your new feature.

## Resources 

To learn more about the technologies used in this project, take a look at the following resources:

### NextJS
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - original repo.

### HTML, CSS, JavaScript
- [w3cSchools](https://www.w3schools.com/)

## Deployment 
* We are using Heroku to deploy our website (https://technolgap.herokuapp.com/). 
* Anything that gets pushed to master is automatically deployed to Heroku at the moment 

## Commands
Go to the package.json file to learn more about what commands are available.
