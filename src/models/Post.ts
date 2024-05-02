export interface IPost {
    "id": number,
    "title": string,
    "body": string,
    "userId": number,
    "tags": [
        string,
        string,
        string
    ],
    "reactions":number
}