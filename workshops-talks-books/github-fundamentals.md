#### Travis CI 

- website login, sync with GitHub and enable the projects

- go back to the repo and add the config file .travis.yml

  ``` yml
  language: python
  python:
  	- "3.6"
  install: "pip install -r test-requirements.txt"
  script:
  	- flake8 //this is a command 
  ```

#### Links

[Open Source Friday](https://opensourcefriday.com/)

[IssueHunt](https://issuehunt.io/)

[PATREON](https://www.patreon.com/)

[Understanding the GitHub flow](https://guides.github.com/introduction/flow/)

[The App Store of GitHub](https://github.com/marketplace)

[Shields](https://shields.io) 



#### CodeStyle(JS)

XO

JavaScript Standard Style

*(needed to be installed)*



#### Tool

EditorConfig 

---

### git push!

`git remote set-url origin ...your ssh address`

可以使用 git remote -v 查看當前 repo 的 remote 設置的是 https address 還是 ssh address

`git@github.com:username/project_name.git` 这种是 SSH address

