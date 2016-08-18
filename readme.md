# Roots + WebriQ CMS

This is a simple example of how to integrate netlify CMS with a roots based site.

It's based on Brian Rinaldi's great [Static Site Samples](https://github.com/remotesynth/Static-Site-Samples) and meant as a simple example of how to hook netlify CMS up with a roots based site.

## Setting up

* Install [node](https://nodejs.org/en/) application in your system.

* Install [roots](http://roots.cx/articles/getting-started) in your system globally `npm i roots -g` if you haven't done this before.

* Make sure to install the [netlify-git-api](https://github.com/netlify/netlify-git-api) before you start.

Then:

```bash
git clone https://github.com/webriq/portfolio-static-template.git
cd roots-cms-example
netlify-git-api users add
netlify-git-api serve
```

Open a separate terminal window and run:

```bash
npm install
roots watch
```

## Using

Visit [localhost:1111](http://localhost:1111/) to browser the site.

Visit [localhost:1111/admin](http://localhost:1111/admin) to use the CMS.

To run against the GitHub API in production, edit the production backend settings for `admin/config.yml` with the correct repository and branch.

Then make sure to set a `CMS_ENV` environment variable to `production` when running the production build.
