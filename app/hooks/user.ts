// ?q=${username}&per_page=5

import { getUser, getUserRepo } from "../services/user"
import { UseGetService } from "./service"

export const getUserGithub = () => {
    const { state, service, reset } = UseGetService()

    return {
        getUserGithubState: state,
        getUserGithubService: (args: any) => service(() => getUser(args)),
        getUserGithubReset: reset,
    }
}


export const getUserRepository = () => {
    const { state, service, reset } = UseGetService()

    return {
        getUserGithubRepoState: state,
        getUserGithubRepoService: (url: string) => service(() => getUserRepo(url)),
        getUserGithubRepoReset: reset
    }
}