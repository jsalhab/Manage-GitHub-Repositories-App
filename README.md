# Github Search Repositories App:

This application is a RESTful service to manage GitHub repositories and bookmarks, it contains two parts Frontend and backend.

## Backend part has the following endpoints:-

1- An endpoint that takes a search term and returns a list of repositories. <br/>
2- An endpoint that allows bookmarking a repository by its id.<br/>
3- An endpoint to get all bookmarked repositories.<br/>
4- An endpoint to remove a bookmark.<br/>
5- An endpoint to log in a user.<br/>
6- An endpoint to sign up a user.<br/>

## Dexcriopns for the endpoints:

| Http method | Endpoint                             | Description                                                                          |
| ----------- | ------------------------------------ | ------------------------------------------------------------------------------------ |
| GET         | `/search/?searchterm=searchstring`\* | returns a josn resposne contains all the repositories depend on the user search term |
| GET         | `/bookmarks`                         | returns a josn resposne contains all the bookmarked repositories.                    |
| GET         | `/bookmark/:id`                      | To bookmark a repository by its id.                                                  |
| DELETE      | `/delete/?id=repository_id`          | To delete bookmark repository by its id.                                             |
| POST        | `/login`                             | To signup with email and password.                                                   |
| POST        | `/signup`                            | To login with email and password                                                     |

## Response example for each endpoint:

1-"/search/:searchterm":
Response exmple:

```
[
{
"id": 72998999,
"node_id": "MDEwOlJlcG9zaXRvcnk3Mjk5ODk5OQ==",
"name": "DDDDemo",
"full_name": "ZacharyFan/DDDDemo",
"private": false,
"owner": {
"login": "ZacharyFan",
"id": 22830586,
"node_id": "MDQ6VXNlcjIyODMwNTg2",
"avatar_url": "https://avatars.githubusercontent.com/u/22830586?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ZacharyFan",
"html_url": "https://github.com/ZacharyFan",
"followers_url": "https://api.github.com/users/ZacharyFan/followers",
"following_url": "https://api.github.com/users/ZacharyFan/following{/other_user}",
"gists_url": "https://api.github.com/users/ZacharyFan/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ZacharyFan/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ZacharyFan/subscriptions",
"organizations_url": "https://api.github.com/users/ZacharyFan/orgs",
"repos_url": "https://api.github.com/users/ZacharyFan/repos",
"events_url": "https://api.github.com/users/ZacharyFan/events{/privacy}",
"received_events_url": "https://api.github.com/users/ZacharyFan/received_events",
"type": "User",
"site_admin": false
},
"html_url": "https://github.com/ZacharyFan/DDDDemo",
"description": "DDD 设计一个电商网站",
"fork": false,
"url": "https://api.github.com/repos/ZacharyFan/DDDDemo",
"forks_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/forks",
"keys_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/keys{/key_id}",
"collaborators_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/collaborators{/collaborator}",
"teams_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/teams",
"hooks_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/hooks",
"issue_events_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues/events{/number}",
"events_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/events",
"assignees_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/assignees{/user}",
"branches_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/branches{/branch}",
"tags_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/tags",
"blobs_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/blobs{/sha}",
"git_tags_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/tags{/sha}",
"git_refs_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/refs{/sha}",
"trees_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/trees{/sha}",
"statuses_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/statuses/{sha}",
"languages_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/languages",
"stargazers_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/stargazers",
"contributors_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/contributors",
"subscribers_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/subscribers",
"subscription_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/subscription",
"commits_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/commits{/sha}",
"git_commits_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/commits{/sha}",
"comments_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/comments{/number}",
"issue_comment_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues/comments{/number}",
"contents_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/contents/{+path}",
"compare_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/compare/{base}...{head}",
"merges_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/merges",
"archive_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/{archive_format}{/ref}",
"downloads_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/downloads",
"issues_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues{/number}",
"pulls_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/pulls{/number}",
"milestones_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/milestones{/number}",
"notifications_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/notifications{?since,all,participating}",
"labels_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/labels{/name}",
"releases_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/releases{/id}",
"deployments_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/deployments",
"created_at": "2016-11-06T15:16:20Z",
"updated_at": "2021-04-09T15:04:52Z",
"pushed_at": "2017-02-06T13:42:05Z",
"git_url": "git://github.com/ZacharyFan/DDDDemo.git",
"ssh_url": "git@github.com:ZacharyFan/DDDDemo.git",
"clone_url": "https://github.com/ZacharyFan/DDDDemo.git",
"svn_url": "https://github.com/ZacharyFan/DDDDemo",
"homepage": null,
"size": 1655,
"stargazers_count": 130,
"watchers_count": 130,
"language": "C#",
"has_issues": true,
"has_projects": true,
"has_downloads": true,
"has_wiki": true,
"has_pages": false,
"forks_count": 68,
"mirror_url": null,
"archived": false,
"disabled": false,
"open_issues_count": 1,
"license": null,
"forks": 68,
"open_issues": 1,
"watchers": 130,
"default_branch": "master",
"permissions": {
"admin": false,
"push": false,
"pull": true
},
"score": 1
},
{
"id": 122950974,
"node_id": "MDEwOlJlcG9zaXRvcnkxMjI5NTA5NzQ=",
"name": "ddddemo",
"full_name": "YaoLin1/ddddemo",
"private": false,
"owner": {
"login": "YaoLin1",
"id": 3368734,
"node_id": "MDQ6VXNlcjMzNjg3MzQ=",
"avatar_url": "https://avatars.githubusercontent.com/u/3368734?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/YaoLin1",
"html_url": "https://github.com/YaoLin1",
"followers_url": "https://api.github.com/users/YaoLin1/followers",
"following_url": "https://api.github.com/users/YaoLin1/following{/other_user}",
"gists_url": "https://api.github.com/users/YaoLin1/gists{/gist_id}",
"starred_url": "https://api.github.com/users/YaoLin1/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/YaoLin1/subscriptions",
"organizations_url": "https://api.github.com/users/YaoLin1/orgs",
"repos_url": "https://api.github.com/users/YaoLin1/repos",
"events_url": "https://api.github.com/users/YaoLin1/events{/privacy}",
"received_events_url": "https://api.github.com/users/YaoLin1/received_events",
"type": "User",
"site_admin": false
},
"html_url": "https://github.com/YaoLin1/ddddemo",
"description": "一个 sofa demo 实现了领域驱动设计",
"fork": false,
"url": "https://api.github.com/repos/YaoLin1/ddddemo",
"forks_url": "https://api.github.com/repos/YaoLin1/ddddemo/forks",
"keys_url": "https://api.github.com/repos/YaoLin1/ddddemo/keys{/key_id}",
"collaborators_url": "https://api.github.com/repos/YaoLin1/ddddemo/collaborators{/collaborator}",
"teams_url": "https://api.github.com/repos/YaoLin1/ddddemo/teams",
"hooks_url": "https://api.github.com/repos/YaoLin1/ddddemo/hooks",
"issue_events_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues/events{/number}",
"events_url": "https://api.github.com/repos/YaoLin1/ddddemo/events",
"assignees_url": "https://api.github.com/repos/YaoLin1/ddddemo/assignees{/user}",
"branches_url": "https://api.github.com/repos/YaoLin1/ddddemo/branches{/branch}",
"tags_url": "https://api.github.com/repos/YaoLin1/ddddemo/tags",
"blobs_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/blobs{/sha}",
"git_tags_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/tags{/sha}",
"git_refs_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/refs{/sha}",
"trees_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/trees{/sha}",
"statuses_url": "https://api.github.com/repos/YaoLin1/ddddemo/statuses/{sha}",
"languages_url": "https://api.github.com/repos/YaoLin1/ddddemo/languages",
"stargazers_url": "https://api.github.com/repos/YaoLin1/ddddemo/stargazers",
"contributors_url": "https://api.github.com/repos/YaoLin1/ddddemo/contributors",
"subscribers_url": "https://api.github.com/repos/YaoLin1/ddddemo/subscribers",
"subscription_url": "https://api.github.com/repos/YaoLin1/ddddemo/subscription",
"commits_url": "https://api.github.com/repos/YaoLin1/ddddemo/commits{/sha}",
"git_commits_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/commits{/sha}",
"comments_url": "https://api.github.com/repos/YaoLin1/ddddemo/comments{/number}",
"issue_comment_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues/comments{/number}",
"contents_url": "https://api.github.com/repos/YaoLin1/ddddemo/contents/{+path}",
"compare_url": "https://api.github.com/repos/YaoLin1/ddddemo/compare/{base}...{head}",
"merges_url": "https://api.github.com/repos/YaoLin1/ddddemo/merges",
"archive_url": "https://api.github.com/repos/YaoLin1/ddddemo/{archive_format}{/ref}",
"downloads_url": "https://api.github.com/repos/YaoLin1/ddddemo/downloads",
"issues_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues{/number}",
"pulls_url": "https://api.github.com/repos/YaoLin1/ddddemo/pulls{/number}",
"milestones_url": "https://api.github.com/repos/YaoLin1/ddddemo/milestones{/number}",
"notifications_url": "https://api.github.com/repos/YaoLin1/ddddemo/notifications{?since,all,participating}",
"labels_url": "https://api.github.com/repos/YaoLin1/ddddemo/labels{/name}",
"releases_url": "https://api.github.com/repos/YaoLin1/ddddemo/releases{/id}",
"deployments_url": "https://api.github.com/repos/YaoLin1/ddddemo/deployments",
"created_at": "2018-02-26T10:08:05Z",
"updated_at": "2021-02-23T13:58:45Z",
"pushed_at": "2018-02-26T10:28:55Z",
"git_url": "git://github.com/YaoLin1/ddddemo.git",
"ssh_url": "git@github.com:YaoLin1/ddddemo.git",
"clone_url": "https://github.com/YaoLin1/ddddemo.git",
"svn_url": "https://github.com/YaoLin1/ddddemo",
"homepage": null,
"size": 39,
"stargazers_count": 61,
"watchers_count": 61,
"language": "Java",
"has_issues": true,
"has_projects": true,
"has_downloads": true,
"has_wiki": true,
"has_pages": false,
"forks_count": 68,
"mirror_url": null,
"archived": false,
"disabled": false,
"open_issues_count": 2,
"license": null,
"forks": 68,
"open_issues": 2,
"watchers": 61,
"default_branch": "master",
"permissions": {
"admin": false,
"push": false,
"pull": true
},
"score": 1
},]
```

2- "/bookmarks"
Response Exmple:

```
[
{
"id": 72998999,
"node_id": "MDEwOlJlcG9zaXRvcnk3Mjk5ODk5OQ==",
"name": "DDDDemo",
"full_name": "ZacharyFan/DDDDemo",
"private": false,
"owner": {
"login": "ZacharyFan",
"id": 22830586,
"node_id": "MDQ6VXNlcjIyODMwNTg2",
"avatar_url": "https://avatars.githubusercontent.com/u/22830586?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ZacharyFan",
"html_url": "https://github.com/ZacharyFan",
"followers_url": "https://api.github.com/users/ZacharyFan/followers",
"following_url": "https://api.github.com/users/ZacharyFan/following{/other_user}",
"gists_url": "https://api.github.com/users/ZacharyFan/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ZacharyFan/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ZacharyFan/subscriptions",
"organizations_url": "https://api.github.com/users/ZacharyFan/orgs",
"repos_url": "https://api.github.com/users/ZacharyFan/repos",
"events_url": "https://api.github.com/users/ZacharyFan/events{/privacy}",
"received_events_url": "https://api.github.com/users/ZacharyFan/received_events",
"type": "User",
"site_admin": false
},
"html_url": "https://github.com/ZacharyFan/DDDDemo",
"description": "DDD 设计一个电商网站",
"fork": false,
"url": "https://api.github.com/repos/ZacharyFan/DDDDemo",
"forks_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/forks",
"keys_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/keys{/key_id}",
"collaborators_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/collaborators{/collaborator}",
"teams_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/teams",
"hooks_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/hooks",
"issue_events_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues/events{/number}",
"events_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/events",
"assignees_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/assignees{/user}",
"branches_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/branches{/branch}",
"tags_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/tags",
"blobs_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/blobs{/sha}",
"git_tags_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/tags{/sha}",
"git_refs_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/refs{/sha}",
"trees_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/trees{/sha}",
"statuses_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/statuses/{sha}",
"languages_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/languages",
"stargazers_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/stargazers",
"contributors_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/contributors",
"subscribers_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/subscribers",
"subscription_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/subscription",
"commits_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/commits{/sha}",
"git_commits_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/git/commits{/sha}",
"comments_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/comments{/number}",
"issue_comment_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues/comments{/number}",
"contents_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/contents/{+path}",
"compare_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/compare/{base}...{head}",
"merges_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/merges",
"archive_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/{archive_format}{/ref}",
"downloads_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/downloads",
"issues_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/issues{/number}",
"pulls_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/pulls{/number}",
"milestones_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/milestones{/number}",
"notifications_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/notifications{?since,all,participating}",
"labels_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/labels{/name}",
"releases_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/releases{/id}",
"deployments_url": "https://api.github.com/repos/ZacharyFan/DDDDemo/deployments",
"created_at": "2016-11-06T15:16:20Z",
"updated_at": "2021-04-09T15:04:52Z",
"pushed_at": "2017-02-06T13:42:05Z",
"git_url": "git://github.com/ZacharyFan/DDDDemo.git",
"ssh_url": "git@github.com:ZacharyFan/DDDDemo.git",
"clone_url": "https://github.com/ZacharyFan/DDDDemo.git",
"svn_url": "https://github.com/ZacharyFan/DDDDemo",
"homepage": null,
"size": 1655,
"stargazers_count": 130,
"watchers_count": 130,
"language": "C#",
"has_issues": true,
"has_projects": true,
"has_downloads": true,
"has_wiki": true,
"has_pages": false,
"forks_count": 68,
"mirror_url": null,
"archived": false,
"disabled": false,
"open_issues_count": 1,
"license": null,
"forks": 68,
"open_issues": 1,
"watchers": 130,
"default_branch": "master",
"permissions": {
"admin": false,
"push": false,
"pull": true
},
"score": 1
},
{
"id": 122950974,
"node_id": "MDEwOlJlcG9zaXRvcnkxMjI5NTA5NzQ=",
"name": "ddddemo",
"full_name": "YaoLin1/ddddemo",
"private": false,
"owner": {
"login": "YaoLin1",
"id": 3368734,
"node_id": "MDQ6VXNlcjMzNjg3MzQ=",
"avatar_url": "https://avatars.githubusercontent.com/u/3368734?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/YaoLin1",
"html_url": "https://github.com/YaoLin1",
"followers_url": "https://api.github.com/users/YaoLin1/followers",
"following_url": "https://api.github.com/users/YaoLin1/following{/other_user}",
"gists_url": "https://api.github.com/users/YaoLin1/gists{/gist_id}",
"starred_url": "https://api.github.com/users/YaoLin1/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/YaoLin1/subscriptions",
"organizations_url": "https://api.github.com/users/YaoLin1/orgs",
"repos_url": "https://api.github.com/users/YaoLin1/repos",
"events_url": "https://api.github.com/users/YaoLin1/events{/privacy}",
"received_events_url": "https://api.github.com/users/YaoLin1/received_events",
"type": "User",
"site_admin": false
},
"html_url": "https://github.com/YaoLin1/ddddemo",
"description": "一个 sofa demo 实现了领域驱动设计",
"fork": false,
"url": "https://api.github.com/repos/YaoLin1/ddddemo",
"forks_url": "https://api.github.com/repos/YaoLin1/ddddemo/forks",
"keys_url": "https://api.github.com/repos/YaoLin1/ddddemo/keys{/key_id}",
"collaborators_url": "https://api.github.com/repos/YaoLin1/ddddemo/collaborators{/collaborator}",
"teams_url": "https://api.github.com/repos/YaoLin1/ddddemo/teams",
"hooks_url": "https://api.github.com/repos/YaoLin1/ddddemo/hooks",
"issue_events_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues/events{/number}",
"events_url": "https://api.github.com/repos/YaoLin1/ddddemo/events",
"assignees_url": "https://api.github.com/repos/YaoLin1/ddddemo/assignees{/user}",
"branches_url": "https://api.github.com/repos/YaoLin1/ddddemo/branches{/branch}",
"tags_url": "https://api.github.com/repos/YaoLin1/ddddemo/tags",
"blobs_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/blobs{/sha}",
"git_tags_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/tags{/sha}",
"git_refs_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/refs{/sha}",
"trees_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/trees{/sha}",
"statuses_url": "https://api.github.com/repos/YaoLin1/ddddemo/statuses/{sha}",
"languages_url": "https://api.github.com/repos/YaoLin1/ddddemo/languages",
"stargazers_url": "https://api.github.com/repos/YaoLin1/ddddemo/stargazers",
"contributors_url": "https://api.github.com/repos/YaoLin1/ddddemo/contributors",
"subscribers_url": "https://api.github.com/repos/YaoLin1/ddddemo/subscribers",
"subscription_url": "https://api.github.com/repos/YaoLin1/ddddemo/subscription",
"commits_url": "https://api.github.com/repos/YaoLin1/ddddemo/commits{/sha}",
"git_commits_url": "https://api.github.com/repos/YaoLin1/ddddemo/git/commits{/sha}",
"comments_url": "https://api.github.com/repos/YaoLin1/ddddemo/comments{/number}",
"issue_comment_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues/comments{/number}",
"contents_url": "https://api.github.com/repos/YaoLin1/ddddemo/contents/{+path}",
"compare_url": "https://api.github.com/repos/YaoLin1/ddddemo/compare/{base}...{head}",
"merges_url": "https://api.github.com/repos/YaoLin1/ddddemo/merges",
"archive_url": "https://api.github.com/repos/YaoLin1/ddddemo/{archive_format}{/ref}",
"downloads_url": "https://api.github.com/repos/YaoLin1/ddddemo/downloads",
"issues_url": "https://api.github.com/repos/YaoLin1/ddddemo/issues{/number}",
"pulls_url": "https://api.github.com/repos/YaoLin1/ddddemo/pulls{/number}",
"milestones_url": "https://api.github.com/repos/YaoLin1/ddddemo/milestones{/number}",
"notifications_url": "https://api.github.com/repos/YaoLin1/ddddemo/notifications{?since,all,participating}",
"labels_url": "https://api.github.com/repos/YaoLin1/ddddemo/labels{/name}",
"releases_url": "https://api.github.com/repos/YaoLin1/ddddemo/releases{/id}",
"deployments_url": "https://api.github.com/repos/YaoLin1/ddddemo/deployments",
"created_at": "2018-02-26T10:08:05Z",
"updated_at": "2021-02-23T13:58:45Z",
"pushed_at": "2018-02-26T10:28:55Z",
"git_url": "git://github.com/YaoLin1/ddddemo.git",
"ssh_url": "git@github.com:YaoLin1/ddddemo.git",
"clone_url": "https://github.com/YaoLin1/ddddemo.git",
"svn_url": "https://github.com/YaoLin1/ddddemo",
"homepage": null,
"size": 39,
"stargazers_count": 61,
"watchers_count": 61,
"language": "Java",
"has_issues": true,
"has_projects": true,
"has_downloads": true,
"has_wiki": true,
"has_pages": false,
"forks_count": 68,
"mirror_url": null,
"archived": false,
"disabled": false,
"open_issues_count": 2,
"license": null,
"forks": 68,
"open_issues": 2,
"watchers": 61,
"default_branch": "master",
"permissions": {
"admin": false,
"push": false,
"pull": true
},
"score": 1
},]
```

3- "/bookmark/:id"
Response Exmple:

```
{"repositoryId is booked successfully"}
```

4- "/delete/:id"
Response Exmple:

```
{"removed bookmark repositoryId successfully"}
```

5- Endpoint: "/login", http method: POST
This api allow the user to login with email and password.
Response Exmple:

```
{
email: "jojo92@g.com"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjdmZjk4MC1hYWVkLTExZWItOGYyNi1jNjQyZDQ3ZmIwNTEiLCJlbWFpbCI6Impvam85MkBnLmNvbSIsImlhdCI6MTYxOTk4NjM5NywiZXhwIjoxNjE5OTg5OTk3fQ.jU9zxzqTkEsn5LY0vtP7U8TBV63Ms7HvX8wavVC9mVU"
userId: "127ff980-aaed-11eb-8f26-c642d47fb051
}
```

5- "/signup"
Response Exmple:

```
{
email: "jojo92@g.com"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjdmZjk4MC1hYWVkLTExZWItOGYyNi1jNjQyZDQ3ZmIwNTEiLCJlbWFpbCI6Impvam85MkBnLmNvbSIsImlhdCI6MTYxOTk4NjM5NywiZXhwIjoxNjE5OTg5OTk3fQ.jU9zxzqTkEsn5LY0vtP7U8TBV63Ms7HvX8wavVC9mVU"
userId: "127ff980-aaed-11eb-8f26-c642d47fb051
}
```

## Requirements and Dependencies for backend:

Nodejs, express, axios, bcryptjs,jsonwebtoken

## Requirements and Dependencies for frontend:

React, Redux, axios

## How to run the app:

I installed an npm package called concurrently to let the client and server apps run together in the same terminal.
All you need to do is run this command "npm run dev" inside the server folder.
