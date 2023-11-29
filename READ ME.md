# Muhammad Abbas TASK 2 Detailed Git Operations

# 1. Initialize a Git Repository
In version control, initialization creates a new, **empty repository**.
Version control, also known as source control, is the process of managing and tracking changes to software code. Version control systems are software tools that help software teams manage changes to source code over time

# 2. Add Files & Commit
As writing this documentation, I will stage this repo using **git add.** command. Then I will commit using **git commit -m "Commit"** command. Then I will Push the changes to my repo using **git push** command.

# 3. Difference between Forking and Cloning a Repository

## Fork & Clone: Understanding the Basics

|   | Fork | Clone |
|---|------|-------|
| **Definition** | Forking is done on the GitHub Account | Cloning is done using Git |
| **Outcome** | Forking creates a copy of the original repository on our GitHub account | Cloning creates a copy of the original repository on our local machine |
| **Merge Changes** | Changes made to the forked repository can be merged with the original repository via a pull request | Changes made to the cloned repository cannot be merged with the original repository unless you are the collaborator or the owner of the repository |
| **Nature** | Forking is a concept | Cloning is a process |
| **Execution** | Forking contains a separate copy of the repository, and there is no command involved | Cloning is done through the command 'git clone,' and it is a process of receiving all the code files to the local machine |


Remember:
- **Forking:** Creating a personal copy on your GitHub account.
- **Cloning:** Bringing a copy of the repository to your local machine.

Let's say there's a programmer named Joe who built a game you would like to improve, and he is hosting his code in a GitHub repository. Here's what you do:

![Alt Text](https://www.dataschool.io/content/images/2014/Mar/github1.png)

**1.Fork his repo:** This is a GitHub operation, in which you are making a copy of Joe's repository (including the files, commit history, issues, and more). This repository now lives in your GitHub account. Nothing has yet happened to your local computer.

**2.Clone your repo:** This is a Git operation, in which you are using Git to tell GitHub "please send me a copy of my repo." The repo is now stored on your local computer.

**3.Update some files:** You can now make updates to the files in whatever program or environment you like.

**4.Commit your changes:** This is a Git operation, in which you are telling Git to record the file changes you have made. This is an operation on your local computer only.

**5.Push your changes to your GitHub repo:** This is a Git operation, in which you are using Git to tell GitHub "here are my changes." Pushing does not happen automatically, so until you do this step, GitHub does not know about your commits.

**6.Send a pull request to Joe:** If you think that Joe might like to incorporate your changes, you send him a pull request. This is a GitHub operation, in which you are communicating your changes to Joe, and "requesting" that he "pull" from your repo. It is up to him whether he pulls from you or not.

# 4. Syncing a Fork
If you want to sync your fork with the original repo which is called an **upstream**. You simply fetch **git fetch** the changes from the upstream. Then merge **git merge** to your repo and push **git push** them upto github.

[!Alt Text](https://www.dataschool.io/content/images/2014/Mar/github2.png)

In the above diagram Joe's repo is an **upstream**

[*Note:* Fetch & Merge steps are often combined in **git pull**. The problem is that by both fetching and merging or pulling in one command, your working directory is updated without giving you a chance to examine the changes you’ve just brought into your repository.]

## For Detail visit: https://www.youtube.com/watch?v=-zvHQXnBO6c&list=PL5-da3qGB5IBLMp7LtN8Nc3Efd4hJq0kD&index=9&t=181s
 

