export async function getRepositories() {
    const repositories = await fetch('https://api.github.com/user/repos?per_page=6&page=1&sort=created', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
    });
    return repositories;
}