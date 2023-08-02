import { Octokit } from 'octokit'

export const githubApi = new Octokit({
  auth: `${import.meta.env.VITE_GITHUB_USER_TOKEN}`,
})
