import { Octokit } from "@octokit/core"

const octokit = new Octokit({
  auth: 'CHAVE_API_AQUI'
})

export const api = await octokit.request('GET /users/USERNAME/repos', {
  username: 'MatheusWesley',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})