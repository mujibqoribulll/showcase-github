// ?q=${username}&per_page=5

import { getUser, getUserRepo } from "../services/user"
import { useGetService } from "./service"

export const getUserGithub = () => {
    const { state, service, reset } = useGetService()

    return {
        getUserGithubState: state,
        getUserGithubService: (args: any) => service(() => getUser(args)),
        getUserGithubReset: reset,
    }
}


export const getUserRepository = () => {
    const { state, service, reset } = useGetService()

    return {
        getUserGithubRepoState: state,
        getUserGithubRepoService: (url: string) => service(() => getUserRepo(url)),
        getUserGithubRepoReset: reset
    }
}