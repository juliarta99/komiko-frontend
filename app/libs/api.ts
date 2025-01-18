export const getComicResponse = async(resource: string, query?: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
        throw new Error("Base URL is not defined!");
    }
    const url = new URL(`${baseUrl}/${resource}`);
    if (query) {
        url.search = query;
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const comics = await response.json();
    return comics;
}