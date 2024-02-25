import { Octokit } from "@octokit/core"

const octokit = new Octokit({
  auth: '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'
})

export const api = await octokit.request('GET /users/MatheusWesley/repos', {
  username: 'MatheusWesley',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})