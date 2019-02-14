# Running [MJML](https://mjml.io) rendering on Zeit Now

See [this issue](https://github.com/zeit/ncc/issues/276), for the error when trying to import the mJML library into a project and deploying to Zeit Now.

Using the `rolliup.config.js` of this repo, as an intermediate step seems to resolve the issue.

Please note, that I'm not exactly sure why this works, I just arrived to this setup via trial and error!

So the steps to run your MJML project on Zeit:

1. `rollup -c`
2. `ncc build bundle/date.js` => this step will soon no longer be necessary when Zeit updates the ncc library used on their deploys
3. `now`
